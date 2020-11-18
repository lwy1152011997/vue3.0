<template>
  <div class="food" v-show="showFlag">
    <div class="food_content">
      <div class="img_header">
        <img :src="food.image" alt="">
        <div class="poshook" @click="hiden">
          <i class="icon-arrow_lift"></i>
        </div>
      </div>

      <div class="content">
        <h1 class="tittle">{{food.name}}</h1>
        <div class="detail">
          <span class="sell_count">已售{{food.sellCount}}</span>
          <span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">${{food.price}}</span>
          <span class="old" v-show="food.oldPrice">${{food.oldPrice}}</span>
        </div>
        <div class="addCart">
          <CartControl :food="food"></CartControl>
        </div>
        <div class="by" v-show="!food.count || food.count === 0" @click="addFirst">加入购物车</div>
      </div>
      <Split></Split>
      <!-- 评价 -->
      <div class="rating">
        <h1 class="tittles">商品评论</h1>
        <RatingSelect :seleteType="seleteType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"></RatingSelect>
      </div>
    </div>
  </div>
</template>

<script>
  import CartControl from '../CartControl'
  import Split from '../Split'
  import RatingSelect from '../RatingSelect'

  // const POSITIVE = 0 // 好评
  // const NEGATIVE = 1 // 差评
  const ALL = 2 // 全部评论

  export default {
    name: 'Food',
    components: {
      CartControl,
      Split,
      RatingSelect
    },
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false,
        seleteType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    methods: {
      show() {
        this.showFlag = true
        this.seleteType = ALL
        this.onlyContent = true
      },
      hiden() {
        this.showFlag = false
      },
      addFirst() {
        this.$set(this.food, 'count', 1)
      }
    },
    mounted() {

    }

  }
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';
.food {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 48px;
  z-index: 20;
  width: 100%;
  background-color: #fff;
  .food_content {
    .img_header {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%; /* 重点:padding设置百分比的时候,是相对于当前元素的宽度来做为参照物计算的 */
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .poshook {
        position: absolute;
        top: 10px;
        left: 0;
        .icon-arrow_lift {
          display: block;
          padding: 10px;
          font-size: 20px;
          color: #fff;
        }
      }
    }

    .content {
      padding: 18px;
      .tittle {
        line-height: 14px;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color: deeppink;
      }
      .detail {
        margin-bottom: 18px;
        line-height: 10px;
        font-size: 0;
        .sell_count {
          font-size: 10px;
          color: gray;
        }
        .rating {
          font-size: 10px;
          color: gray;
          margin-right: 12px;
        }
      }
      .price {
        font-weight: 700;
        line-height: 24px;
        .now {
          margin-right: 8px;
          font-size: 14px;
          color: orangered;
        }
        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: cadetblue;
        }
      }
      .addCart {
        position: absolute;
        right: 18px;
        bottom: 284px;
      }
      .by {
        position: absolute;
        right: 18px;
        bottom: 290px;
        line-height: 24px;
        z-index: 12;
        height: 24px;
        padding: 0 12px;
        box-sizing: border-box;
        border-radius: 12px;
        font-size: 10px;
        color: deeppink;
        background-color: aqua;
      }
    }

    .rating {
      padding-top: 18px;
      .tittles {
        line-height: 14px;
        margin-left: 18px;
        font-size: 14px;
        color: pink;
      }
    }
  }
}
</style>