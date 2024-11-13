<template>
  <view class="container">
    <dj-header></dj-header>
    <dj-right></dj-right>
    <el-container style="width: 60%;margin-left: 20%;">
      <el-main>
        <view style="display: flex;flex-direction: column;align-items: center;">
          <h2 style="color: red;">{{ data.noticeTitle }}</h2>
          <view style="margin-top: 10px;margin-bottom: 10px;">
            <span style="color: #808080;">{{ data.createTime }}</span>
            <span style="color: #808080;margin-left: 5px;">{{ data.createBy }}</span>
          </view>
          <jyf-parser :html="html" ref="article"></jyf-parser>
          <!-- <image :src="data.exchangePic" style="width: 100%;height: 400px;margin-top: 20px;margin-bottom: 20px;" mode="widthFix"></image>	 -->
        </view>
      </el-main>
    </el-container>

  </view>
</template>

<script>
var _self;
import {
  address
} from '@/common/api.js';

export default {
  data() {
    return {
      data: '',
      html: ''
    }
  },
  onLoad(e) {
    console.log('e:', e.item);
    this.get_xq(e.item)
  },
  methods: {
    get_xq(e) {

      _self = this;

      uni.request({
        url: address.getNoticeInfo,
        data: {
          'noticeId': e
        },
        success(res) {
          console.log('xq11:', res);
          _self.data = res.data.notice;
          _self.html = res.data.notice.noticeContent

        }
      })
    },

  }
}
</script>

<style>

</style>
