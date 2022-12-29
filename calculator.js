var textValue = document.getElementById("screen");
var buttons = document.getElementsByTagName("button");
      console.log("dsa",textValue.value);

      function display(id) {
        textValue.value += id;
      }
      let symboles = ["+", "-", "*", "/"];
      function overRide(textValues) {
        const lastchar = textValues.slice(-1);
        console.log("last", lastchar);
        const secondLast = textValues[textValues.length - 2];
        console.log("slast", secondLast);
        let oprators = symboles.includes(lastchar);
        // console.log(oprators);
        if (oprators) {
          // console.log(symboles.includes(lastchar));
          var newValue = "";
          if (lastchar === secondLast) {
            console.log("values", textValues);
            newValue = textValues.slice(0, -1);
            textValue.value = newValue;
          } else {
            if (symboles.includes(secondLast)) {
              newValue = textValues.slice(0, -2);
              newValue += lastchar;
              textValue.value = newValue;
            }
          }
        }
        // console.log("btn1",textValue.value.slice(-1));
        return textValues;
      }
      document.addEventListener("keyup", (e) => {
        let valueButton = e.key;
        console.log(e.key);
        console.log("dv",valueButton);
        console.log("val",textValue.value);
        overRide(textValue.value);
        let exp = textValue.value;
        if (valueButton == "Enter") {
          let val = exp.slice(-1);
          if (symboles.includes(val)) {
            alert(val + " " + "is invalid");
          }
          let num = eval(textValue.value);
           Number(num) === num && num % 1 === 0 ? textValue.value = num : textValue.value = num.toFixed(2)
        }
      });
      document.addEventListener("click", (e) => {
        let buttonValue = e.target.innerText;
        overRide(textValue.value);
        if (buttonValue == "=") {
            let val = textValue.value.slice(-1);
            if (symboles.includes(val)) {
              alert(val + " " + "is invalid");
            }
          let num = eval(textValue.value);
           Number(num) === num && num % 1 === 0 ? textValue.value = num : textValue.value = num.toFixed(2)
          // textValue.value = num;
          // console.log(textValue.value);
        }
      });
      function blockSpecialChar(e) {
        var x = e.which || e.keycode;
        if (x >= 42 && x <= 57) return true;
        else return false;
      }
      function lastclear() {
        textValue.value = textValue.value.substring(0,textValue.value.length - 1);
      }
      function textClear() {
        textValue.value = "";
      }