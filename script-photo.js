function loadPhoto(e) {
  e.preventDefault();
  // get form values
  let width = document.getElementById('width').value;
  let height = document.getElementById('height').value;
  let grayscale = document.getElementById('grayscale').checked;
  let blur = document.getElementById('blur').checked;
  let blurAmount = document.getElementById('blurAmount').value;
  let random = Math.floor(Math.random() * 10000);
debugger
  // check if width is empty
  if (width === "")
  {
    width = "200";
  }

  // setup URL
  let url = "https://picsum.photos/" + width;
debugger
  if (height !== "")
  {
    url += "/" + height;
  }
  url += "?random=" + random;
debugger
  if (grayscale)
  {
    url += "?grayscale"
  }
  if (blur)
  {
    url += "?blur=" + blurAmount;
  }
  debugger
  updateImage(url);
}

function updateImage(url)
{

  //document.getElementById('image').textContent = url;
  document.getElementById('photo').src = url;
}
document.getElementById('getButton').addEventListener('click', loadPhoto);
