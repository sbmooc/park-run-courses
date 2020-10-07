<template>
<div id='wrapper app'>
  <div id='content'>
    <div class='container-fluid'>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Park Run Courses Uk</h1>
          </div>
  <div class='row'>
    <Map class='col-xl-8 col-lg-7'/>
    <Detail class='col-xl-4 col-lg-5'/>
  </div>
  </div>
  </div>
</div>
</template>

<script>
import Map from './components/Map.vue'
import Detail from './components/Detail.vue'

export default {
  name: 'App',
  components: {
    Map,
    Detail
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
