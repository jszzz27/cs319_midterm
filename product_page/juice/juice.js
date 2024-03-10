fetch("./juice.json")
    .then((response) => response.json())
    .then((myJuices) => loadJuices(myJuices))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadJuices(myJuices) {
    // Find the element with ID "col" in your HTML
    var CardJuice = document.getElementById("col");
    var cards = [];

    // Read every juice from the array
    for (var i = 0; i < myJuices.juices.length; i++) {
        let title = myJuices.juices[i].title;
        let url = myJuices.juices[i].url;
        let itemLink = myJuices.juices[i].itemLink;

        let card = "card" + i.toString();

        // Create a new HTML div element
        let AddCardJuice = document.createElement("div");

        // Add class "col" to the new division for Bootstrap
        AddCardJuice.classList.add("col");

        // Create a Bootstrap card
        AddCardJuice.innerHTML = `
            <div id="${card}" class="card shadow-sm">
                <img src="${url}" class="card-img-top" width="100px" height="300px" class="center"></img>
                <div class="card-body d-flex justify-content-between align-items-center">
                    <p class="card-text"><strong>${title}</strong></p>
                    <a href="${itemLink}">View</a> <!-- Use the dynamic URL -->
                </div>
            </div>
        `;

        // Append the new division to the container
        CardJuice.appendChild(AddCardJuice);

        // Store the card element in the 'cards' array
        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    } // end of for

    console.log(cards);
} // end of function