let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #9e1988;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9e1988;">¡TU PROPIA MODA!</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();