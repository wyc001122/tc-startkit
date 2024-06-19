import axios from 'axios'

const api = axios.create({
  timeout: 1000 * 60,
  responseType: 'json',
})

api.interceptors.request.use(
  (config) => {
    return config
  },
)

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
