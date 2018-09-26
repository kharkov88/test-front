const host = process.env.NODE_ENV === 'production'
  ? process.env.API_URL_PRODUCTION
  : process.env.API_URL_LOCAL;

const config = {
  employees: "employees",
  departments: "departments",
  api:
    {
      create: host + '/employee/',
      read: {
        employees: host + '/employees/',
        departments: host + '/departments/'
      },
      destroy: host + '/employee/',
      login: host + '/login/'
    }
};
export default config