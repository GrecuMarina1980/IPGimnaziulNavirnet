var index = 0;
AOS.init({duration: 1000});

function menu() {
    document.getElementById("side-menu").classList.toggle("nav");
    document.getElementById("menu-btn").classList.toggle("nav");
    document.getElementById("main").classList.toggle("inactive");
    document.getElementById("hamburger").classList.toggle("hidden");
    document.getElementById("close").classList.toggle("hidden");
}

function slider () {
    var slides = document.getElementsByClassName("slide");
    var i = 0;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
    index++;
    if (index >= slides.length) {
        index = 0;
    }
}
slider();
setInterval(slider, 2000);
new SimpleLightbox({elements: ".container-galerie a"})
new SimpleLightbox({elements: ".content a"})

emailjs.init("user_WfVORUVJ2fOxm2KwM3L6A");
function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_m9wu394", "template_5ioi8ye", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            console.log(error);
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}