const database = require('../db/database.js');

const products = {
    getProduct: async function getProduct(productId) {
        const db = await database.openDb();

        try {
            const query = `SELECT ROWID, * FROM products WHERE ROWID=?`;

            return await db.get(query, productId);
        } catch (error) {
            return { errors: error };
        } finally {
            await db.close();
        }
    }
};

module.exports = products;
