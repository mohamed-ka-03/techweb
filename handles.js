const url = require('url')
const qs = require('querystring')
  const about= require('./content/about.json')
const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'})

  if (path === '/hello' && 'name' in params) {
    res.write('Hello ' + params['name'])
  }else if (path === '/about'){

    res.write(JSON.stringify(about))

  }else {
    res.write('Hello anonymous')
  }
  
  res.end()
}