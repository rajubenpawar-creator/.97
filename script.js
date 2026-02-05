function openTool() {
  alert("Tool coming soon 🚀");
}

function compressImage() {
  const input = document.getElementById("imageInput");
  const quality = document.getElementById("quality").value / 100;
  const downloadLink = document.getElementById("downloadLink");

  if (!input.files.length) {
    alert("Please select an image");
    return;
  }

  const file = input.files[0];
  const img = new Image();
  const reader = new FileReader();

  reader.onload = function (e) {
    img.src = e.target.result;
  };

  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    canvas.toBlob(
      function (blob) {
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = "compressed-image.jpg";
        downloadLink.style.display = "block";
        downloadLink.innerText = "Download Compressed Image";
      },
      "image/jpeg",
      quality
    );
  };

  reader.readAsDataURL(file);
}
