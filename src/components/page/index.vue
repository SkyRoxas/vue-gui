<template>
<div class="fullscreen">
  <project></project>
  <div id="page">
    <router-view name="sidebarFirst"></router-view>
    <router-view name="content"></router-view>
    <router-view name="sidebarSecond"></router-view>
  </div>
</div>
</template>

<script>
import project from '@/components/projects/nav'
import sidebarSecond from '@/components/layout/sidebar-second'

export default {
  name: 'pageIndex',
  components: {
    project,
    sidebarSecond
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

.fullscreen{
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#page{
  display: flex;
  align-content: stretch;
  >*{
    flex: 1;
  }
}
</style>
