# Desafio-08
Coderhouse - Programación Backend / Clase 08

> Consigna: Realizar un proyecto de servidor basado en node.js que permita listar e incorporar ítems dentro de un array de productos en memoria.

- Cada producto estará representado por un objeto con el siguiente formato: 
{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url al logo o foto del producto)
}

>> Aspectos a incluir en el entregable:
- Implementar las rutas get y post en conjunto con las funciones necesarias (utilizar clases y un módulo propio).
- Cada ítem almacenado dispondrá de un id proporcionado por el backend, que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que ve a ser listado en forma individual.
- Las rutas propuestas serían las siguientes:
  1) Listar en forma total (get) : '/api/productos' -> devuelve array de productos
  2) Listar en forma individual (get) (por id): '/api/productos/:id' -> devuelve producto listado
  3) Almacenar un producto (post) : '/api/productos' -> devuelve producto incorporado
- Para el caso de que se liste en forma individual un producto que no exista, se devolverá el objeto: {error : 'producto no encontrado'}
- En caso de no haber productos en el listado total, se retornará el objeto: {error : 'no hay productos cargados'}
- Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman.
