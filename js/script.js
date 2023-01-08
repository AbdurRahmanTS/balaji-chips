const bigImage = document.getElementById("big-chips");
let quantity = document.getElementById("value");


document.querySelector("#increase").addEventListener("click", () => changeValue("increase"));
document.querySelector("#decrease").addEventListener("click", () => changeValue("decrease"));


document.querySelector("#shopping-cart-btn").addEventListener("click", showAddCartItems);


document.querySelector("#flaming-chips").addEventListener("click", () => orderedChips("flaming"));
document.querySelector("#tomato-chips").addEventListener("click", () => orderedChips("tomato"));
document.querySelector("#crunchex-chips").addEventListener("click", () => orderedChips("crunchex"));



function orderedChips(chips) {
    if(chips === "flaming") {
        bigImage.src= "img/big_chips_1.png";
        bigImage.alt="Flaming Hot Chips Image";
    }

    if(chips === "tomato") {
        bigImage.src= "img/big_chips_2.png";
        bigImage.alt="Tomato Twist Chips Image";
    }

    if(chips === "crunchex") {
        bigImage.src= "img/big_chips_3.png";
        bigImage.alt="Crunchex Chilli Chips Image";
    }
    
}



function changeValue(type) {
    if (type === "increase") {
        const total = Number(quantity.value) + 1;
        quantity.value = total;
    }

    if (type === "decrease") {
        if(Number(quantity.value) === 0) {
            alert("Don't clicked.");
        } else {
            const total = Number(quantity.value) - 1;
            quantity.value = total;
        }   
    }
}



function showAddCartItems() {
    if (quantity.value <= 1) {
        addCartChips("item")
    } else {
        addCartChips("items")
    }
}



function addCartChips(text) {
    if(bigImage.alt === "Flaming Hot Chips Image") {
        return alert(`You ordered ${quantity.value} ${text} Flaming Hot chips.`);
    }

    if(bigImage.alt === "Tomato Twist Chips Image") {
        return alert(`You ordered ${quantity.value} ${text} Tomato Twist chips.`);
    }

    if(bigImage.alt === "Crunchex Chilli Chips Image") {
        return alert(`You ordered ${quantity.value} ${text} Crunchex Chilli chips.`);
    }
}