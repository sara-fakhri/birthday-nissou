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
   WELCOME BALLOONS
===================================== */

function createBalloonField() {

    const field =
        document.querySelector(".balloon-field");

    const colors = ["pink", "light-pink", "red", "white", "purple"];
    const accents = ["♡", "✦", "♥", "✧"];
    let created = 0;

    function releaseBalloon() {

        if (created >= 36) {
            return;
        }

        const balloon = document.createElement("span");
        const drift = Math.random() * 100 - 50;
        const tilt = Math.random() * 18 - 9;

        balloon.className =
            "balloon balloon-" + colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = (3 + Math.random() * 94) + "%";
        balloon.style.width = (28 + Math.random() * 24) + "px";
        balloon.style.setProperty("--drift", drift + "px");
        balloon.style.setProperty("--drift-middle", drift * 0.55 + "px");
        balloon.style.setProperty("--tilt", tilt + "deg");
        balloon.style.setProperty("--tilt-return", -tilt + "deg");
        balloon.style.animationDuration = (11 + Math.random() * 7) + "s";
        field.appendChild(balloon);
        balloon.addEventListener("animationend", () => balloon.remove());

        if (created % 4 === 1) {
            const accent = document.createElement("span");
            accent.className = "balloon-accent";
            accent.textContent = accents[Math.floor(Math.random() * accents.length)];
            accent.style.left = (3 + Math.random() * 94) + "%";
            accent.style.animationDuration = (7 + Math.random() * 4) + "s";
            field.appendChild(accent);
            accent.addEventListener("animationend", () => accent.remove());
        }

        created++;

        if (created < 36) {
            setTimeout(releaseBalloon, 160 + Math.random() * 200);
        }
    }

    releaseBalloon();
}

createBalloonField();


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
                "SN/" + availablePhotos[index % availablePhotos.length];

            img.src = source;
            img.alt = "Photo mémoire " + (index + 1);
            img.classList.add("memory-photo");

            img.style.width = "min(" + config.width + "px, 13vw)";
            img.style.left = config.left + "%";
            img.style.top = config.top + "%";
            img.style.transform = "rotate(" + config.rotate + "deg)";
            img.style.animationDelay = (index * 0.08) + "s";

            img.onerror = () => {
                img.src = "SN/" + availablePhotos[index % availablePhotos.length];
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

function createFinalCandles() {

    const group =
        document.getElementById("candleGroup");

    for (let index = 0; index < 20; index++) {

        const row = Math.floor(index / 10);
        const column = index % 10;
        const candle = document.createElement("div");
        const wick = document.createElement("span");
        const flame = document.createElement("span");

        candle.className = row === 0 ? "candle candle-front" : "candle candle-back";
        candle.style.left = (10 + column * 8.1 + row * 4) + "%";
        wick.className = "wick";
        flame.className = "flame";
        flame.style.setProperty("--extinguish-delay", (index * 75) + "ms");
        candle.append(wick, flame);
        group.appendChild(candle);
    }
}

createFinalCandles();

let wishStarted = false;

function makeWish() {

    if (wishStarted) {
        return;
    }

    wishStarted = true;

    const finalScreen = document.getElementById("final");
    const wishButton = document.querySelector(".final-wish-button");

    wishButton.disabled = true;
    finalScreen.classList.add("wish-started");

    document.querySelectorAll("#candleGroup .flame").forEach((flame) => {
        flame.classList.add("flame-extinguishing");
    });

    setTimeout(() => {
        finalScreen.classList.add("celebration-active");
        createConfetti();

        setTimeout(() => {
            const wishReveal = document.getElementById("wishReveal");
            const afterWish = document.getElementById("afterWish");

            wishReveal.hidden = false;
            requestAnimationFrame(() => wishReveal.classList.add("is-visible"));

            setTimeout(() => {
                afterWish.hidden = false;
                requestAnimationFrame(() => afterWish.classList.add("is-visible"));
                wishReveal.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 1400);
        }, 700);
    }, 2350);
}

function showFinal() {

    changeScreen(
        "love",
        "final"
    );

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );


    const confettiSymbols = ["✦", "✧", "·", "♡", "✿", "♥"];
    const floatingSymbols = ["♡", "♥", "✦", "✧"];

    for (let index = 0; index < 72; index++) {

        const piece = document.createElement("span");
        const drift = Math.random() * 160 - 80;

        piece.className = "celebration-confetti";
        piece.textContent = confettiSymbols[Math.floor(Math.random() * confettiSymbols.length)];
        piece.style.left = Math.random() * 100 + "%";
        piece.style.setProperty("--drift", drift + "px");
        piece.style.setProperty("--spin", (180 + Math.random() * 540) + "deg");
        piece.style.setProperty("--duration", (3.8 + Math.random() * 2.4) + "s");
        piece.style.animationDelay = (Math.random() * 1.2) + "s";
        piece.style.fontSize = (11 + Math.random() * 11) + "px";
        container.appendChild(piece);
        piece.addEventListener("animationend", () => piece.remove());
    }

    for (let index = 0; index < 20; index++) {

        const piece = document.createElement("span");

        piece.className = "celebration-float";
        piece.textContent = floatingSymbols[Math.floor(Math.random() * floatingSymbols.length)];
        piece.style.left = (5 + Math.random() * 90) + "%";
        piece.style.setProperty("--drift", (Math.random() * 70 - 35) + "px");
        piece.style.setProperty("--duration", (4 + Math.random() * 3) + "s");
        piece.style.animationDelay = (Math.random() * 1.5) + "s";
        container.appendChild(piece);
        piece.addEventListener("animationend", () => piece.remove());
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