<template lang="html">
  <div id="preview">
      <div class="wrap">
        <div v-for="(item, index) in blocks" :key="index">
          <div @click="select(item.id)">
            <youtube-block class="block-item" v-if="item.type === 'youtube'" :block="item"></youtube-block>
            <text-block  class="block-item" v-if="item.type === 'text'" :block="item"></text-block>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import youtubeBlock from '@/components/blocks/show/youtube'
import textBlock from '@/components/blocks/show/text'

export default {
  components: {
    youtubeBlock,
    textBlock
  },
  computed: {
    blocks () {
      return this.$store.state.project.blocks
    }
  },
  methods: {
    select (id) {
      let blockId = id
      this.$router.push({ name: 'block/edit', params: { block_id: blockId } })
    }
  }
}
</script>

<style lang="sass">
  #preview
    padding: 20px
    overflow-y: scroll
    > .wrap
      max-width: 1200px
      margin: 0 auto
  .block-item
    margin-bottom: 20px
</style>
