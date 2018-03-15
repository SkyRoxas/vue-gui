<template lang="html">
  <div>
    <navButton msg="建立專案" @click="createProject"></navButton>
  </div>
</template>

<script>
import navButton from '@/components/nav/button'
import Project from '@/models/project'

export default {
  components: {
    navButton
  },
  methods: {
    createProject () {
      let project = new Project()
      this.$router.push(`/project/${project.id}/edit`)
      this.$store.dispatch('project/add')
    }
  }
}
</script>

<style lang="css">
</style>
