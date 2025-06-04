
async function callApi() {
    const response =  fetch('http://api.open-notify.org/iss-now.json')
    const response1 =  fetch('https://api.chucknorris.io/jokes/random')
    const response2 =  fetch('https://api.chucknorris.io/jokes/random')

    let responseAll = await Promise.all([response, response1, response2])

    console.log(responseAll)
    // if(response.ok || response.status === 200){
    //     return response.json()
    // }
}

callApi()

// async function getIssPosition() {
//
//     let data = await callApi()
//     console.log(data)
//
// }
//
// getIssPosition()