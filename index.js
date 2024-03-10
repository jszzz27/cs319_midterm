fetch("./data.json")
    .then((response) => response.json())
    .then((myMain) => loadMainContents(myMain))
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

function loadMainContents(myMain) {

    var mainImg;
    var mainContent;
    var subContent;
    var subImg;
    var foot;

    var i = 0;
    let img = myMain.data[i].main_img;
    let name = myMain.data[i].name;
    let mainLine = myMain.data[i].line1;
    let subLine1 = myMain.data[i].line2;
    let subLine2 = myMain.data[i].line2_1;
    let top3Img = myMain.data[i].sub_img;
    let path = myMain.data[i].path_name;

    for (i = 0; i < myMain.data.length; i++) {
        img = myMain.data[i].main_img;

        mainImg = document.getElementById("image" + i.toString());
        let AddmainImg = document.createElement("div");
        AddmainImg.innerHTML = `
            <img class="bd-placeholder-img" src="${img}">
        `;

        mainImg.appendChild(AddmainImg);

        name = myMain.data[i].name;
        mainLine = myMain.data[i].line1;
        path = myMain.data[i].path_name;

        mainContent = document.getElementById("text" + i.toString());
        let AddmainContent = document.createElement("div");
        AddmainContent.innerHTML = `
            <h1>${name}</h1>
            <p id="describ">${mainLine}</p>
            <p><a class="btn btn-lg btn-primary" href="./product_page/${path}/${path}.html">${name}, Right Here!</a></p>
        `;

        mainContent.appendChild(AddmainContent);
    }

    for (i = 0; i < myMain.data.length; i++) {
        subLine1 = myMain.data[i].line2;
        subLine2 = myMain.data[i].line2_1;

        subContent = document.getElementById("subText" + i.toString());
        let AddsubContent = document.createElement("div");
        AddsubContent.innerHTML = `
            <h2 class="featurette-heading fw-normal lh-1">${subLine1}</h2>
            <p class="lead">${subLine2}</p>
        `;

        subContent.appendChild(AddsubContent);

        top3Img = myMain.data[i].sub_img;

        subImg = document.getElementById("subImg" + i.toString());
        let AddsubImg = document.createElement("div");
        AddsubImg.innerHTML = `
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="${top3Img}">
        `;

        subImg.appendChild(AddsubImg);
    }
}
