<template>
  <view class="">
    <dj-header></dj-header>
    <dj-right></dj-right>

    <el-container class="flex_con">

      <el-main style="width: 50vw; padding-right: 10%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/pages/list/list' }">动态列表</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
        <view class="xq_con">
          <view class="title">{{ data.newTitle }}</view>
          <view>
            <span style="color: #808080;">{{ data.createTime }}</span>
            <span style="color: #808080;margin-left: 5px;">{{ data.createBy }}</span>
          </view>
          <video autoplay v-show="data.newVideo" :src="data.newVideo" class="vid"></video>
          <image :src="data.newPic" style="width: 100%;height: 400px;margin-top: 20px;margin-bottom: 20px;"
                 mode="widthFix"></image>
        </view>

        <jyf-parser :html="html" ref="article"></jyf-parser>
      </el-main>

      <main style="width: 25vw;">
        <dj-right_con></dj-right_con>
      </main>
    </el-container>

    <dj-footer></dj-footer>

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
    // console.log('newData22:', newData);
    // this.html = newData.newContent;
    // this.data = newData
    let info = uni.getStorageSync('info');
    console.log('info', info);
    this.html = info.newContent;
    this.data = info;
  },
  methods: {}
}
</script>

<style>
.vid {
  width: 100%;
  height: 400px;
}
</style>
