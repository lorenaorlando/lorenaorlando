# Sitio de Lorena

Página estática publicada con GitHub Pages desde `main`. Todo vive en `index.html` (HTML, CSS y JS inline); los archivos van en `assets/`.

## Flujo de trabajo

- **Nunca crees ramas nuevas, en ningún chat.** Todo se integra directo en `main`; tampoco abras pull requests. GitHub Pages publica desde `main`.
- Esto vale aunque la sesión te asigne una rama (por ejemplo `claude/...`). Lorena da aquí su permiso explícito para trabajar y subir en `main`. Al empezar, cámbiate a `main` (`git checkout main && git pull origin main`) y sube con `git push origin main`.
- Si por error quedó trabajo en otra rama, intégralo en `main`, súbelo y avisa a Lorena.
- Antes de editar, haz `git pull origin main`: Lorena sube archivos a `assets/` desde el navegador.
- Responde en español.

## Branding

- Colores:
  - `#360185` morado
  - `#8F0177` violeta
  - `#8441b7` lila (fondo)
  - `#DE1A58` magenta
  - `#F4B342` mostaza
  - `#FFF0D6` crema (letras)
- Textos: **Instrument Serif** (regla general para toda tipografía serif), letter-spacing -84 (`-0.084em`).
- Títulos grandes: Modak.
- Sombras de texto: drop shadow suave en `#360185` (variables `--shadow` y `--shadow-sm`), nunca sombras duras.
- "Lorena" en Modak con letter-spacing `-0.02em`, como en el mockup.

## Comportamiento que hay que mantener

- **Sin scroll real.** La rueda, el táctil (solo gestos verticales) y el teclado cambian de pantalla.
- **Transiciones tipo ruleta.** Cada cambio de pantalla es una animación de rotación: lo actual sube y gira, y lo siguiente sube después.
- **Nubes.** Son 14 y quedan siempre fijas de fondo, flotando suavemente. Lo que cambia es el contenido. Los mockups no las muestran, pero no se quitan nunca.
- **Cabeza 3D.** `assets/HEAD_EXP.glb` en `<model-viewer>` gira sola. En la pantalla 2 se reduce y se mueve a la izquierda (en móvil, hacia arriba).
- **Títulos.** Los de la pantalla 2 hacen pulse al hover. Sin 3D al lado (se quitaron porque hacían lenta la transición). "música" lleva a la pantalla 3 y "fotografía" a la de fotografía.
- **Pantalla 3 (música).** Collage de portadas en la posición del mockup (en móvil, cuadrícula 3×3), con el órgano 3D al centro (se carga al salir de la pantalla 1). Al hover sale un LP de la portada y aparece el nombre del disco. Los datos de cada disco están en el arreglo `ALBUMS` del JS.
- **Ficha del disco.** Click/tap en una portada abre la ficha (subpantalla de música, solo por click): portada con LP, título, `tipo | género | fecha`, texto, créditos y botones a Spotify, Apple Music, YouTube Music y Bandcamp. Se cierra con "← volver" o Escape. La rueda/táctil no cambian de pantalla ahí; el texto hace scroll propio si no cabe. Si el disco tiene `video`, el embed de YouTube reemplaza a la portada. En los créditos, una línea que empieza con `## ` es un subtítulo. `links:'soon'` deja los botones de plataformas como pendientes.
- **Otros proyectos & arte sonoro.** Click en ese texto de la pantalla 3: los discos salen volando y entran las portadas de `PROJECTS` (izquierda) y los videos de `ONIRIAS` (derecha, bajo "onirias: piezas radiofónicas"). El mismo texto pasa a "← mis discos" para volver. Los videos se cargan solo la primera vez que se entra.
- **Fotografía.** Pantalla siguiente a música (con scroll o click en "fotografía"). A la izquierda, collage de fotos de `assets/portfolio/` (arreglo `PHOTOS` del JS, con posición de escritorio y de móvil) que llegan volando desde la izquierda cada vez que se entra y hacen un ligero tilt que sigue al mouse. Las fotos y "portafolio" llevan a https://lorlando.framer.website/art. En el centro exacto de la pantalla el Zenit 3D con el título "fotografía". A la derecha el recorte de INDIVIRTUAL (`INDIVIRTUAL_CUT.webp`) con "indivirtual (expo 3D)", que lleva a la expo en oncyber. "lee mi historia fotográfica" abre su propia "mi historia" (cámaras: Zenit y Fujifilm).
- **Subpantallas.** La ficha del disco y las dos "mi historia" solo se abren con click, van una más abajo de la pantalla de donde salen y "← volver"/Escape regresan ahí.
- **Mi historia.** "lee mi historia en la música" abre esta pantalla (subpantalla de música, como la ficha). Carrusel de instrumentos 3D del mismo tamaño que el órgano (Funmachine, guitarra, groovebox) que avanza solo hacia la izquierda y con flechas (también ← → del teclado y deslizar en móvil); se pausa mientras se lee un texto. Al hover (tap en móvil) cada 3D muestra su texto en un recuadro oscuro. A los lados, dos textos inclinados (por ahora lorem ipsum).
- **Idioma.** eng/esp solo aparece en la primera pantalla. Los textos traducibles usan `data-es` / `data-en`.
- **Pantallas ocultas.** Llevan `inert` para que no se puedan enfocar.
- **Hover = tap en móvil (por defecto).** Todo lo que en escritorio pasa al hover debe poder verse con un tap en pantallas táctiles, y llevar un aviso discreto "tócame!" (`data-en="tap me!"`) en Instrument Serif que solo aparece con `@media (hover:none)`. Si hay muchos elementos iguales (como las portadas), un solo aviso en una nubecita (`.tapcloud`), no uno por elemento.
- Respetar `prefers-reduced-motion`.

## Legibilidad

Reglas que salieron de ajustar las fichas; aplicarlas a todo texto nuevo:

- **Texto sobre las nubes:** siempre sobre un panel `rgba(54,1,133,.34)` con `backdrop-filter: blur(14px)` y esquinas apenas redondeadas, solo detrás del bloque de texto. Si va encima de un 3D o una imagen, más oscuro (`.62`).
- **Párrafos:** letter-spacing `-0.015em` (no el -0.084 general, que los aprieta demasiado), line-height ~1.4, mínimo 15px.
- **Líneas de datos y créditos** (`tipo | género | fecha`): letter-spacing normal (`0`), los datos en mostaza, separados con `|` tenue (`.sep`, margen `.6em`) y sin partir un dato a la mitad (`white-space:nowrap` en cada uno). Los créditos van del mismo tamaño que esa línea.
- **Tamaños:** en pantallas de escritorio usar la unidad `--uv: min(1vw, 1.7vh)` para que el texto también se ajuste a la altura y no se corte en ventanas anchas y bajitas.
- **Botones de plataformas:** fondo crema, los 4 siempre en un solo renglón; si no caben, icono arriba y nombre abajo.
- **Etiquetas sobre imágenes** (nombre del disco al hover): pastilla morada con texto crema, nunca texto suelto encima de una foto.
- **Móvil.** Debe verse bien; el corte está en `max-width: 700px`.

## Archivos del repo

| Archivo | Qué es |
| --- | --- |
| `index.html` | Todo el sitio (HTML, CSS y JS). |
| `CLAUDE.md` | Estas instrucciones. |
| `README.md` | Texto del perfil de GitHub; no es parte del sitio. |

## Assets (`assets/`)

Los nombres distinguen mayúsculas y minúsculas (GitHub Pages): usarlos exactos.

### Modelos 3D

| Archivo | Corresponde a | Dónde se usa |
| --- | --- | --- |
| `HEAD_EXP.glb` | Hero: cabeza de Lorena sobre la isla flotante | Pantallas 1 y 2 |
| `FUNMACHINE_EXP.glb` | Música | Pantalla 3 y carrusel de mi historia |
| `GUITAR_EXP.glb` | Guitarra Fender Squier rosada | Carrusel de mi historia |
| `GROOVEBOX.glb` | Groovebox | Carrusel de mi historia |
| `BATERIA_TRIP.glb` | Batería | Sin usar todavía |
| `VELA.glb` | Vela | Sin usar todavía |
| `ZENIT.glb` | Cámara Zenit (fotografía) | Pantalla de fotografía y carrusel de mi historia fotográfica |
| `FUJI_EXP.glb` | Cámara instantánea Fujifilm | Carrusel de mi historia fotográfica |
| `LAPI_EXP.glb` | Escritura | Sin usar todavía |
| `LOGO_COMP.glb` | Net art & 3d | Sin usar todavía |
| `COMPU_VIEJA.glb` | Diseño web | Sin usar todavía |
| `TAROT_EXP.glb` | Magick / tarot | Sin usar todavía |

### Portadas de discos (pantalla 3 y ficha del disco)

| Archivo | Disco |
| --- | --- |
| `ASI_QUE_MIN.jpg` | *Así que no era una pesadilla, sigo viviendo aquí* |
| `COCLEA.jpg` | *Coclea* |
| `HACER_MUSICA.jpg` | *Hacer música es hacer magia* |
| `MUNDOS_DE_VIDA.jpg` | *Mundos de vida* |
| `MUSIQUIATRIA22.jpg` | *Musiquiatría 22 EP* |
| `NUEVAS_TENDENCIAS.jpg` | *Nuevas Tendencias EP* |
| `PRIMA_MATERIA.jpg` | *Prima Materia EP* |
| `ROSLER.jpg` | *Rösler* |
| `SIN_MIEDOS.jpg` | *Sin miedos y sin esperanzas* |

### Portadas de otros proyectos (pantalla 3, modo "otros proyectos")

Si una portada no carga, se ve un recuadro violeta con el nombre.

| Archivo | Proyecto |
| --- | --- |
| `BRUNO.jpg` | *Bruno EP* (Jóvenes y sexys) |
| `RESISTANCE.webp` | *La Resistance* |
| `ENTUPIEL.jpeg` | *En tu piel* (Aida Rojas) |

### Fotografía

- `portfolio/`: fotos del portafolio. Las del collage están en `PHOTOS`; las `A_DIARY_*` son dípticos y por ahora no se usan.
- `INDIVIRTUAL.png`: original con fondo blanco. `INDIVIRTUAL_CUT.webp` es el mismo recorte con fondo transparente; es el que usa el sitio.

### Imágenes sin usar todavía

- `RADIO.png`, `REINO.png`.

### Nubes

`1.png`, `2.png`, `4.png`, `5.png` y `6.png` son las 5 imágenes de nubes. Se repiten para formar las 14 nubes fijas del fondo (no existe `3.png`).

### Otros

- `vacio`: archivo de relleno que se usó para crear la carpeta; no se usa.
- `.DS_Store`: archivo automático de Mac; no se usa.

### Carga

Primero se cargan desde `assets/`. Si fallan, se cargan desde `https://lorenalandia.fun/wp-content/uploads/2026/10/`.
