<template>
  <view class="container">
    <dj-header></dj-header>
    <el-container style="width: 60%;margin-left: 20%;">
      <el-main class="main">
        <image src="../../static/sucess.png" class="img"></image>
        <view style="margin-top: 20px;color: #999999;">
          提交成功
        </view>
      </el-main>
    </el-container>

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
.main {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.img {
  width: 100px;
  height: 100px;
  margin-top: 30px;

}
</style>
