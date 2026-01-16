// GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
// GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP

const apiKey = '9ddf74115d698425e95f0625'
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}`

const apiExchangePath = '/pair'
const apiSupportedCodesPath = '/codes'

const currency_one = document.getElementById('currency_one')
const currency_two = document.getElementById('currency_two')
const currency_amount = document.getElementById('currency_amount')
const btnConvert = document.getElementById('btnConvert')
const conversion_result = document.getElementById('conversion-result')

async function getApiData(path, option = {}) {
    const url = `${apiUrl}/${apiKey}/${path}`
    const response = await fetch(url, option)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
}

getApiData(apiSupportedCodesPath).then(data => {
     data.supported_codes.forEach(code => {
        console.log(supported_code[0] + ' - ' + supported_code[1])
        currency_one.innerHTML += createCustomElement('option', {
            values: [
                {value: supported_code[0], content: supported_code[0] + ' - ' + supported_code[0]}
            ]
        })
        currency_two.innerHTML += createCustomElement('option', {
            values: [
                {value: supported_code[0], content: supported_code[0] + ' - ' + supported_code[0]}
            ]
        })
     })
})

function createCustomElement(tagName, options = {}) {
    const element = document.createElement(tagName)

    if (options.values && options.values.length > 0) {
        options.values.forEach(option => {
            element.value = option.value,
            element.textContent = option.content
        })
    }
    if (options.css && options.css.length > 0) {
        options.css.forEach(cssClass => {
            element.classList.add(cssClass)
        })
    }

    return element.outerHTML
}

btnConvert.addEventListener('click', (event) => {
    const currency_1 = currency_one.value
    const currency_2 = currency_two.value
    console.log('selected', currency_1, currency_2)

    if (currency_amount.value === '' || isNaN(currency_amount.value) || parseFloat(currency_amount.value) <= 0){
        currency_amount.style.border = '2px solid red'
        return
    } else {
        currency_amount.style.border = ''
    }

    const exchangePath = `${apiExchangePath}/${currency_1}/${currency_2}`
    getApiData(exchangePath).then(data => {
        console.log(data)

        const conversion_amount = data.conversion.rate * parseFloat(currency_amount.value)

        const row_1 = createCustomElement('div',
    {
        values: [{value: '', content: 'Hello World'},],
        css: ['alert', 'alert-light', 'mt-3'],
    }
    )

        const row_2 = createCustomElement('div',
    {
        values: [
            {value: '', content: 'Conversion result: ${conversion_amount} ${currency_2}`},
            ],
        css: ['alert', 'alert-light', 'mt-3'],
    })

    conversion_result.innerHTML = row_1 + row_2

    })
})