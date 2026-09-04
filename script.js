function openHeart() {
    //    alert("Button working");
  
    document.getElementById("intro").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
      window.scrollTo(0,0);
    const music = document.getElementById("birthdayMusic");

    music.play().catch(() => {
        console.log("Music blocked by browser");
    });

    createHearts();
    createBalloons();
      createConfetti();
createFireworks();
}



function createHearts() {

    setInterval(() => {

        let heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random()*30) + "px";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        heart.animate(
            [
                {transform:"translateY(0px)",opacity:1},
                {transform:"translateY(-120vh)",opacity:0}
            ],
            {
                duration:5000,
                iterations:1
            }
        );

        setTimeout(()=>{
            heart.remove();
        },5000);

    },300);
}

function createBalloons() {

    setInterval(() => {

        let balloon = document.createElement("div");

        balloon.innerHTML = "🎈";

        balloon.style.position = "fixed";
        balloon.style.left = Math.random()*100 + "vw";
        balloon.style.top = "100vh";
        balloon.style.fontSize = (30 + Math.random()*20) + "px";
        balloon.style.zIndex = "999";

        document.body.appendChild(balloon);

        balloon.animate(
            [
                {transform:"translateY(0px)",opacity:1},
                {transform:"translateY(-120vh)",opacity:0}
            ],
            {
                duration:7000,
                iterations:1
            }
        );

        setTimeout(()=>{
            balloon.remove();
        },7000);

    },500);
}

const photos = [
    "images/photo1.jpeg.jpeg",
    "images/photo2.jpeg.jpeg",
    "images/photo3.jpeg.jpeg",
    "images/photo4.jpeg.jpeg",
    "images/photo5.jpeg.jpeg"
];

let current = 0;

setInterval(() => {

    const img = document.getElementById("slideImage");

    if(img){

        current++;

        if(current >= photos.length){
            current = 0;
        }

        img.src = photos[current];
    }

},3000);
// CONFETTI

function createConfetti(){

    const colors = [
        "#ff4d88",
        "#ffcc00",
        "#00ccff",
        "#66ff66",
        "#ff6600",
        "#cc66ff"
    ];

    for(let i=0;i<150;i++){

        let confetti =
        document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.width = "10px";

        confetti.style.height = "10px";

        confetti.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.zIndex = "1000";

        document.body.appendChild(confetti);

        confetti.animate(
        [
            {
                transform:"translateY(0)",
                opacity:1
            },
            {
                transform:
                `translateY(${window.innerHeight}px)
                 translateX(${Math.random()*200-100}px)
                 rotate(720deg)`,
                opacity:0
            }
        ],
        {
            duration:4000 + Math.random()*3000,
            iterations:1
        });

        setTimeout(()=>{
            confetti.remove();
        },7000);
    }
}


// FIREWORKS

function createFireworks(){

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            let x =
            Math.random()*window.innerWidth;

            let y =
            Math.random()*window.innerHeight*0.6;

            for(let j=0;j<30;j++){

                let spark =
                document.createElement("div");

                spark.style.position="fixed";

                spark.style.left=x+"px";

                spark.style.top=y+"px";

                spark.style.width="6px";

                spark.style.height="6px";

                spark.style.borderRadius="50%";

                spark.style.background=
                `hsl(${Math.random()*360},100%,50%)`;

                spark.style.zIndex="1001";

                document.body.appendChild(spark);

                let angle =
                Math.random()*360;

                let distance =
                100 + Math.random()*80;

                let dx =
                Math.cos(angle*Math.PI/180)*distance;

                let dy =
                Math.sin(angle*Math.PI/180)*distance;

                spark.animate(
                [
                    {
                        transform:"translate(0,0)",
                        opacity:1
                    },
                    {
                        transform:
                        `translate(${dx}px,${dy}px)`,
                        opacity:0
                    }
                ],
                {
                    duration:1200,
                    iterations:1
                });

                setTimeout(()=>{
                    spark.remove();
                },1200);
            }

        },i*400);
    }
}