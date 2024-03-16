# Zara Web Challenge - Aplicación React

Este repositorio contiene una aplicación web desarrollada como parte del desafío técnico de Zara. La aplicación está creada con React utilizando Create React App y consiste en una aplicación de una sola página (SPA) con dos pantallas principales: búsqueda de personajes y detalle del personaje.

La aplicación se encuentra desplegada en [https://zara-web-challenge.web.app/](https://zara-web-challenge.web.app/).

## Funcionalidades

- **Búsqueda de personajes:** En la página principal de la aplicación, los usuarios pueden buscar personajes por su nombre. Los resultados se muestran en una lista y los usuarios pueden hacer clic en un personaje para ver más detalles.

- **Detalle del personaje:** Cuando un usuario hace clic en un personaje en la página de búsqueda, se navega a la página de detalle del personaje, donde se muestran el detalle del personaje seleccionado y los comics asociados.

- **Agregar a favoritos:** Los usuarios pueden agregar personajes a sus favoritos desde la página de búsqueda y desde la página de detalle del personaje. 

## Arquitectura y Estructura
La aplicación sigue una arquitectura de componentes de React y utiliza React Router para la navegación entre páginas. La estructura del proyecto es la siguiente:
```
zara-web-challenge/
├── public/
│   └── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── characters/
│   │   │   ├── Characters.js
│   │   │   ├── CharactersList.js
│   │   │   ├── CharactersList.module.css
│   │   │   ├── CharacterDetails.js
│   │   │   ├── CharacterDetails.modules.css
│   │   │   ├── ...
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── Header.module.css
│   │   │   ├── Spinner.js
│   │   │   ├── Spinner.module.css
│   │   │   ├── ...
│   ├── contexts/
│   │   ├── CharactersDataContext.js
│   │   └── CharactersFilterContext.js
│   ├── hooks/
│   │   ├── useCharactersData.js
│   │   └── useCharactersFilterData.js
│   ├── tests/
│   │   ├── CharactersList.test.js
│   │   ├── Header.test.js
│   │   ├── useCharactersData.test.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
└── ...
```

## Ejecución de la Aplicación

Para ejecutar la aplicación localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local utilizando Git:

   ```git clone https://github.com/santibrasesco/zara-web-challenge.git```


3. Navega al directorio del proyecto:

   ```cd zara-web-challenge```


4. Instala las dependencias del proyecto utilizando npm:

   ```npm install```


5. Ejecuta la aplicación en modo de desarrollo:

   ```npm start```

6. Abre tu navegador web y visita `http://localhost:3000` para ver la aplicación en funcionamiento.


## Ejecutar en Modo Producción

Para ejecutar la aplicación en modo de producción, primero necesitas compilar los activos optimizados para el despliegue. Sigue estos pasos:

1. Abre una terminal en el directorio raíz de tu proyecto.

2. Ejecuta el siguiente comando para compilar los activos optimizados:
   
   ```npm run build```

## Tests

Este proyecto utiliza Jest y React Testing Library para realizar pruebas en los componentes de React.

Para ejecutar los tests, sigue estos pasos:

1. Asegúrate de haber instalado las dependencias del proyecto:

```npm install```


2. Ejecuta el comando siguiente para ejecutar todas las pruebas:

```npm test```

