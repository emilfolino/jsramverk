$(> db/orders.sqlite)
cat db/migrate.sql | sqlite3 db/orders.sqlite
cat db/seed.sql | sqlite3 db/orders.sqlite
