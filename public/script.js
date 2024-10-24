const startLayout = `
    <div class="header">Welcome to ArtiFacts!</div>
    <div class="info-wrapper">
        <div class="answer">
            <p>ArtiFacts is an educational trivia-style game centered around history through a lense of visual arts, including painting, engraving, and photography.</p>
            <p>Answer questions correctly to earn points.</p>
            <p>Read an explanation for each question on the right-hand side after submitting your answer.</p>
            <p>Additionally, ask our AI Assistant clarifying questions to learn more about each subject.</p>
            <p>Most importantly, have fun!</p>
        </div>
    </div>
`

const endLayout = `
    <div class="medium-text">Your final score is...</div>
    <div class="header" id="final-points">200!</div>
    <div class="info-wrapper">
        <div class="answer">
            <p>Congratulations, you are learning more about art history! Keep learning more and a high score will come soon!</p>
            <p>Click the right arrow again to play again</p>
        </div>
    </div>
`

const slideLayout = `
    <p class="question"></h1>
    <div class="img-answer-wrapper">
        <img class="img" loading="eager" alt="img here">
        <div class="answer"></div>
        <div class="explanation">
            <p class="explanation-text">Explanation here</p>
            <input type="text" id="questionField" placeholder="Ask a question...">
            <button class="submitQuestion">Ask AI Assistant</button>
            <p class="ai-answer"></p>
        </div>
    </div>
    `

const questions = [
    ,
    "This painting, American Gothic, was painted during the Great Depression. During this time, there was an increase of Shanty towns, which were made of abandoned cars, packing crates, and other scrap materials. What another name for these Shanty towns?",
    "This painting, The Last Supper, was painted by which artist in the Renaissance?",
    "The Statue of Liberty was a gift to America by which country in 1886?",
    "The world trade center, which fell in the September 11th attacks, stood how many miles tall?",
    "This painting, The Last Judgment, resides in which famous chapel?",
    "This photo of Martin Luther King Jr., a Civil Rights movement leader, was taken at his 'I have a dream' speech that was at which American monument?",
    "The Boston Tea Party, was executed in 1773 by which political group?",
    "This photo of Buzz Aldrin, taken by Neil Armstrong, was from what space mission that landed the first men on the moon?",
    "Hieroglyphics were a formal writing system of which ancient empire?",
    "The Taj Mahal, an ivory-white marble mausoleum on the right bank of the river Yamuna, is located in which Indian City?",
    ""
]


const answers = [
    
    
    ,
    `<div class="options">
        <label>
            <input type="radio" name="answer" value="false" /> A. Okies
        </label>
        <label>
            <input type="radio" name="answer" value="true" /> B. Hoovervilles
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. Shack Towns
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> D. Ghost towns
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="false" /> A. Donatello
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> B. Sandra Botticelli
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. Jan van Eyck
        </label>
        <label>
            <input type="radio" name="answer" value="true" /> D. Leonardo Da Vinci
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="true" /> A. France
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> B. Egypt
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. Japan
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> D. England
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="false" /> A. 1/10 Mile
        </label>
        <label>
            <input type="radio" name="answer" value="true" /> B. 1/4 Miles
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. 1/2 Miles
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> D. 1 Mile
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="false" /> A. Notre Dame
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> B. Rio de Janeiro Cathedral
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. Sainte-Chapelle
        </label>
        <label>
            <input type="radio" name="answer" value="true" /> D. The Sistine Chapel
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="false" /> A. The White House
        </label>
        <label>
            <input type="radio" name="answer" value="true" /> B. The Lincoln Memorial
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. Independence Hall
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> D. The Liberty Bell
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="true" /> A. The Sons of Liberty
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> B. The Federalists
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. The Loyalists
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> D. The Hessians
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="false" /> A. Project Mercury
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> B. Challenger 1
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. Sputnik 1
        </label>
        <label>
            <input type="radio" name="answer" value="true" /> D. Apollo 11
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="false" /> A. Babylonian Empire
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> B. Akkadian Empire
        </label>
        <label>
            <input type="radio" name="answer" value="true" /> C. Egyptian Empire
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> D. Persian Empire
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`,

    `<div class="options">
        <label>
            <input type="radio" name="answer" value="false" /> A. New Delhi
        </label>
        <label>
            <input type="radio" name="answer" value="true" /> B. Agra
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> C. Kolkata
        </label>
        <label>
            <input type="radio" name="answer" value="false" /> D. Mumbai
        </label>
    </div>
    <button class="submit">Submit</button>
    <p class="result"></p>`
    ];

const imgs =
    [
        ,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/640px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/600px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Front_view_of_Statue_of_Liberty_with_pedestal_and_base_2024.jpg',
        'https://live-production.wcms.abc-cdn.net.au/b6dbdb528840bcb41ab7d7cf658ee9b8?impolicy=wcms_crop_resize&cropH=1152&cropW=2048&xPos=0&yPos=272&width=862&height=485',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Last_Judgement_%28Michelangelo%29.jpg/697px-Last_Judgement_%28Michelangelo%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/ea/Martin_Luther_King_Jr._addresses_a_crowd_from_the_steps_of_the_Lincoln_Memorial%2C_USMC-09611.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Boston_Tea_Party_w.jpg/640px-Boston_Tea_Party_w.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Buzz_salutes_the_U.S._Flag.jpg/220px-Buzz_salutes_the_U.S._Flag.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/34/Minnakht_01.JPG',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/640px-Taj_Mahal_%28Edited%29.jpeg'
    ]

const explanations = 
[
    ,
    "The shanty towns that arose during the Great Depression were called \"Hoovervilles.\" They were named after President Herbert Hoover, who was widely blamed for the economic hardships of the era.",
    "\"The Last Supper\" was painted by Leonardo da Vinci, a key figure of the Renaissance, a period of cultural revival in Europe during the 14th to 17th centuries. The Renaissance emphasized humanism, art, science, and the rediscovery of classical antiquity, with artists like da Vinci pioneering techniques like perspective and realism in their works.",
    "France gifted the Statue of Liberty to the United States in 1886 as a symbol of freedom, democracy, and the strong ties of friendship between the two nations. It was designed by French sculptor Frédéric Auguste Bartholdi and became an iconic symbol of liberty.",
    "The World Trade Center, specifically the North Tower, was approximately 0.26 miles tall, standing at 1,368 feet. This iconic skyscraper, completed in 1975, was a symbol of New York City's skyline until it was destroyed in the September 11th attacks in 2001.",
    "\"The Last Judgment,\" a masterpiece by Michelangelo, is located in the Sistine Chapel, which is part of the Vatican Museums in Vatican City. The painting covers the altar wall and depicts the second coming of Christ and the final judgment of souls.",
    "Martin Luther King Jr. delivered his famous \"I Have a Dream\" speech in 1963 at the Lincoln Memorial during the March on Washington. The speech was a pivotal moment in the Civil Rights Movement, calling for an end to racism and for civil and economic rights.",
    "The Boston Tea Party was carried out by the Sons of Liberty, a group of American patriots protesting the British-imposed Tea Act. Disguised as Mohawk Indians, they boarded British ships in Boston Harbor and dumped an entire shipment of tea into the water, protesting \"taxation without representation.\"",
    "Apollo 11, launched by NASA in 1969, was the first space mission to land humans on the moon. Neil Armstrong, who took the photo, became the first person to walk on the moon, followed by Buzz Aldrin.",
    "Hieroglyphics were the formal writing system of the Ancient Egyptian civilization, used for religious texts, official inscriptions, and monumental art. The symbols represented both sounds and objects, and they played a crucial role in recording Egyptian history.",
    "The Taj Mahal, located in Agra, India, was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is one of the most famous architectural landmarks in the world, symbolizing eternal love."
]

let points = 0;
const pointDisplay = document.getElementById("point-display")

let slide = 0;
const numSlides = questions.length;

const slideshow = document.getElementById('content');
let isTransitioning = false;

// create all slides
for (let i = 0; i < numSlides; i++) {
    const slideElement = document.createElement('div');
    slideElement.classList.add('slide');
    slideElement.id = `slide-${i}`;

    if (i == 0) {
        slideElement.innerHTML = startLayout;
    } else if (i == numSlides - 1) {
        console.log('last slide' + i)
        slideElement.innerHTML = endLayout;
    } else {
        slideElement.innerHTML = slideLayout;
    }
    

    
    if (i !== 0 && i !== numSlides - 1) {
        slideElement.querySelector('.question').textContent = questions[i];
        slideElement.querySelector('.answer').innerHTML = answers[i];
        slideElement.querySelector('.img').src = imgs[i];
    }


    let bgColor = '#';
    let secondaryColor = '#';
    for (let j = 0; j < 3; j++) {
        let rand = Math.floor(Math.random() * 6);
        bgColor += 'abcdef'[rand];
        secondaryColor += '89abcd'[rand];
    }
    slideElement.style.backgroundColor = bgColor;
    slideElement.querySelector('.answer').style.backgroundColor = secondaryColor;

    if (i !== 0 && i !== numSlides - 1) {
        slideElement.querySelector('.explanation').style.backgroundColor = secondaryColor;
        slideElement.querySelector('.explanation-text').textContent = explanations[i];
    }

    slideshow.appendChild(slideElement);

    if (i !== 0 && i !== numSlides - 1) {
        slideElement.querySelector('.explanation').style.visibility = 'hidden';
    }

    if (i !== 0) {
        slideElement.style.display = 'none';
    }
}

// event listener for answer submission
document.querySelectorAll('.submit').forEach((submitBtn, index) => {
    submitBtn.addEventListener('click', function () {
        // const options = document.querySelectorAll('.submit ~ div input');
        const labels = submitBtn.previousElementSibling.childNodes
        console.log(labels)
        let selected = null;
        let options = [];

        
        labels.forEach(node => {
            if (node.tagName === 'LABEL') {
                if (node.firstElementChild) {
                    options.push(node.firstElementChild);
                }
            }
        });

        console.log(options)

        
        for (let option of options) {
            if (option.checked) {
                selected = option.value;
            }

            if (option.value === 'true') {
                console.log(true);
                option.parentElement.style.backgroundColor = '#57de50';
            }

            if (option.checked && selected === 'false') {
                option.parentElement.style.backgroundColor = '#f05454';
            }
        }

        
        const result = document.querySelector(`#slide-${index+1} .result`);
        if (selected === 'true') {
            result.textContent = 'Correct!';
            result.style.color = 'green';
            points += 200;
        } else {
            result.textContent = 'Incorrect!';
            result.style.color = 'red';
            points -= 100;
        }

        pointDisplay.textContent = points;

        submitBtn.disabled = true;
        console.log("a" + submitBtn.disabled)

        submitBtn.parentElement.nextElementSibling.style.visibility = "visible"
    });
});


// event listener for ai submission
document.querySelectorAll('.submitQuestion').forEach((submitBtn, index) => {
    submitBtn.addEventListener('click', async () => {
        const message = submitBtn.previousElementSibling.value
        const context = submitBtn.parentElement.parentElement.parentElement.firstElementChild.textContent

        
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ context, message })
        });
    
        const data = await response.json();
        const reply = data.content;
        console.log(data)
        console.log(reply)

        submitBtn.previousElementSibling.previousElementSibling.textContent = reply;
    });
});


document.querySelector(".right").addEventListener('click', function () {
    
});


// Change slide function with transition
function changeSlide(offset) {
    if (isTransitioning) return;

    isTransitioning = true;

    const currSlide = document.getElementById(`slide-${slide}`);
    slide = (slide + offset + numSlides) % numSlides;
    const nextSlide = document.getElementById(`slide-${slide}`);

    // Initially position next slide for the transition
    nextSlide.style.display = 'block';
    nextSlide.style.position = 'absolute';
    nextSlide.style.left = offset === 1 ? '100vw' : '-100vw';

    // Transition between slides
    let i = 0;
    function transition() {
        if (i > 100) {
            finishChangeSlide(currSlide, nextSlide);
            return;
        }

        // Calculate position using the curve
        const pos = i ** 2 * (150 - i) / 5000;
        if (offset === 1) {
            currSlide.style.left = -pos + 'vw';
            nextSlide.style.left = 100 - pos + 'vw';
        } else {
            currSlide.style.left = pos + 'vw';
            nextSlide.style.left = -100 + pos + 'vw';
        }

        i++;
        setTimeout(transition, 1);  // Adjust speed as needed
    }

    transition();
}

function finishChangeSlide(currSlide, nextSlide) {
    // Hide the old slide and reset styles
    currSlide.style.display = 'none';
    currSlide.style.position = '';

    // Reset the next slide's position
    nextSlide.style.position = '';
    nextSlide.style.left = '0';

    isTransitioning = false;
}