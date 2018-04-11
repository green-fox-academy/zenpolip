'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ozora&api_key=1Hg0JBFrjate7ydjxKBIbM2LeofuENhA&limit=16', true);
xhr.onload = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let content = JSON.parse(xhr.responseText).data;
    content.forEach(function (item) {
      displayGiphies(item);
    });
  console.log(content);
  }
  else {
    console.log('Connection failed!');
  }
};
xhr.send();

function displayGiphies(item) {
  let image = document.createElement('img');
  let picture = document.createElement("picture");

  image.src = item.images.fixed_height_still.url;
  document.body.appendChild(image);

  image.addEventListener('click', function () {
    image.src = item.images.original.url;
  });

  image.addEventListener('mouseout', function () {
    image.src = item.images.fixed_height_still.url;
  });

  // picture.appendChild(image);

  // image.addEventListener("click", function (event) {
  //   if (selectedPic.src === item.images.original.url) {
  //     selectedPic.src = item.images.downsized_still.url;
  //   } else {
  //     selectedPic.src = item.images.original.url;
  //   }
  // });

  // image.addEventListener("click", function (event) {
  //   event.target.src = item.images.original.url;
  // });

  // image.addEventListener("mouseout", function (event) {
  //   event.target.src = item.images.downsized_still.url;
  // });
};
