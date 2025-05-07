# Ex.08 Design of Interactive Image Gallery
# Date:7-05-2025
#Name: Pranav Krishna T
#Reg No:212224040241

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>NATURE</h1>
    </header>

    <div class="gallery">
        <div class="gallery-item" onclick="openModal(this)">
            <img src="1.jpg" alt="Nature 1">
        </div>
        <div class="gallery-item" onclick="openModal(this)">
            <img src="2.jpg" alt="Nature 2">
        </div>
        <div class="gallery-item" onclick="openModal(this)">
            <img src="3.jpg" alt="Nature 3">
        </div>
        <div class="gallery-item" onclick="openModal(this)">
            <img src="4.jpg" alt="Nature 4">
        </div>
    </div>

    <div id="modal" class="modal">
        <span class="close" onclick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImage" alt="Expanded View">
        <div id="caption"></div>
    </div>

    <script src="style.js"></script>
</body>
</html>

```
style.js
```
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


```
style.css
```
body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 1rem;
  }
  
  /* Put images in a row */
  .gallery {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
  
  /* Style each image */
  .gallery-item img {
    width: 200px;
    border: 3px solid transparent;
    cursor: pointer;
    transition: transform 0.3s, border-color 0.3s;
  }
  
  /* Highlight the clicked image */
  .gallery-item img.active {
    border-color: #4CAF50;
    transform: scale(1.05);
    box-shadow: 0 0 10px green;
  }
  
  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
  
  .modal-content {
    display: block;
    margin: 80px auto;
    width: 80%;
    max-width: 700px;
  }
  
  .close {
    position: absolute;
    top: 15px;
    right: 30px;
    color: white;
    font-size: 40px;
    cursor: pointer;
  }
  

```
## OUTPUT:
![alt text](<exp 8 out 1.png>)
![alt text](<exp 8 out 2.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
