import * as XLSX from 'xlsx'

export const STORAGE_KEY = 'morinomiyako_sample_requests'

export const SAMPLE_REQUEST_SHEET_NAME = 'サンプル制作依頼'

export function commitSubmissionsToStorage(allData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData))
}

function rowsFromAllData(allData) {
  return allData.map((d, i) => ({
    No: i + 1,
    会社名: d.companyName || '',
    氏名: d.fullName || '',
    メールアドレス: d.email,
    既存サイトURL: d.existingUrl || '',
    カラーテーマ: d.colorTheme,
    業種: d.industry,
    制作イメージ: d.designStyle,
    診断結果: d.diagnosisResult || '',
    送信日時: d.submittedAt,
  }))
}

function applyColumnWidths(ws) {
  ws['!cols'] = [
    { wch: 5 },
    { wch: 24 },
    { wch: 20 },
    { wch: 30 },
    { wch: 40 },
    { wch: 20 },
    { wch: 25 },
    { wch: 20 },
    { wch: 25 },
    { wch: 22 },
  ]
}

function buildWorksheetFromAllData(allData) {
  const ws = XLSX.utils.json_to_sheet(rowsFromAllData(allData))
  applyColumnWidths(ws)
  return ws
}

function replaceSheetInWorkbook(wb, sheetName, newWs) {
  const idx = wb.SheetNames.indexOf(sheetName)
  if (idx !== -1) {
    delete wb.Sheets[sheetName]
    wb.SheetNames.splice(idx, 1)
  }
  XLSX.utils.book_append_sheet(wb, newWs, sheetName)
}

async function ensureReadWrite(handle) {
  try {
    if ((await handle.queryPermission({ mode: 'readwrite' })) === 'granted') return true
    return (await handle.requestPermission({ mode: 'readwrite' })) === 'granted'
  } catch {
    return false
  }
}

/** 選択された既存ブックを読み、該当シートのみブラウザ保存分で置き換えて上書き保存 */
export async function writeExcelToLinkedFile(handle, allData) {
  const newWs = buildWorksheetFromAllData(allData)
  let wb
  try {
    const file = await handle.getFile()
    const ab = await file.arrayBuffer()
    wb = XLSX.read(ab, { type: 'array' })
  } catch {
    wb = XLSX.utils.book_new()
  }
  replaceSheetInWorkbook(wb, SAMPLE_REQUEST_SHEET_NAME, newWs)

  if (!(await ensureReadWrite(handle))) {
    throw new Error('permission')
  }

  const writable = await handle.createWritable()
  const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
  await writable.write(buf)
  await writable.close()
}

/** 未連携時: ダウンロード保存 */
export function exportToExcel(allData) {
  const ws = buildWorksheetFromAllData(allData)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, SAMPLE_REQUEST_SHEET_NAME)
  XLSX.writeFile(wb, 'サンプル制作依頼一覧.xlsx')
}
