class View {
    constructor(hanoiGame, $element) {
        this.hanoiGame = hanoiGame;
        this.$element = $element;
        this.setupTowers();
        this.render();
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
        this.hanoiGame.towers.forEach((tower, idx) => {
            let $tower = this.$element.find('ul').eq(idx)
            tower.forEach((disc, idx) => {
                $tower.find('li').eq(idx).addClass(`data-disc-${disc}`)
            })
        })
    }

}

module.exports = View;