import express from 'express'


const PORT = 8080


const startup = async () => {
  try {
    const app = express()

    app.listen(PORT, () => console.log(`API is running on ${PORT}`))
  } catch (err: any) {
    console.log(`[startup] ${err.message}`)
  }
}


startup()