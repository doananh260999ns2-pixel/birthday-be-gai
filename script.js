/* ==============================
   THÔNG TIN BÉ
   CHỈ CẦN SỬA KHU VỰC NÀY
================================ */

const CONFIG = {

    name: "Bé Bơ",

    age: 1,

    message:
        `Chúc con yêu sinh nhật 1 tuổi thật vui.

        Mong con luôn khỏe mạnh,
        hay ăn chóng lớn,
        lúc nào cũng vui vẻ
        và luôn được bao quanh
        bởi thật nhiều yêu thương.

        Cả gia đình yêu con rất nhiều ❤️`,

    galleryPhotos: [
        {
            src: "images/gallery-01.jpg",
            caption: "Cô công chúa nhỏ của cả nhà ❤️"
        },
        {
            src: "images/gallery-02.jpg",
            caption: "Nụ cười đáng yêu"
        },
        {
            src: "images/gallery-03.jpg",
            caption: "Một ngày thật vui"
        },
        {
            src: "images/gallery-04.jpg",
            caption: "Bé yêu của cả gia đình"
        },
        {
            src: "images/gallery-05.jpg",
            caption: "Khoảnh khắc thật đáng nhớ"
        },
        {
            src: "images/gallery-06.jpg",
            caption: "Nụ cười làm cả nhà tan chảy 💕"
        },
        {
            src: "images/gallery-07.jpg",
            caption: "Cô bé đáng yêu của cả nhà 🎀"
        },
        {
            src: "images/gallery-08.jpg",
            caption: "Một tuổi thật nhiều yêu thương ❤️"
        }
    ],

    photos: [

        {
            src: "images/01.jpg",
            caption:
                "Cô công chúa nhỏ của cả nhà ❤️"
        },

        {
            src: "images/02.jpg",
            caption:
                "Nụ cười đáng yêu"
        },

        {
            src: "images/03.jpg",
            caption:
                "Một ngày thật vui"
        },

        {
            src: "images/04.jpg",
            caption:
                "Bé yêu của cả gia đình"
        },

        {
            src: "images/05.jpg",
            caption:
                "Khoảnh khắc thật đáng nhớ"
        }

    ]

};

const titleText = "Chúc mừng sinh nhật 1 tuổi 🎂";

const mainTitle = document.getElementById("main-title");

let titleIndex = 0;

function typeMainTitle() {
    if (titleIndex < titleText.length) {
        mainTitle.textContent += titleText.charAt(titleIndex);
        titleIndex++;

        setTimeout(typeMainTitle, 90);
    }
}

typeMainTitle();

/* ==============================
   HIỆN TÊN BÉ
================================ */

document.getElementById("baby-name").innerHTML =
    `${CONFIG.name}
    <span class="avocado-icon">🥑</span>`;


/* ==============================
   TẠO ALBUM
================================ */

const gallery =
    document.getElementById(
        "gallery"
    );

CONFIG.galleryPhotos.forEach(
    (photo) => {

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "photo-card";

        card.innerHTML = `
            <img
                src="${photo.src}"
                alt="${photo.caption}"
            >

            <p>
                ${photo.caption}
            </p>
        `;

        gallery.appendChild(
            card
        );

    }
);


/* ==============================
   NÚT MỞ QUÀ
================================ */

const openButton =
    document.getElementById(
        "open-button"
    );

const birthdaySection =
    document.getElementById(
        "birthday-section"
    );

const music =
    document.getElementById(
        "background-music"
    );

openButton.addEventListener(
    "click",
    () => {

        createConfetti();

        birthdaySection.classList.add(
            "show"
        );

        birthdaySection.scrollIntoView({
            behavior: "smooth"
        });

        music.play().catch(
            () => {}
        );

    }
);


/* ==============================
   THỔI NẾN
================================ */

const blowButton =
    document.getElementById(
        "blow-button"
    );

const wishMessage =
    document.getElementById(
        "wish-message"
    );

blowButton.addEventListener(
    "click",
    () => {

        wishMessage.textContent =
            "Điều ước của con chắc chắn sẽ thành hiện thực ❤️";

        createConfetti();

    }
);


/* ==============================
   CONFETTI ĐƠN GIẢN
================================ */

function createConfetti() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );

        confetti.innerHTML =
            ["🎀", "💕", "⭐", "🎉", "💖"][
                Math.floor(
                    Math.random() * 5
                )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() *
            window.innerWidth +
            "px";

        confetti.style.top =
            "-50px";

        confetti.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";

        confetti.style.zIndex =
            "999";

        confetti.style.transition =
            "transform 3s linear, opacity 3s";

        document.body.appendChild(
            confetti
        );

        setTimeout(
            () => {

                confetti.style.transform =
                    `translateY(
                        ${window.innerHeight + 100}px
                    )
                    rotate(
                        ${Math.random() * 720}deg
                    )`;

                confetti.style.opacity =
                    "0";

            },
            20
        );

        setTimeout(
            () => {
                confetti.remove();
            },
            3200
        );

    }

}


/* ==============================
   LỜI CHÚC KIỂU TYPING
================================ */

const letterText =
    document.getElementById(
        "letter-text"
    );

let letterIndex = 0;

function typeLetter() {

    if (
        letterIndex <
        CONFIG.message.length
    ) {

        letterText.textContent +=
            CONFIG.message.charAt(
                letterIndex
            );

        letterIndex++;

        setTimeout(
            typeLetter,
            35
        );

    }

}

typeLetter();


/* ==============================
   BẬT / TẮT NHẠC
================================ */

const musicButton =
    document.getElementById(
        "music-button"
    );

musicButton.addEventListener(
    "click",
    () => {

        if (
            music.paused
        ) {

            music.play();

            musicButton.textContent =
                "🎵";

        } else {

            music.pause();

            musicButton.textContent =
                "🔇";

        }

    }
);
/* ==============================
   SLIDESHOW
================================ */

let currentSlide = 0;

const slideImage =
    document.getElementById("slide-image");

const slideCaption =
    document.getElementById("slide-caption");

const prevSlide =
    document.getElementById("prev-slide");

const nextSlide =
    document.getElementById("next-slide");


function showSlide() {

    const photo =
        CONFIG.photos[currentSlide];

    slideImage.style.opacity =
        "0";

    slideImage.style.transform =
        "scale(0.96)";

    setTimeout(
        () => {

            slideImage.src =
                photo.src;

            slideCaption.textContent =
                photo.caption;

            slideImage.style.opacity =
                "1";

            slideImage.style.transform =
                "scale(1)";

        },
        200
    );

}


nextSlide.addEventListener(
    "click",
    () => {

        currentSlide++;

        if (
            currentSlide >=
            CONFIG.photos.length
        ) {
            currentSlide = 0;
        }

        showSlide();
        setInterval(
    () => {

        currentSlide++;

        if (
            currentSlide >=
            CONFIG.photos.length
        ) {
            currentSlide = 0;
        }

        showSlide();

    },
    5000
);

    }
);


prevSlide.addEventListener(
    "click",
    () => {

        currentSlide--;

        if (
            currentSlide < 0
        ) {
            currentSlide =
                CONFIG.photos.length - 1;
        }

        showSlide();

    }
);


showSlide();

const revealElements =
    document.querySelectorAll(
        "section:not(.hero)"
    );

revealElements.forEach(
    (element) => {
        element.classList.add(
            "reveal"
        );
    }
);


function revealOnScroll() {

    revealElements.forEach(
        (element) => {

            const top =
                element.getBoundingClientRect().top;

            if (
                top <
                window.innerHeight - 100
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();