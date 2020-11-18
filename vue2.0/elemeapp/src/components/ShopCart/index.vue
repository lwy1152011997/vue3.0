<!-- 底部购物车组件 -->
<template>
  <div class="shopCart" @click="toggleShopList">
    <div class="content">
      <div class="content_left">
        <div class="logo_wrapper">
          <div class="logo" :class="{'light': totalCount > 0}">
            <span class="iconshop icon-shopping_cart" :class="{'light': totalCount > 0}"></span>
          </div>
          <div class="count" v-show="totalCount > 0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'light': totalPrice > 0}">${{totalPrice}}</div>
        <div class="desc">需要配送费${{deliveryPrice}}</div>
      </div>
      <div class="content_right" @click.prevent.stop="toPay">
        <div class="pay" :class="payClass">{{payDesc}}</div>
      </div>
    </div>

    <!-- 小球飞入 -->
    <div class="ball_wrapper">
      <!--<div v-for="(ball, index) in balls" :key="index" v-show="ball.show" class="ball" transition="drop">-->
        <!--<div class="inner_ball"></div>-->
      <!--</div>-->
    </div>

    <!-- 购物车列表 -->
    <div class="shop_list" v-show="this.totalCount">
      <div class="list_header">
        <h1 class="tittle">购物车</h1>
        <span class="empty" @click="empty">清空</span>
      </div>
      <div class="list_content" ref="listWrapper">
        <ul class="food_wrapper">
          <li class="food" v-for="(food, index) in selectFoods" :key="index">
            <span class="name">{{food.name}}</span>
            <div class="price">
              <span>${{food.price * food.count}}</span>
            </div>
            <div class="cartControl_wrapper">
              <CartControl :food="food"></CartControl>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  import CartControl from '../CartControl'
  export default {
    name: 'ShopCart',
    data() {
      return {
        isHideShopList: true // 是否隐藏购物车列表
        // TODO: 小球飞入的动画
      }
    },
    components: {
      CartControl
    },
    props: {
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      },
      selectFoods: {
        type: Array,
        default() {
          return [
            {
              price: 10,
              count: 1
            }
          ]
        }
      }
    },
    methods: {
      toPay() {
        if (this.totalPrice < this.minPrice) return
        window.alert(`请支付$${this.totalPrice}大洋`)
      },
      toggleShopList() {
        if (!this.totalCount) {
          return
        }
        this.isHideShopList = !this.isHideShopList
      },
      empty() {
        this.selectFoods.forEach((item) => {
          item.count = 0
        })
      }
    },
    computed: {
      totalPrice() {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      totalCount() {
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return `$ ${this.totalPrice}起送`
        } else  if (this.totalPrice < this.minPrice) {
          const diff = this.minPrice - this.totalPrice
          return `还差${diff}$送`
        } else {
          return '去结算'
        }
      },
      payClass() {
        if (this.totalPrice < this.minPrice) {
          return 'notEnough'
        } else {
          return 'enough'
        }
      },
      // listShow() {
      //   if (!this.totalCount) {
      //     this.isHideShopList = true
      //     return false
      //   }
      //   let show = !this.isHideShopList
      //   return show
      // }
    },
    mounted() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BetterScroll('.list_content', {
            click: true
          })
        } else {
          this.scroll.refresh()
        }

      })
    }
  }
</script>

<style lang="scss">
@import '../../common/scss/mixin';
.shopCart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  background-color: cadetblue;
  .content {
    display: flex;
    background-color: #141d27;
    .content_left {
      flex: 1;
      .logo_wrapper {
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vert-align: top;
        border-radius: 50%;
        background-color: #141d27;
        .logo {
          &.light {
            background-color: rgb(0, 160, 220);
          }
          display: inline-block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #2b343c;
          text-align: center;
          .icon-shopping_cart {
            font-size: 24px;
            color: #80858a;
            line-height: 44px;
            &.light {
              color: darkred;
            }
          }
        }
        .count {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }
      .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        &.light {
          color: orangered;
        }
      }
      .desc {
        display: inline-block;
        vertical-align: top;
        margin: 12px 0 0 12px;
        line-height: 24px;
        font-size: 10px;
        color: #fff;
      }
    }

    .content_right {
      flex: 0 0 105px;
      width: 105px;
      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        color: #7e8c8d;
        font-weight: 700;
        background-color: #2b333b;
        &.notEnough {
          background-color: #2b333b;
        }
        &.enough {
          background-color: #00b43c;
          color: orangered;
        }
      }
    }
  }

  /* 小球飞入的动画 */
  .ball_wrapper {
    .ball {
      position: fixed;
      left: 32px;
      bottom: 22px;
      z-index: 2002;
      &.drop-transition {
        transition: all 0.6s;
      }
      .inner_ball {
        width: 16px;
        height: 16px;
        background-color: orangered;
        border-radius: 50%;
        transition: all 0.6s;
      }
    }
  }

  /* 购物车列表 */
  .shop_list {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    .list_header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background-color: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.3);
      .tittle {
        float: left;
        font-size: 14px;
        color: darkred;
      }
      .empty {
        float: right;
        font-size: 12px;
        color: gray;
      }
    }

    .list_content {
      padding: 0 18px;
      max-height: 217px;
      background-color: #fff;
      overflow: hidden;
      .food_wrapper {
        .food {
          position: relative;
          padding: 12px 0;
          box-sizing: border-box;
          @include border1px(rgba(7, 17, 27, 0.3));
          .name {
            font-size: 14px;
            line-height: 24px;
            color: rgb(7, 17, 27);
          }
          .price {
            position: absolute;
            right: 90px;
            bottom: 12px;
            line-height: 24px;
            font-size: 14px;
            font-weight: 700;
            color: deeppink;
            span {}
          }
          .cartControl_wrapper {
            position: absolute;
            bottom: 6px;
            right: 0;
          }
        }
      }
    }
  }
}
</style>