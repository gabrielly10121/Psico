document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});


document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active'); 
});

function closeMenu() {
    if (window.innerWidth <= 768) { 
        document.querySelector('nav ul').classList.remove('active'); 
    }
}

document.querySelectorAll('#menu li a').forEach(link => {
    link.addEventListener('click', closeMenu); 
});

