export default function ({$axios}) {
  $axios.setHeader('AUTHORISATION', 'ALEX')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
