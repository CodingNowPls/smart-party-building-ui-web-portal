<template>
  <view>
    <!-- <view class="right">
      <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
            <el-button @click="go_top">左上</el-button>
       </el-tooltip>
    </view> -->
    <image src="../../static/back_home.png" class="right_home" @click="go_home"></image>

    <!-- <image src="../../static/back.png" class="right" @click="go_top"></image> -->

  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    go_top() {
      scrollTo(0, 0);
    },
    go_home() {
      uni.navigateTo({
        url: '/pages/index/index'
      })
    }

  }
}
</script>

<style>
.right_home {
  width: 65px;
  height: 65px;
  cursor: pointer;
  /* background-color: #007AFF; */
  position: fixed;
  top: 40%;
  right: 2px;
  z-index: 99;
  opacity: .8;
}

.right {
  width: 60px;
  height: 60px;
  cursor: pointer;
  /* background-color: #007AFF; */
  position: fixed;
  top: 50%;
  right: 2px;
  z-index: 99;
  opacity: .8;

}

</style>
