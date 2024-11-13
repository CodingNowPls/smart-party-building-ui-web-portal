<template>
  <view class="">
    <dj-header></dj-header>
    <dj-right></dj-right>


    <el-container class="flex_con">
      <el-main v-loading="loading" style="width: 50vw; padding-right: 10%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="color: red;margin-bottom: 20px;margin-top: 20px;"><h2>违规违纪名单:</h2></div>

        <el-collapse accordion v-model="activeNames" @change="handleChange">
          <el-collapse-item name="1" v-for="(a,b) in data">
            <template slot="title">
              <view class="flex_row">
                <h2>{{ a.name }}</h2>
                <span style="margin-left: 15px;color: #999999;">

							   {{ a.createTime }}
							  </span>
              </view>

            </template>

            <div><h3 style="color: red;font-size: 16px;">事件:</h3>
              <jyf-parser :html="a.event" ref="article"></jyf-parser>
            </div>
            <div><h3 style="color: red;font-size: 16px;">处罚:</h3>
              <jyf-parser :html="a.punish" ref="article"></jyf-parser>
            </div>
          </el-collapse-item>

        </el-collapse>
      </el-main>
      <main style="width: 25vw;">
        <dj-right_con></dj-right_con>
      </main>
    </el-container>

    <dj-footer></dj-footer>
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
      activeNames: [''],
      data: '',
      loading: true
    }
  },
  onLoad(e) {
    this.get_new();
  },
  methods: {
    handleChange() {

    },
    get_new(e) {
      _self = this;
      uni.request({
        url: address.getViolateList,
        method: 'POST',
        success(res) {
          if (res.data.code == 0) {
            _self.data = res.data.list;
            _self.loading = false;

          }
          console.log('list:', res)


        },

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
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid #F0F0F0;
  padding-bottom: 20px;
}

</style>
