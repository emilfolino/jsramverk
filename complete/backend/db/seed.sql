INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1214-RNT", "Skruv M14", "Skruv M14, värmförsinkad", '{"length" : "60mm", "width" : "14mm"}', 12, "A1B4", 1000);
INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1212-RNT", "Skruv M12", "Skruv M12, värmförsinkad", '{"length" : "60mm", "width" : "12mm"}', 14, "A1B5", 1000);
INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1210-RNT", "Skruv M10", "Skruv M10, värmförsinkad", '{"length" : "60mm", "width" : "10mm"}', 20, "A1B6", 1000);
INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1208-RNT", "Skruv M8", "Skruv M8, värmförsinkad", '{"length" : "60mm", "width" : "8mm"}', 2, "A1B7", 1000);
INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1206-RNT", "Skruv M6", "Skruv M6, värmförsinkad", '{"length" : "60mm", "width" : "6mm"}', 6, "A1B8", 1000);

INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1214-TNT", "Mutter M14", "Mutter M14, värmförsinkad, passar 1214-RNT", '{"diameter" : "14mm"}', 13, "A1C4", 1000);
INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1212-TNT", "Mutter M12", "Mutter M12, värmförsinkad, passar 1212-RNT", '{"diameter" : "12mm"}', 23, "A1C4", 1000);
INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1210-TNT", "Mutter M10", "Mutter M10, värmförsinkad, passar 1210-RNT", '{"diameter" : "10mm"}', 12, "A1C4", 1000);
INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1208-TNT", "Mutter M8", "Mutter M8, värmförsinkad, passar 1208-RNT", '{"diameter" : "8mm"}', 4, "A1C4", 1000);
INSERT INTO products (articleNumber, productName, productDescription, productSpecifiers, stock, location, price) VALUES ("1206-TNT", "Mutter M6", "Mutter M6, värmförsinkad, passar 1206-RNT", '{"diameter" : "6mm"}', 1, "A1C4", 1000);

INSERT INTO orders (customerName, customerAddress, customerZip, customerCity, customerCountry) VALUES ("Anders Andersson", "Andersgatan 1", "12345", "Anderstorp", "Sweden");
INSERT INTO order_items (orderId, productId, amount) VALUES (1, 1, 2);
INSERT INTO order_items (orderId, productId, amount) VALUES (1, 2, 3);

INSERT INTO orders (customerName, customerAddress, customerZip, customerCity, customerCountry) VALUES ("Bengt Bengtsson", "Bengtsgatan 2", "23457", "Bengtfors", "Sweden");
INSERT INTO order_items (orderId, productId, amount) VALUES (2, 3, 4);

INSERT INTO orders (customerName, customerAddress, customerZip, customerCity, customerCountry) VALUES ("Nora Norrby", "Norasgatan 3", "34567", "Nora", "Sweden");
INSERT INTO order_items (orderId, productId, amount) VALUES (3, 6, 5);

INSERT INTO orders (customerName, customerAddress, customerZip, customerCity, customerCountry) VALUES ("Ulla Ullman", "Ullasallén 4", "45678", "Ullared", "Sweden");
INSERT INTO order_items (orderId, productId, amount) VALUES (4, 8, 6);
