const productList = [{
        photo: "assets/images/red_bag.png",
        name: "Bag With Shoe Compartment Red",
        price: 500
    },
    {
        photo: "assets/images/lifting_straps.png",
        name: "Lifting Straps With Hook",
        price: 700
    },
    {
        photo: "assets/images/leather.png",
        name: "Leather Belt Brown 115cm",
        price: 900
    },
    {
        photo: "assets/images/biceps.png",
        name: "Handmade Arm Blaster Biceps Black",
        price: 300
    },
    {
        photo: "assets/images/smart_shaker_black.png",
        name: "Smart Shaker 550ml Black Clear",
        price: 1200
    },
    {
        photo: "assets/images/shaker.png",
        name: "Shaker 1000ml Black Smoke",
        price: 1500
    },
    {
        photo: "assets/images/smart_shaker_blue.png",
        name: "Smart Shaker 550Ml Clear Blue",
        price: 400
    },
    {
        photo: "assets/images/thermos_bottle.png",
        name: "Army Stainless Thermos Bottle 400ml Army Green",
        price: 800
    },
    {
        photo: "assets/images/black_bag.png",
        name: "Bag With Shoe Compartment Black",
        price: 200
    },
    {
        photo: "assets/images/blue_bag.png",
        name: "Bag With Shoe Compartment Blue",
        price: 100
    }
];

function limitWords(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
    }
    return text;
}

const productContainer = document.getElementById("productContainer");

let cardNumber = 23;

productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "card overflow-hidden rounded-4 border-0 m-3";

    const imageDiv = document.createElement("div");
    imageDiv.className = "d-flex justify-content-center pt-3 z-1";
    const image = document.createElement("img");
    image.src = product.photo;
    imageDiv.appendChild(image);

    const contentBox = document.createElement("div");
    contentBox.className = "contentBox d-flex flex-column align-items-center py-3";
    const productName = document.createElement("h3");
    productName.textContent = limitWords(product.name, 5);
    const productPrice = document.createElement("h2");
    productPrice.className = "price";
    productPrice.textContent = product.price + " $";
    const buyLink = document.createElement("a");
    buyLink.href = "productdetails.html?card=" + cardNumber;
    buyLink.className = "buy";
    buyLink.textContent = "Buy Now";

    contentBox.appendChild(productName);
    contentBox.appendChild(productPrice);
    contentBox.appendChild(buyLink);

    card.appendChild(imageDiv);
    card.appendChild(contentBox);

    productContainer.appendChild(card);
    cardNumber++;
});