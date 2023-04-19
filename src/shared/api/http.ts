import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api.nasa.gov/'
})

http.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      ...config.params,
      api_key: 'eLHMBOygUG3JVdnGzxKwIf3jTgb12yO3p6P0GEVn'
    }
  }
})