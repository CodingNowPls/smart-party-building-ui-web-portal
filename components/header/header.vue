<template>
  <view>
    <el-carousel height="">
      <el-carousel-item v-for="item in img_arr" :key="item">
        <image :src="item" mode="widthFix" style="width: 100%;height: 500px;"></image>
      </el-carousel-item>
    </el-carousel>

    <view class="flex_row to_top">
      <view class="box " @click="go_item(k)" v-for="(i,k) in tabList" :key="k">
        <h2>
          {{ i }}
        </h2>
      </view>
    </view>

    <el-drawer
        title=""
        :visible.sync="drawer"

        :before-close="handleClose"
    >
      <view style="width: 100%;display: flex;align-items: center;justify-content: center;flex-direction: column;">
        <h3>
          党组列表
        </h3>

        <view v-for="(i,k) in hdArr" :key="k" style="margin-top: 10px;" @click="handleCommand(k)">
          <el-link>{{ i }}</el-link>
        </view>

      </view>

    </el-drawer>

    <!-- <view class="top">
     <image src="../../static/logo1.png" class="logo"></image>
      <view v-for="(i,k) in tabArr" :key="k">
        <el-link  type="warning" @tap="logo(k)" class="ys">{{i}}</el-link>
      </view>
      <el-dropdown @command="handleCommand">
        <span class=" ys" >
          党组活动<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(i,k) in hdarr" :key="k" :command="k">
          {{i}}
        </el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
        <el-link  class="ys" type="warning" @tap="go_kaoshi">考试{{title}}</el-link>
        <el-button v-show="!login" type="danger" @tap="go_login"  plain round>系统维护</el-button>
      <el-button v-show="login" type="danger" @tap="login_out"  plain round>退出</el-button>
    </view> -->

  </view>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      img_arr: [
        '../../static/btm.png',
      ],
      drawer: false,
      login: false,
      tabList: ['组织结构', '违规违纪', '选举管理', '党建动态', '荣誉奖项', '党组活动', '系统维护'],
      tabArr: ['首页', '党建动态', '党建要闻', '党建风采', '党风廉政'],
      hdArr: ['党支部委员会', '第一党小组', '第二党小组', '第三党小组', '第四党小组', '第五党小组'],
    };
  },
  onLoad() {

  },
  mounted() {
    let uid = uni.getStorageSync('uid')
    console.log('uid2222:', uid);
    if (uid) {
      this.login = true
    }

  },
  methods: {
    handleClose() {

    },
    go_shou() {
      uni.navigateTo({
        url: '/pages/index/index'
      })
    },
    go_kaoshi() {
      if (this.login) {
        uni.navigateTo({
          url: '/pages/kaoshi/kaoshi'
        })
      } else {
        uni.redirectTo({
          url: '/pages/login/login'
        })
        // uni.reLaunch({
        // 	url:'/pages/login/login'
        // })
      }

    },
    login_out() {
      uni.removeStorageSync('uid');
      uni.reLaunch({
        url: '/pages/login/login'
      })
    },
    go_login() {
      uni.navigateTo({
        url: '../../pages/login/login'
      })
    },
    handleCommand(command) {
      // this.$message('click on item ' + command);
      console.log('command', command)
      this.drawer = false;
      let did;
      if (command == 0) {
        did = 101
      }
      if (command == 1) {
        did = 200
      }
      if (command == 2) {
        did = 201
      }
      if (command == 3) {
        did = 202
      }
      if (command == 4) {
        did = 203
      }
      if (command == 5) {
        did = 204
      }
      if (command == 6) {
        did = 204
      }
      uni.navigateTo({
        url: '/pages/details/huodong?item=' + did
      })
    },

    go_item(e) {
      let vm = this;
      console.log(e);
      if (e == 0) {
        uni.navigateTo({
          url: '/pages/details/jiegou'
        })
      }
      ;
      if (e == 1) {
        uni.navigateTo({
          url: '/pages/details/weigui'
        })
      }
      ;

      if (e == 2) {
        this.$notify({
          title: '提示',
          message: '当前模块正在开发中',
          // duration: 0
        });
      }
      ;

      if (e == 3) {
        uni.navigateTo({
          url: '/pages/list/list?item=' + 1
        })
      } else if (e == 6) {
        console.log(232)
        // this.go_login()
        // window.open('https://j.jolinmind.cn/new_building_demo/index')
        uni.navigateTo({
          url: '/pages/index/index'
        })

      } else if (e == 5) {
        // vm.drawer=true;
        uni.navigateTo({
          url: '/pages/details/huodong_list'
        })
      } else if (e == 4) {
        uni.navigateTo({
          url: '/pages/details/ry_list'
        })
      } else if (e == 6) {
        //登录
        uni.navigateTo({
          url: '/pages/login/login'
        })
      }


    },

    logo(i) {

      if (i == 0) {
        return uni.reLaunch({
          url: '/pages/index/index'
        })
      } else {
        return uni.navigateTo({
          url: '/pages/list/list?item=' + i
        })
      }

    },
  },


}
</script>

<style>
.to_top {
  margin-top: -13%;
  margin-bottom: 5%;
  z-index: 99;
  position: relative;
  width: 80%;
  margin-left: 10%;

}

.box {
  cursor: pointer;
  width: 120px;
  background-color: red;
  border-radius: 5px;
  height: 60px;
  border: 1px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  color: yellow;
}

.h_t {
  width: 300px;
  height: 150px;

}

.ys {
  color: yellow;
  font-size: 18px;
}

.el-dropdown-link {
  cursor: pointer;
  /* color: #EBB55C; */
}

.el-icon-arrow-down {
  font-size: 12px;
}

.logo {
  width: 50px;
  height: 50px;

}

.top {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #EBEBEB;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #b21415;
}
</style>
