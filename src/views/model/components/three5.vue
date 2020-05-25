<template>
  <div>
    <div id='box5' class='box'></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
  name: 'three2',
  data() {
    return {
      scene: {},
      geometry: {},
      camera: {},
      mesh: {},
      renderer: {},
      render: {},
      controls: {}
    };
  },
  computed: {

  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      // 创建场景对象Scene
      this.scene = new THREE.Scene();

      // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
      let axisHelper = new THREE.AxisHelper(160);
      this.scene.add(axisHelper);
      // ground
      let material = new THREE.MeshPhongMaterial({
        color: 0x999999,
        depthWrite: false
      });
      this.mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(200, 200), material);
      this.mesh.name = 'ground';
      this.mesh.rotation.x = -Math.PI / 2;
      this.scene.add(this.mesh);

      // 网格
      this.grid = new THREE.GridHelper(200, 40, 0xff0000, 0x000000);
      this.grid.name = 'GridHelper';
      this.grid.material.opacity = 0.2;
      this.grid.material.transparent = true;
      this.scene.add(this.grid);
      // 相机设置
      let w = 1200; // 窗口宽度
      let h = 800; // 窗口高度
      // let k = w / h; // 窗口宽高比
      // let s = 200; // 三位场景显示范围控制系数，系数越大，显示的范围越大
      // 创建相机对象
      // this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 10000);
      this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000 );

      this.camera.position.set(100, 100, 100); //设置相机位置
      this.camera.lookAt(this.scene.position); //设置相机方向（指向的场景反向）

      // 创建光源
      let ambient = new THREE.HemisphereLight(0xffffff, 0x444444);
      ambient.position.set( 0, 20, 0 );
      this.scene.add(ambient);
      let light = new THREE.DirectionalLight(0xffffff);
      light.position.set( 0, 20, 10);
      this.scene.add(light);

      // 创建渲染器对象
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(w, h); // 设置渲染器区域尺寸
      this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      document.getElementById('box5').appendChild(this.renderer.domElement); //插入canvas对象
      // 执行渲染操作 指定场景、相机作为参数
      this.render = ()=> {
        this.renderer.render(this.scene,this.camera);//执行渲染操作
      };

      this.guge();

      this.controlsEvent();

    },
    guge() {
      /**
     * 创建骨骼网格模型SkinnedMesh
      */
      // 创建一个圆柱几何体，高度120，顶点坐标y分量范围[-60,60]
      let geometry = new THREE.CylinderGeometry(5, 10, 120, 50, 300);
      geometry.translate(0, 60, 0); //平移后，y分量范围[0,120]
      /**
       * 设置几何体对象Geometry的蒙皮索引skinIndices、权重skinWeights属性
       * 实现一个模拟腿部骨骼运动的效果
       */
      //遍历几何体顶点，为每一个顶点设置蒙皮索引、权重属性
      //根据y来分段，0~60一段、60~100一段、100~120一段
      for (let i = 0; i < geometry.vertices.length; i++) {
        let vertex = geometry.vertices[i]; //第i个顶点
         if (vertex.y <= 60) {
          // 设置每个顶点蒙皮索引属性  受根关节Bone1影响
          geometry.skinIndices.push(new THREE.Vector4(0, 0, 0, 0));
          // 设置每个顶点蒙皮权重属性
          // 影响该顶点关节Bone1对应权重是1-vertex.y/60
          geometry.skinWeights.push(new THREE.Vector4(1 - vertex.y / 60, 0, 0, 0));
        } else if (60 < vertex.y && vertex.y <= 60 + 40) {
          // Vector4(1, 0, 0, 0)表示对应顶点受关节Bone2影响
          geometry.skinIndices.push(new THREE.Vector4(1, 0, 0, 0));
          // 影响该顶点关节Bone2对应权重是1-(vertex.y-60)/40
          geometry.skinWeights.push(new THREE.Vector4(1 - (vertex.y - 60) / 40, 0, 0, 0));
        } else if (60 + 40 < vertex.y && vertex.y <= 60 + 40 + 20) {
          // Vector4(2, 0, 0, 0)表示对应顶点受关节Bone3影响
          geometry.skinIndices.push(new THREE.Vector4(2, 0, 0, 0));
          // 影响该顶点关节Bone3对应权重是1-(vertex.y-100)/20
          geometry.skinWeights.push(new THREE.Vector4(1 - (vertex.y - 100) / 20, 0, 0, 0));
        }
      }
      // 材质对象
      let material = new THREE.MeshPhongMaterial({
        skinning: true, //允许蒙皮动画
        wireframe:true,
      });
      // 创建骨骼网格模型
      let SkinnedMesh = new THREE.SkinnedMesh(geometry, material);
      SkinnedMesh.position.set(50, 120, 50); //设置网格模型位置
      // SkinnedMesh.rotateX(Math.PI); //旋转网格模型
      this.scene.add(SkinnedMesh); //网格模型添加到场景中

      /**
      * 骨骼系统
      */
      let Bone1 = new THREE.Bone(); //关节1，用来作为根关节
      let Bone2 = new THREE.Bone(); //关节2
      let Bone3 = new THREE.Bone(); //关节3
      // 设置关节父子关系   多个骨头关节构成一个树结构
      Bone1.add(Bone2);
      Bone2.add(Bone3);
      // 设置关节之间的相对位置
      //根关节Bone1默认位置是(0,0,0)
      Bone2.position.y = 60; //Bone2相对父对象Bone1位置
      Bone3.position.y = 40; //Bone3相对父对象Bone2位置

      let skeleton = new THREE.Skeleton([Bone1, Bone2, Bone3]); //创建骨骼系统

      //骨骼关联网格模型
      SkinnedMesh.add(Bone1); //根骨头关节添加到网格模型
      SkinnedMesh.bind(skeleton); //网格模型绑定到骨骼系统
      let skeletonHelper = new THREE.SkeletonHelper(SkinnedMesh);
      this.scene.add(skeletonHelper);

      // 转动关节带动骨骼网格模型出现弯曲效果  好像腿弯曲一样
      skeleton.bones[1].rotation.x = 0.5;
      skeleton.bones[2].rotation.x = 1;
      let n = 0;
      let T = 50;
      let step = 0.01;
      // 渲染函数
      let that = this;
      function render() {
        that.render(that.scene, that.camera);
        requestAnimationFrame(render);
        n += 1;
        if (n < T) {
          // 改变骨关节角度
          skeleton.bones[0].rotation.x = skeleton.bones[0].rotation.x - step;
          skeleton.bones[1].rotation.x = skeleton.bones[1].rotation.x + 2 * step;
          skeleton.bones[2].rotation.x = skeleton.bones[2].rotation.x + 2 * step;
        }
        if (n < 2 * T && n > T) {
          skeleton.bones[0].rotation.x = skeleton.bones[0].rotation.x + step;
          skeleton.bones[1].rotation.x = skeleton.bones[1].rotation.x - 2 * step;
          skeleton.bones[2].rotation.x = skeleton.bones[2].rotation.x - 2 * step;
        }
        if (n === 2 * T) {
          n = 0;
        }
      }
      render();
    },
    jiya() {
      /**
       * 创建网格模型，并给模型的几何体设置多个变形目标
       */
      // 创建一个几何体具有8个顶点
      var geometry = new THREE.BoxGeometry(50, 50, 50); //立方体几何对象
      console.log(geometry.vertices);
      // 为geometry提供变形目标的数据
      var box1 = new THREE.BoxGeometry(100, 5, 100); //为变形目标1提供数据
      var box2 = new THREE.BoxGeometry(5, 200, 5); //为变形目标2提供数据
      // 设置变形目标的数据
      geometry.morphTargets[0] = {name: 'target1',vertices: box1.vertices};
      geometry.morphTargets[1] = {name: 'target2',vertices: box2.vertices};
      var material = new THREE.MeshLambertMaterial({
        morphTargets: true, //允许变形
        color: 0x0000ff
      }); //材质对象
      var mesh = new THREE.Mesh(geometry, material); //网格模型对象
      this.scene.add(mesh); //网格模型添加到场景中
      this.render();
    },
    controlsEvent() {
      // 控制器
      this.controls = new OrbitControls(this.camera,this.renderer.domElement);//创建控件对象
      this.controls.addEventListener('change', this.render);//监听鼠标、键盘事件
    },
  }
};
</script>

<style lang="less" scoped>
.box{
  height: 500px;
  margin-bottom: 300px;
}
</style>