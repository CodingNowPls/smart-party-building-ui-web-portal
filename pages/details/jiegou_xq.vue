<template>
  <view class="">
    <dj-header></dj-header>
    <dj-right></dj-right>


    <el-container class="flex_con">
      <el-main style="width: 50vw; padding-right: 10%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/pages/details/jiegou' }">结构图</el-breadcrumb-item>
          <el-breadcrumb-item>成员</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="box" v-for="(i,k) in data" :key="k" @tap="go_xq(i)">
          <el-link class="box-con">{{ i.userName }}</el-link>
          <span>{{ i.createTime.substr(0, 10) }}</span>
        </div>
        <div class="box" v-if="data.length==0">
          暂无数据
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
    go_xq(e) {
      uni.navigateTo({
        url: '/pages/details/user_xq?item=' + e.userId
      })

    },

    get_new(e) {
      _self = this;
      uni.request({
        url: address.getUserByDeptId,
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data: {
          'deptId': e,
        },

        success(res) {
          console.log('list:', res)
          _self.data = res.data.userList;

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
