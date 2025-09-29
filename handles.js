const url = require('url')
const qs = require('querystring')
  const about= require('./content/about.json')
const serverHandle = (req, res) => {
  const route = url.parse(req.url);
  const path = route.pathname;
  const params = qs.parse(route.query);

  // Définir le type de réponse
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (path === '/hello' && 'name' in params) {
    const name = params['name'];
    res.write(`Hello ${name}!`);
  } else if (path === '/about') {
    res.write(JSON.stringify(about, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found: The requested path does not exist.');
  }

  res.end();
};