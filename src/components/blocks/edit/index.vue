<template lang="html">
  <div class="title">
    <h2>模組列表</h2>
    <div class="block-box">
      <ul>
        <li class="block-item" v-for="(item, index) in blocks" :key="index">
          <a @click.prevent="createBlock(item.type)" class="block-btn">
            <Icons :name="item.icon"></Icons>
            <div>{{item.text}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

import Icons from '@/components/icons/index'
import BlockFactory from '@/models/block'

export default {
  data () {
    return {
      blocks: [
        {type: 'youtube', text: 'Youtube', icon: 'Video', disable: true},
        {type: 'text', text: '文字', icon: 'Font', disable: false},
        {type: 'youtube', text: 'Youtube', icon: 'Video', disable: true},
        {type: 'text', text: '文字', icon: 'Font', disable: false}
      ]
    }
  },
  components: {
    Icons
  },
  methods: {
    createBlock (type) {
      let block = BlockFactory.create(type)
      this.$router.push(`edit/block/${block.id}`)
    }
  }
}
</script>

<style lang="sass">

  $column: 2
  $col: 2
  $gutter: 5px

  .block-box
    position: relative
    overflow-x: hidden
    border: 1px solid
    padding: 10px
    max-width: 300px

  ul
    display: flex
    flex-wrap: wrap
    margin: 0 $gutter * -1
    padding: 0

  li.block-item
    list-style: none
    display: block
    box-sizing: border-box
    width: 100% / $column
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
