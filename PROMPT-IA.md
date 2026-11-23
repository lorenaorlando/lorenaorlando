# Prompt para trabajar lorenaorlando.com con cualquier IA

> Copia este archivo completo como primer mensaje (o "instrucciones del sistema") en la IA que vayas a usar, junto con acceso al repositorio o a sus archivos. Está pensado para que una IA nueva, sin memoria de lo que se hizo antes, pueda seguir trabajando el sitio sin romperlo.

---

## 1. Quién soy y qué es esto

Soy **Lorena Orlando**, artista multidisciplinaria venezolana (música, fotografía, escritura, net art y 3D, diseño web y magick/tarot). Este repositorio es mi sitio personal **https://lorenaorlando.com**.

- Repositorio: `github.com/lorenaorlando/lorenaorlando`.
- Publicado con **GitHub Pages** desde la rama `main` (dominio en el archivo `CNAME`). Cada push a `main` se publica solo en 1–2 minutos.
- Es un sitio **estático**, sin frameworks ni build: HTML, CSS y JavaScript a mano, todo dentro de cada `index.html`.
- **Háblame siempre en español.** No soy programadora: explícame los cambios en lenguaje simple, qué hiciste y qué tengo que revisar yo.

## 2. Reglas que no se negocian

1. **Nunca crees ramas ni pull requests.** Todo se trabaja y se sube directo a `main`: `git checkout main && git pull origin main` al empezar y `git push origin main` al terminar. Si encuentras trabajo en otra rama, intégralo en `main` y avísame.
2. **Antes de editar, haz `git pull origin main`.** Yo subo imágenes y 3D a `assets/` desde el navegador de GitHub, así que el repo cambia sin que tú lo sepas.
3. **Lee `CLAUDE.md` completo antes de tocar nada.** Es la especificación viva del sitio: cada comportamiento, posición, texto, color y regla de legibilidad está ahí. **Cada cambio que hagas debe quedar reflejado en `CLAUDE.md`** (es la memoria del proyecto para la próxima IA).
4. No borres ni renombres archivos de `assets/` sin preguntarme. Los nombres distinguen mayúsculas y minúsculas (GitHub Pages).
5. No enlaces ni renombres `marca-722e46dd/` (manual de marca oculto a propósito, con `noindex`).
6. Respeta `prefers-reduced-motion` y que todo se vea bien en móvil (corte en `max-width: 700px`).
7. No inventes textos, links ni datos sobre mi obra: si falta algo (una URL, un año, un crédito), pregúntame. Si un link no se puede verificar, dilo.

## 3. Archivos del repo

| Ruta | Qué es |
| --- | --- |
| `index.html` | **Todo el sitio principal** (~2000 líneas: HTML, CSS y JS inline). |
| `CLAUDE.md` | Especificación completa y reglas. Léela primero. |
| `PROMPT-IA.md` | Este archivo. |
| `README.md` | Texto de mi perfil de GitHub; no es parte del sitio. |
| `CNAME` | Dominio `lorenaorlando.com`. No tocar. |
| `assets/` | Imágenes, 3D (`.glb`), nubes, portadas, fotos (`assets/portfolio/`), collabs (`assets/collabs/`). Detalle en `CLAUDE.md`. |
| `links/index.html` | Página de links para la bio (lorenaorlando.com/links/). |
| `generador-canciones-venezolanas/` | Generador de canciones mainstream venezolanas (JS puro) + `hoja-google.gs` (Apps Script que guarda el formulario en una hoja de Google). |
| `marca-722e46dd/` | Manual de marca (español en la raíz de la carpeta, inglés en `en/`), página web + PDF. Si se edita, editar las dos versiones y volver a sacar los PDF. |

## 4. Identidad visual (resumen; el detalle está en `CLAUDE.md`)

- **Colores:** lila `#8441b7` (fondo), morado `#360185`, violeta `#8F0177`, magenta `#DE1A58`, mostaza `#F4B342`, crema `#FFF0D6` (letras).
- **Tipografías (Google Fonts):**
  - **Lacquer** (`--display`) para títulos, etiquetas, botones y textos cortos. **Siempre en versión "creyón", sin chorreados:** toda regla CSS con Lacquer lleva `text-transform:lowercase` (las mayúsculas reales de Lacquer traen chorreados de pintura; las minúsculas se dibujan como mayúsculas limpias). Los textos de Funnel dentro de un bloque Lacquer llevan `text-transform:none`.
  - **Funnel Display** para párrafos, datos, créditos y botones de plataformas.
- **Sombras de texto** siempre suaves en morado (`--shadow`, `--shadow-sm`), nunca duras.
- **Nubes:** 14 nubes fijas de fondo que flotan suave; nunca se quitan.
- **Legibilidad:** texto sobre nubes siempre en panel translúcido (`rgba(54,1,133,.34)` + `blur(14px)`); textos largos en panel `rgba(30,0,75,.78)`; mínimo **20px** (19px en textos largos en móvil); excepciones en `CLAUDE.md`.
- **Tamaños en escritorio:** usar `--uv: min(1vw, 1.7vh)` para que el texto se ajuste también al alto.
- **Alto de pantalla:** en el CSS **no se usa `vh` directo** sino `calc(N * var(--vh))`; `--vh` es `1svh` (alto visible con las barras del navegador del celular a la vista). Todo CSS nuevo debe usar `var(--vh)`.

## 5. Cómo funciona el sitio principal (`index.html`)

- **Sin scroll real:** pantallas a pantalla completa (`.layer`) que cambian con rueda, deslizamiento táctil vertical o teclado, con una transición tipo ruleta (lo actual sube y gira, lo siguiente entra desde abajo). Un gesto = una pantalla. Si el cursor está sobre un panel con scroll propio, se desplaza el panel (función `scrolls()`).
- **Pantallas** (índice que usa `go(n)`): 0 hero ("hola! soy Lorena" + cabeza 3D), 1 lista de secciones + redes, 2 música, 3 fotografía, 4 escritura, 5 net art, 6 diseño web, 7 magick, 8 otros proyectos (la última). Están en `LAYERS`; `LAST` es la última; `SECTION_NAMES` tiene sus nombres para Analytics.
- **Subpantallas** (solo con click, `← volver`/Escape para salir): ficha de cada disco (`openAlbum`) y "mi historia" de música y de fotografía (`openStory`, con carrusel de 3D).
- **Música** tiene modos (`setMode()`): discos propios (arreglo `ALBUMS`), "otros proyectos & arte sonoro" (`PROJECTS` + videos `ONIRIAS`), "collabs" (`COLLABS`, portadas que llevan directo al link) y "en vivo & covers" (videos de una playlist de YouTube, `LIVE`).
- **Fotografía:** collage del arreglo `PHOTOS` (fotos de `assets/portfolio/`), todo lleva a https://lorenaorlando.art.
- **Datos editables:** casi todo el contenido está en arreglos al principio del JS (`ALBUMS`, `PROJECTS`, `ONIRIAS`, `COLLABS`, `COL_POS`, `LIVE`, `PHOTOS`). Para agregar o cambiar un disco, collab o foto, normalmente basta con editar esos arreglos.
- **3D:** `<model-viewer>` 3.5.0 (desde jsdelivr) con archivos `.glb` de `assets/`. Si un 3D falla, se intenta desde `https://lorenalandia.fun/wp-content/uploads/2026/10/`.
- **Preloader:** espera fuentes, imágenes y 3D antes de mostrar el sitio (con salvavidas: entra igual si se queda pegado 12 s, no espera 3D si no hay WebGL, tope de 40 s). La cabeza tiene una foto fija de respaldo (`HEAD_POSTER.webp`). Toda imagen o 3D nuevo entra solo al conteo.
- **Idioma:** español o inglés según el país de la IP (`get.geojs.io`, si falla `api.country.is`; si nada responde, el idioma del navegador). Botón eng/esp en el hero. Los textos traducibles llevan `data-es` y `data-en`; los bloques con HTML usan `data-only="es"` / `data-only="en"`.
- **Links directos:** `lorenaorlando.com/#musica`, `#fotografia`, `#escritura`, `#netart`, `#diseno`, `#magick`, `#otros`… (lista completa en `CLAUDE.md`).
- **Google Analytics 4** (`G-D5MZNYQB7Q`) con consentimiento: aviso solo en UE/EEE, Reino Unido y Suiza; eventos propios (`section_view`, `album_open`, `story_open`, `music_mode`, `collab_click`, `language_change`, `link_click` en links). Toda pantalla nueva debe mandar su evento con `track()`.
- **Hover = tap en móvil:** todo lo que pasa al pasar el mouse debe poder verse con un toque, con un aviso discreto "tócame!" / "tap me!".

## 6. Servicios externos

- YouTube (embeds `youtube-nocookie.com` y la API del iframe para leer la playlist de "en vivo & covers"), SoundCloud, Bandcamp, Spotify (links), Supascribe (feed de mi Substack), Ko-fi (en links).
- Google Apps Script (formulario del generador): el código está en `generador-canciones-venezolanas/hoja-google.gs` y su URL publicada en la constante `HOJA` del JS. Si se cambia el script, hay que volver a publicarlo desde Google y pegar la URL nueva.

## 7. Cómo trabajar (flujo recomendado)

1. `git checkout main && git pull origin main`.
2. Lee `CLAUDE.md` y busca en `index.html` la parte que vas a tocar (los bloques del JS están marcados con comentarios `/* ---------- NOMBRE ---------- */`).
3. Haz el cambio mínimo necesario, respetando el estilo del código que ya existe (mismos nombres, comentarios cortos en español, CSS en una línea por regla).
4. **Prueba localmente** antes de subir:
   - Servir la carpeta: `python3 -m http.server 8765` en la raíz del repo y abrir `http://localhost:8765/`.
   - Revisar **escritorio** (por ejemplo 1440×900) y **móvil** (por ejemplo 390×664 o 390×844), en **español y en inglés**.
   - Si tienes Playwright o un navegador automatizado, saca capturas y míralas; revisa también la consola por errores.
5. Actualiza `CLAUDE.md` con lo que cambió.
6. `git add` solo de los archivos que tocaste, commit con un mensaje claro en español, y `git push origin main`.
7. Cuéntame en español qué hiciste, qué probaste y qué debo revisar yo en mi navegador (sobre todo lo que tú no pudiste ver: embeds externos, el sitio publicado, un celular real).

## 8. Errores que ya pasaron (para no repetirlos)

- **Iframes y rueda:** durante las transiciones los iframes deben llevar `pointer-events:none` (clase `noframes`), si no la pantalla salta dos veces.
- **`display:block` le gana a `hidden`:** si a un elemento con `data-only`/`hidden` le pones display por CSS, agrega `[hidden]{display:none!important}` para él.
- **Botón `← volver` en móvil:** debe tener `z-index` alto (40) o el panel con scroll lo tapa.
- **Barras del navegador en el celular:** por eso se usa `var(--vh)` (svh) en vez de `vh`.
- **Lacquer con chorreados:** pasa si un texto queda en mayúsculas reales (escrito así o con `text-transform:uppercase`). Siempre `lowercase`.
- **Portadas de playlist de YouTube:** `&index=N` no cambia la miniatura; para mostrar videos distintos hay que usar el ID de cada video (se leen con la API del iframe).
- **Ahorro de energía de Chrome** puede impedir que carguen los 3D; el sitio ya lo aguanta (foto fija de la cabeza y salida del preloader).
- **Instagram:** las imágenes para la cuadrícula del perfil subidas como reels deben ser 9:16 (1080×1920) con el diseño importante en el centro 3:4.

## 9. Antes de terminar cualquier tarea, verifica

- [ ] Hiciste `git pull` antes y subiste a `main` (sin ramas).
- [ ] Se ve bien en escritorio y en móvil, en español e inglés.
- [ ] No quedaron textos de menos de 20px (salvo las excepciones de `CLAUDE.md`), ni texto suelto sobre nubes sin panel.
- [ ] Todo lo nuevo en Lacquer lleva `text-transform:lowercase`; todo alto nuevo usa `var(--vh)`.
- [ ] Lo nuevo tiene sus versiones `data-es` / `data-en`.
- [ ] Imágenes/3D nuevos en `assets/` con el nombre exacto, y mencionados en `CLAUDE.md`.
- [ ] `CLAUDE.md` actualizado.
- [ ] Me explicaste en español qué cambió y qué debo revisar.
