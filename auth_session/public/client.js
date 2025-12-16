const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

const profileView = document.getElementById('profileView')
const profileUsername = document.getElementById('profileUsername')
const profileUserId= document.getElementById('profileUserId')
const profileSessionId = document.getElementById('profileSessionId')

const loginForm = document.getElementById('loginForm')

const hostPort = 3001
const hostName = 'http://localhost:' + hostPort

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
        const response = await fetch('/api/login',
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
        setTimeout(loadProfile(), 2000)

    } catch (error)
    {}
})

async function loadProfile() {
    try {
        const response = await fetch('/api/profile', {
            method: 'GET',
            credentials: 'include'
        })

        if (response.ok)
        {
            const data = await response.json()
            console.log('Data: ', data);

            profileUserId.innerHTML = data.userId
            profileUsername.innerHTML = data.username
            profileSessionId.innerHTML = data.sessionID

            profileView.classList.remove('hidden')
        }
    } catch (error) {
        
    }
}