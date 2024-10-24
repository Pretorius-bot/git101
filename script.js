document.querySelector('.tracking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const trackingNumber = document.querySelector('.tracking-input').value;
    if (trackingNumber) {
      alert(`Tracking number ${trackingNumber} is being processed`);
    } else {
      alert('Please enter a tracking number');
    }
  });
  