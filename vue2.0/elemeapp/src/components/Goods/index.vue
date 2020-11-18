<!-- 菜单左右联动 -->
<template>
  <div class="goods">
    <!-- 左侧menu栏 -->
    <div class="menu_wrapper">
      <ul class="menu_item_wrapper">
        <li v-for="(item, index) in goodsInfo" :key="index" class="menu_item" :class="{'current': currentIndex === index}" @click="selectMenu(index)">
          <span class="text"><span v-show="item.type > 0" class="icon" :class="classMap"></span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <!-- 右侧商品详情栏 -->
    <div class="foods_wrapper" ref="foodsWrapper">
      <ul class="foods_list_wrapper">
        <li v-for="(listItem, i) in goodsInfo" :key="i" class="foods_list" ref="food_list_hook">
          <h1 class="title">{{listItem.name}}</h1>
          <ul class="foods_item_wrapper">
            <li v-for="(food, j) in listItem.foods" :key="j" class="foods_item border1px" @click="selectFoodItem(food)">
              <div class="icon">
                <img :src="food.icon" width="64px" height="64px">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">${{food.price}}</span>
                  <span v-show="food.oldPrice" class="old">${{food.oldPrice}}</span>
                </div>
                <div class="cartControlWrapper">
                  <CartControl :food="food"></CartControl>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 购物车 -->
    <ShopCart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"> </ShopCart>

    <!-- 点击显示商品详情 -->
    <Food :food="selectFood" ref="myFood"></Food>
  </div>
</template>

<script>
  import { getGoodsInfo } from '../../api/index'
  import BetterScroll from 'better-scroll'
  import ShopCart from '../ShopCart'
  import CartControl from '../CartControl'
  import Food from '../Food'

  export default {
    name: 'Goods',
    components: {
      ShopCart,
      CartControl,
      Food
    },
    data() {
      return {
        goodsInfo: [],
        listHeight: [],
        scrollY: 0,
        selectFood: {}
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
      this.getGoods()
    },
    methods: {
      // 点击显示商品详情
      selectFoodItem(food) {
        this.selectFood = food
        this.$refs.myFood.show() // 父组件调用子组件的方法,使用ref的方式
      },
      getGoods() {
        getGoodsInfo()
          .then((res) => {
            this.goodsInfo = res
            // vue中对DOM的一些计算的时候,一定要在这个回调函数中进行
            this.$nextTick(() => {
              this._initScroll()
              this._computedHeight()
            })
          })
      },
      // betterScroll滚动
      _initScroll() {
        this.menuScroll = new BetterScroll('.menu_wrapper', {
          click: true
        })
        this.foodScroll = new BetterScroll('.foods_wrapper', {
          probeType: 3,
          click: true
        })

        // 左右菜单滑动联动
        this.foodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y)) // 取Y轴正值
        })
      },
      // 左右菜单联动高度计算
      _computedHeight() {
        let _height = 0
        const foodListHeight = this.$refs.food_list_hook
        console.log(foodListHeight)
        this.listHeight.push(_height)
        for (let i = 0; i < foodListHeight.length; i++) {
          const _item = foodListHeight[i]
          _height += _item.clientHeight
          this.listHeight.push(_height)
        }
      },
      // 点击左側聯動右侧
      selectMenu(index) {
        const foodListHeight = this.$refs.food_list_hook
        const el = foodListHeight[index]
        this.foodScroll.scrollToElement(el, 300) // 滚动到哪里
      }
    },
    computed: {
      // 左右联动, 计算index
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          const height1 = this.listHeight[i]
          const height2 = this.listHeight[i + 1]
          if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
            return i
          }
        }
        return 0
      },
      // 选择foods的份数
      selectFoods() {
        let foods = []
        this.goodsInfo.forEach((good) => {
          good.foods.forEach((foodItem) => {
            if (foodItem.count) foods.push(foodItem)
          })
        })
        return foods
      }
    }
  }
</script>

<style lang="scss">
@import '../../common/scss/mixin';

.goods {
  display: flex;
  position: absolute;
  top: 176px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu_wrapper {
    flex: 0 0 80px; // 等分 内容是否缩放 站位空间
    width: 80px;
    background-color: #f3f5f7;
    .menu_item_wrapper {
      .menu_item {
        display: table; // 无论文字有一行两行都会做垂直居中
        height: 54px;
        width: 56px;
        line-height: 14px;
        padding: 0 12px;
        &.current {
          position: relative;
          margin-top: -2px;
          z-index: 10;
          background-color: rgba(95, 198, 195, 0.8);
          font-weight: 700;
          .text {
            border: none;
          }
        }
        .text {
          display: table-cell;
          width: 56px;
          font-size: 12px;
          vertical-align: middle;
          @include border1px(rgba(7, 17, 27, 0.3));
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              @include bgImg('../Header/img/decrease_1');
            }
            &.discount {
              @include bgImg('../Header/img/discount_1');
            }
            &.guarantee {
              @include bgImg('../Header/img/guarantee_1');
            }
            &.invoice {
              @include bgImg('../Header/img/invoice_1');
            }
            &.special {
              @include bgImg('../Header/img/invoice_1');
            }
          }
        }
      }
    }
  }
  .foods_wrapper {
    flex: 1;
    .foods_list_wrapper {
      .foods_list {
        .title {
          padding-left: 14px;
          height: 26px;
          line-height: 26px;
          border-left: 2px solid #d9dde1;
          font-size: 12px;
          color: rgb(147, 153, 159);
          background-color: #f3f5f7;
        }
        .foods_item_wrapper {
          .foods_item {
            display: flex;
            margin: 18px;
            padding-bottom: 18px;
            @include border1px(rgba(7, 17, 27, 0.2));
            &:last-child {
              @include borderNone();
              margin-bottom: 0px;
            }
            .icon {
              flex: 0 0 57px;
              margin-right: 10px;
              img {}
            }
            .content {
              flex: 1;
              .name {
                margin: 2px 0 8px 0;
                height: 14px;
                line-height: 14px;
                font-size: 14px;
                color: rgb(7, 17, 27);
              }
              .desc, .extra {
                line-height: 10px;
                font-size: 10px;
                color: rgb(147, 153, 159);
              }
              .desc {
                margin-bottom: 8px;
              }
              .extra {
                &.count {
                  margin-right: 12px;
                }
              }
              .price {
                font-weight: 400;
                line-height: 24px;
                .now {
                  margin-right: 8px;
                  font-size: 14px;
                  color: rgb(240, 20, 20);
                }
                .old {
                  text-decoration: line-through;
                  font-size: 10px;
                  color: rgb(147, 153, 159);
                }
              }
              .cartControlWrapper {
                position: absolute;
                right: 0;
                bottom: 12px;
              }
            }
          }
        }

      }
    }
  }
}
</style>