const weddingDate = new Date('September 26, 2024 15:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // 24 hours in a day
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); // Calculate seconds

    // Update the DOM
    document.getElementById('days').innerHTML = days + " <span>kun</span>";
    document.getElementById('hours').innerHTML = hours + " <span>soat</span>";
    document.getElementById('minutes').innerHTML = minutes + " <span>daqiqalar</span>";
    document.getElementById('seconds').innerHTML = seconds + " <span>soniyalar</span>";

    // If the countdown is over
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "To'y boshlandi!";
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);