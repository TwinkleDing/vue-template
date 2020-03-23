<template>
  <div class="home">
    <div>用户id：{{ user }}</div>
    <el-button type="primary" @click="logout">退出登录</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        this.$router.push({ path: '/login' });
      });
    }
  }
};
</script>
