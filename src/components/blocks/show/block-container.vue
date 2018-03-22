<template lang="html">
  <div class="block-container" v-bind:class="{active: isActive}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    blockId: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    isActive () {
      let selectBlock = this.$store.getters['project/getSelectBlock']
      if (!selectBlock) {
        return false
      }
      if (selectBlock.id === this.blockId) {
        return true
      }
      return false
    }
  },
  methods: {
    // test () {
    //   console.log(this)
    // }
  }
}
</script>

<style lang="sass">
  .block-container
    border: 3px dashed #bdbdbd
    border-radius: 2px
    color: #bdbdbd
    cursor: pointer
    &:hover
      border: 4px dashed #474747
      color: #474747
  .block-container.active
    border: 4px dashed #474747
    color: #474747

  h3
    margin-top: 0
</style>
