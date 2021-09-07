# Backend




## Express

I databas renderade vi ut HTML, nu ska vi skicka ut JSON istället.

```javascript
return res.json({
    data: { status: "OK"}
})
```

Vill man ha nått att hålla i: [https://jsonapi.org](https://jsonapi.org).

Callback ? Promise ? Async/Await ?



## mongodb

Uppdaterad till version 5.0 i somras. Typiskt!

För att komma in i mongo-shell använd kommandot `mongosh`.

Ett exempel:

[SQL](https://github.com/emilfolino/jsramverk/blob/master/db/mongodb-examples/sql.md)

[mongodb](https://github.com/emilfolino/jsramverk/blob/master/db/mongodb-examples/nosql.txt)

I SQL [normaliserar](http://www.databasteknik.se/webbkursen/normalisering/index.html) vi vår tabeller.

Går även att [normalisera i NoSQL](https://docs.mongodb.com/manual/core/data-model-design/), men sällan att det rekommenderas att användas. Fundera gärna över hur vi väljer att bygga dokument-strukturen för eran editor. Blir allt viktigare i kmom05.



## Titta kod

[auth_mongo](https://github.com/emilfolino/auth_mongo)



## Driftsättning

Databasen på Mongo Atlas

Backend på Azure

Frontend kvar på studentservern



## Frontend -> backend

Hur hämtar vi data?

fetch? axios? i react och Vue

Hur ska vi tänka kring komponenter och filer? Bra exempel i [React](https://reactjs.org/docs/thinking-in-react.html), men gäller för alla ramverken.

[Single Responsibility Principle](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)
