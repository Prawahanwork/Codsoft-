let box = document.getElementById("box");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    switch (value) {
      case "AC":
        box.value = "";
        break;
      case "DEL":
        box.value = box.value.slice(0, -1);
        break;
      case "=":
        try {
          let result = box.value
            .replace(/π/g, Math.PI)
            .replace(/√/g, "Math.sqrt")
            .replace(/(\d+)\^2/g, "Math.pow($1,2)");
          box.value = eval(result);
        } catch (err) {
          box.value = "Error";
        }
        break;
      case "π":
        box.value += "π";
        break;
      case "√":
        box.value += "√(";
        break;
      default:
        box.value += value;
    }
  });
});
