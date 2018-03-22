<template lang="html">
  <div>
    <h3>Youtube 模組</h3>
    <div>
      <label>路徑:</label>
      <input type="text" name="" v-model="url" @input="updateBlock">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: ''
      // https://www.youtube.com/watch?v=lYejLEYO4Zw
    }
  },
  computed: {
    src () {
      if (this.url.match(/\?v=(.+)/)) {
        const youtubeId = this.url.match(/\?v=(.+)/)[1]
        return `https://www.youtube.com/embed/${youtubeId}`
      }
      return ''
    },
    block () {
      return this.$store.getters['project/getSelectBlock']
    }
  },
  methods: {
    updateBlock () {
      const block = {
        url: this.url,
        src: this.src
      }
      this.$store.dispatch('project/update', block)
    }
  }
}
</script>

<style lang="sass">
  input
    // width: 100%
</style>
