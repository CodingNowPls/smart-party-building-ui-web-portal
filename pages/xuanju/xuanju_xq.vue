<template>
  <view class="">
    <dj-header></dj-header>
    <dj-right></dj-right>


    <el-container class="flex_con">
      <el-main style="width: 50vw; padding-right: 10%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/pages/xuanju/xuanju' }">选举列表</el-breadcrumb-item>
          <el-breadcrumb-item>选举详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- <div class="box"  v-for="(i,k) in data" :key="k" @tap="go_xq(i)">
           <el-link class="box-con">{{i.title.length>30?i.title.substr(0,30)+'...':i.title }}</el-link>
           <span>{{i.createTime.substr(0,10)}}</span>
        </div> -->
        <view class="flex_center" style="margin-top: 20px;flex-direction: column;">
          <h5 style="color: red;">{{ data.title }}</h5>
          <jyf-parser :html="data.content"></jyf-parser>
          <view style="width: 100%;margin-top: 15px;">
            <view style="color: red;">选举结果:</view>
            <view v-for="(i,k) in list">
              <text>{{ i.userName }}</text>
              <text style="margin-left: 20px;">{{ i.voteCount }} 票</text>
            </view>

          </view>
        </view>

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

var _self;
import {
  address
} from '@/common/api.js';

export default {
  data() {
    return {
      data: '',
      loading: true,
      list: []
    }
  },
  onLoad(e) {
    // console.log('info??',e.info);
    // this.get_new(e.item);
    let info = uni.getStorageSync('xj');
    console.log('info??', info);
    this.data = info;
    this.get_info(info.id)
  },
  methods: {

    get_info(e) {
      _self = this;
      uni.request({
        url: address.getVoteResult,
        data: {
          voteId: e,
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        success(res) {
          _self.list = res.data.list
          console.log('res11:', res);

        }


      })
    },


  }
}
</script>

<style>
.box-con {
  margin-left: 20px;
}

.box-img {
  width: 80px;
  height: 80px;

}

.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid #F0F0F0;
  padding-bottom: 20px;
}

</style>
