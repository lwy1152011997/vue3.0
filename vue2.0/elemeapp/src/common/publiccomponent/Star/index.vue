<!-- 封装评星组件 -->
<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, index) in itemClasses" :class="itemClass" :key="index" class="star_item"></span>
  </div>
</template>

<script>
  const LENGTH = 5
  const CLASS_ON = 'on'
  const CLASS_OFF = 'off'
  const CLASS_HALF = 'half'

  export default {
    name: 'Star',
    props: {
      size: {
        // 星星的大小
        type: Number
      },
      score: {
        // 分数
        type: Number
      },
    },
    data() {
      return {

      }
    },
    computed: {
      starType() {
        return 'star-' + this.size
      },
      // star组件主要逻辑
      itemClasses() {
        let res= []
        let score = Math.floor(this.score * 2) / 2
        let hasXiaoShu = score % 1 !== 0 // 是否有小数
        let zhengShu = Math.floor(score)
        for (let i = 0; i < zhengShu; i++) {
          res.push(CLASS_ON)
        }
        if (hasXiaoShu) {
          res.push(CLASS_HALF)
        }
        while (res.length < LENGTH) {
          res.push(CLASS_OFF)
        }
        return res
      }
    }
  }
</script>

<style lang="scss">
@import '../../scss/mixin';

.star {
  font-size: 0;
  .star_item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-48 {
    .star_item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0px;
      }
      &.on {
        @include bgImg('./img/star48_on');
      }
      &.half {
        @include bgImg('./img/star48_half');
      }
      &.off {
        @include bgImg('./img/star48_off');
      }
    }
  }
  &.star-36 {
    .star_item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0px;
      }
      &.on {
        @include bgImg('./img/star36_on');
      }
      &.half {
        @include bgImg('./img/star36_half');
      }
      &.off {
        @include bgImg('./img/star36_off');
      }
    }
  }
  &.star-24 {
    .star_item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0px;
      }
      &.on {
        @include bgImg('./img/star24_on');
      }
      &.half {
        @include bgImg('./img/star24_half');
      }
      &.off {
        @include bgImg('./img/star24_off');
      }
    }
  }
}
</style>