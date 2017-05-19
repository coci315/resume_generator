<template>
  <div class="selector" :class="selectorClass">
    <div class="wrapper" :class="size">
      <div class="select" @click="toggleShowOptions">
        <input type="button" v-model="label">
        <i class="icon_triangle" :class="{ active: isShowOptions }"></i>
      </div>
      <transition name="drop">
        <ul class="options" v-show="isShowOptions">
          <li v-for="(item,index) in options" @click.stop="changeValue(index)">{{item.label}}</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'selector',
    props: {
      eventName: {
        type: String,
        default: 'changeIndex'
      },
      options: {
        type: Array,
        default () {
          return [{label: '选项一', value: 1}]
        }
      },
      selectorClass: {
        type: [String, Array, Object]
      },
      selectedIndex: {
        type: Number,
        default: 0
      },
      size: {
        // 可选项为normal,small,extraSmall
        type: String,
        default: 'normal'
      }
    },
    data () {
      return {
        isShowOptions: false,
        tempIndex: ''
      }
    },
    computed: {
      label () {
        if (this.tempIndex < 0) return ''
        return this.options[this.tempIndex].label
      }
    },
    created () {
      this.tempIndex = this.selectedIndex
    },
    methods: {
      changeValue (index) {
        this.tempIndex = index
        this.$emit(this.eventName, index)
        this.isShowOptions = false
      },
      toggleShowOptions () {
        this.isShowOptions = !this.isShowOptions
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.drop-enter-active,
.drop-leave-active {
  transition: all .3s;
}

.drop-enter,
.drop-leave-active {
  height: 0;
  transform: rotate3d(1, 0, 0, 90deg);
  opacity: 0;
}

.selector {
  display: inline-block;
  vertical-align: middle;
}

.wrapper {
  position: relative;
  height: 46px;
  border: 1px solid #f1f3f9;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  &.normal {
    width: 396px;
  }
  &.small {
    width: 188px;
  }
  &.extraSmall {
    width: 90px;
  }
  input {
    width: 80%;
    height: 44px;
    padding-left: 17px;
    border: 0;
    outline: none;
    text-align: left;
    background-color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
  }
  .icon_triangle {
    position: absolute;
    right: 18px;
    top: 20px;
    border: 6px solid #fff;
    border-color: #d3d3d3 transparent transparent;
    display: block;
    font-size: 0;
    height: 0;
    width: 0;
    transition: transform .3s;
    &.active {
      transform: translateY(-50%) rotate(180deg);
      transform-origin: center center;
    }
  }
  .options {
    position: absolute;
    top: 47px;
    left: -1px;
    z-index: 2;
    width: 100%;
    max-height: 182px;
    overflow: auto;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: 2px 2px 4px #efefe4;
    border-radius: 3px;
    li {
      height: 36px;
      line-height: 36px;
      padding-left: 17px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        background-color: #f4f4f4;
      }
    }
  }
}
</style>
