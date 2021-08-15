<template>
    <div id='box'>
    </div>
</template>

<script>
import * as THREE from "three";

export default {
    name: "Three",
    data() {
        return {

        };
    },
    computed: {

    },
    mounted() {
        this.initThree();
    },
    methods: {
        initThree() {
            // 初始化显示
            const scene = new THREE.Scene();
            // 设置相机(视野角度，长宽比，近截面，远截面)
            var camera = new THREE.PerspectiveCamera( 75, 400 / 300, 0.1, 1000 );
            // 渲染
            var renderer = new THREE.WebGLRenderer();
            //设置尺寸
            renderer.setSize( 400, 300 );
            // 添加到dom上
            document.getElementById("box").appendChild( renderer.domElement );
            // 个BoxGeometry（立方体）对象，长宽高
            var geometry = new THREE.BoxGeometry( 2, 1, 3 );
            // 设置颜色
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            // Mesh（网格）
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );
            //
            var object = new THREE.Object3D();
            scene.add( object );
            // 调整z轴位置
            camera.position.z = 5;
            // 循环渲染
            function animate() {
                requestAnimationFrame( animate );
                // 60秒一帧
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render( scene, camera );
            }
            animate();
        },
    }
};
</script>

<style lang='scss' scoped>
#box{
  height: 300px;
}
</style>