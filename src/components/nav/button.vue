<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  render (creatElement) {
    return creatElement('button', {
      on: {
        click: () => this.$emit('click')
      }
    }, this.msg)
  }
}
</script>

<style lang="sass" scoped>

  button
    background: linear-gradient(to bottom, #424242, #292929)
    color: #fff
    padding: 10px 20px
    border: 0
    border-radius: 10px
    box-shadow: 1px 1px 2px rgba(0,0,0,0.9) ,0 -1px 0 rgba(0,0,0,1)

</style>
