import shortid from 'shortid'

class Project {
  constructor () {
    this.id = shortid.generate()
    this.blocks = []
  }
}

export default Project
