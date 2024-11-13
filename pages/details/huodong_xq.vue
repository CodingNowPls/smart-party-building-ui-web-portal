<template>
  <view class="">
    <dj-header></dj-header>
    <dj-right></dj-right>
    <el-container class="flex_con">
      <el-main style="width: 50vw; padding-right: 10%;">
        <el-breadcrumb separator="/" style="margin-top: 20px;margin-bottom: 20px;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/pages/details/huodong_list' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <view style="padding: 15px 15px;margin-bottom: 50px">

          <view class="title">{{
              tab == 0 ?
                  list.recordTitle
                  :
                  tab == 1 ?
                      list.planTitle
                      :
                      tab == 2 ?
                          list.feelTitle
                          :
                          tab == 3 ?
                              list.articleTitle
                              :
                              tab == 4 ?
                                  list.taleTitle
                                  :
                                  list.problemTitle

            }}
          </view>
          <view style="margin-top: 10px;">
            <text style="color: #AAAAAA;">{{ list.deptName }}</text>
            <text style="margin-left: 5px;color: #AAAAAA;">{{ list.createTime }}</text>
          </view>
          <video autoplay v-show="video_arr" v-for="(i,k) in video_arr" :src="i" class="vid"></video>
          <image v-show="img_arr!==0" v-for="(i,k) in img_arr" mode="widthFix" :src="i" class="img"></image>

          <view style="margin-top: 20px;">
            <jyf-parser :html="
						 tab==0?
						list.recordContent
						:
						tab==1?
						list.planContent
						:tab==2?
						list.feelContent
						:tab==3?
						list.articleContent
						:tab==4?
						list.taleContent
						:
						list.problemContent
						">加载中...
            </jyf-parser>
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
      tab: uni.getStorageSync('TabCur'),
      img_arr: [],
      video_arr: [],
      list: '',
    }
  },
  onLoad(option) {
    // const item=JSON.parse(option.item);
    console.log('TabCur:', uni.getStorageSync('TabCur'));
    let info = uni.getStorageSync('info');
    console.log('info', info)
    this.list = info;
    let list = this.list;
    let tab = this.tab;
    _self = this;
    if (tab == 0) {
      if (list.recordImg) {
        _self.img_arr = list.recordImg.split(',');
        console.log('_self.img_arr:', _self.img_arr)
      }
      if (list.recordVideo) {
        _self.video_arr = list.recordVideo.split(',');
        console.log('video_arr:', _self.video_arr)
      }
    }
    ;
    if (tab == 1) {
      if (list.planImg) {
        _self.img_arr = list.planImg.split(',');
        // console.log('_self.img_arr:',_self.img_arr)
      }
      if (list.planVideo) {
        _self.video_arr = list.planVideo.split(',');
      }
    }
    ;
    if (tab == 2) {
      if (list.feelImg) {
        _self.img_arr = list.feelImg.split(',');
        // console.log('_self.img_arr:',_self.feelImg)
      }
      if (list.feelVideo) {
        _self.video_arr = list.feelVideo.split(',');
      }

    }
    ;
    if (tab == 3) {
      if (list.articleImg) {
        _self.img_arr = list.articleImg.split(',');
        // console.log('_self.img_arr:',_self.feelImg)
      }
      if (list.articleVideo) {
        _self.video_arr = list.articleVideo.split(',');
      }

    }
    ;
    if (tab == 4) {
      if (list.taleImg) {
        _self.img_arr = list.taleImg.split(',');
      }

      if (list.taleVideo) {
        _self.video_arr = list.taleVideo.split(',');
      }

    }
    ;
    if (tab == 5) {
      if (list.problemImg) {
        _self.img_arr = list.problemImg.split(',');
      }
      if (list.problemVideo) {
        _self.video_arr = list.problemVideo.split(',');
      }

    }
    ;
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
