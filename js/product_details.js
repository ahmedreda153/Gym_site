function getCardNumberFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('card');
}

function getCardNumberFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('card');
}

const productListDetails = {
    1: {
        photo: "assets/images/360_protein.png",
        name: "360 Protein Powder 1170G Chocolate",
        price: 500,
        weight: "1170G",
        flavor: "Chocolate",
        information: "Powder"
    },
    2: {
        photo: "assets/images/add_whey.png",
        name: "Add Whey Protein Powder 2.27Kg Chocolate",
        price: 700,
        weight: "2.27Kg",
        flavor: "Chocolate",
        information: "Powder"
    },
    3: {
        photo: "assets/images/dymatize.png",
        name: "Dymatize ISO100 2.3Kg Birthday Cake",
        price: 900,
        weight: "2.3Kg",
        flavor: "Birthday Cake",
        information: "Powder"
    },
    4: {
        photo: "assets/images/max_whey.png",
        name: "Max Whey 1050G French Triple Chocolate",
        price: 300,
        weight: "1050G",
        flavor: "French Triple Chocolate",
        information: "Powder"
    },
    5: {
        photo: "assets/images/gain_add.png",
        name: "Gain Add 5.44Kg Strawberry",
        price: 1200,
        weight: "5.44Kg",
        flavor: "Strawberry",
        information: "Powder"
    },
    6: {
        photo: "assets/images/gainz.png",
        name: "Max Pro Gainz 11Kg Vanilla",
        price: 1500,
        weight: "11Kg",
        flavor: "Vanilla",
        information: "Powder"
    },
    7: {
        photo: "assets/images/carb_add.png",
        name: "Carb Add 1.5Kg Blueberry",
        price: 400,
        weight: "1.5Kg",
        flavor: "Blueberry",
        information: "Powder"
    },
    8: {
        photo: "assets/images/mass_core.png",
        name: "Mass Core 7Kg Snikers",
        price: 800,
        weight: "7Kg",
        flavor: "Snikers",
        information: "Powder"
    },
    9: {
        photo: "assets/images/max_creatine.png",
        name: "Creatine HCL 270G Watermelon",
        price: 200,
        weight: "270G",
        flavor: "Watermelon",
        information: "Powder"
    },
    10: {
        photo: "assets/images/redrex_creatine.png",
        name: "Redrex Creatine 300G Unflavored",
        price: 100,
        weight: "300G",
        flavor: "Unflavored",
        information: "Powder"
    },
    11: {
        photo: "assets/images/creatine_hcl.png",
        name: "Creatine HCL 120G Buuble Gum",
        price: 50,
        weight: "120G",
        flavor: "Bubble Gum",
        information: "Powder"
    },
    12: {
        photo: "assets/images/beta_alanine.png",
        name: "Nutrition Beta Alanine 80Tabs",
        price: 500,
        weight: null,
        flavor: "Unflavored",
        information: "Tablets"
    },
    13: {
        photo: "assets/images/vapor.png",
        name: "MuscleTech Vapor X5 228G Fruit Punch",
        price: 700,
        weight: "228G",
        flavor: "Fruit Punch",
        information: "Powder"
    },
    14: {
        photo: "assets/images/lyte_speed.png",
        name: "Lyte Speed 1.1Kg Lemon Mint",
        price: 900,
        weight: "1.1Kg",
        flavor: "Lemon Mint",
        information: "Powder"
    },
    15: {
        photo: "assets/images/beta_alanine_3200.png",
        name: "Beta Alanine 3200Mg 96G",
        price: 300,
        weight: "96G",
        flavor: "Unflavored",
        information: "Tablets"
    },
    16: {
        photo: "assets/images/muscletech_alpha_test.png",
        name: "MuscleTech Alpha Test 120Caps",
        price: 1200,
        weight: null,
        flavor: "Unflavored",
        information: "Capsules"
    },
    17: {
        photo: "assets/images/now_melatonin.png",
        name: "Now Foods Horny Goat 750mg 90Caps",
        price: 1500,
        weight: "750mg",
        flavor: "Unflavored",
        information: "Capsules"
    },
    18: {
        photo: "assets/images/ZMA.png",
        name: "Now Sports ZMA 90Caps",
        price: 400,
        weight: null,
        flavor: "Unflavored",
        information: "Capsules"
    },
    19: {
        photo: "assets/images/BBP.png",
        name: "Premium Pump Booster 120Caps",
        price: 800,
        weight: null,
        flavor: "Unflavored",
        information: "Capsules"
    },
    20: {
        photo: "assets/images/pride_melatonin.png",
        name: "Puritan’s Pride Melatonin 3Mg 120Tabs",
        price: 200,
        weight: "3Mg",
        flavor: "Unflavored",
        information: "Tablets"
    },
    21: {
        photo: "assets/images/m-stak.png",
        name: "Universal Animal M-stak 21Packs",
        price: 100,
        weight: "21Packs",
        flavor: "Unflavored",
        information: "Packs"
    },
    22: {
        photo: "assets/images/gh_max.png",
        name: "Universal GH Max 180Tabs",
        price: 50,
        weight: null,
        flavor: "Unflavored",
        information: "Tablets"
    },
    23: {
        photo: "assets/images/red_bag.png",
        name: "Bag With Shoe Compartment Red",
        price: 500,
        weight: null,
        flavor: "Unflavored",
        information: "Accessory"
    },
    24: {
        photo: "assets/images/lifting_straps.png",
        name: "Lifting Straps With Hook",
        price: 700,
        weight: null,
        flavor: "Unflavored",
        information: "Accessory"
    },
    25: {
        photo: "assets/images/leather.png",
        name: "Leather Belt Brown 115cm",
        price: 900,
        weight: "115cm",
        flavor: null,
        information: "Accessory"
    },
    26: {
        photo: "assets/images/biceps.png",
        name: "Handmade Arm Blaster Biceps Black",
        price: 300,
        weight: null,
        flavor: "Unflavored",
        information: "Accessory"
    },
    27: {
        photo: "assets/images/smart_shaker_black.png",
        name: "Smart Shaker 550ml Black Clear",
        price: 1200,
        weight: "550ml",
        flavor: "Clear",
        information: "Shaker"
    },
    28: {
        photo: "assets/images/shaker.png",
        name: "Shaker 1000ml Black Smoke",
        price: 1500,
        weight: "1000ml",
        flavor: "Smoke",
        information: "Shaker"
    },
    29: {
        photo: "assets/images/smart_shaker_blue.png",
        name: "Smart Shaker 550Ml Clear Blue",
        price: 400,
        weight: "550ml",
        flavor: "Clear Blue",
        information: "Shaker"
    },
    30: {
        photo: "assets/images/thermos_bottle.png",
        name: "Army Stainless Thermos Bottle 400ml Army Green",
        price: 800,
        weight: "400ml",
        flavor: "Army Green",
        information: "Thermos"
    },
    31: {
        photo: "assets/images/black_bag.png",
        name: "Bag With Shoe Compartment Black",
        price: 200,
        weight: null,
        flavor: "Unflavored",
        information: "Accessory"
    },
    32: {
        photo: "assets/images/blue_bag.png",
        name: "Bag With Shoe Compartment Blue",
        price: 100,
        weight: null,
        flavor: "Unflavored",
        information: "Accessory"
    }
}


const cardNumber = getCardNumberFromUrl();

const productImage = document.getElementById("product-image");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("price");
const productWeight = document.getElementById("product-weight");
const productFlavor = document.getElementById("product-flavor");
const productFormation = document.getElementById("product-formation");

if (cardNumber) {
    const productDetails = productListDetails[cardNumber];
    productImage.src = productDetails.photo;
    productName.textContent = productDetails.name;
    productPrice.textContent = `Price: ${productDetails.price} $`;
    productWeight.textContent = `${productDetails.weight || 'N/A'}`;
    productFlavor.textContent = `${productDetails.flavor || 'Unflavored'}`;
    productFormation.textContent = `${productDetails.information}`;
}