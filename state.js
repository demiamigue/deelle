// claves
const TMP_KEY = 'volar_tmp';
const ARCHIVE_KEY = 'volar_archive';

// helpers de estado temporal (entre páginas)
function readTmp(){ try{ return JSON.parse(localStorage.getItem(TMP_KEY) || '{}'); }catch{ return {} } }
function writeTmp(p){ const now = readTmp(); localStorage.setItem(TMP_KEY, JSON.stringify({...now, ...p})); }
function clearTmp(){ localStorage.removeItem(TMP_KEY); }

// guardar entrada completa en el archivo
function saveToArchive(entry){
  const all = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || '[]');
  all.unshift(entry);
  localStorage.setItem(ARCHIVE_KEY, JSON.stringify(all));
}

// util: convertir Blob→dataURL (para audio)
function blobToDataURL(blob){
  return new Promise(res=>{ const r=new FileReader(); r.onload=()=>res(r.result); r.readAsDataURL(blob); });
}
