let clear = document.getElementById("clear");
let screen = document.getElementById("scrn");
let deletes = document.getElementById("delete");
let percentage = document.getElementById("percent");
let operations = document.getElementById("operaion")

const clearScreen = () => {
    clear.addEventListener("click", () => {
        screen.value = " ";
    })
}
clearScreen();
const display = (val) => {
    screen.value += val;
}

const deleteNum = () => {
    let deletes = document.getElementById("delete");
    deletes.addEventListener("click", () => {
        let del = screen.value.substr(0, screen.value.length - 1);
        screen.value = del;
    })
}
deleteNum();

const solve = () => {
    // if(operations = operations) {
    //     alert("Please 2 operations cant be used at the same time")
    // }
    let x = document.getElementById("scrn").value;
    let y = eval(x);
    document.getElementById("scrn").value = y;
}

// getFormatedNumber();
// const insertZero = () => {
//     ac.addEventListener("click", () => {
//         // screen.value = ; 
//     })
// }
// insertZero()

