/* =========================
   STARS
========================= */

const starsContainer =
    document.getElementById("stars");

for (let i = 0; i < 100; i++) {

    const star =
        document.createElement("div");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDuration =
        1.5 + Math.random() * 3 + "s";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    starsContainer.appendChild(star);
}


/* =========================
   MAIN SECTIONS
========================= */

const hero =
    document.getElementById("hero");

const letterSection =
    document.getElementById("letterSection");

const homeSection =
    document.getElementById("homeSection");

const reasonsSection =
    document.getElementById("reasonsSection");

const soundtrackSection =
    document.getElementById("soundtrackSection");

const wordsSection =
    document.getElementById("wordsSection");
const endingSection =
    document.getElementById("endingSection");

/* =========================
   ENTER WEBSITE
========================= */

const enterButton =
    document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    hero.style.opacity = "0";

    hero.style.transform =
        "scale(1.05)";

    setTimeout(() => {

        hero.style.display = "none";

        letterSection.style.display =
            "flex";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1000);

});


/* =========================
   ENVELOPE
========================= */

const envelopeWrapper =
    document.getElementById("envelopeWrapper");

const letterContent =
    document.getElementById("letterContent");

envelopeWrapper.addEventListener("click", () => {

    if (
        envelopeWrapper.classList.contains("open")
    ) {
        return;
    }

    envelopeWrapper.classList.add("open");

    setTimeout(() => {

        envelopeWrapper.style.display =
            "none";

        letterContent.classList.add("show");

    }, 900);

});


/* =========================
   SECRET HEART
========================= */

const secretHeart =
    document.getElementById("secretHeart");

const secretMessage =
    document.getElementById("secretMessage");

secretHeart.addEventListener("click", () => {

    secretMessage.classList.toggle("show");

});


/* =========================
   CONTINUE TO HOME
========================= */

const continueButton =
    document.getElementById("continueButton");

continueButton.addEventListener("click", () => {

    letterSection.style.display =
        "none";

    homeSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =========================
   REASONS SECTION
========================= */

const reasonsCard =
    document.getElementById("reasonsCard");

const revealReasons =
    document.getElementById("revealReasons");

const reasonPause =
    document.getElementById("reasonPause");

const tinyReasons =
    document.getElementById("tinyReasons");

const reasonsWall =
    document.getElementById("reasonsWall");

const finalLove =
    document.getElementById("finalLove");

const backFromReasons =
    document.getElementById("backFromReasons");


/* =========================
   OPEN REASONS
========================= */

reasonsCard.addEventListener("click", () => {

    homeSection.style.display =
        "none";

    soundtrackSection.style.display =
        "none";

    wordsSection.style.display =
        "none";

    reasonsSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =========================
   30 MORE REASONS
========================= */

const reasons = [

    "I love you because of who you are.",

    "I love the way how you always make me smile by being here.",

    "I love how even when you try to hide I still hear your screams.",

    "I love how though you've been through hell you still smile.",

    "I love your concern for those you find close.",

    "I love how you have to perfect features.",

    "I love your dark yet so expressive style.",

    "I love your obsessions.",

    "I love how I've gotten to know you.",

    "I love how your the light to my day.",

    "I love how you express yourself in ways so unique.",

    "I love the way your skin changes with the seasons.",

    "I love when you make fun me as your way of showing care.",

    "I love when you mess around and be yourself.",

    "I love how you let me touch your hair when you don't let most.",

    "I love how I can stroke your back and you not get scared.",

    "I love how you try to hide yet I can still see through you.",

    "I love how you know who you are but at the same time don't.",

    "I love how I love you more than I can express.",

    "I love how everything about you draws me closer.",

    "I love how I can love you this much and you not even know.",

    "I love those butterflies you put in my stomach.",

    "I love the way my heart aches for your affection.",

    "I love how you can make me so nervous I forget to speak.",

    "I love the way how with just a glance my day is filled of joy.",

    "I love your looks.",

    "I love your voice.",

    "I love your expressions.",

    "I love your personality.",

    "I love the way u give me cute nicknames."

];


/* =========================
   REVEAL MORE REASONS
========================= */

let reasonsRevealed = false;

revealReasons.addEventListener("click", () => {

    if (reasonsRevealed) {
        return;
    }

    reasonsRevealed = true;

    reasonPause.style.display =
        "none";

    tinyReasons.style.display =
        "block";


    reasons.forEach((reason, index) => {

        const item =
            document.createElement("span");

        item.classList.add("tiny-reason");

        item.textContent =
            `${String(index + 9).padStart(2, "0")}. ${reason}`;

        reasonsWall.appendChild(item);

    });


    setTimeout(() => {

        finalLove.style.display =
            "block";

    }, 1500);

});


/* =========================
   BACK FROM REASONS
========================= */

backFromReasons.addEventListener("click", () => {

    reasonsSection.style.display =
        "none";

    homeSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =========================
   SOUNDTRACK
========================= */

const musicCard =
    document.getElementById("musicCard");

const playButton =
    document.getElementById("playButton");

const backFromMusic =
    document.getElementById("backFromMusic");

const record =
    document.querySelector(".record");

const soundtrack =
    new Audio("assets/music/perfect.mp3");


/* =========================
   OPEN SOUNDTRACK
========================= */

musicCard.addEventListener("click", () => {

    homeSection.style.display =
        "none";

    reasonsSection.style.display =
        "none";

    wordsSection.style.display =
        "none";

    soundtrackSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =========================
   PLAY / PAUSE
========================= */

playButton.addEventListener("click", () => {

    if (soundtrack.paused) {

        soundtrack.play();

        playButton.textContent =
            "Ⅱ";

        record.classList.add(
            "playing"
        );

    } else {

        soundtrack.pause();

        playButton.textContent =
            "▶";

        record.classList.remove(
            "playing"
        );

    }

});


/* =========================
   SONG ENDS
========================= */

soundtrack.addEventListener(
    "ended",
    () => {

        playButton.textContent =
            "▶";

        record.classList.remove(
            "playing"
        );

    }
);


/* =========================
   BACK FROM SOUNDTRACK
========================= */

backFromMusic.addEventListener("click", () => {

    soundtrack.pause();

    soundtrack.currentTime = 0;

    record.classList.remove(
        "playing"
    );

    playButton.textContent =
        "▶";

    soundtrackSection.style.display =
        "none";

    homeSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =========================
   MY WORDS
========================= */

const wordsCard =
    document.getElementById("wordsCard");

const backFromWords =
    document.getElementById("backFromWords");


/* =========================
   OPEN MY WORDS
========================= */

wordsCard.addEventListener("click", () => {

    homeSection.style.display =
        "none";

    reasonsSection.style.display =
        "none";

    soundtrackSection.style.display =
        "none";

    wordsSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =========================
   BACK FROM MY WORDS
========================= */

backFromWords.addEventListener("click", () => {

    wordsSection.style.display =
        "none";

    homeSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});
/* =========================
   MY WORDS EASTER EGG
========================= */

const wordsSecretHeart =
    document.getElementById("wordsSecretHeart");

const wordsSecretMessage =
    document.getElementById("wordsSecretMessage");

wordsSecretHeart.addEventListener("click", () => {

    wordsSecretMessage.classList.toggle("show");

});
const missingClue =
    document.getElementById("missingClue");

missingClue.addEventListener("click", () => {

    wordsSecretMessage.classList.add("show");

    wordsSecretHeart.style.opacity = "1";

});
/* =========================
   THE END
========================= */

const endCard =
    document.getElementById("endCard");

endCard.addEventListener("click", () => {

    homeSection.style.display =
        "none";

    endingSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});
/* =========================
   RESTART WEBSITE
========================= */

const restartButton =
    document.getElementById("restartButton");

restartButton.addEventListener("click", () => {

    endingSection.style.display =
        "none";

    homeSection.style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});