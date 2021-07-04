import ax from 'axios'

// Axios to use on project
const axios = ax.create({ baseURL: process.env.VUE_APP_API_BASE_URL + 'api' })

export default axios
