fetch("./beer.json")
    .then((response) => response.json())
    .then((myBeers) => loadBeers(myBeers))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadBeers(myBeers) {
    let page = document.body.id;
    var i = 0;
    var imgBeer;
    var contBeer;
    let title = myBeers.beers[i].title;
    let url = myBeers.beers[i].url;
    let description = myBeers.beers[i].description;
    let macro_img = myBeers.beers[i].macro_img;

    switch(page) {
        case 'beer1':
            i = 0;

            title = myBeers.beers[i].title;
            url = myBeers.beers[i].url;
            description = myBeers.beers[i].description;
            macro_img = myBeers.beers[i].macro_img;

            imgBeer = document.getElementById("beer_1");
            let AddimgBeer1 = document.createElement("div");
            AddimgBeer1.innerHTML = `
                <img src="${url}" width="300px" height="600px" class="center" margin-left="500px" alt = "Beer Image">
            `;

            imgBeer.appendChild(AddimgBeer1);

            contBeer = document.getElementById("beer_2");
            let AddcontBeer1 = document.createElement("div");
            AddcontBeer1.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this beer: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "Beer Macro Image">
                </div>
            `;

            contBeer.appendChild(AddcontBeer1);


            break;
        case 'beer2':
            i = 1;

            title = myBeers.beers[i].title;
            url = myBeers.beers[i].url;
            description = myBeers.beers[i].description;
            macro_img = myBeers.beers[i].macro_img;

            imgBeer = document.getElementById("beer_1");
            let AddimgBeer2 = document.createElement("div");
            AddimgBeer2.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "Beer Image">
            `;

            imgBeer.appendChild(AddimgBeer2);

            contBeer = document.getElementById("beer_2");
            let AddcontBeer2 = document.createElement("div");
            AddcontBeer2.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this beer: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="90px" height="400px" alt = "Beer Macro Image">
                </div>
            `;

            contBeer.appendChild(AddcontBeer2);
            
            break;
        case 'beer3':

        i = 2;

        title = myBeers.beers[i].title;
        url = myBeers.beers[i].url;
        description = myBeers.beers[i].description;
        macro_img = myBeers.beers[i].macro_img;

        imgBeer = document.getElementById("beer_1");
        let AddimgBeer3 = document.createElement("div");
        AddimgBeer3.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "Beer Image">
        `;

        imgBeer.appendChild(AddimgBeer3);

        contBeer = document.getElementById("beer_2");
        let AddcontBeer3 = document.createElement("div");
        AddcontBeer3.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this beer: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "Beer Macro Image">
            </div>
        `;

        contBeer.appendChild(AddcontBeer3);
            
            break;
        case 'beer4':
            i = 3;

            title = myBeers.beers[i].title;
            url = myBeers.beers[i].url;
            description = myBeers.beers[i].description;
            macro_img = myBeers.beers[i].macro_img;

            imgBeer = document.getElementById("beer_1");
            let AddimgBeer4 = document.createElement("div");
            AddimgBeer4.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "Beer Image">
            `;

            imgBeer.appendChild(AddimgBeer4);

            contBeer = document.getElementById("beer_2");
            let AddcontBeer4 = document.createElement("div");
            AddcontBeer4.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this beer: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "Beer Macro Image">
                </div>
            `;

            contBeer.appendChild(AddcontBeer4);
            
            break;
        case 'beer5':
            
        i = 4;

        title = myBeers.beers[i].title;
        url = myBeers.beers[i].url;
        description = myBeers.beers[i].description;
        macro_img = myBeers.beers[i].macro_img;

        imgBeer = document.getElementById("beer_1");
        let AddimgBeer5 = document.createElement("div");
        AddimgBeer5.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "Beer Image">
        `;

        imgBeer.appendChild(AddimgBeer5);

        contBeer = document.getElementById("beer_2");
        let AddcontBeer5 = document.createElement("div");
        AddcontBeer5.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this beer: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="180px" height="400px" alt = "Beer Macro Image">
            </div>
        `;

        contBeer.appendChild(AddcontBeer5);

            break;
        case 'beer6':
            
        i = 5;

        title = myBeers.beers[i].title;
        url = myBeers.beers[i].url;
        description = myBeers.beers[i].description;
        macro_img = myBeers.beers[i].macro_img;

        imgBeer = document.getElementById("beer_1");
        let AddimgBeer6 = document.createElement("div");
        AddimgBeer6.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "Beer Image">
        `;

        imgBeer.appendChild(AddimgBeer6);

        contBeer = document.getElementById("beer_2");
        let AddcontBeer6 = document.createElement("div");
        AddcontBeer6.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this beer: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "Beer Macro Image">
            </div>
        `;

        contBeer.appendChild(AddcontBeer6);

            break;
        case 'beer7':
            
        i = 6;

        title = myBeers.beers[i].title;
        url = myBeers.beers[i].url;
        description = myBeers.beers[i].description;
        macro_img = myBeers.beers[i].macro_img;

        imgBeer = document.getElementById("beer_1");
        let AddimgBeer7 = document.createElement("div");
        AddimgBeer7.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "Beer Image">
        `;

        imgBeer.appendChild(AddimgBeer7);

        contBeer = document.getElementById("beer_2");
        let AddcontBeer7 = document.createElement("div");
        AddcontBeer7.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this beer: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "Beer Macro Image">
            </div>
        `;

        contBeer.appendChild(AddcontBeer7);

            break;
        case 'beer8':
            
        i = 7;

            title = myBeers.beers[i].title;
            url = myBeers.beers[i].url;
            description = myBeers.beers[i].description;
            macro_img = myBeers.beers[i].macro_img;

            imgBeer = document.getElementById("beer_1");
            let AddimgBeer8 = document.createElement("div");
            AddimgBeer8.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "Beer Image">
            `;

            imgBeer.appendChild(AddimgBeer8);

            contBeer = document.getElementById("beer_2");
            let AddcontBeer8 = document.createElement("div");
            AddcontBeer8.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this beer: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="180px" height="400px" alt = "Beer Macro Image">
                </div>
            `;

            contBeer.appendChild(AddcontBeer8);

            break;  
        default:   
    }

} // end of function