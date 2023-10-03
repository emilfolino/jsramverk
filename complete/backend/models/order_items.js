const database = require('../db/database.js');

const orderItems = {
    getOrderItems: async function getOrderItems(orderId) {
        const db = await database.openDb();

        try {
            const query = `SELECT ROWID, * FROM order_items WHERE orderId=?`;

            return await db.all(query, orderId);
        } catch (error) {
            return { errors: error };
        } finally {
            await db.close();
        }
    }
};

module.exports = orderItems;
