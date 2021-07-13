const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i = 0; i < 1e7; i++) {}

  res.end('Hi from Node!')
}).listen(8000, () => {
  console.log(`Server started. Pid: ${pid}`)
})
