<template>
  <view class="container">
    <dj-header></dj-header>
    <dj-right></dj-right>
    <el-container style="width: 60%;margin-left: 20%;">
      <el-main>
        <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb> -->
        <view style="display: flex;flex-direction: column;align-items: center;">
          <view class="title">{{ data.inspectTitle }}</view>
          <view>
            <span style="color: #808080;">{{ data.createTime }}</span>
            <span style="color: #808080;margin-left: 5px;">{{ data.createBy }}</span>
          </view>

          <image :src="data.inspectPic" style="width: 100%;height: 400px;margin-top: 20px;margin-bottom: 20px;"
                 mode="aspectFit"></image>
        </view>

        <jyf-parser :html="html" ref="article"></jyf-parser>
      </el-main>
    </el-container>

    <!-- <dj-footer></dj-footer> -->

  </view>
</template>

<script>
import jyfParser from "@/components/jyf-parser/jyf-parser";

export default {
  data() {
    return {
      html: '',
      data: ''
    }
  },
  onLoad(e) {
    // let newData = JSON.parse(e.item);
    // console.log('ld22:', newData);
    // this.html = newData.inspectContent;
    // this.data = newData
    let info = uni.getStorageSync('info');
    console.log('info', info);
    this.html = info.inspectContent;
    this.data = info;
  },
  methods: {}
}
</script>

<style>

</style>
