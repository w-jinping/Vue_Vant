<template>
    <van-tabbar route  v-model="active" >
<van-tabbar-item icon="wap-home-o" replace to="/">消息</van-tabbar-item>
<van-tabbar-item icon="friends-o"  to="/list">通讯录</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
</van-tabbar>
</template>
<script>
export default {
     data() {
    return {
     active: 0
    };
  },
}
</script>