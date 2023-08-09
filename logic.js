 const targetDate = new Date();
 targetDate.setDate(targetDate.getDate() + 24);

 function updateCountdown() {
     const now = new Date();
     const timeDifference = targetDate.getTime() - now.getTime();

     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     const dayElement = document.getElementById('day');
     const hourElement = document.getElementById('hour');
     const minElement = document.getElementById('min');
     const secElement = document.getElementById('sec');

     dayElement.children[0].textContent = formatTime(days);
     hourElement.children[0].textContent = formatTime(hours);
     minElement.children[0].textContent = formatTime(minutes);
     secElement.children[0].textContent = formatTime(seconds);

     setTimeout(updateCountdown, 1000);
 }

 function formatTime(time) {
     return time < 10 ? '0' + time : time;
 }

 // Call the function to start the countdown
 updateCountdown();