// Guarda cada palabra del formulario "¿qué más se te ocurre?" del generador de canciones
// como una fila nueva en la hoja "palabras". Se pega en Extensiones → Apps Script de la hoja
// y se publica como aplicación web (Ejecutar como: yo · Quién tiene acceso: cualquier usuario).

var HOJA = 'palabras';

function doPost(e) {
  var p = (e && e.parameter) || {};
  if (p._honey) return responder({ok: true});            // trampa para robots

  var categoria = limpiar(p.categoria), palabra = limpiar(p.palabra), email = limpiar(p.email);
  if (!palabra || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return responder({ok: false, error: 'faltan datos'});

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var libro = SpreadsheetApp.getActiveSpreadsheet();
    var hoja = libro.getSheetByName(HOJA);
    if (!hoja) {
      hoja = libro.insertSheet(HOJA);
      hoja.appendRow(['fecha', 'categoría', 'palabra', 'email']);
      hoja.setFrozenRows(1);
      hoja.getRange(1, 1, 1, 4).setFontWeight('bold');
    }
    hoja.appendRow([new Date(), categoria, palabra, email]);
  } finally {
    lock.releaseLock();
  }
  return responder({ok: true});
}

// para probar que está publicada: al abrir el link en el navegador dice {"ok":true}
function doGet() {
  return responder({ok: true});
}

// recorta y evita que un texto que empiece con = + - @ se lea como fórmula
function limpiar(texto) {
  var t = String(texto || '').trim().slice(0, 200);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}

function responder(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
