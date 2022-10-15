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
const rusprior_rusbtn = document.getElementById("rusprior_rus-btn");
rusprior_rusbtn.onclick = function () {
  const contentToCopy = document.getElementById("rusprior_rus").innerText;
  navigator.clipboard.writeText(contentToCopy).then(
    function () {
      console.log("Copied to clipboard.");
    },
    function (err) {
      console.error("Unable to copy ", err);
    }
  );
};
const rusprior_engbtn = document.getElementById("rusprior_eng-btn");
rusprior_engbtn.onclick = function () {
  const contentToCopy = document.getElementById("rusprior_eng").innerText;
  navigator.clipboard.writeText(contentToCopy).then(
    function () {
      console.log("Copied to clipboard.");
    },
    function (err) {
      console.error("Unable to copy ", err);
    }
  );
};
