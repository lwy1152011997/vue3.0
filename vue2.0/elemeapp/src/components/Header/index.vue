<template>
  <div class="header">
    <div class="content_wrapper">
      <!-- 商家头像 -->
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="头像">
      </div>
      <!-- 内容 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}} / {{seller.deliveryTime}} 分钟送达</div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <!-- 小角标 -->
      <div class="support_count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin_wrapper">
      <span class="bulletin_icon"></span>
      <span class="bulletin_text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 背景图 -->
    <div class="bgImg">
      <img :src="seller.avatar" alt="背景图">
    </div>
    <!-- 弹出层, 使用stickyFotter的布局方式 -->
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail_wrapper clearfix">
          <div class="detail_main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star_wrapper">
              <Star :size="48" :score="seller.score"></Star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="detail_close" @click="hiddenDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Star from '../../common/publiccomponent/Star'
  export default {
    name: 'Header',
    components: {
      Star
    },
    props: {
      seller: {
        type:Object
      }
    },
    data() {
      return {
        detailShow: false
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    methods: {
      showDetail() {
        this.detailShow = true
      },
      hiddenDetail() {
        this.detailShow = false
      }
    }
  }
</script>

<style lang="scss">
@import '../../common/scss/mixin';

.header {
  color: #fff;
  background-color: rgba(7, 17, 27,0.4);
  position: relative;
  overflow: hidden;
  .content_wrapper {
    padding: 24px 12px 18px 24px;
    position: relative;
    .avatar {
      display: inline-block;
      vertical-align: top;
      img {
        border-radius: 3px;
      }
    }

    .content {
      display: inline-block;
      margin-left: 14px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          width: 30px;
          height: 18px;
          display: inline-block;
          vertical-align: top;
          @include bgImg('./img/brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          font-weight: bold;
          line-height: 18px;
        }
      }
      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }
      .support {
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            @include bgImg('./img/decrease_1');
          }
          &.discount {
            @include bgImg('./img/discount_1');
          }
          &.guarantee {
            @include bgImg('./img/guarantee_1');
          }
          &.invoice {
            @include bgImg('./img/invoice_1');
          }
          &.special {
            @include bgImg('./img/invoice_1');
          }
        }
        .text {
          vertical-align: top;
          line-height: 12px;
          font-size: 12px;
        }
      }
    }

    .support_count {
      position: absolute;
      padding: 0 8px;
      right: 12px;
      bottom: 18px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      text-align: center;
      .count {
        font-size: 12px;
        vertical-align: top;
      }
      .icon-keyboard_arrow_right {
        margin-left: 2px;
        line-height: 24px;
        font-size: 14px;
      }
    }
  }

  .bulletin_wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7, 17, 27, 0.2);
    .bulletin_icon {
      vertical-align: top;
      display: inline-block;
      width: 22px;
      height: 12px;
      margin-top: 8px;
      @include bgImg('./img/bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .bulletin_text {
      vertical-align: top;
      margin: 0 4px;
      font-size: 13px;
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 14px;
    }
  }

  .bgImg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(5px);
    img {
      width: 100%;
      height: 100%;
    }
  }


  .detail {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    backdrop-filter: blur(10px);
    /* vue过渡动画的写法 */
    opacity: 1;
    background-color: rgba(7, 17, 27, 0.7);
    &.fade-enter-active, &.fade-leave-active {
      transition: all 0.5s;
    }
    &.fade-enter, &.fade-leave {
      opacity: 0;
      background-color: rgba(7, 17, 27, 0);
    }

    /* stickyFotter布局 */
    .detail_wrapper {
      min-height: 100%;
      width: 100%;
      .detail_main {
        margin-top: 64px;
        padding-bottom: 64px;
        .name {
          font-size: 16px;
          font-weight: 700;
          text-align: center;
          line-height: 16px;
        }
        .star_wrapper {
          margin-top: 18px;
          padding: 2px 0;
          text-align: center;
        }
        .title {
          display: flex;
          width: 80%;
          margin: 30px auto 24px auto;
          .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          }
          .text {
            padding: 0 12px;
            font-size: 14px;
          }
        }
      }
    }
    .detail_close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
      .icon-close {}
    }
  }
}
</style>