<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="ss">{{ name }}</el-button>
    <h1>{{ user }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      name: "丁丁"
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ss() {
      this.$store.commit("SET_USER", this.name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
