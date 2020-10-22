<template>
      <my-layout :isFrist="true">
        <div class="userCenter" style="text-align: left;">
            <div class="userFunction">
                <van-cell-group class="cell-group">
                    <van-cell title="我的群"  is-link  icon="friends-o"/>
                    <van-cell title="我的积分"  is-link  icon="points"/>
                    <van-cell title="朋友圈"  is-link  icon="circle"/>
                </van-cell-group>

                <van-cell-group class="cell-group">
                    <van-cell title="我的二维码"  is-link  icon="qr"/>
                    <van-cell title="我的地址"  is-link  icon="location-o"/>
                    <van-cell title="退出"  is-link  icon="peer-pay"/>
                </van-cell-group>
            </div>
        </div>
      </my-layout>
</template>