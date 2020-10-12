const path = require('path').posix

const utilDefaultOptions = {}

class Util {
  gitBaseUlr = 'https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src'

  constructor({ gitBaseUlr, basePath } = JSON.parse(JSON.stringify(utilDefaultOptions))) {
    gitBaseUlr && (this.gitBaseUlr = gitBaseUlr)
    basePath && (this.basePath = basePath)
  }

  genHashLink(name) {
    return `#${this.encodeGitFormatUrl(name)}`
  }

  encodeGitFormatUrl(path) {
    return path.replace(/ /g, '%20')
  }

  getGitUrl(relativePath) {
    return this.gitBaseUlr + this.encodeGitFormatUrl(relativePath)
  }

  getRelativePath(fullPath, basePath) {
    return fullPath.replace(
      (basePath || this.basePath || '').replace(/\\/g, '/'),
      ''
    )
  }
}

module.exports = function(options) {
  return new Util(options)
}