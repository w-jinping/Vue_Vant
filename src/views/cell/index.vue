<template>
    <div style="text-align: left;">
  <van-cell-group>
 <div class="cell">大小</div>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
 
</van-cell-group>
 <div class="cell">带图标</div>
<van-cell title="单元格" icon="location-o" />

<div class="cell">展示箭头</div>
<van-cell title="单元格" is-link />
<van-cell title="单元格" is-link value="内容" />
<van-cell title="单元格" is-link arrow-direction="down" value="内容" />

<div class="cell">路由跳转页面导航</div>
<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
<van-cell title="路由跳转" is-link to="index" />



    </div>
</template>
<style lang="less" scoped>
.cell{width: 100%;padding: 10px 16px;background-color:#fafafa;color: #cccccc; font-size: 14px;}
</style>