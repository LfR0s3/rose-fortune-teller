const phrases = [
    "幸せな一日",
    "楽しい一日",
    "思い出に残る一日",
    "リラックスする一日"
];

const randomIndex = Math.floor(Math.random() * phrases.length);
const selectedPhrase = phrases[randomIndex];

const message = `今日があなたにとって<br>${selectedPhrase}になりますように`;

document.getElementById("message").innerHTML = message;

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            el.classList.add('visible');
        }
    });
});

window.onload = function(){
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
            document.getElementById("main-content").style.display = "block";
    }, 2000);
};