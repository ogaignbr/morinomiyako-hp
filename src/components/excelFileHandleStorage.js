/** Persist a FileSystemFileHandle for 「同じExcelを更新する」 flow (Chrome / Edge). */
const IDB_DB = 'morinomiyako-hp-fs'
const IDB_STORE = 'excel-handles'
const IDB_KEY = 'sample-request-xlsx-v1'

function idbOpen() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_DB, 1)
    req.onerror = () => reject(req.error)
    req.onsuccess = () => resolve(req.result)
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(IDB_STORE)) {
        req.result.createObjectStore(IDB_STORE)
      }
    }
  })
}

export function supportsExcelFilePersistence() {
  return (
    typeof window !== 'undefined' &&
    window.isSecureContext === true &&
    typeof window.showOpenFilePicker === 'function' &&
    typeof indexedDB !== 'undefined'
  )
}

export async function loadStoredExcelFileHandle() {
  const db = await idbOpen()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readonly')
    tx.onerror = () => reject(tx.error)
    const r = tx.objectStore(IDB_STORE).get(IDB_KEY)
    r.onsuccess = () => resolve(r.result ?? null)
  })
}

export async function persistExcelFileHandle(handle) {
  const db = await idbOpen()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite')
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
    tx.objectStore(IDB_STORE).put(handle, IDB_KEY)
  })
}

export async function clearStoredExcelFileHandle() {
  const db = await idbOpen()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite')
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
    tx.objectStore(IDB_STORE).delete(IDB_KEY)
  })
}
