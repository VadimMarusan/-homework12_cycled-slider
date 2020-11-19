let slides = document.querySelectorAll('.slide-to-show');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);
let pause = document.getElementById("pause");
let play = document.getElementById("play");

function nextSlide(){
    slides[currentSlide].className = 'slide-to-show';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide-to-show showing';
}



pause.onclick = function pauseSlider () {
    clearInterval(slideInterval);
    play.removeAttribute("disabled")
}

play.onclick = function playSlider() {
    slideInterval = setInterval(nextSlide,3000);
    play.setAttribute("disabled", "disabled")
}


function timer (){
    let timeLeft = document.querySelector(".display");
    let currentTime = parseInt(timeLeft.innerHTML);
    let time = setInterval(function () {
            if (--currentTime >= 0) { // если таймер всё еще больше нуля
                timeLeft.innerHTML = currentTime // обновляем цифру
            }
        if (currentTime == 0) {
            timeLeft.innerHTML = "3";
            timer();
        }
        }, 1000)


}

timer();







