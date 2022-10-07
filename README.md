

```
npm install
npm install electron --save-dev

npm update
npm audit fix
```

Projeto pronto, construir e distribuir

  Instalar o electron-build
  `npm i electron-builder --save-dev`

  No `package.json`
  ```
  scripts: {
    ...
    "disc": "npm run build && electron-builder"
  }
  ```

  Executar build:
  `npm run dist`