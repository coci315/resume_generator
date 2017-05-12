<template>
  <div class="r-basic">
    <div class="r-basic_hd">
      <img src="./basic_bg.png" alt="背景" class="hd_bg">
      <img :src="avatarSrc" alt="头像" class="avatar">
      <input type="file" name="avatar" accept="image/*" title="支持jpg、jpeg、gif、png格式，文件小于2M" class="upload" ref="upload" @change="uploadHandle">
      <img src="./basic_avatar_hover.png" alt="hover" class="avatar_hover" @click="clickHandle">
    </div>
    <div class="r-basic_bd">
      <i class="bd_bg_left"></i>
      <i class="bd_bg_right"></i>
      <div class="name-wrapper" @mouseover="isHover=true" @mouseout="isHover=false" v-show="!isShowEditor">
        <div class="name" :class="{hover:isHover}">{{name}}</div>
        <span class="edit" v-show="isHover" @click="showEditor">
          <i class="icon icon-edit"></i>
          <span>编辑</span>
        </span>
      </div>
      <form class="name-editor" v-show="isShowEditor">
        <input type="text" name="name" autocomplete="off" v-model="editName" class="name-input">
        <input type="button" class="save" value="保存" @click="save">
        <a href="javascript:;" class="cancel" @click="cancleSave">取消</a>
      </form>
    </div>
  </div>
</template>

<script>
  import { saveToLocal, loadFromLocal } from '@/common/js/store.js'

  const TWO_MB = 2 * 1024 * 1024
  
  export default {
    name: 'r-basic',
    data () {
      return {
        avatarSrc: loadFromLocal('basic', 'avatar', require('./basic_avatar_default.png')),
        isHover: false,
        isShowEditor: false,
        name: loadFromLocal('basic', 'name', '姓名'),
        editName: ''
      }
    },
    methods: {
      cancleSave () {
        this.isShowEditor = false
      },

      clickHandle () {
        this.$refs.upload.click()
      },

      save () {
        this.name = this.editName
        saveToLocal('basic', 'name', this.name)
        this.isShowEditor = false
      },

      showEditor () {
        this.editName = this.name
        this.isShowEditor = true
      },

      uploadHandle (event) {
        const file = event.target.files[0]
        if (!/image\/(jpg|jpeg|gif|png)/.test(file.type) || file.size > TWO_MB) {
          this.$toasted.show('仅支持jpg、jpeg、gif、png格式，文件须小于2M')
        } else {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = event => {
            const result = event.target.result
            this.avatarSrc = result
            saveToLocal('basic', 'avatar', result)
            this.$toasted.show('头像修改成功', {theme: 'bubble'})
          }
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
.r-basic_hd {
  position: relative;
  height: 170px;
}

.hd_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 170px;
}

.avatar,
.upload {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 43px;
  left: 50%;
  margin-left: -59px;
  border-radius: 50%;
  &:hover+.avatar_hover {
    display: block;
  }
}

.avatar_hover {
  display: none;
  position: absolute;
  z-index: 3;
  width: 118px;
  height: 118px;
  top: 45px;
  left: 50%;
  margin-left: -59px;
  cursor: pointer;
  &:hover {
    display: block;
  }
}

.upload {
  opacity: 0;
}

.r-basic_bd {
  position: relative;
  min-height: 118px;
  padding: 56px 0 10px;
  background-color: #fafafa;
}

.bd_bg_left,
.bd_bg_right {
  position: absolute;
  width: 12px;
  height: 34px;
  top: 76px;
  background: url('./basic_bd_bg.png') no-repeat;
}

.bd_bg_left {
  left: -1px;
}

.bd_bg_right {
  right: -2px;
  background-position: -40px 0;
}

.name-wrapper {
  position: relative;
  width: 604px;
  margin: 0 auto;
  .name {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 30px;
    color: #333;
    &.hover {
      background-color: #fefef2;
    }
  }
  .edit {
    position: absolute;
    top: 0;
    right: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #00b38a;
    cursor: pointer;
    &>* {
      display: inline-block;
      vertical-align: middle;
    }
  }
}

.name-editor {
  padding-left: 156px;
  height: 40px;
  &>* {
    vertical-align: middle;
  }
  .name-input {
    width: 368px;
    height: 40px;
    padding: 0 10px;
    margin-right: 10px;
    border: 1px solid rgb(238, 239, 241);
    border-radius: 3px;
    text-align: center;
    font-size: 30px;
    line-height: 40px;
  }
  .save {
    display: inline-block;
    padding: 0 11px;
    margin-right: 12px;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #00b38a;
    cursor: pointer;
  }
  .cancel {
    color: #00b38a;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
}
</style>
