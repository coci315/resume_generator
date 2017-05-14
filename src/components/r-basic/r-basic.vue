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
      <s-line-editor field="name" :name="basicName" size="large"></s-line-editor>
      <s-line-editor field="intro" :name="basicIntro" size="normal"></s-line-editor>
      <basic-info></basic-info>
    </div>
  </div>
</template>

<script>
  import { saveToLocal, loadFromLocal } from '@/common/js/store.js'
  import sLineEditor from '../base/s-line-editor/s-line-editor'
  import basicInfo from '../basic-info/basic-info'

  const TWO_MB = 2 * 1024 * 1024
  
  export default {
    name: 'r-basic',
    components: {
      sLineEditor,
      basicInfo
    },
    data () {
      return {
        avatarSrc: loadFromLocal('basic', 'avatar', require('./basic_avatar_default.png')),
        basicName: loadFromLocal('basic', 'name', '姓名'),
        basicIntro: loadFromLocal('basic', 'intro', '好好学习，天天向上')
      }
    },
    methods: {
      clickHandle () {
        this.$refs.upload.click()
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
</style>
