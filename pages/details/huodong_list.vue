<template>
  <view class="">
    <dj-header></dj-header>
    <dj-right></dj-right>


    <el-container class="flex_con">

      <el-aside style="width: 100%;background-color: #FAFAFA;margin-bottom: 20px;">

        <el-breadcrumb separator="/" style="margin-top: 20px;margin-bottom: 20px;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-tabs tab-position="left" @tab-click="get_id">
          <el-tab-pane v-for="(i,k) in hdarr" :label="i.deptName">

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


          </el-tab-pane>

        </el-tabs>

      </el-aside>
      <!-- <el-container>
        <el-main>
        Main
      </el-main>
      </el-container> -->
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
      activeName: 'first',
      tab_index: 0,
      hdarr: [],
      data: '',
      loading: true,
      data_arr: [],
      did: '',
      TabCur: 0
    }
  },
  onLoad(e) {
    // console.log('index??',e.item);
    // this.get_new(e.item);
    this.get_list();
    // this.get_info()


  },
  methods: {
    get_id(tab) {
      console.log('eid:', tab)
      this.tab_index = tab.index;
      this.get_info();
    },
    get_list() {
      _self = this;
      uni.request({
        url: address.getDeptList,
        method: 'GET',
        success(res) {
          if (res.data.code == 0) {
            _self.hdarr = res.data.deptList;
            _self.get_info()
          }
          console.log(res)
        },
      })
    },

    get_info() {
      _self = this;

      _self.did = _self.hdarr[_self.tab_index].deptId


      let plan_data;
      let url;
      let tab = _self.TabCur

      let data = {
        deptId: _self.did,
      };
      console.log('1111', _self.did, tab);

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
          console.log('err', err)
        }

      })

    },

    handleClick(tab, event) {
      console.log('3333', tab, event, 'index:', tab.index);
      _self = this;
      uni.setStorageSync('TabCur', tab.index)
      _self.TabCur = tab.index;
      _self.get_info()

    },
    go_xq(e) {
      uni.navigateTo({
        url: '/pages/details/huodong_xq'
      })
      uni.setStorageSync('info', e);

    },
    get_new(e) {
      _self = this;
      uni.request({
        url: address.getAwardList,
        method: 'GET',
        success(res) {
          console.log('list:', res)
          _self.data = res.data.list;
          _self.loading = false;

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
