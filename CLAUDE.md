# Sitio de Lorena

Página estática publicada con GitHub Pages desde `main`. Todo vive en `index.html` (HTML, CSS y JS inline); los archivos van en `assets/`.

## Flujo de trabajo

- Trabaja y sube siempre directo a `main` (`git push origin main`). No crees ramas ni pull requests: Lorena lo autorizó y GitHub Pages publica desde `main`.
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
- **Títulos.** Los de la pantalla 2 hacen pulse al hover. Sin 3D al lado (se quitaron porque hacían lenta la transición).
- **Idioma.** eng/esp solo aparece en la primera pantalla. Los textos traducibles usan `data-es` / `data-en`.
- **Pantallas ocultas.** Llevan `inert` para que no se puedan enfocar.
- Respetar `prefers-reduced-motion`.
- **Móvil.** Debe verse bien; el corte está en `max-width: 700px`.

## Assets

| Uso | Archivo |
| --- | --- |
| Hero / cabeza | `HEAD_EXP.glb` |
| Música | `FUNMACHINE_EXP.glb` |
| Fotografía | `ZENIT.glb` |
| Escritura | `LAPI_EXP.glb` |
| Net art & 3d | `LOGO_COMP.glb` |
| Diseño web | `COMPU_VIEJA.glb` |
| Magick / tarot | `TAROT_EXP.glb` |

Portadas de discos:
- *Así que no era una pesadilla, sigo viviendo aquí*: `ASI_QUE_MIN.jpg`
- *Coclea*: `COCLEA.jpg`
- *Hacer música es hacer magia*: `HACER_MUSICA.jpg`
- *Mundos de vida*: `MUNDOS_DE_VIDA.jpg`
- *Musiquiatría 22 EP*: `MUSIQUIATRIA22.jpg`
- *Nuevas Tendencias EP*: `NUEVAS_TENDENCIAS.jpg`
- *Prima Materia EP*: `PRIMA_MATERIA.jpg`
- *Rösler*: `ROSLER.jpg`
- *Sin miedos y sin esperanzas*: `SIN_MIEDOS.jpg`


- Primero se cargan desde `assets/`. Si fallan, se cargan desde `https://lorenalandia.fun/wp-content/uploads/2026/10/`.
- Los nombres distinguen mayúsculas y minúsculas (GitHub Pages): usarlos exactos.
