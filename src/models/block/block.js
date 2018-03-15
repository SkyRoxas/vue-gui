import shortid from 'shortid'

class Block {
  constructor () {
    this.id = shortid.generate()
  }
}

export default Block
