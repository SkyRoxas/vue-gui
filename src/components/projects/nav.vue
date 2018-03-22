<template lang="html">
  <div class="editbar">
    <navButton msg="建立專案" @click="createProject"></navButton>
    <navButton msg="儲存專案" @click="createProject"></navButton>
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
      this.$store.dispatch('project/create', project)
      this.$router.push(`/project/${project.id}/edit`)
    }
  }
}
</script>

<style lang="sass" scoped>
  .editbar
    padding: 10px
    background: #437adf
</style>
