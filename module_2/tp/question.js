export class Question{

    constructor(label, answers, correctAnswer) {
        this.label = label
        this.answers = answers
        this.correctAnswer = correctAnswer
    }

    display(){
        const divContainer = document.createElement('div')

        let pQuestion = document.createElement('p')
        pQuestion.innerText = this.label

        divContainer.append(pQuestion)

        let i = 0;
        for (const answer of this.answers) {

            const label = document.createElement('label')
            label.innerText = answer
            label.setAttribute('for', `answer-${i}`)

            const input = document.createElement('input')
            input.type = 'radio'
            input.name = 'answer'
            input.value = i
            input.id = `answer-${i++}`

            divContainer.append(input)
            divContainer.append(label)
        }
        return divContainer
    }


}