# SIRADE WEB

## Importante:

1. Debe tener instalado el npm
2. Debe tener instalado el gulp: npm install --global gulp-cli
3. Dentro de "tools" instalar los componentes: npm install
4. Crear una carpeta "prod" en la raiz del proyecto (al mismo nivel de "dev") y hacer una copia completa del contenido de dev
5. Ejecutar gulp, dentro de "tool" abrir la consulta y ejecutar el comando: gulp (esto hará el pase a producción)
6. Modificar las variables de conexión en: config.json dentro de la carpeta "prod"
7. Por último pueden pasar el contenido de "prod" a su entorno de producción

# SIRADE BD

1. Tener instalado MySQL 8.0 y PHP8
2. Crear una base de datos con el nombre "sirade"
3. Ejecutar el script "sirade.sql" que está en el repositorio entregado.
4. Las credenciales iniciales son:
    usuario: administrador
    contraseña: administrador