const database = require('../db/database.js');

const orders = {
    getOrders: async function getOrders() {
        const db = await database.openDb();

        try {
            const query = `SELECT ROWID, * FROM orders`;

            return await db.all(query);
        } catch (error) {
            return { errors: error };
        } finally {
            await db.close();
        }
    },

    changeStatus: async function changeStatus(orderId) {
        const db = await database.openDb();

        try {
            const query = `UPDATE orders SET status = 200 WHERE rowid = ?`;

            return await db.run(query, orderId);
        } catch (error) {
            return { errors: error };
        } finally {
            await db.close();
        }
    }
};

module.exports = orders;
