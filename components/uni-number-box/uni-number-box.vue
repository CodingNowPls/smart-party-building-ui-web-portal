<template>
  <view class="uni-numbox">
    <view @click="_calcValue('minus')" class="uni-numbox__minus">
      <text class="uni-numbox--text" :class="{ 'uni-numbox--disabled': inputValue <= min || disabled }">-</text>
    </view>
    <input :disabled="disabled" @blur="_onBlur" class="uni-numbox__value" type="number" v-model="inputValue"/>
    <view @click="_calcValue('plus')" class="uni-numbox__plus">
      <text class="uni-numbox--text" :class="{ 'uni-numbox--disabled': inputValue >= max || disabled }">+</text>
    </view>
  </view>
</template>
<script>
/**
 * NumberBox 数字输入框
 * @description 带加减按钮的数字输入框
 * @tutorial https://ext.dcloud.net.cn/plugin?id=31
 * @property {Number} value 输入框当前值
 * @property {Number} min 最小值
 * @property {Number} max 最大值
 * @property {Number} step 每次点击改变的间隔大小
 * @property {Boolean} disabled = [true|false] 是否为禁用状态
 * @event {Function} change 输入框值改变时触发的事件，参数为输入框当前的 value
 */

export default {
  name: "UniNumberBox",
  props: {
    value: {
      type: [Number, String],
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: 0
    };
  },
  watch: {
    value(val) {
      this.inputValue = +val;
    },
    inputValue(newVal, oldVal) {
      if (+newVal !== +oldVal) {
        this.$emit("change", newVal);
      }
    }
  },
  created() {
    this.inputValue = +this.value;
  },
  methods: {
    _calcValue(type) {
      if (this.disabled) {
        return;
      }
      const scale = this._getDecimalScale();
      let value = this.inputValue * scale;
      let step = this.step * scale;
      if (type === "minus") {
        value -= step;
        if (value < (this.min * scale)) {
          return;
        }
        if (value > (this.max * scale)) {
          value = this.max * scale
        }
      } else if (type === "plus") {
        value += step;
        if (value > (this.max * scale)) {
          return;
        }
        if (value < (this.min * scale)) {
          value = this.min * scale
        }
      }

      this.inputValue = String(value / scale);
    },
    _getDecimalScale() {
      let scale = 1;
      // 浮点型
      if (~~this.step !== this.step) {
        scale = Math.pow(10, (this.step + "").split(".")[1].length);
      }
      return scale;
    },
    _onBlur(event) {
      let value = event.detail.value;
      if (!value) {
        // this.inputValue = 0;
        return;
      }
      value = +value;
      if (value > this.max) {
        value = this.max;
      } else if (value < this.min) {
        value = this.min;
      }
      this.inputValue = value;
    }
  }
};
</script>
<style scoped>
/* #ifdef APP-NVUE */
/* #endif */

.uni-numbox {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  height: 35px;
  line-height: 35px;
  width: 120px;
}

.uni-numbox__value {
  background-color: #ffffff;
  width: 40px;
  height: 35px;
  text-align: center;
  font-size: 32rpx;
  border-width: 1rpx;
  border-style: solid;
  border-color: #e5e5e5;
  border-left-width: 0;
  border-right-width: 0;
}

.uni-numbox__minus {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  /* line-height: $box-line-height;
*/
  /* text-align: center;
*/
  font-size: 20px;
  color: #333;
  background-color: #f8f8f8;
  border-width: 1rpx;
  border-style: solid;
  border-color: #e5e5e5;
  border-top-left-radius: 6rpx;
  border-bottom-left-radius: 6rpx;
  border-right-width: 0;
}

.uni-numbox__plus {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-width: 1rpx;
  border-style: solid;
  border-color: #e5e5e5;
  border-top-right-radius: 6rpx;
  border-bottom-right-radius: 6rpx;
  background-color: #f8f8f8;
  border-left-width: 0;
}

.uni-numbox--text {
  font-size: 40rpx;
  color: #333;
}

.uni-numbox--disabled {
  color: #c0c0c0;
}
</style>