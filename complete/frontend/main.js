(async function IIFE() {
    const main = document.getElementById("root");

    let header = document.createElement("h1");

    header.textContent = "Ordrar";

    main.appendChild(header);

    const response = await fetch("http://localhost:1337/orders");
    const result = await response.json();

    result.data.forEach((order) => {
        let element = document.createElement("p");

        element.textContent = order.customerName;

        main.appendChild(element);
    });
})();
