fetch("./juice.json")
    .then((response) => response.json())
    .then((myjuices) => loadjuices(myjuices))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadjuices(myjuices) {
    let page = document.body.id;
    var i = 0;
    var imgjuice;
    var contjuice;
    let title = myjuices.juices[i].title;
    let url = myjuices.juices[i].url;
    let description = myjuices.juices[i].description;
    let macro_img = myjuices.juices[i].macro_img;

    switch(page) {
        case 'juice1':
            i = 0;

            title = myjuices.juices[i].title;
            url = myjuices.juices[i].url;
            description = myjuices.juices[i].description;
            macro_img = myjuices.juices[i].macro_img;

            imgjuice = document.getElementById("juice_1");
            let Addimgjuice1 = document.createElement("div");
            Addimgjuice1.innerHTML = `
                <img src="${url}" width="300px" height="600px" class="center" margin-left="500px" alt = "juice Image">
            `;

            imgjuice.appendChild(Addimgjuice1);

            contjuice = document.getElementById("juice_2");
            let Addcontjuice1 = document.createElement("div");
            Addcontjuice1.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this juice: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "juice Macro Image">
                </div>
            `;

            contjuice.appendChild(Addcontjuice1);


            break;
        case 'juice2':
            i = 1;

            title = myjuices.juices[i].title;
            url = myjuices.juices[i].url;
            description = myjuices.juices[i].description;
            macro_img = myjuices.juices[i].macro_img;

            imgjuice = document.getElementById("juice_1");
            let Addimgjuice2 = document.createElement("div");
            Addimgjuice2.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "juice Image">
            `;

            imgjuice.appendChild(Addimgjuice2);

            contjuice = document.getElementById("juice_2");
            let Addcontjuice2 = document.createElement("div");
            Addcontjuice2.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this juice: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "juice Macro Image">
                </div>
            `;

            contjuice.appendChild(Addcontjuice2);
            
            break;
        case 'juice3':

        i = 2;

        title = myjuices.juices[i].title;
        url = myjuices.juices[i].url;
        description = myjuices.juices[i].description;
        macro_img = myjuices.juices[i].macro_img;

        imgjuice = document.getElementById("juice_1");
        let Addimgjuice3 = document.createElement("div");
        Addimgjuice3.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "juice Image">
        `;

        imgjuice.appendChild(Addimgjuice3);

        contjuice = document.getElementById("juice_2");
        let Addcontjuice3 = document.createElement("div");
        Addcontjuice3.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this juice: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "juice Macro Image">
            </div>
        `;

        contjuice.appendChild(Addcontjuice3);
            
            break;
        case 'juice4':
            i = 3;

            title = myjuices.juices[i].title;
            url = myjuices.juices[i].url;
            description = myjuices.juices[i].description;
            macro_img = myjuices.juices[i].macro_img;

            imgjuice = document.getElementById("juice_1");
            let Addimgjuice4 = document.createElement("div");
            Addimgjuice4.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "juice Image">
            `;

            imgjuice.appendChild(Addimgjuice4);

            contjuice = document.getElementById("juice_2");
            let Addcontjuice4 = document.createElement("div");
            Addcontjuice4.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this juice: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "juice Macro Image">
                </div>
            `;

            contjuice.appendChild(Addcontjuice4);
            
            break;
        case 'juice5':
            
        i = 4;

        title = myjuices.juices[i].title;
        url = myjuices.juices[i].url;
        description = myjuices.juices[i].description;
        macro_img = myjuices.juices[i].macro_img;

        imgjuice = document.getElementById("juice_1");
        let Addimgjuice5 = document.createElement("div");
        Addimgjuice5.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "juice Image">
        `;

        imgjuice.appendChild(Addimgjuice5);

        contjuice = document.getElementById("juice_2");
        let Addcontjuice5 = document.createElement("div");
        Addcontjuice5.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this juice: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "juice Macro Image">
            </div>
        `;

        contjuice.appendChild(Addcontjuice5);

            break;
        case 'juice6':
            
        i = 5;

        title = myjuices.juices[i].title;
        url = myjuices.juices[i].url;
        description = myjuices.juices[i].description;
        macro_img = myjuices.juices[i].macro_img;

        imgjuice = document.getElementById("juice_1");
        let Addimgjuice6 = document.createElement("div");
        Addimgjuice6.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "juice Image">
        `;

        imgjuice.appendChild(Addimgjuice6);

        contjuice = document.getElementById("juice_2");
        let Addcontjuice6 = document.createElement("div");
        Addcontjuice6.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this juice: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "juice Macro Image">
            </div>
        `;

        contjuice.appendChild(Addcontjuice6);

            break;
        case 'juice7':
            
        i = 6;

        title = myjuices.juices[i].title;
        url = myjuices.juices[i].url;
        description = myjuices.juices[i].description;
        macro_img = myjuices.juices[i].macro_img;

        imgjuice = document.getElementById("juice_1");
        let Addimgjuice7 = document.createElement("div");
        Addimgjuice7.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "juice Image">
        `;

        imgjuice.appendChild(Addimgjuice7);

        contjuice = document.getElementById("juice_2");
        let Addcontjuice7 = document.createElement("div");
        Addcontjuice7.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this juice: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "juice Macro Image">
            </div>
        `;

        contjuice.appendChild(Addcontjuice7);

            break;
        case 'juice8':
            
        i = 7;

            title = myjuices.juices[i].title;
            url = myjuices.juices[i].url;
            description = myjuices.juices[i].description;
            macro_img = myjuices.juices[i].macro_img;

            imgjuice = document.getElementById("juice_1");
            let Addimgjuice8 = document.createElement("div");
            Addimgjuice8.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "juice Image">
            `;

            imgjuice.appendChild(Addimgjuice8);

            contjuice = document.getElementById("juice_2");
            let Addcontjuice8 = document.createElement("div");
            Addcontjuice8.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this juice: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "juice Macro Image">
                </div>
            `;

            contjuice.appendChild(Addcontjuice8);

            break;  
        default:   
    }

} // end of function