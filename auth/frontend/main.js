(function IIFE() {
    let cakeList = document.getElementById("cake-list");

    fetch("http://localhost:1337")
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            result.data.forEach(function(cake) {
                let cakeElement = document.createElement("p");

                cakeElement.textContent = `${cake.name} - ${cake.price}`;

                cakeList.appendChild(cakeElement);
            });
        });
})();
