<template>
  <view class="container">
    <dj-header></dj-header>
    <dj-right></dj-right>
    <el-container style="width: 60%;margin-left: 20%;">
      <el-main>

        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <el-tab-pane label="会议记录" name="first">
            <div class="box" v-for="(item,k) in data_arr" :key="k" @tap="go_xq(item)">
              <!-- <el-image class="box-img" :src="item.recordImg"></el-image> -->
              <el-link class="box-con">{{ item.recordTitle }}</el-link>
            </div>
          </el-tab-pane>
          <el-tab-pane label="学习计划" name="second">
            <div class="box" v-for="(item,k) in data_arr" :key="k" @tap="go_xq(item)">
              <!-- <el-image class="box-img" :src="item.planImg"></el-image> -->
              <el-link class="box-con">{{ item.planTitle }}</el-link>
            </div>
          </el-tab-pane>
          <el-tab-pane label="心得体会" name="third">
            <div class="box" v-for="(item,k) in data_arr" :key="k" @tap="go_xq(item)">
              <!-- <el-image class="box-img" :src="item.feelImg"></el-image> -->
              <el-link class="box-con">{{ item.feelTitle }}</el-link>
            </div>
          </el-tab-pane>
          <el-tab-pane label="分享美文" name="fourth">

            <div class="box" v-for="(item,k) in data_arr" :key="k" @tap="go_xq(item)">
              <!-- <el-image class="box-img" :src="item.articleImg"></el-image> -->
              <el-link class="box-con">{{ item.articleTitle }}</el-link>
            </div>
          </el-tab-pane>
          <el-tab-pane label="小组故事" name="five">
            <div class="box" v-for="(item,k) in data_arr" :key="k" @tap="go_xq(item)">
              <!-- <el-image class="box-img" :src="item.taleImg"></el-image> -->
              <el-link class="box-con">{{ item.taleTitle }}</el-link>
            </div>
          </el-tab-pane>
          <el-tab-pane label="问题墙" name="six">
            <div class="box" v-for="(item,k) in data_arr" :key="k" @tap="go_xq(item)">
              <!-- <el-image class="box-img" :src="item.problemImg"></el-image> -->
              <el-link class="box-con">{{ item.problemTitle }}</el-link>
            </div>
          </el-tab-pane>
        </el-tabs>


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
      list: [{
        name: '会议记录'
      },
        {
          name: '学习计划',
        },
        {
          name: '心得体会',
        },
        {
          name: '分享美文',
        },
        {
          name: '小组故事',
        },

        {
          name: '问题墙'
        }

      ],
      activeName: 'first',
      data_arr: [],
      did: '',
      TabCur: 0,
    }
  },
  onLoad(e) {
    console.log('did:', e.item);
    this.did = e.item;
    this.get_info(e.item);

  },
  methods: {
    go_xq(e) {
      uni.setStorageSync('TabCur', this.TabCur);
      uni.navigateTo({
        url: '/pages/details/huodong_xq'
        // url:'/pages/details/huodong_xq?item='+encodeURIComponent(JSON.stringify(e))
      })
      uni.setStorageSync('info', e)
    },
    get_info() {
      _self = this;
      console.log('1111', _self.did)
      let plan_data;
      let url;
      let tab = _self.TabCur
      let data = {
        deptId: _self.did,
      };

      if (tab == 0) {
        url = address.getRecordList;
      }
      ;
      if (tab == 1) {
        url = address.getPlanList;
        plan_data = {
          deptId: _self.did,
          userId: ''
        }
      }
      ;
      if (tab == 2) {
        url = address.getFeelList;
      }
      ;
      if (tab == 3) {
        url = address.getArticleList;
      }
      ;
      if (tab == 4) {
        url = address.getTaleList;
      }
      ;
      if (tab == 5) {
        url = address.getProblemList;
      }
      ;
      uni.request({
        method: 'GET',
        url: url,
        data: tab == 1 ? plan_data : data,

        success(e) {
          console.log('dddd:', e);
          _self.data_arr = e.data.list;

        },
        fail: function (err) {
          console.log(err)
        },
      })

    },
    handleClick(tab, event) {
      console.log('3333', tab, event, 'index:', tab.index);
      _self = this;
      _self.TabCur = tab.index;
      _self.get_info()

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
