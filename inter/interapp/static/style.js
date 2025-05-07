function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");

    // Show the modal
    modal.style.display = "block";

    // Set modal image source
    modalImg.src = element.querySelector("img").src;

    // Remove 'active' class from all images
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.classList.remove("active");
    });

    // Add 'active' class to clicked image
    element.querySelector("img").classList.add("active");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    // Remove 'active' class from all images
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.classList.remove("active");
    });
}
