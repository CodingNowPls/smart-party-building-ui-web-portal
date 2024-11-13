<template>

  <view>
    <view class="top" style="">
      <view style="display: flex;flex-direction: row;align-items: center;margin-left: 10%;">
        <image src="../../static/dang.png" class="d_logo"></image>
        <text style="color: yellow;font-size: 25px;">智慧党建</text>
      </view>

      <view class=""
            style="width: 60%; padding-right: 10%;display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
        <view v-for="(i,k) in con" :key="k">
          <!-- <text class="ys">{{i}}</text> -->
          <el-link type="warning" @tap="go_tab(k)" class="ys">{{ i }}</el-link>
        </view>
      </view>


    </view>
    <!--    <view class="date">{{ date }}</view>-->

    <el-carousel height="90vh">

      <el-carousel-item v-for="item in swiper_arr" :key="item.id">
        <image :src="item.photo" style="width: 100%;height: 90vh;"></image>

      </el-carousel-item>

    </el-carousel>


  </view>
  <!-- 	<view class="container">


           <dj-right></dj-right>
          <view style="position: relative;top: -20px;" >
      <dj-header  ></dj-header>
      </view>
      <view  v-show="notice.length!==0"   @click="go_notice" class="flex_center flex_row" style="height: 60px;margin-top:10px;cursor: pointer;">
        <h2 style="color: red;">通知:</h2>
        <h2 style="margin-left: 5px;">{{notice[0].noticeTitle }}</h2>
      </view>
      <el-container class="con_pad">
        <el-main style="margin-top: 0px;">

          <div style="height: 500px;">
            <el-row :gutter="20">
              <el-col :span="15">
                <el-carousel height="500px">
                  <el-carousel-item v-for="(i,k) in swiper_arr" :key="k">
                    <el-image class="swp" @tap="go_swiper(i)" :src="i.photo"></el-image>
                  </el-carousel-item>
                </el-carousel>
              </el-col>
              <el-col :span="9">

                <div style="height: 500px;display: flex;flex-direction: column;justify-content: space-between" >

                  <view v-for="(a,b) in new_list_arr" :key="b" >
                    <el-link @tap="go_new(a)">
                      <span style="margin-right: 5px;font-size: 16px;">✪ {{a.newTitle.length>20?a.newTitle.substr(0.20)+'...':a.newTitle }}</span>
                    </el-link>
                  </view>

                </div>

              </el-col>
            </el-row>
          </div>

          <el-card style="width: 100%;margin-top: 20px;">
            <view class="title">
              <view class="under_tit">
                荣誉奖项
              </view>

              <scroll-view scroll-x style="width: 100%;" >
                <view class="flex_row" >
                <view  v-for="(i,k) in rongyu" :key="k" @tap="go_ry(i)" :class="k==0?'img_item_1':'img_item'" >
                   <image :src="i.awardPic" class="img_item_img" mode="aspectFill"></image>
                   <el-link class="img_item_tit"> {{i.awardTitle}}</el-link>
                </view>
                </view>

               </scroll-view>
            </view>
          </el-card>

          <el-card style="width: 100%;margin-top: 20px;">
            <view class="title">
              <view class="under_tit">
                单位交流
              </view>

              <scroll-view scroll-x style="width: 100%;" >
                <view class="flex_row" >
                <view  v-for="(i,k) in danwei" :key="k" @tap="go_danwei(i)" :class="k==0?'img_item_1':'img_item'" >
                   <image :src="i.exchangePic" class="img_item_img" mode="aspectFill"></image>
                   <el-link class="img_item_tit"> {{i.exchangeTitle}}</el-link>
                </view>
                </view>

               </scroll-view>
            </view>
          </el-card>

          <el-card style="width: 100%;margin-top: 20px;">
            <view class="title">
              <view class="under_tit">
                领导视察
              </view>

              <scroll-view scroll-x style="width: 100%;" >
                <view class="flex_row" >
                <view  v-for="(i,k) in lindao" :key="k" @tap="go_lindao(i)" :class="k==0?'img_item_1':'img_item'" >
                   <image :src="i.inspectPic" class="img_item_img" mode="aspectFill"></image>
                   <el-link class="img_item_tit"> {{i.inspectTitle}}</el-link>
                </view>
                </view>

               </scroll-view>
            </view>
          </el-card>

        <el-card style="width: 100%;margin-top: 20px;">
          <view class="title">
            <view class="under_tit">
              暖心故事
            </view>

            <scroll-view scroll-x style="width: 100%;" >
              <view class="flex_row" >
              <view  v-for="(i,k) in nuanxin" :key="k" @tap="go_nx(i)" :class="k==0?'img_item_1':'img_item'" >
                 <image :src="i.storyPic" class="img_item_img" mode="aspectFill"></image>
                 <el-link class="img_item_tit"> {{i.storyTitle}}</el-link>
              </view>
              </view>

             </scroll-view>
          </view>
        </el-card>

        <el-card style="width: 100%;margin-top: 20px;">
          <view class="title">

            <view class="under_tit">
              典型事迹
            </view>

            <scroll-view scroll-x style="width: 100%;" >
              <view class="flex_row" >
              <view  v-for="(i,k) in dianxin" :key="k" @tap="go_dx(i)" :class="k==0?'img_item_1':'img_item'" >
                 <image :src="i.deedPic" class="img_item_img" mode="aspectFill"></image>
                 <el-link class="img_item_tit"> {{i.deedTitle}}</el-link>
              </view>
              </view>

             </scroll-view>
          </view>
        </el-card>

        <el-card style="width: 100%;margin-top: 20px;">
          <view class="title">
            <view class="under_tit">
              十大亮点
            </view>

            <scroll-view scroll-x style="width: 100%;" >
              <view class="flex_row" >
              <view  v-for="(i,k) in liangdian" :key="k" @tap="go_ld(i)" :class="k==0?'img_item_1':'img_item'" >
                 <image :src="i.lightPic" class="img_item_img" mode="aspectFill"></image>
                 <el-link class="img_item_tit" > {{i.lightTitle}}</el-link>
              </view>
              </view>

             </scroll-view>
          </view>
        </el-card>

        </el-main>

      </el-container>

      <dj-footer></dj-footer>

    </view>
   -->
</template>

<script>
var _self;
import {
  address
} from '@/common/api.js';

export default {

  data() {
    return {
      con: ['组织结构', '违规违纪', '选举管理', '党建动态', '荣誉奖项', '党组活动', '系统维护'],
      img_arr: ['../../static/ban1.png', '../../static/ban2.png', '../../static/ban3.png', '../../static/ban4.png'],
      activeName: 'first',
      top: [],
      swiper_arr: [],
      new_list_arr: [],
      lindao: [],
      danwei: [],
      rongyu: [],
      nuanxin: [],
      dianxin: [],
      liangdian: [],
      seen: false,
      notice: [],
      date: ''
    }
  },
  onLoad() {
    // console.log(new Date().toISOString().slice(0, 10))
    this.date = new Date().toISOString().slice(0, 10);
    this.get_swiper();
    this.get_newlist();
    this.get_lindao();
    this.get_danwei();
    this.get_ry(),
        this.get_nx(),
        this.get_dianxin(),
        this.get_ld(),
        this.get_notice()
  },
  methods: {
    go_tab(e) {
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
        uni.navigateTo({
          url: '/pages/xuanju/xuanju'
        })
      }
      ;

      if (e == 3) {
        uni.navigateTo({
          url: '/pages/list/list?item=' + 1
        })
      } else if (e == 6) {
        //登录
        uni.navigateTo({
          url: '/pages/login/login'
        })
      } else if (e == 5) {

        uni.navigateTo({
          url: '/pages/details/huodong_list'
        })
      } else if (e == 4) {
        uni.navigateTo({
          url: '/pages/details/ry_list'
        })
      }


    },
    go_notice() {
      let id = this.notice[0].noticeId;
      uni.navigateTo({
        url: '/pages/index/notice_xq?item=' + id

      })

    },
    get_notice() {
      _self = this;
      uni.request({
        url: address.getNoticeList,
        success(e) {
          if (e.data.code == 0) {
            _self.notice = e.data.noticeList
          }
          console.log('get_notice:', e)

        },
      })
    },

    enter() {
      this.seen = true;
      // this.current = index;
    },
    leave() {
      this.seen = false;
      this.current = null;
    },

    go_ld(e) {
      uni.navigateTo({
        url: '../details/liang'
        // url: '../details/liang?item=' + encodeURIComponent(JSON.stringify(e))
      })
      uni.setStorageSync('info', e)
    },
    go_dx(e) {
      uni.navigateTo({
        url: '../details/dianxin_xq'
        // url: '../details/dianxin_xq?item=' + encodeURIComponent(JSON.stringify(e))
      })
      uni.setStorageSync('info', e)
    },
    go_nx(e) {
      uni.navigateTo({
        url: '../details/nuanxin_xq'
        // url: '../details/nuanxin_xq?item=' + encodeURIComponent(JSON.stringify(e))
      })
      uni.setStorageSync('info', e)
    },
    go_ry(e) {
      uni.navigateTo({
        url: '../details/ry_xq'
        // url: '../details/ry_xq?item=' + encodeURIComponent(JSON.stringify(e))
      })

      uni.setStorageSync('info', e)

    },
    go_danwei(e) {
      uni.navigateTo({
        url: '../details/danwei_xq'
        // url:'/pages/details/danwei_xq?item='+encodeURIComponent(JSON.stringify(e))
      })
      uni.setStorageSync('info', e)

    },
    go_lindao(e) {
      uni.navigateTo({
        url: '../details/lindao_xq'
        // url: '../details/lindao_xq?item=' + encodeURIComponent(JSON.stringify(e))
      })

      uni.setStorageSync('info', e)
    },
    go_new(e) {
      uni.navigateTo({
        url: '/pages/details/newxq'
        // url: '/pages/details/newxq?item=' + encodeURIComponent(JSON.stringify(e))
      })
      uni.setStorageSync('info', e)
    },
    go_swiper(e) {
      uni.navigateTo({
        url: '/pages/details/swiper'
        // url: '/pages/details/swiper?item=' + encodeURIComponent(JSON.stringify(e))
      })
      uni.setStorageSync('info', e)
    },
    get_ld() {
      _self = this;
      uni.request({
        method: 'GET',
        url: address.getLightList,
        success(e) {
          console.log('liang:', e);
          if (e.statusCode == 200) {
            _self.liangdian = e.data.list
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

    get_dianxin() {
      _self = this;
      uni.request({
        method: 'GET',
        url: address.getDeedList,
        success(e) {
          console.log('dx:', e);
          if (e.statusCode == 200) {
            _self.dianxin = e.data.list
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

    get_nx() {
      _self = this;
      uni.request({
        method: 'GET',
        url: address.getStoryList,
        success(e) {
          console.log('nx:', e.data.list);
          if (e.statusCode == 200) {
            _self.nuanxin = e.data.list
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

    get_ry() {
      _self = this;
      uni.request({
        method: 'GET',
        url: address.getAwardList,
        success(e) {
          // console.log('ry:',e);
          if (e.statusCode == 200) {
            _self.rongyu = e.data.list
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

    get_danwei() {
      _self = this;
      uni.request({
        method: 'GET',
        url: address.getExchangeList,
        success(e) {
          console.log(e);
          if (e.statusCode == 200) {
            _self.danwei = e.data.list
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

    get_lindao() {
      _self = this;
      uni.request({
        method: 'GET',
        url: address.getInspectList,
        success(e) {
          console.log(e);
          if (e.statusCode == 200) {
            _self.lindao = e.data.list
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
    get_swiper() {
      _self = this;

      for (let i = 0; i < this.img_arr.length; i++) {
        const imElement = this.img_arr[i];

        let imgObj = {
          photo: imElement,
          id: i
        }
        this.swiper_arr.push(imgObj);

      }
      // uni.request({
      //   method: 'GET',
      //   url: address.getPictureList,
      //   success(e) {
      //     console.log('轮播:', e);
      //     if (e.statusCode == 200) {
      //       _self.swiper_arr = e.data.list
      //     } else {
      //       uni.showToast({
      //         title: e.errMsg,
      //         icon: 'none'
      //       })
      //     }
      //     ;
      //   },
      // })

    },

    get_newlist() {
      _self = this;
      uni.request({
        method: 'GET',
        url: address.getNewsList,
        success(e) {
          console.log('new_list_arr', e);
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


  }
}
</script>

<style>
.date {
  position: absolute;
  top: 85vh;
  color: white;
  z-index: 100;
  font-size: 16px;
  left: 120px;
}

.ys {
  color: yellow;
  font-size: 18px;
}

.d_logo {
  width: 80px;
  height: 80px;
  /* margin-left: 8%; */
}

.top {
  width: 100vw;
  height: 10vh;
  border-bottom: 1px solid #EBEBEB;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #b21415;
}

/* .top{
  width: 100%;
  height: 80px;
  background-color: red;
} */
.img_item_img {
  width: 300px;
  height: 200px;
  margin-top: 10px;
}

.img_item {
  cursor: pointer;
  width: 300px;
  height: 250px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.img_item_1 {
  cursor: pointer;
  width: 300px;
  height: 250px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.top_big {
  margin-top: -15%;
  margin-bottom: 15%;

}

.top_img {
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
}

.biaoti {
  font-size: 20px;
  /* color: #F56C6C; */
  font-weight: 500;


}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.img_item_tit {
  margin-top: 10px;
}

.under_tit {
  background-color: red;
  color: yellow;
  height: 50px;
  display: flex;
  align-items: center;
}

</style>
