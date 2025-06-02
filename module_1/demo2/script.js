let sports = ["Pétanque", "Palet vendéen", "Fléchettes", "Molky"]

//récupération du select
const selectSport = document.getElementById('selectSport')

//boucler sur les sports
sports.forEach(function(val){
    const option = document.createElement('option')
    option.value = val.toLowerCase()
    option.innerText = val
    selectSport.append(option)
})

//à la selection d'une option j'affiche la value dans le DOM dans un p
selectSport.addEventListener('change',  function()  {
    console.log(this)
    const p = document.createElement('p')
    p.innerText = this.value
    p.style.textTransform = 'capitalize'
    document.body.append(p)
})

