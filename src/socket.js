import io from 'socket.io-client'
import store from './store/index'
const socket = io('http://localhost:1337')
export const  now = (info) => {
    socket.emit('now',{msg:'正在输入..',...info,stateAdmin:'admin'})
}

export const line = (info) => {
    socket.emit('line',{msg:'在线',...info,stateAdmin:'admin'})
}

export const emitContent = (value) => {
    socket.emit('UseremitContent',{value,id})
} 


socket.on('webMsg',data => {
    store.dispatch('chat/ADD_MSG',data)
})
