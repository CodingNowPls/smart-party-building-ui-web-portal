<template>
  <view class="">
    <dj-header></dj-header>
    <dj-right></dj-right>


    <el-container class="flex_con">
      <el-main style="width: 50vw; padding-right: 10%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/pages/details/jiegou' }">结构图</el-breadcrumb-item>
          <el-breadcrumb-item>成员信息</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="box">
          <el-link class="box-con">姓名</el-link>
          <span>{{ data.userName || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">电话</el-link>
          <span>{{ data.phonenumber || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">邮箱</el-link>
          <span>{{ data.email || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">性别</el-link>
          <span>{{ data.sex || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">名族</el-link>
          <span>{{ data.nation || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">出生年月</el-link>
          <span>{{ data.year || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">家庭出生</el-link>
          <span>{{ data.family || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">籍贯</el-link>
          <span>{{ data.place || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">原有文化程度</el-link>
          <span>{{ data.oldLevel || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">现有文化程度</el-link>
          <span>{{ data.newLevel || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">党内职务</el-link>
          <span>{{ data.partyPost || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">行政职务</el-link>
          <span>{{ data.adminPost || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">参加工作时间</el-link>
          <span>{{ data.workTime || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">职称</el-link>
          <span>{{ data.jobName || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">介绍人</el-link>
          <span>{{ data.refer || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">入党时间</el-link>
          <span>{{ data.partyTime || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">转正时间</el-link>
          <span>{{ data.positiveTime || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">科室</el-link>
          <span>{{ data.office || '暂无数据' }}</span>
        </div>
        <div class="box">
          <el-link class="box-con">身份证号</el-link>
          <span>{{ data.idCard || '暂无数据' }}</span>
        </div>


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
      data: '',
      loading: true
    }
  },
  onLoad(e) {
    console.log('index??', e.item);
    this.get_new(e.item);
  },
  methods: {


    get_new(e) {
      _self = this;
      uni.request({
        url: address.getUserinfo,
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data: {
          'userId': e,
        },

        success(res) {
          console.log('list:', res)
          _self.data = res.data.user;

          // _self.loading=false;

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
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid #F0F0F0;
  padding-bottom: 20px;
}
</style>
