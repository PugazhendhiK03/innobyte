
// Example: Add a smooth scroll effect for feature section links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// dropdown

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('active');
});



// about
document.getElementById('read-more').addEventListener('click', function(e) {
    e.preventDefault();
    var aboutText = document.getElementById('about-text');
    var readMoreLink = document.getElementById('read-more');
    
    if (aboutText.style.display === 'block') {
        aboutText.style.display = '-webkit-box'; // Show truncated text
        aboutText.style.webkitLineClamp = '3'; // Show only 3 lines
        readMoreLink.textContent = 'Read More';
    } else {
        aboutText.style.display = 'block'; // Show full text
        aboutText.style.webkitLineClamp = 'none'; // No line clamping
        readMoreLink.textContent = 'Read Less';
    }
});




// contact
// Initialize Google Map
function initMap() {
    var location = { lat: 23.5415, lng: 86.8822 }; // Coordinates for Manpur, Barhanti, West Bengal
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

