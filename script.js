function main() {
  let hrs = document.getElementById("hours");
  let mins = document.getElementById("minutes");
  let secs = document.getElementById("seconds");
  let meridian = document.getElementById("ampm");
  let soke = document.getElementById("fun");
  const today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes().toString().padStart(2, "0");
  let seconds = today.getSeconds().toString().padStart(2, "0");

  const ispm = hours >= 12;
  if (hours > 12) hours = hours - 12;
  else if (hours == 0) {
    hours = 12;
  }

  const ampm = ispm ? "PM" : "AM";

  hrs.textContent = hours;
  mins.textContent = minutes;
  secs.textContent = seconds;
  meridian.textContent = ampm;
}

setInterval(main, 1000);

fetch(
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single"
)
  .then((response) => response.json())
  .then((values) => {
    
    const disp = document.getElementById("fun")
    disp.textContent = values.joke
  })
  .catch((error) => console.log(error));


console.log(soke);
