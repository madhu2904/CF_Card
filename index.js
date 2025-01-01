// // 
// document.addEventListener('DOMContentLoaded', function () {
//     const click = document.querySelector('.click');
//     const giftBox= document.querySelector('.gift-container');
//     const shadow=document.querySelector('.shadow');
//     const messageDiv=document.querySelector('.message-div');
    
//     // click.addEventListener('click', () => {
//     //     if (click.className === "click") {
//     //         click.classList.add('active');
//     //         giftBox.classList.add('active');
//     //         shadow.classList.add('active');
//     //     } else {
//     //         click.classList.remove('active');
//     //         giftBox.classList.remove('active');
//     //         shadow.classList.remove('active');
//     //     }
//     // });
//     giftBox.addEventListener('click', () => {
//         if (click.className === "click") {
//             click.classList.add('active');
//             giftBox.classList.add('active');
//             shadow.classList.add('active');
//             messageDiv.classList.add('show-message');
//         } else {
//             click.classList.remove('active');
//             giftBox.classList.remove('active');
//             shadow.classList.remove('active');
//             messageDiv.classList.remove('show-message');
//         }
//     });
    
// });
const texts=[
    "This year, your coding skills will unlock incredible career opportunities.",
    "May your Java programs be efficient, and your algorithms groundbreaking.",
    "Expect a year of debugging success and mastering new programming paradigms.",
    "Your dedication to coding will lead to innovative projects and achievements.",
    "This New Year, embrace challenges in computer science and thrive like never before.",
    "Your web development skills will create stunning, impactful applications this year.",
    "Dive into software development, and watch your career soar to new heights.",
    "This year, every error you solve will bring you closer to greatness.",
    "May your data structures be efficient, and your solutions always optimal.",
    "Explore new frameworks and languages; the future of IT awaits your contributions.",
    "Your passion for technology will lead to exceptional growth this year.",
    "Expect a year of collaboration, innovation, and breakthrough achievements.",
    "This New Year, let your creativity shine in every line of code.",
    "Your programming journey will open doors to remarkable opportunities in IT.",
    "May your applications run flawlessly and bring value to users worldwide.",
    "This year, your debugging skills will turn challenges into triumphs.",
    "Expand your knowledge in cloud computing and watch your projects soar.",
    "Your persistence in coding will lead to groundbreaking solutions.",
    "This New Year, push the limits of your skills and achieve the extraordinary.",
    "Expect a year of clean code, efficient logic, and impactful contributions.",
    "Your expertise in Java will lead to amazing opportunities this year.",
    "This year, your commitment to learning will bring immense professional growth.",
    // "May your journey into cybersecurity be as secure as your future career.",
    "Your love for algorithms will make complex problems look like puzzles this year.",
    "This year, build web solutions that inspire and impact millions.",
    "Your code will resonate as a symphony of creativity and functionality this year.",
    "Embrace AI and ML, and see your IT career flourish in new dimensions.",
    "May your Git commits always be meaningful and your projects successful.",
    "This year, your IT skills will bridge gaps and create new possibilities.",
    "Your journey in coding will inspire peers and set benchmarks for success.",
    "Focus on learning DevOps, and watch your workflow transform this year.",
    "Your passion for full-stack development will lead to impressive achievements.",
    "May your code repositories grow with innovative and impactful projects.",
    "This year, your technical expertise will turn heads in the IT industry.",
    "Expect a year of high performance, both in your apps and your career.",
    "Your dedication to open-source contributions will be recognized worldwide.",
    "This New Year, make breakthroughs in database optimization and scalability.",
    "Let your technical prowess redefine software development standards this year.",
    "May your user interfaces be intuitive and your user experiences delightful.",
    "This year, master new technologies and lead projects with confidence.",
    "Your coding journey will evolve into a remarkable story of success.",
    "May your API calls be seamless and your server responses swift this year.",
    "Focus on blockchain and see your innovations transform industries.",
    "This New Year, let your entrepreneurial ideas shine in the tech world.",
    "Your coding resilience will lead to unexpected opportunities this year.",
    "Build innovative solutions with Python and JavaScript and leave a legacy.",
    "May your development environments be stable and your outputs flawless.",
    "This year, take the lead in collaborative software projects and shine.",
    "Let your passion for coding drive you to new heights in the IT industry.",
    "Your hard work and perseverance will lead to a year of unparalleled success."
  ];
  

document.addEventListener('DOMContentLoaded', function () {
    const click = document.querySelector('.click');
    const giftBox = document.querySelector('.gift-container');
    const shadow = document.querySelector('.shadow');
    const messageDiv = document.querySelector('.message-div');
    const message=document.querySelector('.message');
    const confettiCanvas=document.querySelector('#my-canvas');
   

    giftBox.addEventListener('click', () => {
        const duration=5*10000;
        const AnimationEnd=Date.now()+duration;
        if (!click.classList.contains('active')) {
            click.classList.add('active');
            giftBox.classList.add('active');
            shadow.classList.add('active');
            messageDiv.classList.add('show-message');
            message.textContent=texts[Math.floor(Math.random()*texts.length)];

            giftBox.addEventListener('transitioned',function handler(){
                console.log('animation ended');
                giftBox.classList.remove('vibrate');
                
                messageDiv.classList.add('show-message');
                giftBox.removeEventListener('animationend', handler);
               
               
            });
            document.querySelector('.header').textContent="HAPPY NEW YEAR 2025!";
            confettiCanvas.classList.add('active');
            var confettiSettings = { target: 'my-canvas',max:400,
                colors: 
                // [[192, 192, 192], [255, 215, 0], [205, 127, 50], [80, 200, 120], [65, 105, 225], [220, 20, 60]],
                [[139, 0, 139],    // Dark Magenta
                [255, 69, 0],     // Red-Orange
                [34, 139, 34],    // Forest Green
                [0, 0, 205],      // Medium Blue
                [178, 34, 34],    // Firebrick Red
                [218, 165, 32],   // Goldenrod
                [47, 79, 79],     // Dark Slate Gray
                [72, 61, 139],    // Dark Slate Blue
                [255, 215, 0],    // Gold
                [128, 0, 0]],       // Maroon
                animate:true,
                clock:50,
                rotate:true,
                weight:20

             };
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            
            
          



        } else {
            click.classList.remove('active');
            giftBox.classList.remove('active');
            shadow.classList.remove('active');
            messageDiv.classList.remove('show-message');
            document.querySelector('.header').textContent="CODERS FORUM HAS SENT YOU A SURPRISE !";
            confettiCanvas.classList.remove('active');
        }
    });
});
