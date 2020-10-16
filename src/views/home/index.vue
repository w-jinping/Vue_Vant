<template>
<div>
    <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<van-grid>
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>
<router-view />
<van-tabbar route  v-model="active" >
<van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
<van-tabbar-item icon="more-o" replace to="/list">列表</van-tabbar-item>
  <van-tabbar-item icon="contact">关于</van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>
import { Toast } from 'vant';
export default {
     data() {
    return {
     active: 0,
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },

  },
}
</script>