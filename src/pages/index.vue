<template>
  <div class='pages'>
    <top-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import TopBar from './TopBar';

export default {
  name: 'Pages',
  components: {
    TopBar
  },
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
<style lang="less">
@url: '../assets/img/beach.jpg';
.pages{
  background-image: url(@url);
  height: 100%;
  width: 100%;
}
</style>