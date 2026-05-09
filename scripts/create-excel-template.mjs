import XLSX from 'xlsx'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const headers = [
  'No',
  '会社名',
  '氏名',
  'メールアドレス',
  '既存サイトURL',
  'カラーテーマ',
  '業種',
  '制作イメージ',
  '診断結果',
  '送信日時',
]

const ws = XLSX.utils.aoa_to_sheet([headers])

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

const wb = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(wb, ws, 'サンプル制作依頼')

const outPath = join(__dirname, '..', 'サンプル制作依頼一覧.xlsx')
XLSX.writeFile(wb, outPath)
console.log(`Excel template created: ${outPath}`)
