const savedData = JSON.parse(localStorage.getItem("dailyFortune"));
const selectedPhrase = savedData ? savedData.phrase : "すてきな一日";

const message = `今日があなたにとって<br>${selectedPhrase}になりますように`;

document.getElementById("message").innerHTML = message;

/*window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            el.classList.add('visible');
        }
    });
});*/

window.onload = function(){
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
            document.getElementById("main-content").style.display = "block";

            setTimeout(() => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(el => {
                el.classList.add('visible');
            });
        }, 100);
    }, 2000);
};