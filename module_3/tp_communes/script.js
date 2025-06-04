const BASE_URL = "https://geo.api.gouv.fr"

async function callApi(url) {
    const response = await fetch(url)

    if (response.ok) {
        return response.json()
    }
}

async function getDepartments(data) {
    // let data = await callApi(`${BASE_URL}/departements`)
    // console.log(data)
    for (dep of data) {
        const option = document.createElement('option')
        option.value = dep.code
        option.innerText = `${dep.code} - ${dep.nom}`
        document.getElementById('dep').append(option)
    }
}

async function getCities(data) {
    // let data = await callApi(`${BASE_URL}/departements/${this.value}/communes?fields=nom,code`)
    // console.log(data)
    document.getElementById('cities').innerHTML = ""
    for (city of data) {
        const option = document.createElement('option')
        option.value = city.code
        option.innerText = `${city.nom}`
        document.getElementById('cities').append(option)
    }
}

async function getCity() {
    let data = await callApi(`${BASE_URL}/communes/${this.value}`)
    console.log(data)
    const p = document.createElement('p')
    p.innerText = `Nom : ${data.nom}, population : ${data.population}, CP : ${data.codesPostaux}`
    document.body.append(p)
}

async function getAll() {
    let deps = callApi(`${BASE_URL}/departements`)
    let cities = callApi(`${BASE_URL}/departements/79/communes`)

    let data = await Promise.all([deps, cities])

    console.log(data)
    getDepartments(data[0])
    getCities(data[1])
}

window.onload = function () {
    // document.getElementById('dep').addEventListener('change', getCities)
    // document.getElementById('cities').addEventListener('change', getCity)
    // getDepartments()

    getAll()

}

