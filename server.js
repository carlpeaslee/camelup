const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()


let state = {

}

state.colors = [
  "red",
  "green",
  "blue",
  "white",
  "yellow"
]

state.unpickedColors = [
  "red",
  "green",
  "blue",
  "white",
  "yellow"
]


state.colors.forEach(color => state[color] = undefined)

state.pick = undefined

const getRandom = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const roll = () => {

    let oldUnpicked = state.unpickedColors.slice()

    state.pick = oldUnpicked.splice(getRandom(0, oldUnpicked.length - 1),1)[0]


    state.unpickedColors = oldUnpicked

    state[state.pick] = getRandom(1,3)

}


// socket.io server
io.on('connection', socket => {

  io.emit('state', state)

  socket.join('camel')

  socket.on('roll', (data) => {

    roll()

    io.in('camel').emit('state', state)
  })
})

nextApp.prepare().then(() => {

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
