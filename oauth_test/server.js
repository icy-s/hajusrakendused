import express from "express";
import axios from "axios";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3000

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_TOKEN_URI = 'https://oauth2.googleapis.com/token'

const CLIENT_REDIRECT_URI = 'http://127.0.0.1:3000/oauth_test'
const SERVER_REDIRECT_URI = 'http://127.0.0.1:3000/oauth_test'

app.get("/api/auth/url", (req, res) => {
    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
    'client_id=' + GOOGLE_CLIENT_ID + '&' +
    'redirect_uri=' + CLIENT_REDIRECT_URI + '&' +
    'response_type=code&' + 
    'scope=profile email&' +
    'access_type=offline&' +
    'prompt=consent';

    console.log(authUrl);

    res.json({ url : authUrl })
})

app.post('/api/auth/token', async (req, res) => {
    const body = req.body
    const _code = body.code

    console.log(_code);

    if (!_code)
    {
        return res.status(400).json(
            {error: 'Please enter the code'}
        )
    }

    // step 3: send code (key) to google server
    try {
        const tokenResponse = await axios.post(GOOGLE_TOKEN_URI,
            {
                code: _code,
                client_id: GOOGLE_CLIENT_ID,
                client_secret: GOOGLE_CLIENT_SECRET,
                redirect_url: SERVER_REDIRECT_URI,
                grant_type: 'authorization_code'
            })
        console.log('tokenResponse', tokenResponse)
        
    } catch (error){
        console.log(error.response);
            console.log('Error to get token: ', error.message);

            return res.status(500)
                error: 'server failed to get Google JWT key'
    }
})

app.get("/", (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log('server is working at http://localhost:' + PORT);
    console.log(new Date());
})