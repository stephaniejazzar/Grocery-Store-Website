
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
    {
        name: "brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 10.51
    },

    {
        name: "carrot",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.52
    },

    {
        name: "flour",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 3.55
    },

    {
        name: "chicken",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 7.55
    },

    {
        name: "chips",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.55
    },

    {
        name: "lettuce",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 2.17
    },

    {
        name: "apple",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.11
    },
    {
        name: "strawberries",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.29
    },
    {
        name: "cookies",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        price: 1.59
    }


];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
var product_names = [];
var priceList = [];



// sort by price inspired by : http://www.javascriptkit.com/javatutors/arraysort2.shtml
products.sort(function(a, b){
    return a.price-b.price
})


function restrictListProducts(prods, restriction) {

    for (let i = 0; i < prods.length; i++) {
        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
            product_names.push(prods[i]);
        } else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            product_names.push(prods[i]);
        } else if (restriction == "None") {
            product_names.push(prods[i]);
        }

    }

    let productOrganic = [];

        for (let i = 0; i < product_names.length; i++) {
            if ((restriction == "Organic") && (product_names[i].organic == true)) {
                productOrganic.push(product_names[i].name);
                priceList.push(product_names[i].price);

            }else if ((restriction == "Not Organic") && (product_names[i].organic == false)) {
                productOrganic.push(product_names[i].name);
                priceList.push(product_names[i].price);

            }
        }



    return productOrganic;
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i=0; i<products.length; i+=1) {
        if (chosenProducts.indexOf(products[i].name) > -1){
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}
