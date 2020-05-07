<template>
  <div>
    <div class='websocket-msg'>{{showMsg}}</div>
    <el-button type="primary" @click="connect">连接websocket</el-button>
    <el-button v-show="connected" type="primary" @click="send">发送一条消息</el-button>
    <el-button type="primary" @click="close">断开websocket服务</el-button>
    <div class="websocket-tips">发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connected: false,
      connecting: false,
      socketTask: false,
      msg: false,
    };
  },
  computed: {
    showMsg() {
      if (this.connected) {
        if (this.msg) {
          return '收到消息：' + this.msg;
        }
        return '等待接收消息';
      }
        return '尚未连接';
    }
  },
  methods: {
    connect() {
      if (this.connected || this.connecting) {
        console.log('正在连接或者已经连接，请勿重复连接');
        return false;
      }
      this.connecting = true;
      this.ws = new WebSocket('wss://echo.websocket.org');
      this.ws.onopen = () => {
        this.connected = true;
        this.connecting = false;
      };
    },
    send() {
      this.ws.send('发送数据');
      this.ws.onmessage = (evt) => {
        const received = evt.data;
        this.msg = received;
        console.log('数据已接收');
      };
    },
    close() {
      this.ws.close();
      this.ws.onclose = () => {
        this.connected = false;
        this.msg = '';
        console.log('连接已关闭');
      };
    }
  },
};
</script>

<style lang="less">
</style>