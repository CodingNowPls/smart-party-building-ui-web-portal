<template>


  <view class="footer">
    <view class="flex_center" style="flex-direction: column;">
      <view class="ft">Copyright © 2009-2018 CPC71.org.cn Corporation, All Rights Reserved</view>
      <view class="ft">
        <text>客服服务：tg@cpc71.org.cn</text>
        <text style="margin-left: 20px;">文明办网文明上网举报邮箱：web@cpc71.org.cn</text>
      </view>
      <view class="ft">
        常年法律顾问：北京市康达律师事务所高级合伙人：赵小龙律师(中共党员)
      </view>
    </view>
    <image src="../../static/btm.png" class="btm_img" mode="widthFix"></image>

  </view>


</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
.btm_img {
  width: 100%;

}

.ft {
  font-size: 14px;
  margin-top: 20px;
}

.footer {
  width: 100vw;
  /* height: 100px; */
  margin-top: 50px;
  /* background-color: black; */
  /* position: fixed;
  bottom: 0; */
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
