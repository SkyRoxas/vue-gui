<template lang="html">
  <div>
    <label>路徑</label>
    <input type="text" name="" v-model="block.href" @input="updateBlock">
  </div>
</template>

<script>
export default {
  data () {
    return {
      block: {
        url: ''
      }
    }
  },
  computed: {},
  methods: {
    updateBlock () {
      const block = this.block
      this.$store.dispatch('project/update', block)
    }
  }
}
</script>

<style lang="css">
</style>
