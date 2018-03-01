<template lang="html">
  <div>
    <h2>請輸入內容</h2>
    <textarea name="name" rows="8" cols="80" v-model="msg" placeholder="請輸入內容..."></textarea>
    <div>
      <navButton msg="儲存" @click="submit"></navButton>
    </div>
  </div>
</template>

<script>
import navButton from '@/components/nav/button'

export default {
  name: 'formEntries',
  components: {
    navButton
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    submit () {
      alert(123)
    }
  }
}
</script>

<style lang="sass">

textarea
  padding: 20px

</style>
