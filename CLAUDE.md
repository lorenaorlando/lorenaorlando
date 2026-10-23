# Sitio de Lorena

> **REGLA Nº 1 — NUNCA crees ramas (branches) nuevas, en ningún chat ni sesión. Todo se integra y se sube SIEMPRE directo a `main`.**
>
> - Esto vale aunque la sesión o el sistema te asignen otra rama (por ejemplo `claude/...`). Lorena da aquí su permiso explícito y permanente para trabajar y hacer push en `main`, y esta regla tiene prioridad.
> - Lo primero en cada chat: `git checkout main && git pull origin main`. Para subir, usa solo `git push origin main`.
> - Nunca hagas push a otra rama ni abras pull requests.
> - Si encuentras trabajo en otra rama, intégralo en `main`, súbelo y avisa a Lorena.

Página estática publicada con GitHub Pages desde `main`. Todo vive en `index.html` (HTML, CSS y JS inline); los archivos van en `assets/`.

## Flujo de trabajo

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
- Textos: **Funnel Display** (Google Fonts, en `body`; reemplazó a Instrument Serif), letter-spacing `-0.02em`. Solo para textos largos y de información (párrafos, `tipo | género | fecha`, créditos, botones de plataformas); la lista de etiquetas en Lacquer está en una regla CSS junto al menú flotante. Es bastante más ancha que Instrument Serif: al pasar textos viejos, revisar que no se corten.
- Títulos grandes, "hola! soy" / "hi! i'm" y "y hago muuuchas cosas..." del hero, y todas las etiquetas y títulos cortos ("portafolio", "indivirtual", "lee mi historia...", "escúchame!", "← volver", nombres de disco, "créditos", "escucha en:", el menú, etc.): **Lacquer** (Google Fonts, variable `--display`; reemplazó a Modak). Es una fuente pintada a mano que siempre sale en mayúsculas.
- Sombras de texto: drop shadow suave en `#360185` (variables `--shadow` y `--shadow-sm`), nunca sombras duras.
- "Lorena" en Lacquer, letter-spacing `0`, del mismo ancho que tenía con Modak.

## Comportamiento que hay que mantener

- **Título de la pestaña:** `LORENA ORLANDO`. En el hero sigue diciendo solo "Lorena".
- **Preloader.** Al abrir, una pantalla lila con "lorenaorlando.com" y "cargando"/"loading" debajo (Lacquer), barra de % y número. No deja ver ni navegar el sitio hasta que cargan las fuentes, todas las imágenes y todos los 3D (también los de pantallas y subpantallas). Después, todavía tapado, pone todas las capas en su sitio un momento (`warmAll`) para que cada 3D se dibuje una vez y no se trabe al aparecer. Los iframes externos (diseño web, escritura) cargan justo al terminar, en segundo plano. Todo 3D o imagen nueva debe entrar en ese conteo (los `model-viewer` con `src` y los `<img>` se cuentan solos). Tope de seguridad: 40 s.
- **Rueda e iframes.** Durante una transición y hasta que la rueda para y se mueve el mouse, los iframes llevan `pointer-events:none` (clase `noframes` en `<html>`); si no, el iframe se traga parte del gesto y la pantalla salta dos veces. La rueda que llega durante una transición cuenta como parte de ella.
- **Menú flotante** (`.secnav`): aparece desde música hasta magick (no en el hero, ni en los títulos, ni en subpantallas). En escritorio, una píldora arriba al centro con las 6 secciones en Lacquer (la actual en mostaza). En móvil, un botón "menú" abajo a la derecha que despliega la lista.
- **Flechas doodle** (`.doodle`, trazo a mano como Lacquer): en diseño web, a la izquierda del iframe (en móvil, arriba y abajo); en magick, una flecha con "inicio" debajo de la vela (en móvil, entre el título y las imágenes) que vuelve al hero.
- **Hero en móvil:** todo un poco más abajo y, al pie, "scroll" con una flecha doodle que rebota (`.hscroll`, solo móvil).
- **Táctil:** un deslizamiento cambia de pantalla si pasa de 45 px en vertical; si empieza sobre un botón, link, portada o 3D, hacen falta 110 px (si no, un toque algo corrido en "mi historia" mandaba a la pantalla anterior).
- **Sin scroll real.** La rueda, el táctil (solo gestos verticales) y el teclado cambian de pantalla. Un gesto = una pantalla: la rueda cuenta como gesto nuevo solo tras una pausa de 260 ms o un empujón claramente más fuerte que la inercia, y se ignora durante la transición y 250 ms después. Si el cursor/dedo está sobre un panel con scroll propio que todavía puede desplazarse (función `scrolls()`), se desplaza el panel y no cambia la pantalla.
- **Botones de "mi historia"** (`button.rw`): texto suelto en Lacquer como "otros proyectos & arte sonoro" (sin fondo ni ícono), un poco más chico, con un latido y un meneo cada tanto (`rwpulse`) que invitan a tocarlo. Música: "cómo llegué a tener 13 oyentes mensuales en spotify: un caso de éxito" / "how i got to 13 monthly listeners on spotify: a success story", arriba del órgano. Fotografía: "detrás del encuadre" / "behind the frame", junto a "indivirtual" (en escritorio abajo a la derecha; en móvil, a la izquierda de la imagen).
- **Transiciones tipo ruleta.** Cada cambio de pantalla es una animación de rotación: lo actual sube y gira, y lo siguiente sube después.
- **Nubes.** Son 14 y quedan siempre fijas de fondo, flotando suavemente. Lo que cambia es el contenido. Los mockups no las muestran, pero no se quitan nunca.
- **Cabeza 3D.** `assets/HEAD_EXP.glb` en `<model-viewer>` gira sola y se puede girar con el mouse/dedo; a su lado una pastilla "arrástrame!"/"drag me!" (`.dragme`, con ícono de giro) que desaparece en cuanto alguien la toca. En la pantalla 2 se reduce y se mueve a la izquierda (en móvil, hacia arriba).
- **Títulos.** Los de la pantalla 2 hacen pulse al hover. Sin 3D al lado (se quitaron porque hacían lenta la transición). "música" lleva a la pantalla 3 y "fotografía" a la de fotografía.
- **Redes (pantalla 2).** Debajo de la cabeza (en móvil, entre la cabeza y los títulos), fila de íconos `.social` que abren en otra pestaña:
  - YouTube e Instagram: @lorenamariaorlando
  - Substack: https://brutalmentehonesta.substack.com
  - Letterboxd: https://letterboxd.com/lorenaorlando
  - Goodreads: https://www.goodreads.com/user/show/160560777-lorena-orlando
  - DFOS (`DFOS.png`): https://lorenalandia.dfos.com
  - Sublime (`SUBLIME.png`): https://sublime.app/lorenaorlando

  Los cinco primeros son SVG de Simple Icons en crema; DFOS y Sublime usan sus imágenes.
- **Pantalla 3 (música).** Collage de portadas en la posición del mockup (en móvil, cuadrícula 3×3 en el orden del arreglo `ALBUMS`; orden por fecha: …, Prima Materia, Nuevas Tendencias, Sin miedos y sin esperanzas, Coclea, Rösler), con el órgano 3D al centro (se carga al salir de la pantalla 1). Al hover sale un LP de la portada y aparece el nombre del disco. Los datos de cada disco están en el arreglo `ALBUMS` del JS.
- **Ficha del disco.** Click/tap en una portada abre la ficha (subpantalla de música, solo por click): portada con LP, título, `tipo | género | fecha`, texto, créditos y botones a Spotify, Apple Music, YouTube Music y Bandcamp. Se cierra con "← volver" o Escape. La rueda/táctil no cambian de pantalla ahí; el texto hace scroll propio si no cabe. Si el disco tiene `video`, el embed de YouTube reemplaza a la portada. En los créditos, una línea que empieza con `## ` es un subtítulo. `links:'soon'` deja los botones de plataformas como pendientes. `track:[url, nombre, id]` pone el reproductor de Bandcamp de una canción en lugar de los botones (La Resistance), en tema oscuro con links en mostaza.
- **Otros proyectos & arte sonoro.** Click en ese texto de la pantalla 3: los discos salen volando y entran las portadas de `PROJECTS` (izquierda) y los videos de `ONIRIAS` (derecha, bajo "onirias: piezas radiofónicas"). El mismo texto pasa a "← mis discos" para volver. Los videos se cargan solo la primera vez que se entra.
- **Fotografía.** Pantalla siguiente a música (con scroll o click en "fotografía"). A la izquierda, collage de fotos de `assets/portfolio/` (arreglo `PHOTOS` del JS, con posición de escritorio y de móvil; tamaños y giros a propósito dispares, medio desordenado) que llegan volando desde la izquierda cada vez que se entra y hacen un ligero tilt que sigue al mouse. Las fotos y "portafolio" llevan a https://lorenaorlando.art. En el centro exacto de la pantalla el Zenit 3D con el título "fotografía". A la derecha el recorte de INDIVIRTUAL (`INDIVIRTUAL_CUT.webp`) con "indivirtual (expo 3D)", que lleva a la expo en oncyber. "detrás del encuadre" abre su propia "mi historia" (cámaras: Zenit y Fujifilm).
- **Escritura.** Pantalla siguiente a fotografía (con scroll o click en "escritura"). En español: a la izquierda el feed de Supascribe (3 posts) dibujado a 520px y escalado desde JS (`fitFeed`) para que quepa completo, sin scroll propio y sin heredar el letter-spacing del sitio; en el centro el LAPI 3D con el título "escritura"; a la derecha la imagen del e-zine (`SOLO.png`) en retrato, que abre el poema de mmm.page en otra pestaña (mmm.page no permite meterlo en un iframe). En inglés solo un iframe de https://lorenalandia.fun que ocupa el 80% de la pantalla. El iframe y el script de Supascribe se cargan al entrar, solo los del idioma activo. Al salir de un iframe, la inercia de la rueda no cambia de pantalla.
- **Netart.** Pantalla siguiente a escritura (con scroll o click en "net art & 3d"). En el centro el LOGO_COMP 3D con el título "netart"; alrededor, como en el mockup, cuatro imágenes recortadas con su etiqueta que abren su sitio en otra pestaña: "deardiary.png" (`DIGITAL_IMAGE_WEB.png`, https://lorenaorlando.hotglue.me) arriba a la izquierda, "funscroll" (`FUNSCROLL_WEB.png`, https://funscroll.life) arriba a la derecha, "indivirtual (expo 3D)" (`INDIVIRTUAL_CUT.webp`, la expo en oncyber) abajo a la izquierda y "lorenalandia (mundo 3D)" (`LORENALANDIA_3D_WEB.png`, https://newart.city/show/lorenalandia) abajo a la derecha. En móvil, el 3D arriba y las imágenes en cuadrícula 2×2.
- **Diseño web.** Pantalla siguiente a netart (con scroll o click en "diseño web"). Un iframe de https://lorenaorlando.click que ocupa el 80% de la pantalla (se carga al entrar), flechas arriba y abajo para ir a la pantalla anterior/siguiente (la de abajo se apaga sola si es la última) y, en la esquina superior derecha, el COMPU_VIEJA 3D girando con el título "diseño" inclinado.
- **Magick.** Pantalla siguiente a diseño web (con scroll, con la flecha de abajo de diseño web o click en "magick"); es la última. Según el mockup: a la izquierda "Pragmagicka" y un panel de texto derecho con scroll propio (3 párrafos en `data-only` es/en, con links a ko-fi, pragmagick.app y Monedaire; el link de cursos y Amigaaah solo en español); en el centro el VELA 3D con el título "magick" (sin "lee mi historia": se quitó; la sección `magickStory` sigue en el HTML pero no tiene botón); a la derecha las pantallas de la app con su etiqueta. En español `PRAGMAGICKAPP.png` (https://pragmagick.app/) y `AMIGAH.png` (https://pragmagick.app/amigah); en inglés solo `PRAG_ENG.png` (https://pragmagick.app/). En móvil, el 3D arriba, las imágenes al medio y el texto abajo.
- **Subpantallas.** La ficha del disco y las "mi historia" (música y fotografía) solo se abren con click, van una más abajo de la pantalla de donde salen y "← volver"/Escape regresan ahí.
- **Mi historia.** El botón-nube de música abre esta pantalla (subpantalla de música, como la ficha). Carrusel de instrumentos 3D del mismo tamaño que el órgano (Funmachine, guitarra, groovebox) que avanza solo hacia la izquierda y con flechas (también ← → del teclado y deslizar en móvil); se pausa mientras se lee un texto. Al hover (tap en móvil) cada 3D muestra su texto en un recuadro oscuro. En la de música, los 3D van a la izquierda y el texto largo a la derecha en una ventana con scroll (en móvil, debajo); está en dos bloques `data-only="es"`/`"en"` (con HTML, por eso no usa `data-es`). Sus links `a.go[data-open="ARCHIVO"]` abren la ficha del disco o banda con esa portada, y "← volver" de esa ficha regresa a la historia. `a.go[data-go="N"]` lleva directo a la pantalla principal N ("fotografía" → 3): la historia sube y la pantalla entra desde abajo. En inglés, los títulos de los discos quedan en español con la traducción entre paréntesis (menos Coclea). La historia fotográfica usa el mismo formato (cámaras a la izquierda, texto con scroll a la derecha, en `data-only` es/en, con links `a.ext` al portafolio, Lorenalandia —substack en esp, dfos en eng— e INDIVIRTUAL). La esotérica sigue con dos textos inclinados a los lados.
- **Idioma.** Al entrar se elige por el país de la IP (`get.geojs.io`, si falla `api.country.is`): España, América Latina (incluido Brasil) y Guinea Ecuatorial en español; el resto del mundo en inglés. Si nadie responde en 2,5 s, se usa el idioma del navegador. El preloader espera ese dato y dice "cargando" o "loading". El botón eng/esp (en Lacquer) sigue cambiándolo a mano. eng/esp solo aparece en la primera pantalla. Los textos traducibles usan `data-es` / `data-en`.
- **Pantallas ocultas.** Llevan `inert` para que no se puedan enfocar.
- **Hover = tap en móvil (por defecto).** Todo lo que en escritorio pasa al hover debe poder verse con un tap en pantallas táctiles, y llevar un aviso discreto "tócame!" (`data-en="tap me!"`) en la fuente de texto que solo aparece con `@media (hover:none)`. Si hay muchos elementos iguales (como las portadas), un solo aviso (`.tapcloud`, misma pastilla morada que `.tapme`), no uno por elemento.
- Respetar `prefers-reduced-motion`.

## Legibilidad

Reglas que salieron de ajustar las fichas; aplicarlas a todo texto nuevo:

- **Texto sobre las nubes:** siempre sobre un panel `rgba(54,1,133,.34)` con `backdrop-filter: blur(14px)` y esquinas apenas redondeadas, solo detrás del bloque de texto. Si va encima de un 3D o una imagen, más oscuro (`.62`).
- **Párrafos:** letter-spacing `-0.015em`, line-height ~1.4, **mínimo 20px** (también en móvil). Las etiquetas y textos cortos tampoco bajan de 20px; solo se permiten más chicos los botones de plataformas, los avisos "tócame!" y, en móvil, los nombres de disco y los pies de los videos (16px).
- **Textos largos** (como la historia en la música): panel mucho más oscuro (`rgba(30,0,75,.78)`), letra de mínimo 20px (19px en móvil), letter-spacing `.012em` y line-height 1.5.
- **Líneas de datos y créditos** (`tipo | género | fecha`): letter-spacing normal (`0`), los datos en mostaza, separados con `|` tenue (`.sep`, margen `.6em`) y sin partir un dato a la mitad. Se arman con `joinSep()`: si un dato no cabe, pasa al renglón siguiente y `trimSeps()` oculta su `|` (nunca queda un `|` suelto). Los créditos van del mismo tamaño que esa línea.
- **Tamaños:** en pantallas de escritorio usar la unidad `--uv: min(1vw, 1.7vh)` para que el texto también se ajuste a la altura y no se corte en ventanas anchas y bajitas.
- **Íconos de plataformas en música** (`.listen`): iguales a la fila de redes, íconos crema sueltos con drop shadow, sin recuadro.
- **Textos con scroll propio** (`.mpanel`, `.album-info`, `.tale`, y en móvil `.album-in`/`.story-in`): llevan al pie un aviso "desliza"/"scroll" con flecha doodle (`.shint`: píldora con mucho padding, fondo `rgba(20,0,52,.84)` y blur de 28px, más fuerte que el de los recuadros) que rebota y desaparece al llegar al final. Toda caja nueva con scroll debe sumarse a `SCROLLERS`.
- **Botones de plataformas:** fondo crema, los 4 siempre en un solo renglón; si no caben, icono arriba y nombre abajo.
- **Etiquetas sobre imágenes** (nombre del disco al hover): pastilla morada con texto crema, nunca texto suelto encima de una foto.
- **Móvil.** Debe verse bien; el corte está en `max-width: 700px`.

## Archivos del repo

| Archivo | Qué es |
| --- | --- |
| `index.html` | Todo el sitio (HTML, CSS y JS). |
| `CLAUDE.md` | Estas instrucciones. |
| `README.md` | Texto del perfil de GitHub; no es parte del sitio. |
| `marca-722e46dd/` | Manual de marca (página + PDF) en https://lorenaorlando.com/marca-722e46dd/. Es oculto a propósito: no se enlaza desde el sitio y lleva `noindex`. No enlazarlo ni cambiarle el nombre a la carpeta sin que Lorena lo pida. |

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
| `VELA.glb` | Vela | Pantalla de magick y carrusel de mi historia esotérica |
| `ZENIT.glb` | Cámara Zenit (fotografía) | Pantalla de fotografía y carrusel de mi historia fotográfica |
| `FUJI_EXP.glb` | Cámara instantánea Fujifilm | Carrusel de mi historia fotográfica |
| `LAPI_EXP.glb` | Escritura | Pantalla de escritura (solo en español) |
| `LOGO_COMP.glb` | Net art & 3d | Pantalla de netart |
| `COMPU_VIEJA.glb` | Diseño web | Pantalla de diseño web |
| `TAROT_EXP.glb` | Magick / tarot | Carrusel de mi historia esotérica |

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

### Netart

- `DIGITAL_IMAGE_WEB.png`: deardiary.png. `FUNSCROLL_WEB.png`: funscroll. `LORENALANDIA_3D_WEB.png`: lorenalandia (mundo 3D). Para indivirtual se reusa `INDIVIRTUAL_CUT.webp`.

### Escritura

- `SOLO.png`: portada del e-zine *solo escribí ese poema para probar mi impresora*; pantalla de escritura (español).

### Magick

- `PRAGMAGICKAPP.png`: pantalla de pragmagick.app (español). `PRAG_ENG.png`: la misma en inglés. `AMIGAH.png`: AMIGAAAAAH, oráculo de stickers (solo en español).

### Imágenes sin usar todavía

- `RADIO.png`, `REINO.png`.

### Íconos de redes

- `DFOS.png` y `SUBLIME.png`: íconos de DFOS y Sublime en la fila de redes de la pantalla 2.

### Nubes

`1.png`, `2.png`, `4.png`, `5.png` y `6.png` son las 5 imágenes de nubes. Se repiten para formar las 14 nubes fijas del fondo (no existe `3.png`).

### Otros

- `FAVICON.png`: icono de la pestaña (y de acceso directo en iPhone).
- `vacio`: archivo de relleno que se usó para crear la carpeta; no se usa.
- `.DS_Store`: archivo automático de Mac; no se usa.

### Carga

Primero se cargan desde `assets/`. Si fallan, se cargan desde `https://lorenalandia.fun/wp-content/uploads/2026/10/`.
