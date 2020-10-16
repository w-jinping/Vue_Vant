<template>
<div>
  <router-view />
<section style="text-align: left;" route>
 <!-- <van-cell v-for="item in items" :title="item.list" :key="item.list" replace to="" /> -->
 <van-cell :title="Button" is-link to="/Button" />
 <van-cell :title="cell"  is-link  to="/cell" />
</section>
<van-tabbar route  v-model="active" >
<van-tabbar-item icon="wap-home-o" replace to="/">首页</van-tabbar-item>
<van-tabbar-item icon="more-o" >列表</van-tabbar-item>
  <van-tabbar-item icon="contact">关于</van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>
export default {
     data() {
    return {
      Button:"按钮",
      cell:"列表",
      //  items:[
      //    {list:'Button',url:'/Botton'},
      //    {list:'2',url:'/'}
      //    ],
         active: 0,
         value: '',
    };
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>

</style>