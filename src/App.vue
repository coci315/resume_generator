<template>
  <div id="app">
    <div class="main clearfix">
      <div class="resume-container">
        <resume></resume>
      </div>
      <div class="resume_nav-container">
        456
      </div>
    </div>
  </div>
</template>

<script>
import resume from './components/resume/resume'

export default {
  name: 'app',
  components: {
    resume
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.main {
  width: 1024px;
  margin: 100px auto;
}

.resume-container {
  float: left;
  width: 702px;
}

.resume_nav-container {
  float: right;
  width: 282px;
}
</style>
