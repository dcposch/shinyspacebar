export default class Footer extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        const footer = document.createElement('footer')
        const text = this.getAttribute('text')
        footer.innerHTML = `
            <hr>
            <div class="TypeBody">
                ${text}
            </div>
        `
        shadow.appendChild(footer)
    }
}