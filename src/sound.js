'use strict';

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 65 /* a */) {
    document.getElementById("bell").play();
  } else if (e.keyCode == 83 /* s */) {
    document.getElementById("partyhorn").play();
  } else if (e.keyCode == 68 /* d */) {
    document.getElementById("airhorn").play();
  }
});
