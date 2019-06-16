import axios from 'axios'

import Constant from '../constants/Constant'

const instance = axios.create({
  baseURL: Constant.API_BASE_URL,
  timeout: Constant.REQUEST_TIME_OUT
})

export default instance
