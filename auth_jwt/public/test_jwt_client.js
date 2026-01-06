const loginForm = document.getElementById('loginForm')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

const messageDiv = document.getElementById('message')

// 2 обязательных аргумента - ид элемента который будет отслеживаться и callback функция
loginForm.addEventListener('submit', (event) => {
    // предотвращает дефолтный сабмит, чтобы реализовать свою интерпретацию логики отправки формы
    event.preventDefault()

    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    // если username или пароль неправильные
    if (!username || !password ){
        messageDiv.innerText = "Enter username and password"
        messageDiv.style.display = "black"
        messageDiv.clientList.add("error")

        if (!username)(
            usernameInput.style.border = "1px solid red"
        )

        if (!password){
            passwordInput.classList.add('border-red')
        }

        // не возвращает что-либо, а просто для обозначения конца функции
        return
    }
})