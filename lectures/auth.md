# Auth

Två sätt: JWT eller session via till exempel passport.js.


### DB-Dokument-struktur

```json
Users: [
    {
        "name": "Emil",
        "email": "efo@bth.se",
        "docs": [
            {
                "name": "Den lille pige med svovlstikkerne" ,
                "text": "Der var engang ...",
                "allowed_users": [
                    "klw@bth.se", // eller _id
                    "aar@bth.se", // eller _id
                ]
            }
            ...
        ]
    }
    ...
]
```

```json
Users: [
    {
        "name": "Emil",
        "email": "efo@bth.se",
    }
    ...
]

Docs: [
    {
        "name": "Den lille pige med svovlstikkerne" ,
        "text": "Der var engang ...",
        "owner": "efo@bth.se",
        "allowed_users": [
            "klw@bth.se", // eller _id
            "aar@bth.se", // eller _id
        ]
    }
    ...
]
```

## Let's code

[auth](../auth)
