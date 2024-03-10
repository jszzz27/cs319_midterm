fetch("./beer.json")
    .then((response) => response.json())
    .then((myBeers) => loadBeers(myBeers))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadBeers(myBeers) {
    // Find the element with ID "col" in your HTML
    var CardBeer = document.getElementById("col");
    var cards = [];

    // Read every beer from the array
    for (var i = 0; i < myBeers.beers.length; i++) {
        let title = myBeers.beers[i].title;
        let url = myBeers.beers[i].url;
        let itemLink = myBeers.beers[i].itemLink;

        let card = "card" + i.toString();

        // Create a new HTML div element
        let AddCardBeer = document.createElement("div");

        // Add class "col" to the new division for Bootstrap
        AddCardBeer.classList.add("col");

        // Create a Bootstrap card
        AddCardBeer.innerHTML = `
            <div id="${card}" class="card shadow-sm">
                <img src="${url}" class="card-img-top" width="100px" height="400px" class="center"></img>
                <div class="card-body d-flex justify-content-between align-items-center">
                    <p class="card-text"><strong>${title}</strong></p>
                    <a href="${itemLink}">View</a> <!-- Use the dynamic URL -->
                </div>
            </div>
        `;

        // Append the new division to the container
        CardBeer.appendChild(AddCardBeer);

        // Store the card element in the 'cards' array
        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    } // end of for

    console.log(cards);
} // end of function