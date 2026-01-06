const loginForm = document.getElementById('loginForm')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

const messageDiv = document.getElementById('message')

// profile
const profileView = document.getElementById('profileView')
const profileUsername = document.getElementById('profileUsername')
const profileUserId = document.getElementById('profileUserId')
const profileRole = document.getElementById('profileRole')

// token
const tokenPreview = document.getElementById('tokenPreview')
const tokenIssued = document.getElementById('tokenIssued')
const tokenExpires = document.getElementById('tokenExpires')

// 2 обязательных аргумента - ид элемента который будет отслеживаться и callback функция
loginForm.addEventListener('submit', async (event) => {
    // предотвращает дефолтный сабмит, чтобы реализовать свою интерпретацию логики отправки формы
    event.preventDefault()

    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    // если username или пароль неправильные
    if (!username || !password )
    {

    try
        {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application-json'
                },
                body: JSON.stringify({
                // 1 username - ключ, 2 username - значение
                    username: username,
                    password: password
                })
            })

        const data = await response.json()

        if (response.ok)
        {
            console.log("Login successful")
            console.log("Your token: " + data.token)
            // save jwt token
            saveToken(data.token)
            // get profile
            await loadProfile()
        }

    }
    catch (error)
        {
            console.log("error")
        }
}
})

async function loadProfile(){
    const _token = getToken()

    if (!_token){
        console.log('No token found')
        return
    }

    try {
        const response = await fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Content-type': 'application-json',
                'Authorization': 'Bearer ' + _token
            }
        })

        if (response.ok){
            const data = await response.json()

            profileUsername.innerText = data.user.username
            profileUserId.innerText = data.user.id
            profileRole.innerText = data.user.role

            // token
            tokenPreview.innerText = _token
            tokenIssued.innerText = data.tokenInfo.issuedAt
            tokenExpires.innerText = data.tokenInfo.expiresAt

            // show profile block
            profileView.classList.remove('hidden')
            loginForm.classList.add('hidden')
        }

    }
    catch (error)
    {
        console.log(error)
    }
}

function saveToken (token){
    localStorage.setItem('jwt_token', token)
}

function getToken(){
    return localStorage.getItem('jwt_token')
}

function removeToken(){
    localStorage.removeItem('jwt_token')
}