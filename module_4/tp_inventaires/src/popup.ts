export class Popup {

    static show(content : string){

        const popupContainer : HTMLDivElement = document.createElement('div')
        popupContainer.className = 'popup-container'

        const popupContent : HTMLDivElement = document.createElement('div')
        popupContent.className = 'popup-content'

        popupContainer.addEventListener('click', function (){
            this.remove()
        })

        document.body
            .appendChild(popupContainer)
            .appendChild(popupContent).innerHTML = content


    }


}