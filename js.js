function products() {
    fetch("db.json")
        .then((res) => {
            return res.json();
        }).then((product) => {
            product.forEach(element => {
                let container = document.querySelector(".container");
                let ul = document.createElement("ul");
                let photo = document.createElement("img");
                let li = document.createElement("li");
                let hr = document.createElement("hr");
                let p = document.createElement("p");
                let desc = document.createElement("p");
                let price = document.createElement("p");
                container.style.display = "flex";
                container.style.flexWrap = "wrap";

                p.style.fontWeight = "bolder";

                ul.style.width = "360px";
                ul.style.height = "500px";
                ul.style.listStyle = "none";
                ul.style.background = "white";
                ul.style.border = "1px solid rgb(341, 538, 131)";
                ul.style.boxShadow = "0 0 5px rgba(5,5,5,0.5)";
                ul.style.borderRadius = "55px";
                ul.style.margin = "20px";
                ul.style.padding = "20px";

                photo.style.width = "180px";
                photo.style.height = "300px";
                photo.style.objectFit = "contain";

                desc.style.textAlign = "center";

                hr.style.background = "rgb(399, 97, 593)";
                hr.style.boxShadow = "0 0 3px rgba(0,0,0,0.5)";

                photo.getAttribute("src");
                photo.src = element.img;
                p.textContent = element.title;
                desc.textContent = element.desc;
                // p.textContent = element.price;
                container.append(ul);
                ul.append(li)
                li.append(photo);
                li.append(p);
                li.append(hr);
                li.append(desc);
                li.append(price);
            });

        })
}
products()