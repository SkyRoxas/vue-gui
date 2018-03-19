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
    max-width: 300px
    padding: 20px

</style>
