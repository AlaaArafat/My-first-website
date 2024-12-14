

document.getElementById('linkedinButton').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/fran%C3%A7ois-charat-b61b615a/', '_blank');
});

document.getElementById('whatsappButton').addEventListener('click', () => {
    window.open('https://wa.me/33769701219?text=Hello! How can I help you?', '_blank');
});

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
  
    const revealOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    };
  
    const observer = new IntersectionObserver(revealOnScroll, {
      threshold: 0.1, // Adjust the threshold if needed
    });
  
    revealElements.forEach((element) => observer.observe(element));
  });



const images = document.querySelectorAll('.hover-img');

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
        image.style.margin = '0 10px';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.margin = '0';
    });
});


  
