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
  - `#DE1A58` magenta (fondo)
  - `#F4B342` mostaza
  - `#FFF0D6` crema (letras)
- Textos: Source Serif con letter-spacing -84 (`-0.084em`).
- Títulos grandes: Modak.
- Sombras de texto en capas: violeta y luego morado.

## Comportamiento que hay que mantener

- **Sin scroll real.** La rueda, el táctil (solo gestos verticales) y el teclado cambian de pantalla.
- **Transiciones tipo ruleta.** Cada cambio de pantalla es una animación de rotación: lo actual sube y gira, y lo siguiente sube después.
- **Nubes.** Son 14 y quedan siempre fijas de fondo, flotando suavemente. Lo que cambia es el contenido. Los mockups no las muestran, pero no se quitan nunca.
- **Cabeza 3D.** `assets/HEAD_EXP.glb` en `<model-viewer>` gira sola. En la pantalla 2 se reduce y se mueve a la izquierda (en móvil, hacia arriba).
- **Títulos.** Los de la pantalla 2 hacen pulse al hover.
- **Idioma.** eng/esp solo aparece en la primera pantalla. Los textos traducibles usan `data-es` / `data-en`.
- **Pantallas ocultas.** Llevan `inert` para que no se puedan enfocar.
- Respetar `prefers-reduced-motion`.
- **Móvil.** Debe verse bien; el corte está en `max-width: 700px`.

## Assets

- Primero se cargan desde `assets/`. Si fallan, se cargan desde `https://lorenalandia.fun/wp-content/uploads/2026/10/`.
- Los nombres distinguen mayúsculas y minúsculas (GitHub Pages): usarlos exactos.
