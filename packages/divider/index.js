import Divider from './src/main'

/* istanbul ignore next */
Divider.install = function(app) {
  app.component(Divider.name, Divider)
}

export default Divider
