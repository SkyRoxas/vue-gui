import Youtube from './youtube'
import Text from './text'

class BlockFactory {
  static get list () {
    return {
      youtube: Youtube,
      text: Text
    }
  }

  static create (type) {
    const Module = this.list[type]
    const instance = new Module()
    return instance
  }
}

export default BlockFactory
