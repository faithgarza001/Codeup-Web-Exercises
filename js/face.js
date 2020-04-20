const video = document.getElementById('video')

// promise.all([
//     faceapi.nets.tnyFaceDetector.loadFromUrl('/models'),
// ]).then(startVideo)

function startVideo() {
    navigator.getUserMedia(
    {video:{} },
        stream => video.srcObject = stream,error => console.error(error)
)
                     }
                      startVideo()