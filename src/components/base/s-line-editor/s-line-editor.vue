<template>
  <div class="s-line-editor" :class="size">
    <div class="name-wrapper" @mouseover="isHover=true" @mouseout="isHover=false" v-show="!isShowEditor">
      <div class="name" :class="{hover:isHover}">{{name}}</div>
      <span class="edit" v-show="isHover" @click="showEditor">
        <i class="icon-edit"></i>
        <span>编辑</span>
      </span>
    </div>
    <form class="name-editor" v-show="isShowEditor">
      <input type="text" :name="field" autocomplete="off" v-model="editName" class="name-input">
      <input type="button" class="save" value="保存" @click="save">
      <a href="javascript:;" class="cancel" @click="cancleSave">取消</a>
    </form>
  </div>
</template>

<script>
  import { saveToLocal } from '@/common/js/store.js'

  export default {
    name: 's-line-editor',
    props: {
      field: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      size: {
        // size可选项'large','normal'
        type: String,
        default: 'normal'
      }
    },
    data () {
      return {
        isHover: false,
        isShowEditor: false,
        editName: ''
      }
    },
    methods: {
      cancleSave () {
        this.isShowEditor = false
      },

      save () {
        this.name = this.editName
        saveToLocal('basic', this.field, this.name)
        this.isShowEditor = false
      },

      showEditor () {
        this.editName = this.name
        this.isShowEditor = true
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.s-line-editor {
  margin-bottom: 8px;
}

.name-wrapper {
  position: relative;
  width: 604px;
  margin: 0 auto;
  .name {
    width: 100%;
    text-align: center;
    color: #333;
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
}

.name-editor {
  padding-left: 156px;
  &>* {
    vertical-align: middle;
  }
  .name-input {
    width: 368px;
    padding: 0 10px;
    margin-right: 10px;
    border: 1px solid rgb(238, 239, 241);
    border-radius: 3px;
    text-align: center;
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

.normal {
  .name,
  .edit,
  .name-editor,
  .name-input {
    height: 34px;
    line-height: 34px;
  }
  .name,
  .name-input {
    font-size: 16px;
  }
}

.large {
  .name,
  .edit,
  .name-editor,
  .name-input {
    height: 40px;
    line-height: 40px;
  }
  .name,
  .name-input {
    font-size: 30px;
  }
}
</style>
