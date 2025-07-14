const phrases = [
    "幸せな一日",
    "楽しい一日",
    "思い出に残る一日",
    "リラックスする一日"
];

const today = new Date().toISOString().split("T")[0];
const savedData = JSON.parse(localStorage.getItem("fortuneResult"));
let selectedPhrase;

if(savedData && savedData.date === today){
    selectedPhrase = savedData.phrase;
}else{
const randomIndex = Math.floor(Math.random() * phrases.length);
selectedPhrase = phrases[randomIndex];

localStorage.setItem("fortuneResult", JSON.stringify({
    date: today,
    phrase: selectedPhrase
}));
}

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