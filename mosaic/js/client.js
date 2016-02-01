var image = new Image();
image.onload = cutImageUp;
image.setAttribute('crossOrigin', 'anonymous');
image.src = 'test.jpg';

var widthOfOnePiece = 16;
var heightOfOnePiece = 16;
var numColsToCut = 100;
var numRowsToCut = 100;

function cutImageUp() {
    var imagePieces = [];
    for(var x = 0; x < numColsToCut; ++x) {
        for(var y = 0; y < numRowsToCut; ++y) {
            var canvas = document.createElement('canvas');
            canvas.width = widthOfOnePiece;
            canvas.height = heightOfOnePiece;
            var context = canvas.getContext('2d');
            context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }

    // imagePieces now contains data urls of all the pieces of the image

    // load one piece onto the page
    var anImageElement = document.getElementById('myImageElementInTheDom');
    anImageElement.src = imagePieces[0];
}
