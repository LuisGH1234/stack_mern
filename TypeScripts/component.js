class Text extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({mode: 'open'});
        //this._pal = null;
        this.textContent = "star: " + "next";
    }

    /*static get observedAttributes() {
        return ["palabra"];
    }*/

    /*attributedChangedCallback(name, oldVal, newVal) {
        console.log("set apla");
        //this.textContent = "sta " + newVal;
        this.textContent = "star a " + this.getAttribute('palabra');
    } */

    get palabra() {
        return this.getAttribute('palabra');
    }

    set palabra(val) {
        console.log(val);
        if(typeof val === 'object' || typeof val === 'array') {
            val = JSON.stringify(val);
        }
        this.setAttribute('palabra', val);
        this.textContent = "star: " + this.palabra;
    }

    /*update() {
        let newVal = this.getAttribute('palabra');
        if(typeof newVal === 'object' || typeof newVal === 'array') {
            newVal = JSON.stringify(newVal);
        }
        console.log(this.getAttribute('palabra'));
        this.textContent = "star: " + newVal;
    }*/

}

customElements.define('pha-text', Text);