// home page image slider
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showSlide, 7000); // Change slide every 10 seconds
    showSlide(); // Show initial slide
});

// Function to move carousel in about us page
function moveCarousel() {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const currentItem = items[0];
    container.style.transition = 'transform 0.9s ease';
    container.style.transform = `translateX(-${currentItem.offsetWidth}px)`;
    setTimeout(() => {
    container.appendChild(currentItem);
    container.style.transition = 'none';
    container.style.transform = 'translateX(0)';
    }, 3000); // Move every 5 seconds
}

  // Start carousel movement
setInterval(moveCarousel, 5000);
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayBlogs(data))
        .catch(error => console.log(error));
});

function displayBlogs(blogs) {
    const blogList = document.getElementById('blogList');

    blogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');

        const blogTitle = document.createElement('h2');
        blogTitle.classList.add('blog-title');
        blogTitle.textContent = blog.title;

        const blogContent = document.createElement('p');
        blogContent.classList.add('blog-content');
        blogContent.textContent = blog.body;

        blogItem.appendChild(blogTitle);
        blogItem.appendChild(blogContent);
        blogList.appendChild(blogItem);
    });
}
