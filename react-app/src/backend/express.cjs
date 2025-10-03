const express = require('express')
const { Client } = require('basic-ftp')
const app = express()

app.use(express.json())

app.get('/', (req, res)=>res.sendStatus(200))

app.get('/ftp-list', async (req, res)=>{
    let statusCode = 200
    const responseBody = {
        data: [],
        error: null
    }
    try {
        const ftpClient = new Client()
        await ftpClient.access({
            host: '192.168.56.1',
            port: 21,
            user: 'tester',
            password: 'password',
        })
        await ftpClient.cd('/')
        const fileList = await ftpClient.list()
        ftpClient.close()
        responseBody.data = fileList
    } catch(e) {
        statusCode = 404
        responseBody.error = e
    }
    res.status(statusCode).json(responseBody)
})

app.post('/ftp-file-content', async (req, res)=>{
    let statusCode = 200
    const responseBody = {
        data: null,
        error: null
    }
    try {
        console.log('req.body', req.body)
        const {fileName} = req.body
        
        console.log('fileName', fileName)

        const ftpClient = new Client()
        await ftpClient.access({
            host: '192.168.56.1',
            port: 21,
            user: 'tester',
            password: 'password',
        })
        await ftpClient.cd('/')

        const ftpResponse = await ftpClient.downloadTo("local/"+fileName, fileName)
        console.log('ftpResponse', ftpResponse)

        ftpClient.close()
        responseBody.data = ftpResponse
    } catch(e) {
        statusCode = 404
        responseBody.error = e.message
    }
    res.status(statusCode).json(responseBody)
})

const port = 3333
app.listen(port, ()=>console.log('Backend server starts on port', port))