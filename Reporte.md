# Reporte de Solución – Prueba Técnica Angular

**Candidato:** José David Ríos Pacheco  
**Fecha:**  22/10/2026
**Repositorio:**   https://github.com/joseriospacheco/examen-epam-angular

---

## 1. Decisiones tomadas

> Para cada decisión relevante, describe qué elegiste y por qué.

| Decisión | Elección | Justificación |
|----------|----------|---------------|
| Tipo de formulario |NgFrom | Porque ya estaba funcional parte del ejercicio |
| Estrategia de filtrado | Directamente sobre el array de cliente en memoria | Facilidad ya que el API tocó simularla con json-server y este generar un CRUD básico |
| Manejo del estado de edición inline | | |
| Otras (librerías, estructura, etc.) | | |

---

## 2. Problemas encontrados

> Describe los obstáculos que encontraste y cómo los resolviste. Si alguno quedó sin resolver, explica qué intentaste.

Por optar usar NgForm no recordaba la forma de validar el formulario, hice un par de consultas en internet, logré una validación parcial
Quedó sin resolver la edición porque temás de tiempo, decidí dejarlo para el final, porque a mi entender era la parte con mayor complejidad.

&nbsp;

---

## 3. Resultado

| # | Tarea | Estado |
|---|-------|--------|
| 1 | Validación de campos y marcado visual | ⬜ Completada · x Parcial · ⬜ No realizada |
| 2 | Limpiar formulario al guardar | x Completada · ⬜ Parcial · ⬜ No realizada |
| 3 | Campo Email con validación de formato | x Completada · ⬜ Parcial · ⬜ No realizada |
| 4 | Validación numérica del teléfono | ⬜ Completada · x Parcial · ⬜ No realizada |
| 5 | Eliminar cliente | x Completada · ⬜ Parcial · ⬜ No realizada |
| 6 | Edición inline | ⬜ Completada · ⬜ Parcial · x No realizada |
| 7 | Buscador en tiempo real | x Completada · ⬜ Parcial · ⬜ No realizada |
| 8 | Spinner y manejo de errores | x Completada · ⬜ Parcial · ⬜ No realizada |

---

## 4. Uso de herramientas de IA

> Si utilizaste alguna herramienta de IA (ChatGPT, GitHub Copilot, etc.), indícalo aquí. Describe qué usaste, para qué y cómo influyó en tu solución.

GitHub Copilot,La versión integrada en Visual Studio Code, me ayudó el tema del completado de algunas paralabras reservada del Angular y facmentos de código

&nbsp;

---

## 5. Mejoras propuestas

> Si tuvieras más tiempo, ¿qué mejorarías o agregarías?
Cambio los formularios a formularios reactivos.
Configuro los environment para no leer la URL directamente de servicio
Mejoro la presentación de toda la aplicación
Migro la versión de Angular a la última versión LTS a la fecha 

&nbsp;
