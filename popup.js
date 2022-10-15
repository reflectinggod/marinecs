const p110btn = document.getElementById("p110-btn");
p110btn.onclick = function () {
  const contentToCopy = document.getElementById("p110").innerText;
  navigator.clipboard.writeText(contentToCopy).then(
    function () {
      console.log("Copied to clipboard.");
    },
    function (err) {
      console.error("Unable to copy ", err);
    }
  );
};
const ruspriorbtn = document.getElementById("rusprior-btn");
ruspriorbtn.onclick = function () {
  const contentToCopy = document.getElementById("rusprior").innerText;
  navigator.clipboard.writeText(contentToCopy).then(
    function () {
      console.log("Copied to clipboard.");
    },
    function (err) {
      console.error("Unable to copy ", err);
    }
  );
};
