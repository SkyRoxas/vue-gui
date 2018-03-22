<template lang="html">
  <div>
    <blockContainer :blockId="block.id">
      <div class="edit" v-if="!block.content">
        <h3>文字模組</h3>
        <div>請點擊此區塊進行模組設定</div>
      </div>
      <div class="preview" v-if="block.content">
        {{block.content}}
      </div>
    </blockContainer>
  </div>
</template>

<script>

import blockContainer from './block-container'

export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  components: {
    blockContainer
  },
  computed: {
    getSelectBlock () {
      return this.$store.getters['project/getSelectBlock']
    }
  },
  methods: {
    emitBlockToBlockContainer () {
      console.log('emit')
      this.$emit('isActive', '111')
    }
  }
}
</script>

<style lang="sass" scoped>
  .edit
    padding: 40px
  .preview
    padding: 40px
</style>
