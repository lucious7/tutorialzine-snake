var Game_Over = {
    preload: function () {
        game.load.image('game_over', './assets/images/gameover.png');
    },
    
    create: function () {
        game.add.button(0, 0, 'game_over', this.startGame, this);
        
        game.add.text(235, 350, "LAST SCORE", {font: "bold 16px sans-serif", fill: "#46C0F9", align: "center"});
        game.add.text(350, 348, score.toString(), {font: "bold 20px sans-serif", fill: "#FFF", align: "center"});
        
        game.add.text(235, 400, "MAX SCORE", {font: "bold 16px sans-serif", fill: "#46C0F9", align: "center"});
        game.add.text(350, 398, maxScore.toString(), {font: "bold 20px sans-serif", fill: "#FFF", align: "center"});
    },
    
    startGame: function () {
        game.state.start('Game');
    }
}