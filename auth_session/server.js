import express from 'express';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Mock user database
const users = [
  { id: 1, username: "student", password: "demo123" },
  { id: 2, username: "teacher", password: "teach123" },
];

// Routes
app.post("/api/login", (req, res) => {
    const { username, password } = req.body

    console.log('username', username);
    console.log('password', password);

    const user = users.find(
      (u) => u.username === username && u.password === password
    )

    if (user){
        // user - found
        req.session.userId = user.id
        req.session.username = user.username
        console.log('user ' + user.username + ' logged in')
        res.json({
            success: true,
            username: user.username,
            sessionId: req.sessionId
        })

    } else {
        // user not found
        console.log('user not logged in');
        res.status(401).json({ error: 'invalid credentials' })
    }
});


app.post("/api/logout", (req, res) => {

});

app.listen(PORT, () => {
  console.log(`\n=================================`);
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`=================================\n`);
  console.log("Demo credentials:");
  console.log("  Username: student | Password: demo123")
});