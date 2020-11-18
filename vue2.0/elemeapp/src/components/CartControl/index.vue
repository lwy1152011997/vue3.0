<!-- 添加到购物车-+组件 -->
<template>
  <div class="cartControl">
    <transition name="move">
      <div class="decrease" v-show="food.count>0" @click.prevent.stop="decrease">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div v-show="food.count>0" class="count">{{food.count}}</div>
    <div class="add icon-add_circle" @click.prevent.stop="addCart"></div>
  </div>
</template>

<script>
  export default {
    name: 'CartControl',
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart() {
        if (!this.food.count) {
          // this.food.count = 1
          // 在vue中我们在给一个观测的对应添加一个它不存在的对象的时候,我们不能直接去赋值,直接赋值不能产生响应式的数据变化
          // 我们需要对某个字段的新增或者删除的时候我们使用下面的AP进行, 那个对象, 新增某个属性, 值是什么
          this.$set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      },
      decrease() {
        if (this.food.count > 0) {
          this.food.count --
        }
      }
    },
    watch: {

    }
  }
</script>

<style lang="scss">
.cartControl {
  font-size: 0px;
  .decrease {
    display: inline-block;
    padding: 6px;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    &.move-transition {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .inner {
      display: inline-block;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
      transition: all 0.6s linear;
      transform: rotate(0);
      &.move-enter-active, &.move-leave-active {
        transition: all 0.6s linear;
      }
      &.move-enter, &.move-leave-active {
        opacity: 0;
        transform: translate3d(24px, 0, 0);
      }
      .inner {
        transform: rotate(180deg);
      }
    }
  }
  .count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
  }
  .add {
    display: inline-block;
    padding: 6px;
    font-size: 24px;
    line-height: 24px;
    color: cadetblue;
  }
}
</style>