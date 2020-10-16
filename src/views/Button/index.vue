<template>

<div >
<div class="cell">按钮类型</div>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>


<div class="cell">朴素按钮</div>
<van-button plain type="primary">朴素按钮</van-button>
<van-button plain type="info">朴素按钮</van-button>

<div class="cell">细边框</div>
<van-button plain hairline type="primary">细边框按钮</van-button>
<van-button plain hairline type="info">细边框按钮</van-button>

<div class="cell">禁用按钮</div>
<van-button disabled type="primary">禁用状态</van-button>
<van-button disabled type="info">禁用状态</van-button>


<div class="cell">加载状态</div>
<van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="info" loading-text="加载中..." />

<div class="cell">图标按钮</div>
<van-button icon="plus" type="primary" />
<van-button icon="plus" type="primary">按钮</van-button>
<van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="info">按钮</van-button>

<div class="cell">按钮尺寸</div>
<van-button type="primary" size="large">大号按钮</van-button>
<van-button type="primary" size="normal">普通按钮</van-button>
<van-button type="primary" size="small">小型按钮</van-button>
<van-button type="primary" size="mini">迷你按钮</van-button>


<div class="cell">路由跳转</div>
<van-button type="primary" url="/vant/mobile.html">URL 跳转</van-button>
<van-button type="primary" to="index">路由跳转</van-button>



<div class="cell">自定义颜色</div>
<van-button color="#7232dd">单色按钮</van-button>
<van-button color="#7232dd" plain>单色按钮</van-button>
<van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</van-button>
</div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style lang="less" scoped>
.cell{width: 100%;padding: 10px 16px;background-color:#fafafa;color: #cccccc;text-align: left; font-size: 14px;overflow: hidden;}
.van-button--normal {
    padding: 0 15px;
    font-size: 14px;
    margin-left: 16px;
    margin-bottom: 12px;
    float: left;
}
.van-button--large{margin-bottom: 13px;}
</style>