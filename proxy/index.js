const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')


const app = express()


app.get('/test-proxy', (req, res) => res.json({ proxy: true }))


//API (SERVER)
app.use(
  '/api/v1/',
  createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: { '^/api/v1/': '/' }
  })
)


//CLIENT
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true, ws: true
  })
)


app.listen(5505, () => {
  console.log('PROXY IS RUNNING')
})
