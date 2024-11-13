<template>
  <view class="right_con">
    <image src="../../static/right_top.jpg" mode="widthFix" class="img"></image>
    <div>
      <div class="biaoti" style="margin-top:15px">最新资讯</div>

      <view v-for="(a,b) in new_list_arr" :key="b" style="margin-top: 10px;">
        <el-link @tap="go_new(a)">
          <span>✪</span>{{ a.newTitle }}
        </el-link>
      </view>
    </div>
    <image style="margin-top: 20px;" src="../../static/right_top.jpg" mode="widthFix" class="img"></image>

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
      new_list_arr: [],
    }
  },
  mounted() {
    _self = this;
    uni.request({
      method: 'GET',
      url: address.getNewsList,
      success(e) {
        console.log('new_list_arr121', e);
        if (e.statusCode == 200) {
          _self.new_list_arr = e.data.newsList
        } else {
          uni.showToast({
            title: e.errMsg,
            icon: 'none'
          })
        }
        ;
      },
    })

  },
  methods: {
    go_new(e) {
      uni.navigateTo({
        url: '/pages/details/newxq'
      })
      uni.setStorageSync('info', e)
    },
  }
}
</script>

<style>
.img {
  width: 100%;
  /* height: 20vw; */
}

.right_con {
  background-color: #FAFAFA;
  padding: 40px;
  /* width: 30%; */
  /* position:fixed; */
  /* right: 0; */
  /* top: 20%;	      */
}
</style>
