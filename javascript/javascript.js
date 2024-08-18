function updateCountdown() {
    const now = new Date();

    let date=now.getDate();
    let month=now.getMonth()+1;
    let year=now.getFullYear();
    document.getElementById("date").innerHTML=date+" / "+month+" / "+year
    document.getElementById("time").innerHTML=now.getHours()+" : "+ now.getMinutes()+" : "+now.getSeconds();

    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

    const timeDiff = newYear - now;
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = `${days} Days`;
    document.getElementById('hours').textContent = `${hours} Hours`;
    document.getElementById('minutes').textContent = `${minutes} Minutes`;
    document.getElementById('seconds').textContent = `${seconds} Seconds`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();




//

