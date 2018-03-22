<template lang="html">
  <div>
    <div>文字</div>
    <textarea name="name" rows="8" cols="80" v-model="content" @input="update"></textarea>
  </div>
</template>

<script>

export default {
  data () {
    return {
      content: ''
    }
  },
  computed: {
    selectBlock () {
      return this.$store.getters['project/getSelectBlock']
    }
  },
  methods: {
    update () {
      const block = {
        content: this.content
      }
      this.$store.dispatch('project/update', block)
    }
  }
}
</script>

<style lang="sass">
  textarea
    width: 100%
    box-sizing: border-box
    padding: 10px
</style>
