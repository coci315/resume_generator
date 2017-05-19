<template>
  <div class="my-radio">
    <span class="radio-wrap" :class="{active:selectedIndex===0}" @click="changeIndex(0)">
      <i class="icon-male"></i>
      <span>男</span>
    </span>
    <span class="radio-wrap" :class="{active:selectedIndex===1}" @click="changeIndex(1)">
      <i class="icon-female"></i>
      <span>女</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'my-radio',
    props: {
      passIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        selectedIndex: ''
      }
    },
    created () {
      this.selectedIndex = this.passIndex
    },
    methods: {
      changeIndex (index) {
        this.selectedIndex = index
        this.$emit('changeIndex', index)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
.my-radio {
  font-size: 0;
  .radio-wrap {
    display: inline-block;
    padding-left: 27px;
    margin-right: 12px;
    width: 63px;
    height: 46px;
    line-height: 46px;
    border: 1px solid #f1f3e9;
    border-radius: 3px;
    font-size: 0;
    color: #b5b5b5;
    background-color: #fff;
    cursor: pointer;
    &.active {
      color: #333;
      font-weight: bold;
    }
    &>* {
      display: inline-block;
      vertical-align: middle;
    }
    i {
      margin-right: 10px;
      font-size: 18px;
    }
    span {
      font-size: 14px;
    }
  }
}
</style>
