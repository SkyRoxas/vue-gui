import shortid from 'shortid'

class Project {
  constructor () {
    this.id = shortid.generate()
  }
}

export default Project
