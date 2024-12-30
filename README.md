# Task FrontEnd - Prueba Técnica

Este es el frontend de una aplicación CRUD de tareas desarrollada como parte de una prueba técnica. Permite crear, leer, actualizar y eliminar tareas, ofreciendo una interfaz sencilla y funcional.

⚠ **Nota importante:**  
Como es un despliegue gratuito en Render, la primera vez que accedas o después de un período de inactividad, el servidor puede tardar algunos segundos en arrancar. Esto es completamente normal debido a las políticas de servicios gratuitos.

## Tecnologías utilizadas:

- React
- React Router para la navegación
- React Context para el manejo de estado global
- Tailwind CSS para estilos
- Vercel para el despliegue

## URL de la aplicación desplegada:

El frontend está desplegado en:  
[https://pt-task-frontend.vercel.app/](https://pt-task-frontend.vercel.app/)

**Nota importante sobre el backend:**  
El servidor backend está alojado en Render, por lo que la primera vez que se accede o después de un período de inactividad, puede tardar algunos segundos en arrancar. Esto es normal en despliegues gratuitos.

## Características principales:

1. CRUD de tareas:
    
    - Crear tareas con un título y descripción.
    - Leer y listar todas las tareas.
    - Actualizar el contenido de una tarea.
    - Eliminar tareas específicas.
2. Filtrado de tareas:  
    Aunque el backend permite filtrar tareas completadas o no completadas, esta funcionalidad se realiza en el frontend mediante un único pedido al servidor que devuelve todas las tareas. Esto mejora la eficiencia del manejo de datos en la aplicación.
    

## Instalación y configuración:

### Requisitos previos:

- Node.js y npm instalados (usualmente se incluyen juntos).

### Pasos para iniciar el proyecto localmente:

1. Clonar este repositorio:  
    git clone <repo-url>  
    cd <repo-name>
    
2. Instalar las dependencias:  
    npm install
    
3. Iniciar el servidor de desarrollo:  
    npm start
    
4. Abrir la aplicación en el navegador:  
    [http://localhost:3000](http://localhost:3000)
    

### Variables de entorno:

Este proyecto no requiere configuraciones de variables de entorno específicas.

## Enlace al backend:

El frontend se conecta a este backend para gestionar las tareas:  
PT Task Backend: https://github.com/crtobias/PT-Task-Backend
