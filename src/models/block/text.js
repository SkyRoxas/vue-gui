import Block from './block'

class Text extends Block {
  constructor (obj) {
    super(obj)
    this.type = 'text'
    this.content = ''
  }
}

export default Text
