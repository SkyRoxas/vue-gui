<template lang="html">
  <div class="block-default">
    <h3>{{name}}</h3>
    <div>請點擊此區塊進行模組設定</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
  .block-default
    padding: 40px 20px
    border: 4px dashed #bdbdbd
    border-radius: 2px
    color: #bdbdbd
    cursor: pointer
    &:hover
      border: 4px dashed #474747
      color: #474747
  h3
    margin-top: 0
</style>
