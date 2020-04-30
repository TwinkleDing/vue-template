// 定义一个混入对象
var myMixin = {
    methods: {
        hello() {
            console.log(this.mixxins);
            this.mixxins = 'mixxins';
            console.log('hello from mixin!');
        }
    }
};
export default myMixin;