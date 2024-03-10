fetch("./soda.json")
    .then((response) => response.json())
    .then((mySodas) => loadSodas(mySodas))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadSodas(mySodas) {
    // Find the element with ID "col" in your HTML
    var CardSoda = document.getElementById("col");
    var cards = [];

    // Read every Soda from the array
    for (var i = 0; i < mySodas.sodas.length; i++) {
        let title = mySodas.sodas[i].title;
        let url = mySodas.sodas[i].url;
        let itemLink = mySodas.sodas[i].itemLink;

        let card = "card" + i.toString();

        // Create a new HTML div element
        let AddCardSoda = document.createElement("div");

        // Add class "col" to the new division for Bootstrap
        AddCardSoda.classList.add("col");

        // Create a Bootstrap card
        AddCardSoda.innerHTML = `
            <div id="${card}" class="card shadow-sm">
                <img src="${url}" class="card-img-top" width="100px" height="300px" class="center"></img>
                <div class="card-body d-flex justify-content-between align-items-center">
                    <p class="card-text"><strong>${title}</strong></p>
                    <a href="${itemLink}">View</a> <!-- Use the dynamic URL -->
                </div>
            </div>
        `;

        // Append the new division to the container
        CardSoda.appendChild(AddCardSoda);

        // Store the card element in the 'cards' array
        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    } // end of for

    console.log(cards);
} // end of function