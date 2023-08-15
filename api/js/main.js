import Outline from '@yaohaixiao/outline.js/src/outline'

const defaults = Outline.DEFAULTS
let outline

defaults.selector = 'h2,h3'
defaults.title = false
defaults.showCode = false
defaults.position = 'sticky'
defaults.parentElement = '#aside'
defaults.scrollElement = '#main'
defaults.articleElement = '#article'
defaults.homepage = './index.html'
defaults.git = 'https://github.com/yaohaixiao/outline.js'
defaults.tags = 'https://github.com/yaohaixiao/outline.js/tags'
defaults.issues = 'https://github.com/yaohaixiao/outline.js/issues'
defaults.print = {
  element: '#article',
  title: 'Type.js'
}

outline = new Outline(Outline.DEFAULTS)
