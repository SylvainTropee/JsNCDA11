import {Article} from "./article.ts";
import {Popup} from "./popup.ts";

export class ArticleTableRenderer {

    private articles: Article[] // Array<Article>

    constructor() {
        this.articles = []
    }

    public addArticle(article: Article) {
        this.articles.push(article)
    }

    public generateRandomArticles(nbArticles: number) {

        const names = ["livre", "stylo", "cahier", "tacos", "téléphone"];
        const descriptions = ["un artile de qualitê", "produit populaire", "chapi chapo", "Edition limitê", "Nouveau modèle"];

        for (let i: number = 0; i < nbArticles; i++) {

            const name: string = names[Math.floor(Math.random() * names.length)]
            const price: number = Math.floor(Math.random() * 100)
            const description: string = descriptions[Math.floor(Math.random() * descriptions.length)]

            this.addArticle(
                new Article(name, price, description)
            )
        }
    }

    private createTable(headers: string[]): HTMLTableElement {


        const table: HTMLTableElement = document.createElement('table')
        const thead: HTMLTableSectionElement = document.createElement('thead')
        const tr: HTMLTableRowElement = document.createElement('tr')

        //table.createTHead().insertRow(0)
        headers.forEach(function (val: string) {
            const th: HTMLTableCellElement = document.createElement('th')
            th.innerText = val
            tr.append(th)
        })

        table.appendChild(thead).appendChild(tr)
        return table
    }

    private addRowEvent(row: HTMLTableRowElement, article: Article) {

        row.addEventListener("click", function () {

            const articleContent =
                `<h2>${article.name}</h2>
                <p>Description : ${article.description}</p>
                <p>Prix : ${article.price.toFixed(2)}</p>`;

            Popup.show(articleContent)
        })
    }

    public render() {

        const table: HTMLTableElement = this.createTable(["Name", "Description", "Price"]);

        const tbody: HTMLTableSectionElement = table.createTBody()


        this.articles.forEach((article: Article) => {

            const tr: HTMLTableRowElement = tbody.insertRow()

            tr.innerHTML = [article.name, article.price, article.description].map(
                (tdData: string | number): string => `<td>${tdData}</td>`
            ).join('')

            this.addRowEvent(tr, article)

        })

        document.getElementById('app')?.append(table)
    }
}


