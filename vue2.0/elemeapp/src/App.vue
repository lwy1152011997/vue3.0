<template>
  <div>
    <Header :seller="seller"></Header>
    <div class="tab border1px">
      <div class="tab_item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from 'components/Header'
import { getSellerInfo } from './api/index'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.getSellerInfo()
  },
  methods: {
    // 获取卖家信息
    getSellerInfo() {
      getSellerInfo()
      .then((res) => {
        this.seller = res
      })
    }
  }
}
</script>

<style lang="scss">
  @import './common/scss/mixin';

  /* CSS书写顺序,影响重排的样式写在前, 影响重绘的样式靠后一点写 */
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include border1px(red);
    .tab_item {
      flex: 1;
      text-align: center;
      > a {
        display: block;
        font-size: 14px;
        color: #4D555D;
        &.isactive {
          color: #F01414;
        }
      }
    }
  }
</style>
