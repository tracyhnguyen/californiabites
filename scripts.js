/**
 * California Bites!
 * by: Tracy Nguyen
 * Date: April 9, 2024
*/
// ************************** DATASET **************************

// Restaurant Object Template
class Restaurant {
    constructor(name, price, cuisine, rating, reviewCount, yelpURL, imgURL) {
        this.name = name;
        this.price = price;
        this.cuisine = cuisine;
        this.rating = rating;
        this.reviewCount = reviewCount;
        this.yelpURL = yelpURL;
        this.imgURL = imgURL
    }
}

const dataset = [
    "TROPICALI",                            "$11-30",       "Hawaiian",     4.9,    3194,   "https://www.yelp.com/biz/tropicali-big-bear-lake-2", "https://s3-media0.fl.yelpcdn.com/bphoto/yVWZ5enlU2nQK6HFapO8RQ/o.jpg",
    "ED FERNANDEZ RESTAURANT BIRRIERIA",	"Under $10",    "Mexican",	    4.8,	1193,	"https://www.yelp.com/biz/ed-fernandez-restaurant-birrieria-san-diego", "https://s3-media0.fl.yelpcdn.com/bphoto/70GNL76cfjjFf146lo089A/o.jpg",
    "SANDWICH HOUSE",	                    "Under $10",    "Vietnamese",	4.8,	1781,	"https://www.yelp.com/biz/sandwich-house-cypress", "https://s3-media0.fl.yelpcdn.com/bphoto/-I_R99s-bspYR9ARaiODLg/o.jpg",
    "CESARINA",	                            "$31-60",	    "Italian",	    4.5,	2551,	"https://www.yelp.com/biz/cesarina-san-diego-3", "https://s3-media0.fl.yelpcdn.com/bphoto/SDoXaIOB8ckpCHKq-G4Uzg/o.jpg",
    "CRAFT SMOKE AND FIRE",	                "$31-60",	    "American",	    4.7,	9800,	"https://www.yelp.com/biz/craft-by-smoke-and-fire-anaheim-anaheim", "https://s3-media0.fl.yelpcdn.com/bphoto/_6hmvmHCYmkceAIubq6kzw/o.jpg",
    "FAMOUS BURGERS AND BREW",	            "$31-60",       "American",	    4.7,	2031,	"https://www.yelp.com/biz/famous-burgers-and-brew-rancho-cordova", "https://s3-media0.fl.yelpcdn.com/bphoto/B6MBCcEltHRXgSMSWZcvgQ/o.jpg",
    "SKIP'S KITCHEN",	                    "$31-60",	    "American",	    4.7,	1875,	"https://www.yelp.com/biz/skips-kitchen-carmichael", "https://s3-media0.fl.yelpcdn.com/bphoto/dmapxFQm7NacaRjoOr2IxA/o.jpg",
    "HOWLIN' RAY'S",	                    "$11-30",	    "Southern",	    4.7,	7685,	"https://www.yelp.com/biz/howlin-rays-los-angeles-7", "https://s3-media0.fl.yelpcdn.com/bphoto/N_E_Q6VcfJxj_xhvNyFNzw/o.jpg",
    "MORRISON ATWATER VILLAGE",	            "$11-30",	    "Gastropub",	4.7,	7749,	"https://www.yelp.com/biz/morrison-atwater-village-los-angeles", "https://s3-media0.fl.yelpcdn.com/bphoto/NmNj0i7VMlHDJ7tNFNHDNQ/o.jpg",
    "OLIBOLI DONUTS",	                    "Under $10",    "Donuts",	    4.6,	1446,	"https://www.yelp.com/biz/oliboli-donuts-tustin", "https://s3-media0.fl.yelpcdn.com/bphoto/MQYg5eO2FjfEb5gNF7EH-A/o.jpg",
    "BUNZ",	                                "Under $10",    "Burgers",	    4.6,	1832,	"https://www.yelp.com/biz/bunz-huntington-beach-3", "https://s3-media0.fl.yelpcdn.com/bphoto/8QzFS08eCvp3LkOlN0S02w/o.jpg",
    "GUNTHER'S QUALITY ICE CREAM",	        "Under $10",    "Ice Cream",	4.7,	3586,	"https://www.yelp.com/biz/gunthers-quality-ice-cream-sacramento-2", "https://s3-media0.fl.yelpcdn.com/bphoto/h0_nQyHbJYCKDCuS2Dpk1Q/o.jpg",
    "HIGH STREET MARKET DELI",	            "$11-30",        "Delis",	    4.6,	1577,	"https://www.yelp.com/biz/high-street-market-and-deli-san-luis-obispo", "https://s3-media0.fl.yelpcdn.com/bphoto/9E-K1bbrXCd-b2WyGbfCZA/o.jpg",
    "MAMA D'S ITALIAN KITCHEN",	            "$11-30",	    "Italian",	    4.6,	7041,	"https://www.yelp.com/biz/mama-ds-italian-kitchen-newport-beach", "https://s3-media0.fl.yelpcdn.com/bphoto/KZkG2W6hBRk_dOPwyb6f4g/o.jpg",
    "THE GOAT & VINE",	                    "$11-30",	    "Pizza",	    4.6,	4041,	"https://www.yelp.com/biz/the-goat-and-vine-temecula", "https://s3-media0.fl.yelpcdn.com/bphoto/VMI-q2NnFacMtwWReVvKlw/o.jpg",
    "THE SANDWICH SPOT",	                "$11-30",       "Sandwiches",	4.6,	2201,	"https://www.yelp.com/biz/the-sandwich-spot-palm-springs", "https://s3-media0.fl.yelpcdn.com/bphoto/cZRtER76YB8nxFxrgdN6Hg/o.jpg",
    "GALPAO GUACHO BRAZILIAN STEAKHOUSE",	"$31-60",	    "Brazilian",	4.6,	1895,	"https://www.yelp.com/biz/galp%C3%A3o-gaucho-brazilian-steakhouse-napa-6", "https://s3-media0.fl.yelpcdn.com/bphoto/aArkuo9Wmecm4DT7ZZqT4Q/o.jpg",
    "CREAM PAN",	                        "Under $10",	"Bakeries",	    4.6,	6434,	"https://www.yelp.com/biz/cream-pan-tustin", "https://s3-media0.fl.yelpcdn.com/bphoto/9iwZcYEQZM0bkNalpMmloA/o.jpg",
    "TACOS LOS CHOLOS",	                    "Under $10",	"Mexican",	    4.6,	3573,	"https://www.yelp.com/biz/tacos-los-cholos-anaheim-anaheim", "https://s3-media0.fl.yelpcdn.com/bphoto/-j-o7-rDdzxbAbNnMjULEg/o.jpg",
    "CAROLINE'S CAFE",	                    "$11-30",	    "American",	    4.6,	3267,	"https://www.yelp.com/biz/carolyns-cafe-redlands-2", "https://s3-media0.fl.yelpcdn.com/bphoto/C6z0i-jNdpEvqikZJGuoMA/o.jpg",
    "COPENHAGEN SAUSAGE GARDEN",	        "$11-30",       "Hot Dogs",	    4.6,	2786,	"https://www.yelp.com/biz/copenhagen-sausage-garden-solvang", "https://s3-media0.fl.yelpcdn.com/bphoto/f-vDwhklEJUW7eMrhQOS0g/o.jpg",
    "TACO NAZO",	                        "$11-30",	    "Mexican",	    4.6,	5131,	"https://www.yelp.com/biz/taco-nazo-bellflower-bellflower", "https://s3-media0.fl.yelpcdn.com/bphoto/UBt2UnD87bcCqJr8IMrFZg/o.jpg",
    "HEIRLOOM",	                            "$11-30",	    "New American",	4.6,	2281,	"https://www.yelp.com/biz/heirloom-fresno-2", "https://s3-media0.fl.yelpcdn.com/bphoto/LFqWsYZehODIBs9Ty3IblA/o.jpg",
    "ADA'S FISH HOUSE",	                    "$11-30",	    "Seafood",	    4.6,	1467,	"https://www.yelp.com/biz/ada-s-fish-house-pismo-beach", "https://s3-media0.fl.yelpcdn.com/bphoto/7ED9Ky0wIpp5F_G-nCJsgw/o.jpg",
    "CHEESE BOARD PIZZA",	                "$11-30",	    "Pizzas",	    4.5,	5993,	"https://www.yelp.com/biz/cheese-board-pizza-berkeley", "https://s3-media0.fl.yelpcdn.com/bphoto/QO8fh4pVR-Q0grgHpG49Hw/o.jpg",
    "BAEKJEONG",	                        "$31-60",	    "Korean",	    4.5,	2469,	"https://www.yelp.com/biz/baekjeong-rowland-heights-rowland-heights", "https://s3-media0.fl.yelpcdn.com/bphoto/vuoYQ-UIW4fJ0bFHIK5gTQ/o.jpg",
    "TAR AND ROSES",	                    "$31-60",	    "New American",	4.5,	2642,	"https://www.yelp.com/biz/tar-and-roses-santa-monica", "https://s3-media0.fl.yelpcdn.com/bphoto/iWqd2GWdkAYQkwK6t6PjYw/o.jpg",
    "BAHN THAI",	                        "$11-30",	    "Thai",	        4.5,	3180,	"https://www.yelp.com/biz/bahn-thai-san-diego", "https://s3-media0.fl.yelpcdn.com/bphoto/9xQQqsXFX-4wp6ZrkgbllQ/o.jpg"
]

// Create array of restaurant objects
let restaurants = [];
for (let i = 0; i < dataset.length; i+=7) {
    restaurants.push(new Restaurant(dataset[i], dataset[i+1], dataset[i+2], dataset[i+3], dataset[i+4],
        dataset[i+5], dataset[i+6]));
}

// ************************** CARD FUNCTIONS **************************

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < restaurants.length; ++i) {
        let current = restaurants[i];

        let imageURL = current.imgURL;
        let yelpsURL = current.yelpURL;

        let dollars = current.price;
        if (dollars != "$" & dollars != "$$" & dollars != "$$$" & dollars != "$$$$") {
            let key = new Map();
            key.set("Under $10", "$");
            key.set("$11-30", "$$");
            key.set("$31-60", "$$$");
            key.set("Above $61", "$$$$");

            dollars = key.get(dollars);
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, current.name, dollars, current.cuisine, current.rating, 
            current.reviewCount, imageURL, yelpsURL); // Edit the card information
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

// Set card values
function editCardContent(card, newTitle, newPrice, newCuisine, newRating, 
    newRevCount, newImageURL, newYelpsURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Photo";

    const info = card.querySelector("p")
    info.innerHTML = newPrice + " | " + newCuisine + "<br>"
        + newRating + " stars (" + newRevCount + " reviews)";

    const cardURL = card.querySelector("a");
    cardURL.href = newYelpsURL;

    console.log("new Restaurant:", newTitle, "- html: ", card);
}

// ************************** EVENT LISTENERS **************************

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// ************************** FILTER BUTTON FUNCTIONS **************************
// Sort helper function
function compare(itemA, itemB) {
    if (itemA < itemB) {
        return -1;
    }
    if (itemA > itemB) {
        return 1;
    }
    return 0;
}

function filterByPrice() {
    let key = new Map();
    key.set("Under $10", 1);
    key.set("$11-30", 2);
    key.set("$31-60", 3);
    key.set("Above $61", 4);
    console.log(key.get(restaurants[0].price));
    restaurants.sort((priceOne, priceTwo) => key.get(priceOne.price) - key.get(priceTwo.price));
    showCards();
}

function filterByRating() {
    restaurants.sort((ratingOne, ratingTwo) => {
        if (ratingOne.rating == ratingTwo.rating) {
            let reviewCountA = ratingOne.reviewCount;
            let reviewCountB = ratingTwo.reviewCount;
            return compare(reviewCountB, reviewCountA);
        } else {
            return ratingTwo.rating - ratingOne.rating;
        }
    });
    showCards();
}

function filterByName() {
    restaurants.sort((nameOne, nameTwo) => {
        let nameA = nameOne.name.toLowerCase();
        let nameB = nameTwo.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    showCards();
}

function filterByCuisine() {
    restaurants.sort((cuisineOne, cuisineTwo) => {
        let cuisineA = cuisineOne.cuisine.toLowerCase();
        let cuisineB = cuisineTwo.cuisine.toLowerCase();
        return compare(cuisineA, cuisineB);
    });
    showCards();
}

// ************************** FOOTER BUTTON FUNCTIONS **************************

// Randomizes a restaurant
function randomizer() {
    console.log("Randomizer Clicked!")
    const randomNum = Math.floor(Math.random() * 28) + 1;
    alert("Check out " + restaurants[randomNum].name + " with a rating of "
        + restaurants[randomNum].rating + " stars!");
}

// Adds a restaurant card
function addACard() {
    console.log("Add a Card clicked!");
    let newName = prompt("Enter restaurant name: ").toUpperCase();

    // if no input entered, try again?
    if (newName == "") {
        if (confirm("You didn't enter a restaurant.\nTry again?"))
        {
            removeACard();
        } else {
            console.log("Try again cancelled.");
        }

    // if input provided, proceed to add
    }else if (newName != null) {
        let newPrice = 
            prompt("Enter the price (in \"$\"): \n$ (Under $10)    $$ ($11-30)\n$$$ ($31-60)     $$$$ ($60+)");
        let newCuisine = prompt("Enter cuisine: ").toUpperCase();
        let newRating = prompt("Enter rating (stars): ");
        let newReviewCount = prompt("Enter review count: ");
        let newYelp = prompt("Enter Yelp Link (optional, leave blank): ");
        let newImg = prompt("Enter restaurant photo (optional, leave blank): ");
        if (newYelp == "" || newYelp == null) {
            newYelp = "https://www.yelp.com";
        }
        if (newImg == "" || newImg == null) {
            newImg = "pizza.png";
        }

        // create restaurant card
        restaurants.push(new Restaurant(newName, newPrice, newCuisine, newRating, newReviewCount, newYelp, newImg))
        showCards(); // Call showCards again to refresh        

    // operation cancelled
    } else {
        console.log("Cancelled");
    }
}

// Removes a restaurant based on the name the user picked
function removeACard() {
    console.log("Remove a Card clicked!");
    let input = prompt("Enter restaurant name to remove: ");

    // if no input entered, try again?
    if (input == "") {
        if (confirm("You didn't enter a restaurant.\nTry again?"))
        {
            removeACard();
        } else {
            console.log("Try again cancelled.");
        }

    // if input provided, proceed to remove
    }else if (input != null) {
        let upperInput = input.toUpperCase();
        let i = 0;
        let found = false;
        while (i<restaurants.length & !found) {
            if (restaurants[i].name == upperInput) {
                found = true;
            }
            i++;
        }
        if (found) {
            restaurants.splice(i-1, 1);
        }

        showCards(); // Call showCards again to refresh

    // operation cancelled
    } else {
        console.log("Cancelled");
    }
}

function removeLastCard() {
    restaurants.pop(); // Remove last item in restaurants array
    showCards(); // Call showCards again to refresh
}