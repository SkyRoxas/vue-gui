<template lang="html">
  <sidebarSecond>
    <div class="title">
      <h2>模組列表</h2>
      <div class="block-box">
        <ul>
          <li class="block-item" v-for="(item, index) in blockList" :key="index">
            <a @click.prevent="createBlock(item.type)" class="block-btn">
              <Icons :name="item.icon"></Icons>
              <div>{{item.text}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <editYoutube></editYoutube>
  </sidebarSecond>
</template>

<script>

import Icons from '@/components/icons/index'
import sidebarSecond from '@/components/layout/sidebar-second'
import BlockFactory from '@/models/block'
import editYoutube from './youtube'

export default {
  data () {
    return {
      blockList: [
        {type: 'youtube', text: 'Youtube', icon: 'Video', disable: true},
        {type: 'text', text: '文字', icon: 'Font', disable: false},
        {type: 'youtube', text: 'Youtube', icon: 'Video', disable: true},
        {type: 'text', text: '文字', icon: 'Font', disable: false}
      ]
    }
  },
  components: {
    Icons,
    sidebarSecond,
    editYoutube
  },
  computed: {
    blocks () {
      return this.$store.state.project.blocks
    },
    selectBlockIndex () {
      return this.$store.getters['editor/selectBlockIndex']
    },
    selectBlock () {
      return this.$store.state.project.blocks[this.selectBlockIndex]
    }
  },
  methods: {
    createBlock (type) {
      let block = BlockFactory.create(type)
      this.$store.dispatch('project/add', block)
      // this.$router.push(`edit/block/${block.id}`)
    }
  }
}
</script>

<style lang="sass">

  $col: 2
  $gutter: 5px

  .block-box
    position: relative
    overflow-x: hidden

  ul
    display: flex
    flex-wrap: wrap
    margin: 0 $gutter * -1
    padding: 0

  li.block-item
    list-style: none
    display: block
    box-sizing: border-box
    width: 100% / $col
    padding-left: $gutter
    padding-right: $gutter
    &:not(:nth-last-child(-n + #{$col}))
      margin-bottom:  10px

  a.block-btn
    display: block
    border: 1px solid
    padding: 20px 0
    border-radius: 4px

</style>
