<template>
  <view>
    <image class="bg-set" mode="widthFix" src="../../static/bgimg.png"></image>
    <view class="big">

      <view class="box">
        <el-link type="danger">智慧党建登陆</el-link>
        <el-input v-model="input" placeholder="请输入账号" suffix-icon="el-icon-user"></el-input>
        <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>

        <el-button type="danger" @tap="btn" class="btn">登陆</el-button>
      </view>

    </view>
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
      input: '',
      pwd: '',
    }
  },
  methods: {
    btn() {
      _self = this;
      if (!this.input) {
        return this.$message.error('请输入账号')
      }
      ;
      if (!this.pwd) {
        return this.$message.error('请输入密码')
      }
      ;
      let aa = {
        loginName: this.input,
        password: this.pwd
      };
      uni.request({
        url: address.login,
        method: 'POST',
        data: aa,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success(e) {
          console.log(e);
          if (e.data.msg == '操作成功') {
            uni.reLaunch({
              url: '../index/index'
            });
            uni.setStorageSync('uid', e.data.user.userId)
          } else {
            _self.$message.error(e.data.msg)
          }
          //   _self.$message.error(e.msg)
          // if(e.data.code==0){

          // }else{
          //  this.$message.error(e.msg)
          // }
        },
      })

    },
    get_acc(e) {
      console.log(this.input)
    },
  }
}
</script>

<style>
.btn {
  width: 100%;
}

.box {
  width: 25%;
  height: 30%;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
}

.big {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

.bg-set {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
