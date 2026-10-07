function changeScreen(currentId, nextId) {

    const current =
        document.getElementById(currentId);

    const next =
        document.getElementById(nextId);

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

    }, 500);
}


/* =====================================
   FIRST SCREEN
===================================== */

function showTwenties() {

    changeScreen(
        "welcome",
        "twenties"
    );

}


/* =====================================
   TWENTIES → LETTER
===================================== */

function showLetter() {

    changeScreen(
        "twenties",
        "letter-screen"
    );

}


/* =====================================
   OPEN LETTER
===================================== */

function openLetter() {

    const envelopeTop =
        document.querySelector(
            ".envelope-top"
        );

    envelopeTop.style.transform =
        "rotateX(180deg)";

    setTimeout(() => {

        changeScreen(
            "letter-screen",
            "message-screen"
        );

    }, 900);

}


/* =====================================
   LETTER → MEMORIES
===================================== */

function showMemories() {

    changeScreen(
        "message-screen",
        "memories"
    );

    setTimeout(() => {

        createPhotoHeart();

    }, 700);

}


/* =====================================
   CREATE PHOTO HEART
===================================== */

function createPhotoHeart() {

    const heart =
        document.getElementById(
            "photoHeart"
        );

    heart.innerHTML = "";

    const availablePhotos = [
        "im1.jpeg",
        "im3.jpeg",
        "im4.jpeg",
        "im5.jpeg",
        "im6.jpeg",
        "im7.jpeg",
        "im8.jpeg",
        "im9.jpeg",
        "im10.jpeg",
        "im12.jpeg",
        "im13.jpeg",
        "im14.jpeg",
        "im15.jpeg"
    ];

    const photoConfigs = [
        { left: 12, top: 6, width: 108, rotate: -8 },
        { left: 26, top: 12, width: 116, rotate: 7 },
        { left: 46, top: 10, width: 102, rotate: -5 },
        { left: 60, top: 18, width: 120, rotate: 9 },
        { left: 74, top: 10, width: 96, rotate: -6 },

        { left: 8, top: 31, width: 100, rotate: 5 },
        { left: 22, top: 35, width: 112, rotate: -10 },
        { left: 38, top: 29, width: 122, rotate: 8 },
        { left: 54, top: 36, width: 110, rotate: -6 },
        { left: 69, top: 33, width: 106, rotate: 7 },

        { left: 11, top: 58, width: 112, rotate: -7 },
        { left: 27, top: 60, width: 104, rotate: 10 },
        { left: 42, top: 56, width: 118, rotate: -9 },
        { left: 58, top: 62, width: 110, rotate: 6 },
        { left: 73, top: 57, width: 100, rotate: -4 }
    ];

    photoConfigs.forEach(
        (config, index) => {

            const img =
                document.createElement(
                    "img"
                );

            const source =
                availablePhotos[index % availablePhotos.length];

            img.src = source;
            img.alt = "Photo mémoire " + (index + 1);
            img.classList.add("memory-photo");

            img.style.width = config.width + "px";
            img.style.left = config.left + "%";
            img.style.top = config.top + "%";
            img.style.transform = "rotate(" + config.rotate + "deg)";
            img.style.animationDelay = (index * 0.08) + "s";

            img.onerror = () => {
                img.src =  availablePhotos[index % availablePhotos.length];
            };

            heart.appendChild(img);

        }
    );

}


/* =====================================
   MEMORIES → LOVE
===================================== */

function showLove() {

    changeScreen(
        "memories",
        "love"
    );

}


/* =====================================
   LOVE → FINAL
===================================== */

function showFinal() {

    changeScreen(
        "love",
        "final"
    );

    setTimeout(() => {

        createConfetti();

    }, 800);

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );


    const symbols = [

        "❤️",
        "💕",
        "🌸",
        "✨",
        "🌹",
        "♡"

    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        piece.style.position =
            "fixed";


        piece.style.left =
            Math.random() * 100
            + "vw";


        piece.style.top =
            "-30px";


        piece.style.fontSize =
            Math.random() * 20
            + 15
            + "px";


        piece.style.zIndex =
            "100";


        piece.style.animation =
            `fall ${
                Math.random() * 3 + 3
            }s linear forwards`;


        container.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


/* =====================================
   CONFETTI ANIMATION
===================================== */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(style);
