(async function IIFE() {
    const main = document.getElementById("root");

    let header = document.createElement("h1");

    header.textContent = "Ordrar";

    main.appendChild(header);

    // const response = await fetch('http://localhost:1337/orders', {
    //     headers: {
    //         'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiSmF2YVNjcmlwdCDDpHIgYnJhLiIsImlhdCI6MTY5NjMyNjE3MywiZXhwIjoxNjk2NDEyNTczfQ.V3ALScyzCmLGNHa_kJi4F7SEC379Cu7suVg8kNGwLR8',
    //     }
    // });
    // const result = await response.json();

    // result.data.forEach((order) => {
    //     let element = document.createElement("p");

    //     element.textContent = order.customerName;

    //     main.appendChild(element);
    // });


    const ordersQuery = `{
        orders {
            customerName
            orderItems {
            productId
            amount
            product {
                productName
            }
            }
        }
    }`;

    const response = await fetch('http://localhost:1337/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query: ordersQuery })
    });
    const result = await response.json();

    result.data.orders.forEach((order) => {
        let element = document.createElement("h2");

        element.textContent = `${order.customerName}`;

        let oiElement = document.createElement("p");
        order.orderItems.forEach((oi) => {
            oiElement.textContent += `${oi.amount} st. ${oi.product.productName} `;
        });

        main.appendChild(element);
        main.appendChild(oiElement);
    });
})();
