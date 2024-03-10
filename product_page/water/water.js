fetch("./water.json")
    .then((response) => response.json())
    .then((myWaters) => loadWaters(myWaters))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadWaters(myWaters) {
    // Find the element with ID "col" in your HTML
    var CardWater = document.getElementById("col");
    var cards = [];

    // Read every Water from the array
    for (var i = 0; i < myWaters.waters.length; i++) {
        let title = myWaters.waters[i].title;
        let url = myWaters.waters[i].url;
        let itemLink = myWaters.waters[i].itemLink;

        let card = "card" + i.toString();

        // Create a new HTML div element
        let AddCardWater = document.createElement("div");

        // Add class "col" to the new division for Bootstrap
        AddCardWater.classList.add("col");

        // Create a Bootstrap card
        AddCardWater.innerHTML = `
            <div id="${card}" class="card shadow-sm">
                <img src="${url}" class="card-img-top" width="100px" height="300px" class="center"></img>
                <div class="card-body d-flex justify-content-between align-items-center">
                    <p class="card-text"><strong>${title}</strong></p>
                    <a href="${itemLink}">View</a> <!-- Use the dynamic URL -->
                </div>
            </div>
        `;

        // Append the new division to the container
        CardWater.appendChild(AddCardWater);

        // Store the card element in the 'cards' array
        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    } // end of for

    console.log(cards);
} // end of function