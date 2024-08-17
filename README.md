# CloneThemoviedb

![cloneThemoviedb](<https://clone-themoviedb-antoniocc.netlify.app/assets/localhost_4200_ (2).png>)

Este proyecto ha sido inspirado en [The Movie Database (TMDB)](https://www.themoviedb.org/), creado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 17.0.0. El proyecto consume la API de TMDB para mostrar información sobre películas, series y personajes.

## Requisitos Previos

1. **Registro en TMDB**: Regístrate en [TMDB](https://developer.themoviedb.org/) y obtén tu API key.
2. **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

## Configuración

1. **Obtener API Key**: Regístrate en la página de [TMDB](https://developer.themoviedb.org/) y obtén tu API key.
2. **Configurar API Key**: En la carpeta `src/environments`, sustituye el valor de `API_KEY` en los archivos de entorno por tu propia API key.
3. **Instalar dependencias**: Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```
   npm install
   ```

4. **Iniciar el servidor de desarrollo**: Ejecuta el siguiente comando para iniciar la aplicación en modo desarrollo:

   ```
   ng serve
   ```

   La aplicación estará disponible en 'http://localhost:4200/'.

## Live Demo

Puedes ver una demo en vivo del proyecto en el siguiente enlace: [Live Demo](https://clone-themoviedb-antoniocc.netlify.app/)

## Tecnologías Utilizadas

- **Angular**: Framework principal para la construcción de la aplicación.
- **TMDB API**: API utilizada para obtener los datos de películas y series.
- **SCSS**: Para el diseño y estilo de la aplicación.
- **Netlify**: Para el despliegue de la demo en vivo.
