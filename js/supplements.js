const productList = [{
        photo: "assets/images/360_protein.png",
        name: "360 Protein Powder 1170G Chocolate",
        price: 500
    },
    {
        photo: "assets/images/add_whey.png",
        name: "Add Whey Protein Powder 2.27Kg Chocolate",
        price: 700
    },
    {
        photo: "assets/images/dymatize.png",
        name: "Dymatize ISO100 2.3Kg Birthday Cake",
        price: 900
    },
    {
        photo: "assets/images/max_whey.png",
        name: "Max Whey 1050G French Triple Chocolate",
        price: 300
    },
    {
        photo: "assets/images/gain_add.png",
        name: "Gain Add 5.44Kg Strawberry",
        price: 1200
    },
    {
        photo: "assets/images/gainz.png",
        name: "Max Pro Gainz 11Kg Vanilla",
        price: 1500
    },
    {
        photo: "assets/images/carb_add.png",
        name: "Carb Add 1.5Kg Blueberry",
        price: 400
    },
    {
        photo: "assets/images/mass_core.png",
        name: "Mass Core 7Kg Snikers",
        price: 800
    },
    {
        photo: "assets/images/max_creatine.png",
        name: "Creatine HCL 270G Watermelon",
        price: 200
    },
    {
        photo: "assets/images/redrex_creatine.png",
        name: "Redrex Creatine 300G Unflavored",
        price: 100
    },
    {
        photo: "assets/images/creatine_hcl.png",
        name: "Creatine HCL 120G Buuble Gum",
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

let cardNUmber = 1;

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
    buyLink.href = "productdetails.html?card=" + cardNUmber;
    buyLink.className = "buy";
    buyLink.textContent = "Buy Now";

    contentBox.appendChild(productName);
    contentBox.appendChild(productPrice);
    contentBox.appendChild(buyLink);

    card.appendChild(imageDiv);
    card.appendChild(contentBox);

    productContainer.appendChild(card);
    cardNUmber++;
});