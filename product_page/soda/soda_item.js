fetch("./soda.json")
    .then((response) => response.json())
    .then((mysodas) => loadsodas(mysodas))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadsodas(mysodas) {
    let page = document.body.id;
    var i = 0;
    var imgsoda;
    var contsoda;
    let title = mysodas.sodas[i].title;
    let url = mysodas.sodas[i].url;
    let description = mysodas.sodas[i].description;
    let macro_img = mysodas.sodas[i].macro_img;

    switch(page) {
        case 'soda1':
            i = 0;

            title = mysodas.sodas[i].title;
            url = mysodas.sodas[i].url;
            description = mysodas.sodas[i].description;
            macro_img = mysodas.sodas[i].macro_img;

            imgsoda = document.getElementById("soda_1");
            let Addimgsoda1 = document.createElement("div");
            Addimgsoda1.innerHTML = `
                <img src="${url}" width="300px" height="600px" class="center" margin-left="500px" alt = "soda Image">
            `;

            imgsoda.appendChild(Addimgsoda1);

            contsoda = document.getElementById("soda_2");
            let Addcontsoda1 = document.createElement("div");
            Addcontsoda1.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this soda: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="450px" alt = "soda Macro Image">
                </div>
            `;

            contsoda.appendChild(Addcontsoda1);


            break;
        case 'soda2':
            i = 1;

            title = mysodas.sodas[i].title;
            url = mysodas.sodas[i].url;
            description = mysodas.sodas[i].description;
            macro_img = mysodas.sodas[i].macro_img;

            imgsoda = document.getElementById("soda_1");
            let Addimgsoda2 = document.createElement("div");
            Addimgsoda2.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "soda Image">
            `;

            imgsoda.appendChild(Addimgsoda2);

            contsoda = document.getElementById("soda_2");
            let Addcontsoda2 = document.createElement("div");
            Addcontsoda2.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this soda: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "soda Macro Image">
                </div>
            `;

            contsoda.appendChild(Addcontsoda2);
            
            break;
        case 'soda3':

        i = 2;

        title = mysodas.sodas[i].title;
        url = mysodas.sodas[i].url;
        description = mysodas.sodas[i].description;
        macro_img = mysodas.sodas[i].macro_img;

        imgsoda = document.getElementById("soda_1");
        let Addimgsoda3 = document.createElement("div");
        Addimgsoda3.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "soda Image">
        `;

        imgsoda.appendChild(Addimgsoda3);

        contsoda = document.getElementById("soda_2");
        let Addcontsoda3 = document.createElement("div");
        Addcontsoda3.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this soda: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "soda Macro Image">
            </div>
        `;

        contsoda.appendChild(Addcontsoda3);
            
            break;
        case 'soda4':
            i = 3;

            title = mysodas.sodas[i].title;
            url = mysodas.sodas[i].url;
            description = mysodas.sodas[i].description;
            macro_img = mysodas.sodas[i].macro_img;

            imgsoda = document.getElementById("soda_1");
            let Addimgsoda4 = document.createElement("div");
            Addimgsoda4.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "soda Image">
            `;

            imgsoda.appendChild(Addimgsoda4);

            contsoda = document.getElementById("soda_2");
            let Addcontsoda4 = document.createElement("div");
            Addcontsoda4.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this soda: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "soda Macro Image">
                </div>
            `;

            contsoda.appendChild(Addcontsoda4);
            
            break;
        case 'soda5':
            
        i = 4;

        title = mysodas.sodas[i].title;
        url = mysodas.sodas[i].url;
        description = mysodas.sodas[i].description;
        macro_img = mysodas.sodas[i].macro_img;

        imgsoda = document.getElementById("soda_1");
        let Addimgsoda5 = document.createElement("div");
        Addimgsoda5.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "soda Image">
        `;

        imgsoda.appendChild(Addimgsoda5);

        contsoda = document.getElementById("soda_2");
        let Addcontsoda5 = document.createElement("div");
        Addcontsoda5.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this soda: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "soda Macro Image">
            </div>
        `;

        contsoda.appendChild(Addcontsoda5);

            break;
        case 'soda6':
            
        i = 5;

        title = mysodas.sodas[i].title;
        url = mysodas.sodas[i].url;
        description = mysodas.sodas[i].description;
        macro_img = mysodas.sodas[i].macro_img;

        imgsoda = document.getElementById("soda_1");
        let Addimgsoda6 = document.createElement("div");
        Addimgsoda6.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "soda Image">
        `;

        imgsoda.appendChild(Addimgsoda6);

        contsoda = document.getElementById("soda_2");
        let Addcontsoda6 = document.createElement("div");
        Addcontsoda6.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this soda: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "soda Macro Image">
            </div>
        `;

        contsoda.appendChild(Addcontsoda6);

            break;
        case 'soda7':
            
        i = 6;

        title = mysodas.sodas[i].title;
        url = mysodas.sodas[i].url;
        description = mysodas.sodas[i].description;
        macro_img = mysodas.sodas[i].macro_img;

        imgsoda = document.getElementById("soda_1");
        let Addimgsoda7 = document.createElement("div");
        Addimgsoda7.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "soda Image">
        `;

        imgsoda.appendChild(Addimgsoda7);

        contsoda = document.getElementById("soda_2");
        let Addcontsoda7 = document.createElement("div");
        Addcontsoda7.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this soda: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "soda Macro Image">
            </div>
        `;

        contsoda.appendChild(Addcontsoda7);

            break;
        case 'soda8':
            
        i = 7;

            title = mysodas.sodas[i].title;
            url = mysodas.sodas[i].url;
            description = mysodas.sodas[i].description;
            macro_img = mysodas.sodas[i].macro_img;

            imgsoda = document.getElementById("soda_1");
            let Addimgsoda8 = document.createElement("div");
            Addimgsoda8.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "soda Image">
            `;

            imgsoda.appendChild(Addimgsoda8);

            contsoda = document.getElementById("soda_2");
            let Addcontsoda8 = document.createElement("div");
            Addcontsoda8.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this soda: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "soda Macro Image">
                </div>
            `;

            contsoda.appendChild(Addcontsoda8);

            break;  
        default:   
    }

} // end of function