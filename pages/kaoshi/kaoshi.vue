<template>
  <view class="container">
    <dj-header></dj-header>

    <el-container style="width: 60%;margin-left: 20%;">
      <el-main>
        <el-link type="primary">考试列表:</el-link>
        <view style="padding: 20px;">
          <el-button type="danger" v-for="(i,k) in kaoshi_arr" :key="k" @tap="go_xq(i)">{{ i.name }}</el-button>
        </view>

        <view v-show="kaoshi_arr.length==0" style="padding: 20px;color: #999999;">
          暂无考试内容
        </view>
      </el-main>
    </el-container>

    <!-- <dj-footer></dj-footer> -->

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
      kaoshi_arr: [],
    }
  },
  onLoad() {
    this.get_kaoshi()
  },
  methods: {

    go_xq(e) {
      uni.navigateTo({
        // url:'/pages/kaoshi/kao?item='+e.id
        url: '/pages/kaoshi/kaoshi_list?item=' + e.id
      })
    },

    get_kaoshi() {
      _self = this;
      uni.request({
        url: address.getPagerList,
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          userId: uni.getStorageSync('uid')
        },
        success(res) {
          if (res.data.code == 0) {
            _self.kaoshi_arr = res.data.list
          }
          console.log('getPagerList:', res);

        },


      })
    },

  }
}
</script>

<style>

</style>
