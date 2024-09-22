# Express TypeScript App

Este es un proyecto simple de servidor Express construido con TypeScript. Permite a los usuarios enviar y obtener mensajes a través de dos endpoints.

## Requisitos

Asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (se incluye con Node.js)
- [TypeScript](https://www.typescriptlang.org/) (se incluye en las dependencias del proyecto)

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/express-typescript-app.git
   cd express-typescript-app
   ```

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

## Iniciar el Proyecto

Para iniciar el servidor en modo desarrollo, utiliza:

```bash
npm run dev
```

El servidor escuchará en http://localhost:3000.

Comandos Disponibles
Iniciar en modo desarrollo:

```bash
npm run dev
```

Este comando utilizará ts-node-dev para reiniciar el servidor automáticamente al realizar cambios en el código.

Compilar el proyecto:

```
npm run build
```

Este comando compila el código TypeScript a JavaScript y coloca los archivos generados en la carpeta dist.

Iniciar el servidor compilado:

```
npm start
```

Este comando ejecuta el servidor a partir de los archivos JavaScript generados en la carpeta dist.

Limpiar el proyecto:

```
npm run clean
```

Este comando elimina la carpeta dist para una compilación limpia.

## Endpoints

1. **Obtener todos los mensajes**
   Método: GET
   URL: /messages
   Este endpoint devuelve un JSON con todos los mensajes almacenados.

Ejemplo de respuesta:

[ { "id": 1, "content": "Este es un mensaje de prueba." }, { "id": 2, "content": "Otro mensaje de ejemplo." } ]

2. **Crear un nuevo mensaje**
   Método: POST
   URL: /messages
   Body: JSON
   Ejemplo de solicitud:

{ "content": "Este es un nuevo mensaje." }

Este endpoint permite agregar un nuevo mensaje. El campo content es obligatorio.

Ejemplo de respuesta:

{ "id": 3, "content": "Este es un nuevo mensaje." }

## Errores:

Si el campo content está vacío o no se proporciona, recibirás un error:

{ "error": "El contenido del mensaje es obligatorio." }
