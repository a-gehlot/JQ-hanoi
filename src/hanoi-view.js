class View {
    constructor(hanoiGame, $element) {
        this.hanoiGame = hanoiGame;
        this.$element = $element;
        this.setupTowers();
    }

    setupTowers() {
        this.$element.empty();

        let $tower, $disc;
        for (let towerIndex = 0; towerIndex < 3; towerIndex++) {
            $tower = $('<ul>');
            for (let discIndex = 0; discIndex < 3; discIndex++) {
                $disc = $('<li>');
                $tower.append($disc);
            }
            this.$element.append($tower);
        }
    }

    render() {
        
    }

}

module.exports = View;