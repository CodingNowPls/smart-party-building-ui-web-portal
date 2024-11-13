<template>
  <view class="container">
    <dj-header></dj-header>

    <el-container style="width: 60%;margin-left: 20%;">
      <el-main>

        <swiper class="swiper" :current="current">
          <swiper-item v-for="(i,k) in list_arr" :key="k">
            <view class="tit">
              {{ k + 1 }}) {{ i.title }}
              <text class="type">(
                {{
                  i.questionType == 1 ? '单选题' : i.questionType == 2 ? '判断题' : i.questionType == 3 ? '多选题' : '简答题'
                }})
              </text>
              <view style="margin-top: 10px;" v-show="i.questionType==1">

                <view @click="choose('A')">
                  A: {{ i.answerA }}
                </view>
                <view @click="choose('B')">
                  B: {{ i.answerB }}
                </view>
                <view @click="choose('C')">
                  C: {{ i.answerC }}
                </view>
                <view @click="choose('D')">
                  D: {{ i.answerD }}
                </view>
                <view style="margin-top: 10px;margin-bottom: 10px;">
                  您的选择:
                </view>
                <el-radio v-model="dan_value" label="A">A</el-radio>
                <el-radio v-model="dan_value" label="B">B</el-radio>
                <el-radio v-model="dan_value" label="C">C</el-radio>
                <el-radio v-model="dan_value" label="D">D</el-radio>
                <!-- <u-radio-group v-model="dan_value" @change="radioGroupChange2">
                      <u-radio
                        @change="radioChange2"
                        v-for="(item, index) in dan_list" :key="index"
                        :name="item.name"
                        :disabled="item.disabled"
                      >
                        {{item.name}}
                      </u-radio>
                    </u-radio-group> -->


              </view>
              <view style="margin-top: 10px;" v-show="i.questionType==2">
                <view @click="choose('A',i.id)">
                  A: {{ i.answerA }}
                </view>
                <view @click="choose('B')">
                  B: {{ i.answerB }}
                </view>
                <view style="margin-top: 10px;margin-bottom: 10px;">
                  您的选择:
                </view>
                <el-radio v-model="radio_value" label="A">A</el-radio>
                <el-radio v-model="radio_value" label="B">B</el-radio>
                <!-- <u-radio-group v-model="radio_value" @change="radioGroupChange">
                      <u-radio
                        @change="radioChange"
                        v-for="(item, index) in list2" :key="index"
                        :name="item.name"
                        :disabled="item.disabled"
                      >
                        {{item.name}}
                      </u-radio>
                </u-radio-group> -->

              </view>
              <view style="margin-top: 10px;" v-show="i.questionType==3">

                <view @click="choose('A',i)" class="item_bg">
                  A: {{ i.answerA }}
                </view>
                <view @click="choose('B',i)" class="item_bg">
                  B: {{ i.answerB }}
                </view>
                <view @click="choose('C',i)" class="item_bg">
                  C: {{ i.answerC }}
                </view>
                <view @click="choose('D',i)" class="item_bg">
                  D: {{ i.answerD }}
                </view>
                <view style="margin-top: 10px;margin-bottom: 10px;">
                  您的选择:
                </view>
                <el-checkbox-group v-model="DaAn_arr">
                  <el-checkbox label="A"></el-checkbox>
                  <el-checkbox label="B"></el-checkbox>
                  <el-checkbox label="C"></el-checkbox>
                  <el-checkbox label="D"></el-checkbox>
                </el-checkbox-group>
                <!-- <u-checkbox-group @change="checkboxGroupChange">
                      <u-checkbox
                        @change="checkboxChange"
                        v-model="item.checked"
                        v-for="(item, index) in list" :key="index"
                        :name="item.name"
                      >{{item.name}}</u-checkbox>
                </u-checkbox-group> -->

              </view>
              <view style="margin-top: 10px;" v-show="i.questionType==4">
                <textarea class="jianda" @blur="bindTextAreaBlur" placeholder-style="color:#F76260"
                          placeholder="请输入内容"/>
              </view>


            </view>
          </swiper-item>
        </swiper>

        <el-button v-show="!final" @click="next" type="danger" style="margin-top: 20px;">下一题</el-button>
        <el-button v-show="final" type="danger" @click="ti_jiao">提交</el-button>


      </el-main>
    </el-container>


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
      checkList: [],
      final: false,
      jian_da: '',
      dan_value: '',
      radio_value: '',
      btn: '下一题',
      list_arr: [],
      kaoshi_arr: [],
      current: 0,
      DaAn: '',
      DaAn_arr: [],
      all_answer: [],
      list: [
        {
          name: 'A',
          checked: false,
          disabled: false
        },
        {
          name: 'B',
          checked: false,
          disabled: false
        },
        {
          name: 'C',
          checked: false,
          disabled: false
        },
        {
          name: 'D',
          checked: false,
          disabled: false
        },
      ],
      list2: [
        {
          name: 'A',
          checked: false,
          disabled: false
        },
        {
          name: 'B',
          checked: false,
          disabled: false
        },

      ],
      dan_list: [
        {
          name: 'A',
          checked: true,
          disabled: false
        },
        {
          name: 'B',
          checked: false,
          disabled: false
        },
        {
          name: 'C',
          checked: false,
          disabled: false
        },
        {
          name: 'D',
          checked: false,
          disabled: false
        },

      ],
      pager_id: '',
    }
  },
  onLoad(e) {
    // console.log(e.item)
    this.get_list(e.item);
    this.pager_id = e.item;

  },
  methods: {
    bindTextAreaBlur: function (e) {
      console.log(e.detail.value);
      this.jian_da = e.detail.value;
    },
    // 选中某个单选框时，由radio时触发
    radioChange2(e) {
      // console.log(e);
    },
    // 选中任一radio时，由radio-group触发
    radioGroupChange2(e) {
      // console.log(e);
    },
    // 选中某个单选框时，由radio时触发
    radioChange(e) {
      // console.log(e);
    },
    // 选中任一radio时，由radio-group触发
    radioGroupChange(e) {
      // console.log(e);
    },
    // 选中某个复选框时，由checkbox时触发
    checkboxChange(e) {
      // console.log('checkboxChange',e);
    },
    // 选中任一checkbox时，由checkbox-group触发
    checkboxGroupChange(e) {
      console.log('checkboxGroupChange:', e);
      this.DaAn_arr = e;
    },
    next() {
      _self = this;
      let type = this.list_arr[this.current].questionType;
      let id = this.list_arr[this.current].id;
      let uid = uni.getStorageSync('uid');
      let final_data = [];
      if (type == 4) {
        if (!_self.jian_da) {
          return uni.showToast({
            title: '请输入答案',
            icon: 'none'
          })
        }

        let dd = {
          answer: _self.jian_da,
          pagerId: _self.pager_id,
          questionId: id,
          userId: uid
        };
        _self.all_answer.push(dd)

      }
      ;

      if (type == 1) {
        if (!_self.dan_value) {
          return uni.showToast({
            title: '请选择答案',
            icon: 'none'
          })
        }
        let dd = {
          answer: _self.dan_value,
          pagerId: _self.pager_id,
          questionId: id,
          userId: uid
        };
        _self.all_answer.push(dd)
      }
      ;
      if (type == 2) {
        if (!_self.radio_value) {
          return uni.showToast({
            title: '请选择答案',
            icon: 'none'
          })
        }

        let dd = {
          answer: _self.radio_value,
          pagerId: _self.pager_id,
          questionId: id,
          userId: uid
        };
        _self.all_answer.push(dd)

      }
      ;
      if (type == 3) {
        if (_self.DaAn_arr.length == 0) {
          return uni.showToast({
            title: '请选择答案',
            icon: 'none'
          })
        }
        let a = _self.DaAn_arr.toString();
        let b = a.replace(/,/g, "");

        let dd = {
          answer: b,
          pagerId: _self.pager_id,
          questionId: id,
          userId: uid
        };
        _self.all_answer.push(dd)


      }
      ;
      console.log('dan_value:', this.dan_value, 'id:', id, this.jian_da, this.radio_value, this.DaAn_arr);
      console.log('all_answer:', this.all_answer);
      this.dan_value = "";
      this.jian_da = "";
      this.radio_value = "";
      this.DaAn_arr = [];

      if (this.current + 1 < this.list_arr.length) {
        let a = this.current;
        this.current = ++a;
        console.log(this.current);

      }
      ;
      console.log('this.current:', this.current);
      if (this.current + 1 > this.list_arr.length) {
        // this.ti_jiao()
        console.log('this.current+1:', this.current + 1)
      }
      ;
      if (this.current + 1 == this.list_arr.length) {
        console.log('11:', this.current + 1, '22:', this.list_arr.length);
        this.btn = '提交';
        this.final = true

      }
      ;


    },
    ti_jiao() {
      this.next();
      uni.request({
        url: address.addPagerAnswer,
        method: 'POST',
        data: _self.all_answer,
        // header: {
        // 	'Content-Type': 'application/x-www-form-urlencoded'
        // },
        success(e) {
          console.log('submit:', e);
          if (e.data.code == 0) {
            uni.navigateTo({
              url: '/pages/kaoshi/success'
            })
          }

        },
        fail() {

        },
      })
    },

    choose(e, i) {
      console.log('e:', e, i);
      this.DaAn = e;
      _self = this;
    },
    get_list(id) {
      _self = this;
      uni.request({
        url: address.getPagerInfo,
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          pagerId: id
        },
        success(res) {
          if (res.data.code == 0) {
            console.log('getPagerInfo:', res);
            _self.list_arr = res.data.list;
            // let data= _self.kaoshi_arr;
            //      for(let i in _self.list_arr){
            // 	 let a=_self.list_arr[i].answerA
            //  }

          }

        },


      })
    },

  }
}
</script>

<style>
.swiper {
  height: 70vh;
}

.tit {
  font-size: 17px;
}

.jianda {
  width: 100%;
  height: 200px;
  background-color: #f6f5ec;
  padding: 5px;
  border-radius: 5px;
}
</style>
