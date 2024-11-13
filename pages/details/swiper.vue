<template>
  <view class="container">
    <dj-header></dj-header>
    <dj-right></dj-right>
    <!-- <el-image :src="photo" style="width: 100%;height: 300px;"></el-image> -->
    <el-container style="width: 100%;margin-left: 20%;width: 60%;">
      <el-main>
        <!-- <image :src="photo" mode="aspectFit" style="width: 100%;height: 400px;"></image> -->
        <jyf-parser :html="html" ref="article"></jyf-parser>
      </el-main>
    </el-container>


    <!-- <dj-footer></dj-footer> -->
  </view>
</template>

<script>
import jyfParser from "@/components/jyf-parser/jyf-parser";

export default {
  components: {
    jyfParser
  },
  data() {
    return {
      html: '',
      photo: ''
    }
  },
  onLoad(e) {
    // let dData = decodeURIComponent(e.item);
    // let newData = JSON.parse(e.item);
    // console.log('newData:',newData)
    // this.html=newData.content,
    // this.phone=newData.photo
    let info = uni.getStorageSync('info');
    console.log('info', info);
    this.html = info.content;
    this.photo = info.photo

  },
  methods: {}
}
</script>

<style>

</style>
