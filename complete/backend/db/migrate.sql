CREATE TABLE IF NOT EXISTS products (
    articleNumber VARCHAR(32),
    productName VARCHAR(255) NOT NULL,
    productDescription TEXT,
    productSpecifiers TEXT,
    stock INTEGER,
    location VARCHAR(255),
    price INTEGER
);

CREATE TABLE IF NOT EXISTS orders (
    customerName VARCHAR(255) NOT NULL,
    customerAddress VARCHAR(255),
    customerZip VARCHAR(12),
    customerCity VARCHAR(255),
    customerCountry VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS order_items (
    orderId INTEGER NOT NULL,
    productId INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    FOREIGN KEY(orderId) REFERENCES orders(ROWID),
    FOREIGN KEY(productId) REFERENCES products(ROWID),
    UNIQUE(orderId, productId)
);
