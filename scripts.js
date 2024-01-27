function searchCards() {
    var input, filter, cards, cardContainer, h2, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    cardContainer = document.getElementsByClassName("features")[0];
    cards = cardContainer.getElementsByClassName('card');

    for (i = 0; i < cards.length; i++) {
        h2 = cards[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function toggleLike(button) {
    var countSpan = button.nextElementSibling;
    var count = parseInt(countSpan.innerHTML, 10);

    if (button.classList.contains('liked')) {
        // If already liked, decrease the count
        count--;
    } else {
        // If not liked, increase the count
        count++;
    }

    // Update the count display and toggle the 'liked' class
    countSpan.innerHTML = count;
    button.classList.toggle('liked');
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
});

function fetchImages() {
    console.log("Fetching images...");
    fetch('https://zliang-imagegpt.hf.space/images_list')
    .then(response => response.json())
    .then(data => {
        console.log("Data received:", data); // Log the received data
        displayImages(data);
    })
    .catch(error => console.error('Error fetching images:', error));
}

function displayImages(images) {
    console.log("Displaying images:", images); // Log the data being processed
    const gallery = document.getElementById('imageGallery');
    images.forEach(image => {
        console.log("Processing image:", image.url); // Log each image URL
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.name;
        imgElement.style.width = '100%';
        gallery.appendChild(imgElement);
    });
}



