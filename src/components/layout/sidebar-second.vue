<template lang="html">
    <div id="sidebar-second">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'sidebarSecond'
}
</script>

<style lang="sass" scope>

  #sidebar-second
    max-width: 350px
    padding: 20px
    position: relative
    overflow-x: hidden
    box-sizing: border-box
    border-left: 1px solid #bdbdbd
    height: 200px
    overflow-y: scroll

</style>
