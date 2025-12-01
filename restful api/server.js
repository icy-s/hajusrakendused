import express from 'express';
import body_parser from 'body-parser';

const app = express()
app.use(express.json()) // for post

app.get("/", (req, res) => {
    res.send("Server is running!");
})

app.get('/data', (req, res) => {
    res.send(data);
})

app.post('/send', (req, res) => {
    console.log(req.body)
})

const server = app.listen(3000, () => {
    console.log('hello');
})

const data = {
  "store_name": "Digital Gear Store",
  "product_count": 8,
  "products": [
    {
      "id": "A15X",
      "name": "Wireless Noise-Cancelling Headphones",
      "price": 89.99,
      "in_stock": true,
      "tags": ["audio", "bluetooth", "over-ear", "ANC"]
    },
    {
      "id": "B32C",
      "name": "High-Speed USB-C Hub (7-in-1)",
      "price": 24.50,
      "in_stock": false,
      "tags": ["peripherals", "connectivity", "USB-C"]
    },
    {
      "id": "C99D",
      "name": "Mechanical Keyboard (TKL)",
      "price": 129.00,
      "in_stock": true,
      "tags": ["keyboard", "gaming", "peripherals", "wired"]
    },
    {
      "id": "D04E",
      "name": "Portable Power Bank (20000mAh)",
      "price": 45.99,
      "in_stock": true,
      "tags": ["charging", "mobile", "accessory"]
    },
    {
      "id": "E71F",
      "name": "4K Ultra HD Webcam",
      "price": 79.95,
      "in_stock": true,
      "tags": ["video", "streaming", "webcam"]
    },
    {
      "id": "F55G",
      "name": "Gaming Mouse (RGB)",
      "price": 49.99,
      "in_stock": false,
      "tags": ["gaming", "peripherals", "mouse"]
    },
    {
      "id": "G23H",
      "name": "Smart Home Speaker",
      "price": 99.00,
      "in_stock": true,
      "tags": ["IoT", "audio", "smart-home"]
    },
    {
      "id": "H80I",
      "name": "2TB External SSD",
      "price": 189.50,
      "in_stock": true,
      "tags": ["storage", "data", "SSD"]
    }
  ]
}