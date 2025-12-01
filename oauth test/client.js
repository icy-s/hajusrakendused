console.log("Hello");

async function loginToGoogle(){
    console.log('STEP 1: login to google');

    try {
        const response = await fetch('http://localhost:3000/api/auth/url')
        const data = await response.json()

        console.log('URL: ', data);

    } catch (error) {
        console.log(error.message);
    }
}