(async function IIFE() {
    let lockedOrder = { orderId: 0 };

    const main = document.getElementById("root");

    let header = document.createElement("h1");

    header.textContent = "Ordrar";

    main.appendChild(header);

    let orderList = document.createElement("div");

    main.appendChild(orderList);

    const socket = io("http://localhost:1337");

    socket.on("orders", (data) => {
        outputOrders(data, orderList, socket, lockedOrder);
    });

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


    // const ordersQuery = `{
    //     orders {
    //         customerName
    //         orderItems {
    //         productId
    //         amount
    //         product {
    //             productName
    //         }
    //         }
    //     }
    // }`;

    // const response = await fetch('http://localhost:1337/graphql', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    //     body: JSON.stringify({ query: ordersQuery })
    // });
    // const result = await response.json();

    // result.data.orders.forEach((order) => {
    //     let element = document.createElement("h2");

    //     element.textContent = `${order.customerName}`;

    //     let oiElement = document.createElement("p");
    //     order.orderItems.forEach((oi) => {
    //         oiElement.textContent += `${oi.amount} st. ${oi.product.productName} `;
    //     });

    //     main.appendChild(element);
    //     main.appendChild(oiElement);
    // });
})();

function outputOrders(orders, parent, socket, lockedOrder) {
    parent.innerHTML = "";

    orders.forEach((order) => {
        let element = document.createElement("div");

        element.classList.add("order");

        element.textContent = order.customerName;

        if (order.locked) {
            element.classList.add("locked");
        }

        if (order.status === 200) {
            element.classList.add("status");
        }

        if (order.locked && lockedOrder.orderId === order.rowid) {
            let buttonElement = document.createElement("button");

            buttonElement.textContent = "Ändra status";

            buttonElement.addEventListener("click", function(event) {
                event.preventDefault();

                socket.emit("changeStatus", order.rowid);

                lockedOrder.orderId = 0;
            });

            element.appendChild(buttonElement);
        }

        element.addEventListener("click", function(event) {
            event.preventDefault();

            if (!order.locked && order.status === 100 && lockedOrder.orderId === 0) {
                socket.emit("lockSocket", order.rowid);
                lockedOrder.orderId = order.rowid;
            }
        });

        parent.appendChild(element);
    });
}


