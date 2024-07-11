import { io } from 'socket.io-client'
import config from './configs/app.base'

// eslint-disable-next-line no-undef
const URL = process.env.NODE_ENV === 'production' ? undefined : config.baseApiUrl
console.log('URL', URL)

export const socket = io(URL)
