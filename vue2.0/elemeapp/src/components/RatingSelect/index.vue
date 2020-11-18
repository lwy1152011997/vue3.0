<template>
  <div class="rating_wrapper">
    <div class="ratingType border1px">
      <span class="all block" :class="{'active':seleteType===2}" @click="selet(2)">{{desc.all}}</span>
      <span class="positive block" :class="{'active':seleteType===0}" @click="selet(0)">{{desc.positive}}</span>
      <span class="negative block" :class="{'active':seleteType===1}" @click="selet(1)">{{desc.negative}}</span>
    </div>
    <div class="switch" :class="{'on':onlyContent}" @click="toggleContent">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  // const POSITIVE = 0 // 好评
  // const NEGATIVE = 1 // 差评
  const ALL = 2 // 全部评论

  export default {
    name: 'RatingSelect',
    // 通过传入props对应的参数数据,去维护组件
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      seleteType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },
    methods: {
      selet(type) {
        this.seleteType = type
        this.$emit('ratingType', type)
      },
      toggleContent() {
        this.onlyContent = !this.onlyContent
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';
.rating_wrapper {
  .ratingType {
    padding: 18px 0;
    margin: 0 18px;
    font-size: 0;
    @include border1px(#2e2e2e);
    .block {
      display: inline-block;
      padding: 8px 12px;
      margin-right: 8px;
      border-radius: 1px;
      color: white;
      font-size: 12px;
    }
    .all {
      margin-left: 2px;
      background-color: cornflowerblue;
      &.active {
        color: lightsalmon;
        background-color: brown;
      }
    }
    .positive {
      background-color: lightskyblue;
      &.active {
        color: lightsalmon;
        background-color: brown;
      }
    }
    .negative {
      background-color: #7e8c8d;
      &.active {
        color: lightsalmon;
        background-color: brown;
      }
    }
  }

  .switch {
    padding: 12px 18px;
    line-height: 24px;
    border-bottom: 1px solid #7e8c8d;
    &.on {
      .icon-check_circle {
        color: #00c850;
      }
    }
    .icon-check_circle {
      display: inline-block;
      vertical-align: top;
      font-size: 24px;
      margin-right: 4px;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
    }
  }
}
</style>