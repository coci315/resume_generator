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
      <div class="edit-wrap">
        <label>显示身份</label>
        <selector :options="optsIdentity"></selector>
      </div>
      <div class="edit-wrap">
        <label>性别</label>
        <my-radio></my-radio>
      </div>
      <div class="edit-wrap">
        <label>生日</label>
        <div class="selectors">
          <selector :options="optsYears" :selectedIndex="selectedYearIndex" size="small" selectorClass="selector_year"></selector>
          <selector :options="optsMonths" :selectedIndex="selectedMonthIndex" size="extraSmall"></selector>
        </div>
      </div>
      <div class="edit-wrap">
        <label>最高学历</label>
        <selector :options="optsEducation" :selectedIndex="selectedEducationIndex"></selector>
      </div>
      <div class="edit-wrap">
        <label>工作年限</label>
        <selector :options="optsSeniority" :selectedIndex="selectedSeniorityIndex"></selector>
      </div>
      <div class="edit-wrap">
        <label>所在城市</label>
        <city-selector :passValue="city"></city-selector>
      </div>
    </div>
  </div>
</template>

<script>
  import selector from '../base/selector/selector'
  import myRadio from '../base/my-radio/my-radio'
  import citySelector from '../base/city-selector/city-selector'

  function generatorOptsYears (start, end) {
    const optsYears = []
    for (let i = end; i >= start; i--) {
      optsYears.push({label: i, value: i})
    }
    return optsYears
  }

  function paddingLeft (num) {
    return num < 10 ? '0' + num : '' + num
  }

  function generatorOptsMonths (start = 1, end = 12) {
    const optsMonths = []
    for (let i = start; i <= end; i++) {
      optsMonths.push({label: paddingLeft(i), value: i})
    }
    return optsMonths
  }

  const optsEducation = [
    {
      label: '大专',
      value: '大专'
    },
    {
      label: '本科',
      value: '本科'
    },
    {
      label: '硕士',
      value: '硕士'
    },
    {
      label: '博士',
      value: '博士'
    },
    {
      label: '其他',
      value: '其他'
    }
  ]

  const optsSeniority = [
    {
      label: '应届毕业生',
      value: 0
    },
    {
      label: '1年',
      value: 1
    },
    {
      label: '2年',
      value: 2
    },
    {
      label: '3年',
      value: 3
    },
    {
      label: '4年',
      value: 4
    },
    {
      label: '5年',
      value: 5
    },
    {
      label: '6年',
      value: 6
    },
    {
      label: '7年',
      value: 7
    },
    {
      label: '8年',
      value: 8
    },
    {
      label: '9年',
      value: 9
    },
    {
      label: '10年',
      value: 10
    },
    {
      label: '10年以上',
      value: 100
    }
  ]

  export default {
    name: 'basic-info',
    components: {
      selector,
      myRadio,
      citySelector
    },
    data () {
      return {
        education: '本科',
        identity: 'XX工程师 · XXXX公司',
        isHover: false,
        isShowEditor: false,
        location: '杭州',
        mail: 'mail@mail.com',
        optsIdentity: [{label: 'XX工程师 · XXXX公司', value: 'XX工程师 · XXXX公司'}, {label: 'XX工程 · XXXX大学', value: 'XX工程 · XXXX大学'}],
        optsYears: generatorOptsYears(1973, 2001),
        optsMonths: generatorOptsMonths(),
        optsEducation,
        optsSeniority,
        phone: '13X05712017',
        selectedYearIndex: -1,
        selectedMonthIndex: -1,
        selectedEducationIndex: 1,
        selectedSeniorityIndex: 6,
        city: 'tianjin',
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
.selector_year {
  margin-right: 10px;
}

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
  .edit-wrap {
    margin-bottom: 9px;
  }
}
</style>
