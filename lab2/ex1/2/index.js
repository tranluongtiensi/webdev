function selected() {
    var copyText = document.getElementById("Input");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  } 