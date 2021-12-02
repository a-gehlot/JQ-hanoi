class View {
    constructor(hanoiGame, $element) {
        this.hanoiGame = hanoiGame;
        this.$element = $element;
        this.setupTowers();
    }

    setupTowers() {
        this.$element.append(`<ul class="tower-one">
        <li class="large"></li>
        <li class="medium"></li>
        <li class="small"></li>
        </ul>
        <ul class="tower-two"></ul>
        <ul class="tower-three"></ul>
        `)
    }

}

module.exports = View;