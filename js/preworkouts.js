const productList = [{
        photo: "assets/images/beta_alanine.png",
        name: "Nutrition Beta Alanine 80Tabs",
        price: 500
    },
    {
        photo: "assets/images/vapor.png",
        name: "MuscleTech Vapor X5 228G Fruit Punch",
        price: 700
    },
    {
        photo: "assets/images/lyte_speed.png",
        name: "Lyte Speed 1.1Kg Lemon Mint",
        price: 900
    },
    {
        photo: "assets/images/beta_alanine_3200.png",
        name: "Beta Alanine 3200Mg 96G",
        price: 300
    },
    {
        photo: "assets/images/muscletech_alpha_test.png",
        name: "MuscleTech Alpha Test 120Caps",
        price: 1200
    },
    {
        photo: "assets/images/now_melatonin.png",
        name: "Now Foods Horny Goat 750mg 90Caps",
        price: 1500
    },
    {
        photo: "assets/images/ZMA.png",
        name: "Now Sports ZMA 90Caps",
        price: 400
    },
    {
        photo: "assets/images/BBP.png",
        name: "Premium Pump Booster 120Caps",
        price: 800
    },
    {
        photo: "assets/images/pride_melatonin.png",
        name: "Puritan’s Pride Melatonin 3Mg 120Tabs",
        price: 200
    },
    {
        photo: "assets/images/m-stak.png",
        name: "Universal Animal M-stak 21Packs",
        price: 100
    },
    {
        photo: "assets/images/gh_max.png",
        name: "Universal GH Max 180Tabs",
        price: 50
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

let cardNumber = 12;

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