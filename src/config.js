const host = 'https://agile-falls-24527.herokuapp.com'

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