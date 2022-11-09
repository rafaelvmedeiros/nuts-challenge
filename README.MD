# VISUAL NUTS Javascript Challenge

[Visual Nuts Documentation](https://drive.google.com/file/d/1BDf0hxtaCxh1vgPqFPusn9T4Rai9rsy4/view?usp=share_link)

[Postman Collection V2.1](https://crimson-eclipse-336599.postman.co/workspace/visual-nuts~dd40e76a-18b2-4bea-bcd5-94966cbf4ab0/collection/165745-a7e91bf6-fb5c-4a10-8254-89c93187c2a5?action=share&creator=165745)


## Technologies and tools

*  Commit Message Linter - hook it will run at every commiting to make sure that the message to commit is valid against the conventions
*  Jest -  Javascript Tester Tool
* TypeScript - Static Typing
* Eslint  - Find and Fix problems in the code
* Husky - Help creating hooks in pre or pos commits. For instance, format the code using eslint before commit something.

## Install Dependencies
``npm install``

## Run Tests
``npm test``

## Routes
1) Exercise  
``/print-numbers?range=100``
PS.: Whether query params isn't defined, the default value (100) will be defined.

```json
{
    "data": [
        "Visual Nuts",
        1,
        2,
        "Visual",
        4,
        "Nuts",
        "Visual",
        7,
        8,
        "Visual",
        "Nuts",
        11,
        "Visual",
        13,
        14,
        "Visual Nuts",
        16,
        17,
        "Visual",
        19,
        "Nuts",
        "Visual",
        22,
        23,
        "Visual",
        "Nuts",
        26,
        "Visual",
        28,
        29,
        "Visual Nuts",
        31,
        32,
        "Visual",
        34,
        "Nuts",
        "Visual",
        37,
        38,
        "Visual",
        "Nuts",
        41,
        "Visual",
        43,
        44,
        "Visual Nuts",
        46,
        47,
        "Visual",
        49,
        "Nuts",
        "Visual",
        52,
        53,
        "Visual",
        "Nuts",
        56,
        "Visual",
        58,
        59,
        "Visual Nuts",
        61,
        62,
        "Visual",
        64,
        "Nuts",
        "Visual",
        67,
        68,
        "Visual",
        "Nuts",
        71,
        "Visual",
        73,
        74,
        "Visual Nuts",
        76,
        77,
        "Visual",
        79,
        "Nuts",
        "Visual",
        82,
        83,
        "Visual",
        "Nuts",
        86,
        "Visual",
        88,
        89,
        "Visual Nuts",
        91,
        92,
        "Visual",
        94,
        "Nuts",
        "Visual",
        97,
        98,
        "Visual"
    ]
}
```


2) Exercise
``/countries/list``

```json
{
    "data": 5
}
```


``/countries/official-languages?language=de``

```json
{
    "data": {
        "country": "BE",
        "languages": [
            "nl",
            "fr",
            "de"
        ],
        "totalLanguages": 3
    }
}
```


``/countries/highest-languages``

```json
{
    "data": {
        "country": "BE",
        "languages": [
            "nl",
            "fr",
            "de"
        ],
        "totalLanguages": 3
    }
}
```

``/countries/common-languages``

```json
{
    "data": [
        {
            "language": "nl",
            "totalLanguages": 2
        },
        {
            "language": "de",
            "totalLanguages": 2
        },
        {
            "language": "en",
            "totalLanguages": 1
        },
        {
            "language": "fr",
            "totalLanguages": 1
        },
        {
            "language": "es",
            "totalLanguages": 1
        }
    ]
}
```