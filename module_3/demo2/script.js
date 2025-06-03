let joke;
fetch("https://api.chucknorris.io/jokes/random",
    /*{method : "GET", body : JSON.stringify({name: "Michel"})}*/)
    .then(response => response.text())
    .then(data => {
        data = JSON.parse(data) //JSON.stringify()
        joke = data
        //console.log(data)
        const p = document.createElement('p')
        p.innerText = data.value
        document.body.append(p)

    })

//ne jamais faire ça !!!!!
setTimeout(function(){
    console.log(joke)
}, 1000)

