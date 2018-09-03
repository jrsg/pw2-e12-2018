# Ejercicio 12
Elabora el juego de Palabra Misteriosa (ahorcado) en JavaScript.

### Demostración
[![](https://img.youtube.com/vi/m3ZJx6z7reY/mqdefault.jpg)](https://youtu.be/m3ZJx6z7reY "Demostración")

1. La Palabra Misteriosa se obtiene aleatoriamente de una colección con más de 80,000 palabras. Considera que encontrarás palabras con acento, por lo que e <> é.
2. El usuario teclea sólo una letra. Si la letra se halla en la palabra, se muestran todas las posiciones en las que se ubica.
3. Si la letra no se encuentra en la palabra, disminuir en 1 a intentos restantes.
4. El usuario gana encontrando todas las letras de la Palabra Misteriosa. Tiene hasta 10 oportunidades de fallar (configurar a tu gusto)
5. Gane o pierda el usuario, la Palabra Misteriosa se revela y aparece el botón "Significado" el cual abre la página del diccionario de la Real Académia Española con su definición.
6. Deberás implementar al menos los siguientes métodos:
   * `adivinar()`
   * `mostrarPalabraMisteriosa()`
   * `mostrarSignificado()`
   * `mostrarIntentos()`
   * `ganoPerdio()`
