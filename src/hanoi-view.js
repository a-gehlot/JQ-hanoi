class View {
    constructor(hanoiGame, $element) {
        this.hanoiGame = hanoiGame;
        this.$element = $element;
        this.setupTowers();
        this.render();
        this.towerOne, this.towerTwo;
        $('.tower').click(this.clickTower.bind(this));
    }

    setupTowers() {
        this.$element.empty();

        let $tower, $disc;
        for (let towerIndex = 0; towerIndex < 3; towerIndex++) {
            $tower = $('<ul class="tower">');
            for (let discIndex = 0; discIndex < 3; discIndex++) {
                $disc = $('<li>');
                $tower.append($disc);
            }
            this.$element.append($tower);
        }
    }

    render() {
        this.hanoiGame.print();
        this.hanoiGame.towers.forEach((tower, idx) => {
            let $tower = this.$element.find('ul').eq(idx)
            $tower.find('li').removeClass();
            tower.forEach((disc, idx) => {
                $tower.find('li').eq(2-idx).addClass(`data-disc-${disc}`)
            })
        })
    }

    clickTower(event) {
        if (typeof this.towerOne !== 'number') {
            this.towerOne = $(event.currentTarget).index();
        } else {
            this.towerTwo = $(event.currentTarget).index();
            if (this.hanoiGame.move(this.towerOne, this.towerTwo)) {
                this.render();
            } else {
                alert("Invalid move")
            }
            this.towerOne = null;
            this.towerTwo = null;
        }
    }

}

module.exports = View;