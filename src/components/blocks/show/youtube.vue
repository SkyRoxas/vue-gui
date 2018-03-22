<template lang="html">
  <div>
      <blockDefault :blockId="block.id">
        <div class="edit" v-if="!block.src">
          <h3>Youtube模組</h3>
          <div>請點擊此區塊進行模組設定</div>
        </div>
        <div class="preview" v-if="block.src">
          <div class="iframe-16-9">
            <iframe width="560" :src="block.src" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </blockDefault>
  </div>
</template>

<script>
import blockDefault from './block-container'

export default {
  components: {
    blockDefault
  },
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
  .preview
    padding: 0 280px
    box-sizing: border-box
  .edit
    padding: 40px
  .iframe-16-9
    position: relative
    height: 0
    padding-top: (9/16) * 100%
    iframe
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
</style>
