// Guarda cada palabra del formulario "¿qué más se te ocurre?" del generador de canciones
// como una fila nueva en la pestaña "palabras". Funciona pegado en Extensiones → Apps Script
// de una hoja, o como proyecto suelto en script.google.com (ahí crea la hoja solo, en tu Drive).
// Se publica como aplicación web: Ejecutar como: yo · Quién tiene acceso: cualquier usuario.

var HOJA = 'palabras';

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    if (p._honey) return responder({ok: true});            // trampa para robots

    var categoria = limpiar(p.categoria), palabra = limpiar(p.palabra), email = limpiar(p.email);
    if (!palabra || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return responder({ok: false, error: 'faltan datos'});

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      hoja().appendRow([new Date(), categoria, palabra, email]);
    } finally {
      lock.releaseLock();
    }
    return responder({ok: true});
  } catch (err) {
    return responder({ok: false, error: String(err)});
  }
}

// para probar: al abrir el link en el navegador dice {"ok":true,"hoja":"link de la hoja"}
function doGet() {
  try {
    return responder({ok: true, hoja: libro().getUrl()});
  } catch (err) {
    return responder({ok: false, error: String(err)});
  }
}

// la hoja donde está pegado el script; si es un proyecto suelto, crea una y la recuerda
function libro() {
  var activo = SpreadsheetApp.getActiveSpreadsheet();
  if (activo) return activo;
  var props = PropertiesService.getScriptProperties(), id = props.getProperty('HOJA_ID');
  if (id) return SpreadsheetApp.openById(id);
  var nuevo = SpreadsheetApp.create('generador de canciones · palabras');
  props.setProperty('HOJA_ID', nuevo.getId());
  return nuevo;
}

function hoja() {
  var l = libro(), h = l.getSheetByName(HOJA);
  if (!h) {
    h = l.insertSheet(HOJA);
    h.appendRow(['fecha', 'categoría', 'palabra', 'email']);
    h.setFrozenRows(1);
    h.getRange(1, 1, 1, 4).setFontWeight('bold');
  }
  return h;
}

// recorta y evita que un texto que empiece con = + - @ se lea como fórmula
function limpiar(texto) {
  var t = String(texto || '').trim().slice(0, 200);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}

function responder(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
