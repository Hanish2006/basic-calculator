const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            try {
                if (display.value === "") return;
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
                setTimeout(() => display.value = "", 1500);
            }
        }   
        else {
            display.value += value;
        }
    });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (
        (e.key >= 0 && e.key <= 9) ||
        ["+", "-", "*", "/", "."].includes(e.key)
    ) {
        display.value += e.key;
    }

    if (e.key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});
