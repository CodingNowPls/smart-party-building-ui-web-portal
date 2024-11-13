<template>
  <view style="">
    <dj-header></dj-header>
    <dj-right></dj-right>
    <view class="flex_center" style="flex-direction: column;">

      <image src="../../static/bg2.png" class="bg"></image>
      <!-- <view style="z-index: 100;margin-top: 2%;font-size: 70px;letter-spacing: 20px;color: yellow;">云县医共体党组织架构图</view> -->
      <TreeChart :json="data" style="font-size: 35px;font-weight: 500;margin-top: 10%; color: red;width: 80vw;"
                 @click-node="get_tree"/>
      <!-- <el-main>
        <view v-for="(i,k) in data" style="font-size: 10px;">{{i.deptName}}</view>
         <image src="../../static/jiegou.png" mode="widthFix" class="jiegou"></image>
      </el-main> -->
    </view>
    <!-- <dj-footer></dj-footer> -->

  </view>
</template>

<script>
var _self;
import {
  address
} from '@/common/api.js';
import jyfParser from "@/components/jyf-parser/jyf-parser";
// import TreeChart from "vue-tree-chart";
import TreeChart from "@/components/tree/TreeChart"

export default {
  components: {
    TreeChart
  },
  data() {
    return {
      imageURL: '../../static/bg2.png',
      data: '',
      treeData: {
        name: '医共体管理中心(医共体总医院)',

        class: ["rootNode"],
        children: [
          {
            name: '云县人民医院委员会',
            children: [
              {
                name: '行政党支部',

              },
              {
                name: '外科党支部',
              },
              {
                name: '内科党支部',
              },
              {
                name: '妇产科党支部',
              },
              {
                name: '门诊医技党支部',
              },
              {
                name: '云县中医医院党支部',
              },
              {
                name: '离退休干部职工党支部',
              },
            ]
          },
          {
            name: '云县疾控中心',

          },
          {
            name: '云县妇幼保健计划生育中心',
          },
          {
            name: '乡镇卫生院',
            children: [
              {
                name: '村卫生室',
              }
            ]

          },
          {
            name: '民营医院',
          },
          {
            name: '诊所',
          }
        ]
      }


    }
  },
  onLoad() {
    let vm = this;
    uni.request({
      url: address.getDeptPicture,
      method: "POST",
      success(res) {

        vm.data = res.data.data;

        let dd = {...vm.data};
        console.log('res:', res, '222:', vm.data, 'dd:', dd, '00:', dd[0]);
        vm.data = dd[0]


      },

    })
  },
  methods: {
    get_tree(e) {
      console.log('ee:', e);

      uni.navigateTo({
        url: '/pages/details/jiegou_xq?item=' + e.id
      });

    }
  }
}
</script>

<style>

.bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;

}

.node .person .name[data-v-3e1326fa] {
  height: 10em !important;
  line-height: 2em;
  overflow: hidden;
  width: 100%;
}

.jiegou {
  width: 100%;
  height: 600px;
}

.name {
  height: 100% !important;
}

</style>
