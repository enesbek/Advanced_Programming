class Enes extends Animator  {
    constructor() {
        super();
        this.author = 'Enes BEK'
        this.desc = 'Infinity'
        let colours = ["white", "red"]
        let animation1 = "translate(0,0)", 
        animation2 = "translate(600px,600px)",
        animation3 = "translate(600px,0px)",
        animation4 = "translate(0px,600px)",
        animation5 = "translate(0px,0px)",

        this.anim = { background: colours , transform: [animation1, animation2, animation3,animation4,animation5] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 30px; height: 30px; background-color: Black; border-radius : 90%;"
        this.time = 6000
    }
    update() { }
}