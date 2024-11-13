<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  }
};
</script>

<style lang="scss">
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  src: url('/static/uni.ttf');
}

/* #endif */
.biaoti {
  font-size: 20px;
  /* color: #F56C6C; */
  font-weight: 500;


}

.xq_con {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
  color: red !important;
  cursor: pointer;
}

.el-tabs__item.is-active {
  color: yellow !important;
}

.el-tabs__active-bar.is-top {
  background-color: red !important;
}

.el-tabs__active-bar.is-left {
  background-color: red !important;
}

.el-tabs--left .el-tabs__item.is-left.is-active {
  text-align: right;
  color: yellow;
  font-size: 16px;
}

.el-tabs__item:hover {
  color: yellow !important;
  cursor: pointer;
}

.el-tabs__nav-scroll {
  background-color: red;
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: yellow !important;
  font-size: 16px;
  background-color: #f15b6c;
  border-right-color: #DCDFE6;
  border-left-color: #DCDFE6;
}

.el-link.el-link--default:hover {
  color: red !important;
}

.con_pad {
  padding: 0 10%;
}

.flex_con {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10%;
  font-size: 14px;
  line-height: 24px;
}

.flex_row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.flex_center {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 18px;
  color: red;
  font-weight: 500;
}

.container {
  padding: 40px;
  font-size: 14px;
  line-height: 24px;
  // background-color: red;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  /* width: 480px; */
  margin-top: 20px;
}

.swp {
  width: 100%;
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: red;
  color: #333;
  text-align: center;
  // line-height: 200px;
}

.el-main {
  // background-color: red;
  background-color: #FAFAFA;
  color: #333;
  text-align: left;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
