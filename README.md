Este proyecto es una aplicación de Express.js que utiliza una base de datos que se levanta con Docker Compose.

## Requisitos

- Node.js (v14 o superior)
- Docker
- Docker Compose

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio```

2. Instalar las dependencias del proyecto
   ```
   npm i
   ```

3. Levantar la base de datos
   ```
   docker-compose up -d
   ```
   
4. Ejecución de la aplicación
   ```
   npm run dev
   ```
5. Para la vista es necesario postrarse en el directorio de auth/view y abrir la vista login.html