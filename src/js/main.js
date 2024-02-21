document.addEventListener("DOMContentLoaded", function () {
  
  
    // Pause Audio Function
  // function pauseAudio(event) {
  //     document.getElementById("my_audio").pause();
  //     console.log('Shaadi me pakka aana');
  //     event.stopPropagation();
  // }

  // Set the date we're counting down to
  const countDownDate = new Date("April 18, 2024 00:00:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = `<div class='container'>
            <div class='days block'>${days}<br>Days</div>
            <div class='hours block'>${hours}<br>Hours</div>
            <div class='minutes block'>${minutes}<br>Minutes</div>
            <div class='seconds block'>${seconds}<br>Seconds</div></div>`;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "Wedding Completed !!";
    }
  }, 1000);

  // Console Logs with Styles
  const styles = [
    "background: linear-gradient(#D33106, #571402)",
    "border: 4px solid #3E0E02",
    "color: white",
    "display: block",
    "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
    "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
    "line-height: 40px",
    "text-align: center",
    "font-weight: bold",
    "font-size: 32px",
  ].join(";");
  const styles1 = [
    "color: #FF6C37",
    "display: block",
    "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
    "line-height: 40px",
    "font-weight: bold",
    "font-size: 32px",
  ].join(";");
  const styles2 = [
    "color: teal",
    "display: block",
    "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
    "line-height: 40px",
    "font-weight: bold",
    "font-size: 32px",
  ].join(";");

  console.log("\n\n%c SAVE THE DATE: 18th April, 2024", styles);
  console.log(
    "%cYour presence is requested!%c\n\nRegards: Suresh Kumar",
    styles1,
    styles2
  );
  console.log(
    `%c शादी में जलूल जलूल आना होगा \n\n`,
    "color: yellow; background:tomato; font-size: 24pt; font-weight: bold"
  );
});


