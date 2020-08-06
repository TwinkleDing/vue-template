<template>
  <div class='home-index'>
    <card-panel :list='cardPanel'></card-panel>
    <d-slot>
      <template #userName>
        <div>
          userName: {{dSlot.userName}}
        </div>
      </template>
      <template #account='slotProps'>
        <div>
          account: {{ slotProps }}
        </div>
      </template>
      <template #password='slotProps'>
        <div>
          password: {{ slotProps }}
        </div>
      </template>
    </d-slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardPanel from './Components/CardPanel';
import DSlot from './Components/DSlot';

export default {
  name: 'Pages',
  components: {
    CardPanel,
    DSlot
  },
  data() {
    return {
      dSlot: {
        userName: 'ding'
      },
      cardPanel: [
        {
          title: 'qwe',
          content: 'rty'
        },
        {
          title: 'asd',
          content: 'uio'
        },
        {
          title: 'zxc',
          content: 'fgh'
        },
        {
          title: 'jkl',
          content: 'bnm'
        },
      ]
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  mounted() {
  }
};
</script>

<style lang='scss'>
.home-index {
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
}
</style>