class NavBar extends HTMLElement {
    constructor() {
        super();
        //this.shadow = this.attachShadow({mode: 'open'});
        
        this.nav = document.createElement('nav');
        this.div = document.createElement('div');
        this.a = document.createElement('a');
        this.ul = document.createElement('ul');

        this.div.className = "nav-wrapper";
        this.a.href = "#!";
        this.a.className = "brand-logo";
        this.a.textContent = this.getAttribute('value');
        this.ul.id = "nav-mobile";
        this.ul.className = "right hide-on-med-and-down";

        //this.setAttribute('links', JSON.stringify(this.getAttribute('links')));
        //const dd = JSON.parse(this.getAttribute('links'))
        const dd = [{url: '#', name:'home'},{url: '#', name:'about'}];
        console.log(dd)
        dd.forEach((el, i) => {
            console.log(el)
            const as = `<li key='${i}'><a href='${el.url}'>${el.name}</a></li>`;
            this.ul.insertAdjacentHTML('beforeend', as);
        });

        this.nav.appendChild(this.div);
        this.div.appendChild(this.a);
        this.div.appendChild(this.ul);
        this.appendChild(this.nav);
    }

    get logo() {
        return this.getAttribute('logo');
    }

    set logo(v) {
        this.setAttribute('logo', v);
    }

    set links(v) {

    }

}

customElements.define('nav-bar', NavBar);