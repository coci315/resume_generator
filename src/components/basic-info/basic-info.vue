<template>
  <div class="basic-info">
    <div class="display-part" v-show="!isShowEditor" :class="{hover: isHover}" @mouseover="isHover=true" @mouseout="isHover=false">
      <span class="edit" v-show="isHover" @click="showEditor">
        <i class="icon-edit"></i>
        <span>编辑</span>
      </span>
      <div class="info-wrapper">
        <div class="info">
          <i class="icon icon-work_history"></i>
          <span>{{identity}}</span>
        </div>
        <div class="info">
          <i class="icon icon-mine"></i>
          <span>{{sex | formatSex}}</span>
          <span>{{education}}</span>
          <span>{{seniority}}年工作经验</span>
          <span>{{location}}</span>
        </div>
        <div class="info info2">
          <i class="icon icon-phone"></i>
          <span class="phone">{{phone}}</span>
          <i class="icon icon-mail"></i>
          <span>{{mail}}</span>
        </div>
      </div>
    </div>
    <div class="editor-part" v-show="isShowEditor">
      <label>显示身份</label>
      <selector></selector>
    </div>
  </div>
</template>

<script>
  import selector from '../base/selector/selector'

  export default {
    name: 'basic-info',
    components: {
      selector
    },
    data () {
      return {
        education: '本科',
        identity: 'XX工程师 · XXXX公司',
        isHover: false,
        isShowEditor: false,
        location: '杭州',
        mail: 'mail@mail.com',
        phone: '13X05712017',
        seniority: 6,
        sex: 'male'
      }
    },
    methods: {
      showEditor () {
        this.isShowEditor = true
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
.display-part {
  position: relative;
  width: 604px;
  margin: 0 auto;
  padding: 5px 0 7px;
  text-align: center;
  &.hover {
    background-color: #fefef2;
  }
}

.edit {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 16px;
  color: #00b38a;
  cursor: pointer;
  &>* {
    display: inline-block;
    vertical-align: middle;
  }
}

.info {
  line-height: 1.4;
  color: #666;
  font-size: 0;
  &>* {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
  }
  .icon {
    font-size: 18px;
    color: #ccc;
  }
  i,
  span {
    margin-right: 10px;
  }
}

.info2 {
  i {
    margin-right: 4px;
  }
  .phone {
    margin-right: 16px;
  }
}

.info+.info {
  margin-top: 8px;
}

.editor-part {
  padding: 40px 0 50px 83px;
  background-color: #fefef2;
  label {
    display: block;
    color: #afafa9;
    padding-bottom: 8px;
    padding-left: 3px;
  }
}
</style>
