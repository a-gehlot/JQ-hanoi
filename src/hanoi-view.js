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
        this.hanoiGame.towers.forEach((tower, idx) => {
            let $tower = this.$element.find('ul').eq(idx)
            $tower.find('li').removeClass();
            tower.forEach((disc, idx) => {
                $tower.find('li').eq(2-idx).addClass(`disc-${disc}`)
            })
        })
    }

    clickTower(event) {
        if (typeof this.towerOne !== 'number') {
            this.towerOne = $(event.currentTarget).index();
            $(event.currentTarget).addClass('twr-select')
        } else {
            this.towerTwo = $(event.currentTarget).index();
            if (this.hanoiGame.move(this.towerOne, this.towerTwo)) {
                this.render();
            } else {
                alert("Invalid move")
            }
            $('.tower').eq(this.towerOne).removeClass('twr-select')
            if (this.hanoiGame.isWon()) { 
                $('.tower').off();
                $('body').append('<h2 class="win-text">Congratulations! You won!</h2>')
            }
            this.towerOne = null;
            this.towerTwo = null;
        }
    }

}

module.exports = View;