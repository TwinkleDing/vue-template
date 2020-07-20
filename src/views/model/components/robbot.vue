<template>
  <div>
    <div id='model' class='model-ca'></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: 'Robbot',
  data() {
    return {
      scene: {},
      geometry: {},
      camera: {},
      mesh: {},
      grid: {},
      renderer: {},
      // render: {},
      controls: {},
      model: {},
      face: {},
      container: null,
      stats: null,
      clock: null,
      gui: null,
      mixer: null,
      actions: null,
      activeAction: null,
      previousAction: null,
      api: {
        state: 'Walking'
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 创建场景
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xe0e0e0);
      // this.scene.fog = new THREE.Fog(0xe0e0e0, 20, 100); // 雾化背景

      // 创建坐标系
      let axisHelper = new THREE.AxesHelper(1000);
      this.scene.add(axisHelper);

      this.clock = new THREE.Clock();

      // 创建相机
      let w = 1200;
      let h = 800;
      // let k = w / h;
      // let s = 200; // 三位场景显示范围控制系数，系数越大，显示的范围越大
      // // 正交相机
      // this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 10000);

      // 透视相机
      this.camera = new THREE.PerspectiveCamera(60, w / h, 0.25, 1000 );
      //
      this.camera.position.set(-4, 7, 8);
      this.camera.lookAt( new THREE.Vector3( 0, 2, 0 ) );

      // 创建光源
      let ambient = new THREE.HemisphereLight(0xffffff, 0x444444);
      ambient.position.set( 0, 20, 0 );
      this.scene.add(ambient);
      let light = new THREE.DirectionalLight(0xffffff);
      light.position.set( 0, 20, 10);
      this.scene.add(light);

      // ground
      let material = new THREE.MeshPhongMaterial({
        color: 0x999999,
        depthWrite: false
      });
      this.mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), material);
      this.mesh.rotation.x = -Math.PI / 2;
      this.scene.add(this.mesh);

      this.grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
      this.grid.material.opacity = 0.2;
      this.grid.material.transparent = true;
      this.scene.add(this.grid);

      // model
      let loader = new GLTFLoader(); //RobotExpressive Learning the Moves
      loader.load( '../model/RobotExpressive.glb', gltf => {
        this.model = gltf.scene;
        this.scene.add( this.model );
        this.createGUI( this.model, gltf.animations );
        this.animation();

        this.render();
      }, undefined, function ( e ) {
        console.error( e );
      });

      // 创建渲染器对象
      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(w, h);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.setClearColor(0xb9d3ff, 1);
      document.getElementById('model').appendChild(this.renderer.domElement);
      // window.addEventListener('resize', this.onWindowResize, false);

      // stats
      this.stats = new Stats();
      document.getElementById('model').appendChild(this.stats.dom);

      this.render();
      this.controlsEvent();
    },
    createGUI(model, animations) {
      this.gui = new GUI();
      let states = [ 'Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing' ];
      let emotes = [ 'Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp' ];
      this.mixer = new THREE.AnimationMixer(model);
      this.actions = {};
      for(let i = 0; i< animations.length; i++) {
        let clip = animations[i];
        let action = this.mixer.clipAction(clip);
        this.actions[clip.name] = action;
        if(emotes.indexOf(clip.name) >= 0 || states.indexOf(clip.name) >= 4) {
          action.clampWhenFinished = true;
          action.loop = THREE.LoopOnce;
        }
      }
      // states

      let statesFolder = this.gui.addFolder('States');
      let clipCtrl = statesFolder.add(this.api, 'state').options(states);
      clipCtrl.onChange(()=>{
        this.fadeToAction(this.api.state, 0.5);
      });
      statesFolder.open();

      // emotes
      let emoteFolder = this.gui.addFolder('Emotes');
      let createEmoteCallback =( name )=> {
        this.api[ name ] = ()=> {
          this.fadeToAction( name, 0.2 );
          this.mixer.addEventListener( 'finished', restoreState );
        };
        emoteFolder.add( this.api, name );
      };

      let restoreState = ()=> {
        this.mixer.removeEventListener( 'finished', restoreState );
        this.fadeToAction( this.api.state, 0.2 );

      };
      for ( let i = 0; i < emotes.length; i ++ ) {
        createEmoteCallback( emotes[ i ] );
      }

      emoteFolder.open();

      // expressions
      this.face = model.getObjectByName( 'Head_2' );
      let expressions = Object.keys( this.face.morphTargetDictionary );
      let expressionFolder = this.gui.addFolder( 'Expressions' );
      for ( let i = 0; i < expressions.length; i ++ ) {
        expressionFolder.add( this.face.morphTargetInfluences, i, 0, 1, 0.01 ).name( expressions[ i ] );
      }
      this.activeAction = this.actions[ 'Walking' ];
      this.activeAction.play();

      expressionFolder.open();

    },
    fadeToAction(name, duration) {
      this.previousAction = this.activeAction;
      this.activeAction = this.actions[ name ];
      if ( this.previousAction !== this.activeAction ) {
        this.previousAction.fadeOut( duration );
      }
      this.activeAction
        .reset()
        .setEffectiveTimeScale( 1 )
        .setEffectiveWeight( 1 )
        .fadeIn( duration )
        .play();
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.render();
    },
    animation() {
      let dt = this.clock.getDelta();
      if ( this.mixer ) {
        this.mixer.update( dt );
      }
      requestAnimationFrame( this.animation );
      this.render();
      this.stats.update();
    },
    render() {
      this.renderer.render(this.scene,this.camera);//执行渲染操作
    },
    // 控制器
    controlsEvent() {
      this.controls = new OrbitControls(this.camera,this.renderer.domElement);//创建控件对象
      this.controls.addEventListener('change', this.render);//监听鼠标、键盘事件
    },
  },
};
</script>

<style lang='scss' scoped>
.model-ca{
  position:relative;
}
  .dg.ac{
    position: absolute;
    right: 0;
    top: 60px;
  }
</style>