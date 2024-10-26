function trackItem(event) {
  event.preventDefault(); // Prevents the form from submitting the traditional way

  const trackingNumber = document.getElementById('trackingNumber').value.trim();
  if (trackingNumber === "") {
      alert("Please enter a tracking number.");
      return;
  }

  // Use a tracking service URL, like 17Track
  const trackingURL = `https://www.17track.net/en/track?nums=${trackingNumber}`;

  // Redirect the user to the tracking URL
  window.open(trackingURL, "_blank");
}
