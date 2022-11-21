var typing=new Typed(".text", {
    strings: [" &nbsp;UI/UX DESIGNER", " &nbsp;WEB DEVELOPER", " &nbsp;MUSICIAN"," &nbsp;FREELANCER"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 1000,
   
    loop: true,
    showCursor: false,
    
});

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.innerHTML = "UI/UX DESIGNER";
    }, 0);
    setTimeout(() => {
        text.innerHTML = "WEB DEVELOPER";
    }, 2000);
    setTimeout(() => {
        text.innerHTML = "MUSICIAN";
    }, 4000); 
    setTimeout(() => {
        text.innerHTML = "FREELANCER";
    }, 6000);
}

textLoad();
setInterval(textLoad, 6000);





        const myTags = [
            'Logic Pro', 'Pro Tools', 'Figma',
            'Adobe XD', 'Adobe Pr', 'Adobe AE',
            'Adobe Illustrator', 'Adobe Ps', 'C4D',
            'HTML', 'CSS', 'BootStrap',
            'GIT', 'React', 'jQuery', 'JavaScript', 'WordPress',
        ];
        
        var tagCloud = TagCloud('.content', myTags,{
          radius: 250,
          maxSpeed: 'fast',
          initSpeed: 'fast',
          direction: 135,
          keep: true
          
        });
        
        //To change the color of text randomly
        var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('.content').style.color = random_color;