import Youtube from './youtube'

class BlockFactory {
  static get list () {
    return {youtube: Youtube}
  }

  static create (type) {
    const Module = this.list[type]
    const instance = new Module()
    return instance
  }
}

export default BlockFactory
