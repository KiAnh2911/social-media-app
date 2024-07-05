import environment from './enviroment.dev'

let config = {
  // All config value will be here
}

config = { ...config, ...environment }

export default config
