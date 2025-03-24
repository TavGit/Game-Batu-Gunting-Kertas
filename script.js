const game = () => {
    let pScore = 0;
    let cScore = 0;
    let tScore = 0;


    // start game
    const starGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click" , () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // play game
    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend",function () {
                this.style.animation = "";
            });
        });

        const computerOptions = ["batu", "kertas", "gunting"];
        
    }
    
}