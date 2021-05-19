module.exports = {
    "devServer": {
        "disableHostCheck": true
    },
  "pwa": {
    "name": "teste"
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
      ? '/example/'
      : '/'
}