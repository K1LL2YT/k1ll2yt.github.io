document.addEventListener('DOMContentLoaded', function () {

    // Countdown Timer Logic
    const eventDate = new Date("2025-03-15T18:00:00Z"); // Set the next event's date and time
    const countdownElement = document.getElementById('countdown');
    const eventNameElement = document.getElementById('event-name');
    const eventDescriptionElement = document.getElementById('event-description');

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "The Event is Live!";
            eventNameElement.textContent = "Retro Rumble Tournament";
            eventDescriptionElement.textContent = "Join the action now!";
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);

    // Initial call to set countdown
    updateCountdown();
});

