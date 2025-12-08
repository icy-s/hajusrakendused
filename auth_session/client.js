const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const _username = usernameInput.value.trim()
    const _password = passwordInput.value.trim()

    // username != true
    if (!username || !password){
        usernameInput.style.Border = 'border: 1px solid red'
        usernameInput.style.border = '1px solid red'
        passwordInput.style.border = '1px solid red'
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( {
                username: _username,
                password: _password
            })
        })
        const data = response.json()

        if(response.ok){
            console.log('login succesful');
        }

    } catch (error)
    {}
})