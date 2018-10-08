var playing = true;

function play() {
  const audioDogSong = document.getElementById("dog-audio");
  console.log(event.target);
  console.log("play function called", playing);
  if (playing === true) {
    audioDogSong.play(); 
  } else {
    audioDogSong.pause();
  } 
  // same If/Else in ternary function:
  // playing ? audioDogSong.play() : audioDogSong.pause();
  playing = !playing;
}

function pause() {
  const audioDogSong = document.getElementById("dog-audio");
  console.log('pause function called', playing);
  if (event.target.nodeName !== "IMG") {
    audioDogSong.pause();
    playing = true;
  }
}

function howToDog() {
  window.open('https://www.boredpanda.com/how-to-be-a-dog-last-lemon/?utm_source=google&utm_medium=organic&utm_campaign=organic','popup','width=400,height=400')
}

function whatIsDog() {
  window.open('https://www.dkfindout.com/us/animals-and-nature/dogs/what-is-dog/', 'popup','width=400,height=400')
}

function dogFacts() {
  window.open('https://www.petassure.com/new-newsletters/50-fascinating-facts-about-dogs/', 'popup','width=400,height=400')
}
