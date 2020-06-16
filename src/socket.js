import io from 'socket.io-client'

const socket = io('http://localhost:1337')
export const  now = (info) => {
    socket.emit('now',{msg:'正在输入..',...info,stateAdmin:'admin'})
}

export const line = (info) => {
    socket.emit('line',{msg:'在线',...info,stateAdmin:'admin'})
}
socket.on('hehe',data => {
    console.log(data);
})