import loadEnvVars from './config/dotenv/index.js'
loadEnvVars()

export default {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'custom-properties': { preserve: false },
      },
      autoprefixer: {
        remove: false,
        grid: 'autoplace',
        flexbox: 'no-2009',
      },
    },
  },
}
