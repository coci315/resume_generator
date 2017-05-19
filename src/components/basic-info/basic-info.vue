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
          <span>{{sex}}</span>
          <span>{{age}}</span>
          <span>{{education}}</span>
          <span>{{seniorityDesc}}</span>
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
    <div class="editor-part" v-if="isShowEditor">
      <div class="edit-wrap">
        <label>显示身份</label>
        <selector :options="optsIdentity" :selectedIndex="selectedIdentityIndex" @changeIndex="tempSaveIdentityIndex"></selector>
      </div>
      <div class="edit-wrap">
        <label>性别</label>
        <my-radio :passIndex="selectedSexIndex" @changeIndex="tempSaveSexIndex"></my-radio>
      </div>
      <div class="edit-wrap">
        <label>生日</label>
        <div class="selectors">
          <selector :options="optsYears" :selectedIndex="selectedYearIndex" size="small" selectorClass="selector_year" @changeIndex="tempSaveYearIndex"></selector>
          <selector :options="optsMonths" :selectedIndex="selectedMonthIndex" size="extraSmall" @changeIndex="tempSaveMonthIndex"></selector>
        </div>
      </div>
      <div class="edit-wrap">
        <label>最高学历</label>
        <selector :options="optsEducation" :selectedIndex="selectedEducationIndex" @changeIndex="tempSaveEducationIndex"></selector>
      </div>
      <div class="edit-wrap">
        <label>工作年限</label>
        <selector :options="optsSeniority" :selectedIndex="selectedSeniorityIndex" @changeIndex="tempSaveSeniorityIndex"></selector>
      </div>
      <div class="edit-wrap">
        <label>所在城市</label>
        <city-selector :passLabel="location" @changeCity="tempSaveLocation"></city-selector>
      </div>
      <div class="edit-wrap">
        <label>手机号码</label>
        <input type="text" class="my-input" v-model="tempPhone">
      </div>
      <div class="edit-wrap">
        <label>联系邮箱</label>
        <input type="text" class="my-input" v-model="tempMail">
      </div>
      <div class="edit-wrap btn-wrap">
        <input type="button" class="save-large" value="保存" @click="save">
        <a href="javascript:;" class="cancel-large" @click="cancleSave">取消</a>
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
      value: '应届毕业生'
    },
    {
      label: '1年',
      value: '1年'
    },
    {
      label: '2年',
      value: '2年'
    },
    {
      label: '3年',
      value: '3年'
    },
    {
      label: '4年',
      value: '4年'
    },
    {
      label: '5年',
      value: '5年'
    },
    {
      label: '6年',
      value: '6年'
    },
    {
      label: '7年',
      value: '7年'
    },
    {
      label: '8年',
      value: '8年'
    },
    {
      label: '9年',
      value: '9年'
    },
    {
      label: '10年',
      value: '10年'
    },
    {
      label: '10年以上',
      value: '10年以上'
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
        selectedSeniorityIndex: 4,
        selectedSexIndex: 0,
        selectedIdentityIndex: 0,
        tempLocation: '',
        tempMail: '',
        tempPhone: '',
        tempSeniorityIndex: '',
        tempEducationIndex: '',
        tempYearIndex: '',
        tempMonthIndex: '',
        tempSexIndex: '',
        tempIdentityIndex: ''
      }
    },
    computed: {
      seniority () {
        if (this.selectedSeniorityIndex < 0) return ''
        return this.optsSeniority[this.selectedSeniorityIndex].label
      },
      seniorityDesc () {
        if (this.seniority === '') return ''
        return this.seniority === '应届毕业生' ? this.seniority : this.seniority + '工作经验'
      },
      education () {
        if (this.selectedEducationIndex < 0) return ''
        return this.optsEducation[this.selectedEducationIndex].label
      },
      birthYear () {
        if (this.selectedYearIndex < 0) return ''
        return this.optsYears[this.selectedYearIndex].label
      },
      birthMonth () {
        if (this.selectedMonthIndex < 0) return ''
        return this.optsMonths[this.selectedMonthIndex].label
      },
      age () {
        if (this.birthYear === '' || this.birthMonth === '') return ''
        const date = new Date()
        const year = date.getFullYear() - this.birthYear
        return date.getMonth + 1 < this.birthMonth ? (year - 1) + '岁' : year + '岁'
      },
      sex () {
        if (this.selectedSexIndex < 0) return ''
        return this.selectedSexIndex === 0 ? '男' : '女'
      },
      identity () {
        if (this.selectedIdentityIndex < 0) return ''
        return this.optsIdentity[this.selectedIdentityIndex].label
      }
    },
    methods: {
      cancleSave () {
        this.isShowEditor = false
      },
      tempSaveLocation (val) {
        this.tempLocation = val
      },
      tempSaveSeniorityIndex (index) {
        this.tempSeniorityIndex = index
      },
      tempSaveEducationIndex (index) {
        this.tempEducationIndex = index
      },
      tempSaveYearIndex (index) {
        this.tempYearIndex = index
      },
      tempSaveMonthIndex (index) {
        this.tempMonthIndex = index
      },
      tempSaveSexIndex (index) {
        this.tempSexIndex = index
      },
      tempSaveIdentityIndex (index) {
        this.tempIdentityIndex = index
      },
      showEditor () {
        this.tempLocation = this.location
        this.tempPhone = this.phone
        this.tempMail = this.mail
        this.tempSeniorityIndex = this.selectedSeniorityIndex
        this.tempEducationIndex = this.selectedEducationIndex
        this.tempYearIndex = this.selectedYearIndex
        this.tempMonthIndex = this.selectedMonthIndex
        this.tempSexIndex = this.selectedSexIndex
        this.tempIdentityIndex = this.selectedIdentityIndex
        this.isShowEditor = true
      },
      save () {
        this.location = this.tempLocation
        this.phone = this.tempPhone
        this.mail = this.tempMail
        this.selectedSeniorityIndex = this.tempSeniorityIndex
        this.selectedEducationIndex = this.tempEducationIndex
        this.selectedYearIndex = this.tempYearIndex
        this.selectedMonthIndex = this.tempMonthIndex
        this.selectedSexIndex = this.tempSexIndex
        this.selectedIdentityIndex = this.tempIdentityIndex
        this.isShowEditor = false
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
  .btn-wrap {
    padding-top: 34px;
  }
  .my-input {
    width: 379px;
    height: 46px;
    padding-left: 17px;
    border: 1px solid #f1f3f9;
    border-radius: 3px;
    background-color: #fff;
  }
  .save-large {
    display: inline-block;
    padding: 12px 18px;
    border-radius: 3px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #00b38a;
    cursor: pointer;
  }
  .cancel-large {
    color: #00b38a;
    padding: 12px 18px;
    font-size: 16px;
  }
}
</style>
