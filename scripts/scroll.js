// This java script will create a function that scrolls down to the contact page which can be used on various buttons in the page

function scrollToSection() {
    document.getElementById("cs-contact-240").scrollIntoView({
        // smooth scrolling to enhance user experience by ensuring flow and responsiveness
        behavior: "smooth" 
    });
}