const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const _username = usernameInput.value.trim()
    const _password = passwordInput.value.trim()

    // username != true
    if (!_username || !_password){
        usernameInput.style.Border = 'border: 1px solid red'
        usernameInput.style.border = '1px solid red'
        passwordInput.style.border = '1px solid red'
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/api/login',
            {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify( {
                username: _username,
                password: _password
            })
        })
        const data = await response.json()
        console.log('data', data.success);
        console.log('username', data.username);
        console.log('sessionId', data.sessionId);
        

        if(response.ok){
            console.log('login succesful');
        }

    } catch (error)
    {}
})