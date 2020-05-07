<template>
  <div id='box'>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
  name: 'three',
  data() {
    return {
      scene: {},
      camera: {},
      mesh: {},
      renderer: {},
      render: {}
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
      // 创建网格模型
      let geometry = new THREE.BoxGeometry(100, 100, 100); // 创建一个立方体几何对象
      // let geometry = new THREE.SphereGeometry(60, 40, 40); // 创建一个球体几何对象
      let material = new THREE.MeshLambertMaterial({
        color: 0x0000ff
      }); // 材质对象Material
      this.mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      this.scene.add(this.mesh); // 网格模型添加到场景中

      // 光源设置
      // 点光源
      let point = new THREE.PointLight(0xffffff);
      point.position.set(100, 100, 100); // 点光源位置
      this.scene.add(point); // 点光源添加到场景中
      // 环境光
      let ambient = new THREE.AmbientLight(0x444444);
      this.scene.add(ambient); // 设置环境光

      // 相机设置
      let width = 400; // 窗口宽度
      let height = 300; // 窗口高度
      let k = width / height; // 窗口宽高比
      let s = 200; // 三位场景显示范围控制系数，系数越大，显示的范围越大
      // 创建相机对象
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      this.camera.position.set(100, 100, 100); //设置相机位置
      this.camera.lookAt(this.scene.position); //设置相机方向（指向的场景反向）

      // 创建渲染器对象
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height); // 设置渲染器区域尺寸
      this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      document.getElementById('box').appendChild(this.renderer.domElement); //插入canvas对象
      // 执行渲染操作 指定场景、相机作为参数
      // this.renderer.render(this.scene, this.camera);
      this.render = ()=> {
        this.renderer.render(this.scene,this.camera);//执行渲染操作
      };
      this.render();
      let controls = new OrbitControls(this.camera,this.renderer.domElement);//创建控件对象
      controls.addEventListener('change', this.render);//监听鼠标、键盘事件
      // 旋转动画
      // this.animation();
    },
    animation() {
        this.renderer.render(this.scene,this.camera);//执行渲染操作
        this.mesh.rotateX(0.01);//每次绕y轴旋转0.01弧度
        this.mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
        this.mesh.rotateZ(0.01);//每次绕y轴旋转0.01弧度
        requestAnimationFrame(this.animation);//请求再次执行渲染函数render
    }
  }
};
</script>

<style lang="less">
#box{
  height: 300px;
}
</style>