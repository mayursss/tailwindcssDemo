```js
// below script does not work
"scripts": {
    "start": "nodemon --exec 'powershell.exe ./build.ps1'"
}
// below script works
"scripts": {
    "build:css": "tailwind build src/style.css -o dist/tailwindstyle.css"
  },
```

To Run Just use command 

``` ps1
npm run build:css
```

