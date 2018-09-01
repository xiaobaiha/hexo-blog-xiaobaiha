var interval;
loadImage = img => {
  const screenHeight = document.documentElement.clientHeight;
  const imgRect = img.getBoundingClientRect();
  const imgHeight = imgRect.top;
  if (imgHeight < screenHeight) {
    img.src = img.getAttribute("data-src");
    img.removeAttribute("data-src");
  }
};
checkImage = () => {
  console.log("enter scroll");
  const imgNode = Array.from(document.querySelectorAll("img[data-src]"));
  imgNode.forEach(img => {
    loadImage(img);
  });
};
window.onscroll = () => {
  interval && clearTimeout(interval);
  interval = setTimeout(checkImage, 500);
};
window.onload = () => {
  const imgArr = Array(52)
    .fill(0)
    .map((e, index) => "./imgs/" + (index + 1) + ".jpg");
  const node = document.getElementById("root");
  node.innerHTML = imgArr
    .map(
      item => `
    <div style="display:inline-block">
      <img style="width: 300px" src="./default.jpg" data-src="${item}" />
    </div>
  `
    )
    .join("");
  setTimeout(checkImage, 0);
};
