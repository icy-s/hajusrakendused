import express from "express";
import axios from "axios";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const PORT = 3000
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_REDIRECT_URI = 'http://localhost:3000'

app.get("/api/auth/url", (req, res) => {
    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
    'client_id=' + GOOGLE_CLIENT_ID + '&' +
    'redirect_uri=' + GOOGLE_REDIRECT_URI + '&' +
    'response_type=code&' + 
    'scope=profile email&' +
    'access_type=offline&' +
    'prompt=consent';

    console.log(authUrl);

    res.json({ url : authUrl })
})

app.get("/", (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log('server is working at http://localhost:' + PORT);
})