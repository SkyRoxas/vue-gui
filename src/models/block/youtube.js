import Block from './block'

class Youtube extends Block {
  constructor (block) {
    super(block)
    this.type = 'youtube'
    this.url = ''
    this.src = ''
  }
}

export default Youtube
