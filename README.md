# Avatar Creator

A side project to allow you to create and save and SVG avatar, built using VueJS

*work in progress*

## Prerequisites

* IDE used [Visual Studio Code](https://code.visualstudio.com/)
* Latest version of [node.js](https://nodejs.org/en/)
* NPM (bundled with node.js installation)

## Technology

* [VueJS](https://vuejs.org/)
* [WebPack](https://webpack.js.org/)
* [Node SASS](https://github.com/sass/node-sass)
* [Babel](https://babeljs.io/)
* [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* [json-server](https://github.com/typicode/json-server)

## Setup Guide

1. Clone this respoitory to your local machine
2. Open the folder in VS Code
3. Open the command line in VS Code `Cntrl + '`
4. Run `npm install` command and wait for the npm dependencies to install

## Development

* Run `npm run dev` to start the development environment, this will launch the browser and navigate you to http://localhost:8080/#
* Run `npm run service` to start the fake json service to allow data to be uploaded to a local file acting as a RESTful API

## Fake services

A fake service has been created to allow avatar creations to be uploaded to a local file

Example of the json data that will be uploaded on save:-
```json
{
  "saves": [
    {
      "svgCode": "...svg raw code here",
      "email": "example@example.com",
      "id": 1
    }
  ]
}
```

Example of avatar options that would be provided by another RESTful API:-
```json
{
    "feature": [
        {
            "group": "hair",
            "id": 0,
            "options": [
                {
                    "id": "0",
                    "labelText": "hair-1",
                    "svgCode": "<g id='hair1' fill='#967C32'><path d='M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,64 88.7851563,59.2031249 105.6,36.5333333 C105.372917,58.9999999 128,64 128,64 Z' id='Oval-3'></path></g>",
                    "image": "./images/hair/hair1.svg",
                    "imageAlt": "hair 1",
                    "fieldType": "radio",
                    "name": "hair"
                }
            ]
        }
    ]
}
```

## Author

* **Matthew Neil** - [Pheon1x84](https://github.com/Phoen1x84)
