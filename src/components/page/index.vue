<template>

<div>
  <img src="@/assets/logo.png">
  <h1>Welcome to Your Vue.js App</h1>
  <router-view></router-view>
</div>

</template>

<script>
import layoutSidebar from '@/components/layout/sidebar'
import formEntries from '@/components/common/form-entries'

export default {
  name: 'pageIndex',
  components: {
    layoutSidebar,
    formEntries
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
