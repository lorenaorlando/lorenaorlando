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
- **Títulos.** Los de la pantalla 2 hacen pulse al hover. Sin 3D al lado (se quitaron porque hacían lenta la transición). "música" lleva a la pantalla 3.
- **Pantalla 3 (música).** Collage de portadas en la posición del mockup (en móvil, cuadrícula 3×3), con el órgano 3D al centro (se carga al salir de la pantalla 1). Al hover sale un LP de la portada y aparece el nombre del disco. Los datos de cada disco están en el arreglo `ALBUMS` del JS.
- **Ficha del disco.** Click/tap en una portada abre la ficha (pantalla 4, solo por click): portada con LP, título, tipo y fecha, texto, créditos y botones a Spotify, Apple Music, YouTube Music y Bandcamp. Se cierra con "← volver" o Escape. La rueda/táctil no cambian de pantalla ahí; el texto hace scroll propio si no cabe.
- **Idioma.** eng/esp solo aparece en la primera pantalla. Los textos traducibles usan `data-es` / `data-en`.
- **Pantallas ocultas.** Llevan `inert` para que no se puedan enfocar.
- Respetar `prefers-reduced-motion`.
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
| `FUNMACHINE_EXP.glb` | Música | Pantalla 3 |
| `ZENIT.glb` | Fotografía | Sin usar todavía |
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

### Nubes

`1.png`, `2.png`, `4.png`, `5.png` y `6.png` son las 5 imágenes de nubes. Se repiten para formar las 14 nubes fijas del fondo (no existe `3.png`).

### Otros

- `vacio`: archivo de relleno que se usó para crear la carpeta; no se usa.
- `.DS_Store`: archivo automático de Mac; no se usa.

### Carga

Primero se cargan desde `assets/`. Si fallan, se cargan desde `https://lorenalandia.fun/wp-content/uploads/2026/10/`.
