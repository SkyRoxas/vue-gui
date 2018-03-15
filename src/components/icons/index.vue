<script>
import Video from './video'
import Font from './font'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    Video,
    Font
  },
  render (createElement) {
    return createElement(this.name)
  }
}
</script>

<style lang="css">
</style>
