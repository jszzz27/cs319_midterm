fetch("./water.json")
    .then((response) => response.json())
    .then((mywaters) => loadwaters(mywaters))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadwaters(mywaters) {
    let page = document.body.id;
    var i = 0;
    var imgwater;
    var contwater;
    let title = mywaters.waters[i].title;
    let url = mywaters.waters[i].url;
    let description = mywaters.waters[i].description;
    let macro_img = mywaters.waters[i].macro_img;

    switch(page) {
        case 'water1':
            i = 0;

            title = mywaters.waters[i].title;
            url = mywaters.waters[i].url;
            description = mywaters.waters[i].description;
            macro_img = mywaters.waters[i].macro_img;

            imgwater = document.getElementById("water_1");
            let Addimgwater1 = document.createElement("div");
            Addimgwater1.innerHTML = `
                <img src="${url}" width="300px" height="600px" class="center" margin-left="500px" alt = "water Image">
            `;

            imgwater.appendChild(Addimgwater1);

            contwater = document.getElementById("water_2");
            let Addcontwater1 = document.createElement("div");
            Addcontwater1.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this water: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "water Macro Image">
                </div>
            `;

            contwater.appendChild(Addcontwater1);


            break;
        case 'water2':
            i = 1;

            title = mywaters.waters[i].title;
            url = mywaters.waters[i].url;
            description = mywaters.waters[i].description;
            macro_img = mywaters.waters[i].macro_img;

            imgwater = document.getElementById("water_1");
            let Addimgwater2 = document.createElement("div");
            Addimgwater2.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "water Image">
            `;

            imgwater.appendChild(Addimgwater2);

            contwater = document.getElementById("water_2");
            let Addcontwater2 = document.createElement("div");
            Addcontwater2.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this water: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "water Macro Image">
                </div>
            `;

            contwater.appendChild(Addcontwater2);
            
            break;
        case 'water3':

        i = 2;

        title = mywaters.waters[i].title;
        url = mywaters.waters[i].url;
        description = mywaters.waters[i].description;
        macro_img = mywaters.waters[i].macro_img;

        imgwater = document.getElementById("water_1");
        let Addimgwater3 = document.createElement("div");
        Addimgwater3.innerHTML = `
            <img src="${url}" height="600px" class="center"width="225px" height="400px"  margin-left="500px" alt = "water Image">
        `;

        imgwater.appendChild(Addimgwater3);

        contwater = document.getElementById("water_2");
        let Addcontwater3 = document.createElement("div");
        Addcontwater3.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this water: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "water Macro Image">
            </div>
        `;

        contwater.appendChild(Addcontwater3);
            
            break;
        case 'water4':
            i = 3;

            title = mywaters.waters[i].title;
            url = mywaters.waters[i].url;
            description = mywaters.waters[i].description;
            macro_img = mywaters.waters[i].macro_img;

            imgwater = document.getElementById("water_1");
            let Addimgwater4 = document.createElement("div");
            Addimgwater4.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "water Image">
            `;

            imgwater.appendChild(Addimgwater4);

            contwater = document.getElementById("water_2");
            let Addcontwater4 = document.createElement("div");
            Addcontwater4.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this water: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "water Macro Image">
                </div>
            `;

            contwater.appendChild(Addcontwater4);
            
            break;
        case 'water5':
            
        i = 4;

        title = mywaters.waters[i].title;
        url = mywaters.waters[i].url;
        description = mywaters.waters[i].description;
        macro_img = mywaters.waters[i].macro_img;

        imgwater = document.getElementById("water_1");
        let Addimgwater5 = document.createElement("div");
        Addimgwater5.innerHTML = `
            <img src="${url}" height="600px" class="center" width="225px" height="400px" margin-left="500px" alt = "water Image">
        `;

        imgwater.appendChild(Addimgwater5);

        contwater = document.getElementById("water_2");
        let Addcontwater5 = document.createElement("div");
        Addcontwater5.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this water: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "water Macro Image">
            </div>
        `;

        contwater.appendChild(Addcontwater5);

            break;
        case 'water6':
            
        i = 5;

        title = mywaters.waters[i].title;
        url = mywaters.waters[i].url;
        description = mywaters.waters[i].description;
        macro_img = mywaters.waters[i].macro_img;

        imgwater = document.getElementById("water_1");
        let Addimgwater6 = document.createElement("div");
        Addimgwater6.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "water Image">
        `;

        imgwater.appendChild(Addimgwater6);

        contwater = document.getElementById("water_2");
        let Addcontwater6 = document.createElement("div");
        Addcontwater6.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this water: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "water Macro Image">
            </div>
        `;

        contwater.appendChild(Addcontwater6);

            break;
        case 'water7':
            
        i = 6;

        title = mywaters.waters[i].title;
        url = mywaters.waters[i].url;
        description = mywaters.waters[i].description;
        macro_img = mywaters.waters[i].macro_img;

        imgwater = document.getElementById("water_1");
        let Addimgwater7 = document.createElement("div");
        Addimgwater7.innerHTML = `
            <img src="${url}" height="600px" class="center" margin-left="500px" alt = "water Image">
        `;

        imgwater.appendChild(Addimgwater7);

        contwater = document.getElementById("water_2");
        let Addcontwater7 = document.createElement("div");
        Addcontwater7.innerHTML = `
            <h2 class = "product-title">${title}</p>
            <div class = "product-detail">
                <h2>about this water: </h2>
                <p>${description}</p>
                <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "water Macro Image">
            </div>
        `;

        contwater.appendChild(Addcontwater7);

            break;
        case 'water8':
            
        i = 7;

            title = mywaters.waters[i].title;
            url = mywaters.waters[i].url;
            description = mywaters.waters[i].description;
            macro_img = mywaters.waters[i].macro_img;

            imgwater = document.getElementById("water_1");
            let Addimgwater8 = document.createElement("div");
            Addimgwater8.innerHTML = `
                <img src="${url}" height="600px" class="center" margin-left="500px" alt = "water Image">
            `;

            imgwater.appendChild(Addimgwater8);

            contwater = document.getElementById("water_2");
            let Addcontwater8 = document.createElement("div");
            Addcontwater8.innerHTML = `
                <h2 class = "product-title">${title}</p>
                <div class = "product-detail">
                    <h2>about this water: </h2>
                    <p>${description}</p>
                    <img class ="macro" src = "${macro_img}" width="225px" height="400px" alt = "water Macro Image">
                </div>
            `;

            contwater.appendChild(Addcontwater8);

            break;  
        default:   
    }

} // end of function