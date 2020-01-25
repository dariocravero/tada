// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
//

let myCanvas = document.createElement('canvas')
myCanvas.style.width = '100vw'
myCanvas.style.height = '100vh'
document.body.appendChild(myCanvas)

let myConfetti = window.confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
})
setInterval(() => {
  myConfetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2,
    },
  })
}, 2500)
