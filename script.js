document
  .getElementById("activity-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get image file, distance, and elevation
    const imageInput = document.getElementById("image-input").files[0];
    const distance = document.getElementById("distance").value;
    const elevation = document.getElementById("elevation").value;

    // Validate inputs
    if (!imageInput || distance === "" || elevation === "") {
      alert("Please fill out all fields.");
      return;
    }

    // Read the image file to display it
    const reader = new FileReader();
    reader.onload = function () {
      // Create a new activity card
      const gallery = document.getElementById("gallery");
      const activityCard = document.createElement("div");
      activityCard.classList.add("activity-card");

      activityCard.innerHTML = `
      <img src="${reader.result}" alt="Cycling Photo">
      <div class="details">
        <p><strong>Distance:</strong> ${distance} km</p>
        <p><strong>Elevation Gain:</strong> ${elevation} m</p>
      </div>
    `;

      // Add the activity card to the gallery
      gallery.appendChild(activityCard);
    };

    reader.readAsDataURL(imageInput);

    // Reset the form
    document.getElementById("activity-form").reset();
  });
