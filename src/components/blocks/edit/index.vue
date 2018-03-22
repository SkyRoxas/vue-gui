<template lang="html">
  <sidebarSecond>
    <div class="block-add fullHight">
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
    </div>
    <transition name="slide">
      <div v-if="selectBlock" class="block-eidt fullHight">
        <editYoutube v-if="selectBlock.type ==='youtube'"></editYoutube>
        <editText v-if="selectBlock.type === 'text'"></editText>
        <div style="margin-top:100px" @click="leaveEditBlock">離開</div>
      </div>
    </transition>

  </sidebarSecond>
</template>

<script>

import Icons from '@/components/icons/index'
import sidebarSecond from '@/components/layout/sidebar-second'
import BlockFactory from '@/models/block'
import editYoutube from './youtube'
import editText from './text'

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
    editYoutube,
    editText
  },
  computed: {
    blocks () {
      return this.$store.state.project.blocks
    },
    projectId () {
      return this.$store.state.project.id
    },
    selectBlock () {
      return this.$store.getters['project/getSelectBlock']
    }
  },
  methods: {
    createBlock (type) {
      let block = BlockFactory.create(type)
      this.$store.dispatch('project/add', block)
    },
    leaveEditBlock () {
      let projectId = this.projectId
      this.$router.push({ name: 'project/edit', params: { project_id: projectId } })
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

  .fullHight
    height: 100%

  .block-eidt
    width: 100%
    position: absolute
    background: #fff
    box-sizing: border-box
    padding: 10px
    top: 0
    left: 0

  .slide-enter-active,.slide-leave-active
    transition:  .5s

  .slide-enter,.slide-leave-to
    left: 100%

</style>
