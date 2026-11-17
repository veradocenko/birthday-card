
// =====================================
// ЗОЛОТИСТЫЕ ЧАСТИЦЫ НА ФОНЕ
// =====================================

const particlesContainer = document.getElementById('particles');

for (let i = 0; i < 35; i++) {
    const particle = document.createElement('div');

    particle.classList.add('particle');

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${8 + Math.random() * 12}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;

    const size = 2 + Math.random() * 4;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particlesContainer.appendChild(particle);
}



// =====================================
// СОДЕРЖИМОЕ СЕМИ КОНВЕРТОВ
// =====================================


const letters = {

    1: {
        title: 'Тёплые слова',
        content: `В этот особенный день нам хочется

подарить Тебе не просто поздравление,
а частичку нашей любви и тепла.

Почаще улыбайся,
радуйся даже самым маленьким мелочам
и всегда чувствуй, как сильно
Тебя любят и ценят близкие люди.

Сегодня весь этот день — для Тебя! ♡`
    },

    2: {
        title: 'Прекрасные моменты',
        content: `Мама, спасибо Тебе

за путь в жизни,
за Твою поддержку,
за настойчивость и упрямство,
которые помогли мне во многом.

Есть моменты, которые хочется
сохранить в памяти навсегда.

Например, как Ты всегда пополняла запас
конфет в третьем ящике сверху,
чтобы я мог в любой момент перекусить.

А помнишь, мы готовили хреновину?
Это был незабываемый опыт для меня.
Я, кажется, никогда так не обливался слезами!

Пусть впереди будет ещё множество
таких же тёплых, смешных и незабываемых
моментов, которые останутся в памяти
на долгие годы! ♡`
    },

    3: {
        title: 'С особенным теплом',
        content: `Дорогая мама!

Мне хочется сегодня сказать Вам
несколько особенных слов от себя.

Я очень рада, что Вы есть в моей жизни.
Ведь семья — это не только родственные связи,
но и тепло, забота и люди,
которые со временем становятся
по-настоящему близкими.

Спасибо Вам за Вашу доброту,
душевность, за семейные моменты
и за всё хорошее, что Вы дарите окружающим.

Я искренне желаю Вам как можно больше
счастливых дней, приятных неожиданностей,
душевного спокойствия и поводов улыбаться.

Пусть в жизни будет больше путешествий,
интересных событий, исполнения желаний
и маленьких радостей, из которых
складывается настоящее счастье.

Пусть Вас всегда окружают любовь,
забота и внимание близких людей.

С днём рождения!

С теплом и самыми добрыми пожеланиями! ♡`
    },

    4: {
        title: 'С любовью',
        content: `Самое большое счастье —
это когда есть люди,
с которыми комфортно и просто.

Пусть в доме всегда
будет тепло и уютно,
за столом собираются близкие люди,
звучит смех и ведутся душевные разговоры.

Пусть в сердце живёт спокойствие,
а дома всегда ждут любовь,
понимание и забота.

Мы очень хотим, чтобы Ты
всегда чувствовала себя любимой,
нужной и окружённой теплом. ♡`
    },

    5: {
        title: 'От всего сердца',
        content: `Спасибо Тебе за Твою доброту,
за тепло, заботу и внимание,
за всё хорошее, что Ты даришь
людям, которые рядом с Тобой.

Пусть всё добро, которым Ты делишься,
возвращается к Тебе вдвойне.

Желаем, чтобы каждый день
приносил что-то приятное,
чтобы чаще случались поводы
гордиться, радоваться и смеяться.

Пусть всегда находится время
для любимых занятий,
приятных встреч и маленьких удовольствий.

И пусть жизнь радует Тебя
как можно чаще! ♡`
    },

    6: {
        title: 'Пусть сбываются мечты',
        content: `Мы желаем Тебе здоровья,
которого хватит на все мечты,
энергии для новых приключений
и вдохновения для всего задуманного.

Пусть впереди ждут
интересные поездки и открытия,
новые впечатления и красивые места.

Не бойся строить планы,
мечтать о большом и радоваться малому.

Пусть каждый новый день
дарит приятные эмоции,
а поводов для радости будет
намного больше, чем поводов для грусти.

И пусть хорошее настроение
становится Твоим постоянным спутником! ♡`
    },

    7: {
        title: 'Самое главное письмо',
        content: `Дорогая мама!

Сегодня Твой день, и нам хочется,
чтобы Ты почувствовала,
сколько тепла и любви
окружает Тебя.

Мы желаем Тебе самого главного:
крепкого здоровья, душевного покоя,
счастья и уверенности в завтрашнем дне.

Пусть рядом всегда будут люди,
с которыми легко и радостно,
а каждый новый год жизни
приносит что-то прекрасное.

Не откладывай радость на потом.
Побольше путешествуй, мечтай,
позволяй себе маленькие капризы,
наслаждайся каждым днём
и никогда не забывай о себе.

Ты заслуживаешь самых красивых
моментов, искренних улыбок
и огромного человеческого счастья.

С днём рождения!

Крепко обнимаем и очень любим! ♡`
    }

};


// =====================================
// ОТКРЫТИЕ КОНВЕРТОВ
// =====================================

const letterOverlay = document.getElementById('letterOverlay');
const letterNumber = document.getElementById('letterNumber');
const letterTitle = document.getElementById('letterTitle');
const letterContent = document.getElementById('letterContent');
const letterMedia = document.getElementById('letterMedia');

const envelopeButtons = document.querySelectorAll('.envelope');
const closeLetterButton = document.getElementById('closeLetter');

const photoLightbox = document.getElementById('photoLightbox');
const photoLightboxClose = document.getElementById('photoLightboxClose');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');



function openLetter(number) {

    const letter = letters[number];

    if (!letter) {
        return;
    }

    // Заголовок и текст письма
    letterNumber.textContent = `ПИСЬМО № 0${number}`;
    letterTitle.textContent = letter.title;
    letterContent.textContent = letter.content;

    // Очищаем предыдущие фотографии и видео
    letterMedia.replaceChildren();

    // Фотографии для первых шести конвертов
    if (number >= 1 && number <= 6) {

        const photoCard = createPhoto(
            `images/photo-${number}.jpg`,
            `${letter.title} ♡`
        );

        letterMedia.appendChild(photoCard);
    }

    // Видеопоздравление для седьмого конверта
    if (number === 7) {

        const videoCard = createVideo();

        letterMedia.appendChild(videoCard);
    }

    letterOverlay.classList.add('active');
    document.body.classList.add('modal-open');
}


// =====================================
// СОЗДАНИЕ ФОТОГРАФИИ
// =====================================

function openPhoto(source, caption) {

    lightboxImage.src = source;
    lightboxCaption.textContent = caption;
    photoLightbox.classList.add('active');
    photoLightbox.setAttribute('aria-hidden', 'false');
}

function closePhoto() {
    photoLightbox.classList.remove('active');
    photoLightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
}

function createPhoto(source, caption) {
    const card = document.createElement('div');
    card.className = 'photo-card';

    const image = document.createElement('img');
    image.src = `${source}?v=${Date.now()}`;
    image.alt = caption;
    image.style.cursor = 'zoom-in';

    image.addEventListener('click', () => {
        openPhoto(source, caption);
    });

    const description = document.createElement('p');
    description.className = 'photo-caption';
    description.textContent = caption;

    card.append(image, description);

    return card;
}


// =====================================
// СОЗДАНИЕ ВИДЕО
// =====================================

function createVideo() {
    const card = document.createElement('div');
    card.className = 'video-card';

    const video = document.createElement('video');

    video.src = 'video/birthday-video.mp4';
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;

    const description = document.createElement('p');
    description.className = 'video-caption';
    description.textContent = 'Особенный момент ♡';

    card.append(video, description);

    return card;
}


function closeLetter() {
    playClosePaperSound();

    // Останавливаем видео при закрытии письма
    const video = letterMedia.querySelector('video');

    if (video) {
        video.pause();
        video.currentTime = 0;
    }

    letterOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}


// =====================================
// ЗВУК ШЕЛЕСТА БУМАГИ
// =====================================

function playPaperSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    const duration = 0.35;
    const bufferSize = audioContext.sampleRate * duration;

    const buffer = audioContext.createBuffer(
        1,
        bufferSize,
        audioContext.sampleRate
    );

    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
    }

    const source = audioContext.createBufferSource();
    source.buffer = buffer;

    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1400;
    filter.Q.value = 0.7;

    const volume = audioContext.createGain();
    volume.gain.setValueAtTime(0.001, audioContext.currentTime);
    volume.gain.linearRampToValueAtTime(
        0.12,
        audioContext.currentTime + 0.05
    );
    volume.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    source.connect(filter);
    filter.connect(volume);
    volume.connect(audioContext.destination);

    source.start();
    source.stop(audioContext.currentTime + duration);

    source.onended = () => audioContext.close();
}


// =====================================
// ТИХИЙ ЗВУК ЗАКРЫТИЯ ПИСЬМА
// =====================================

function playClosePaperSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    const duration = 0.2;
    const bufferSize = audioContext.sampleRate * duration;

    const buffer = audioContext.createBuffer(
        1,
        bufferSize,
        audioContext.sampleRate
    );

    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.35;
    }

    const source = audioContext.createBufferSource();
    source.buffer = buffer;

    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.7;

    const volume = audioContext.createGain();
    volume.gain.setValueAtTime(0.001, audioContext.currentTime);
    volume.gain.linearRampToValueAtTime(
        0.06,
        audioContext.currentTime + 0.04
    );
    volume.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    source.connect(filter);
    filter.connect(volume);
    volume.connect(audioContext.destination);

    source.start();
    source.stop(audioContext.currentTime + duration);

    source.onended = () => audioContext.close();
}


// Нажатие на конверт

envelopeButtons.forEach((envelope) => {
    envelope.addEventListener('click', () => {
        const number = Number(envelope.dataset.envelope);

        playPaperSound();

        // Запускаем анимацию раскрытия
        envelope.classList.add('is-opening');

        // После анимации показываем письмо
        setTimeout(() => {
            openLetter(number);

            envelope.classList.remove('is-opening');
        }, 650);
    });
});

// Кнопка закрытия

closeLetterButton.addEventListener('click', closeLetter);

photoLightboxClose.addEventListener('click', closePhoto);

photoLightbox.addEventListener('click', (event) => {
    if (event.target === photoLightbox) {
        closePhoto();
    }
});


// Закрытие нажатием на затемнённый фон

letterOverlay.addEventListener('click', (event) => {
    if (event.target === letterOverlay) {
        closeLetter();
    }
});


// Закрытие клавишей Escape

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (photoLightbox.classList.contains('active')) {
            closePhoto();
        } else if (letterOverlay.classList.contains('active')) {
            closeLetter();
        }
    }
});



// Открытие подарочной коробки
const giftButton = document.getElementById('giftButton');
const giftIntro = document.getElementById('giftIntro');
const birthdayMusic = document.getElementById('birthdayMusic');

// Открытие подарочной коробки
giftButton.addEventListener('click', async () => {

    // Защита от повторного нажатия
    if (giftIntro.classList.contains('opening')) {
        return;
    }

    giftIntro.classList.add('opening');

    // Запускаем праздничную музыку
    if (birthdayMusic) {
        birthdayMusic.volume = 0.7;

        try {
            await birthdayMusic.play();
        } catch (error) {
            console.error('Не удалось запустить музыку:', error);
        }
    }

    // Получаем все семь конвертов
    const envelopes = document.querySelectorAll(
        '.envelopes-section .envelope'
    );

    // Получаем блок поздравления
    const hero = document.querySelector('.hero');

// Определяем центр подарочной коробки
const giftRect = giftButton.getBoundingClientRect();

const startX = giftRect.left + giftRect.width / 2;
const startY = giftRect.top + giftRect.height / 2;

// Сначала скрываем начальный экран
setTimeout(() => {

    giftIntro.style.transition = 'opacity 1s ease';
    giftIntro.style.opacity = '0';

    setTimeout(() => {

        giftIntro.style.display = 'none';

        // Показываем поздравительный текст
        hero.classList.add('show');

        // Ждём завершения появления текста
        // и только потом запускаем конверты
        setTimeout(() => {

            envelopes.forEach((envelope, index) => {

                setTimeout(() => {

                    const rect = envelope.getBoundingClientRect();

                    const targetX = rect.left + rect.width / 2;
                    const targetY = rect.top + rect.height / 2;

                    const flyX = startX - targetX;
                    const flyY = startY - targetY;

                    envelope.style.setProperty('--fly-x', `${flyX}px`);
                    envelope.style.setProperty('--fly-y', `${flyY}px`);

                    envelope.classList.add('fly-out');

                }, index * 900);

            });

            // Показываем нижнее поздравление после вылета последнего конверта
            setTimeout(() => {
                document.querySelector('footer').classList.add('show');
            }, 900 * 6 + 1800);

        }, 3000);

    }, 1000);

}, 500);


    // Плавно уменьшаем громкость музыки
    if (birthdayMusic) {

        setTimeout(() => {

            const fadeInterval = setInterval(() => {

                if (birthdayMusic.volume > 0.05) {
                    birthdayMusic.volume = Math.max(
                        0,
                        birthdayMusic.volume - 0.02
                    );
                } else {
                    birthdayMusic.volume = 0;
                    birthdayMusic.pause();
                    birthdayMusic.currentTime = 0;
                    clearInterval(fadeInterval);
                }

            }, 200);

        }, 6000);

    }

});
