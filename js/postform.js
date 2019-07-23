
const https = require('https')

var body = {
  'email': 'prakashsellathurai@gmail.com',
  'location': 'test',
  'message': 'jknm, lkm,.klm,',
  'name': 'prakash sellathurai',
  'phone': '9843158807'
}

const data = JSON.stringify(body)

const options = {
  hostname: 'https://script.google.com',
  port:80,
  path:'/macros/s/AKfycbzQ5DEC1PUJ2lyN1e-iYlH6aZ2AA4J7RAy2c3UlKLTVfA4vp-Ry/exec',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.write(data)
req.end()
