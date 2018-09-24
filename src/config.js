const host = 'http://localhost:3000'
const config = {
  api:
    {
      create: host + '/employer/',
      read: host + '/employers/',
      destroy: host + '/employer/',
      login: host + '/login/'
    }
}
export default config