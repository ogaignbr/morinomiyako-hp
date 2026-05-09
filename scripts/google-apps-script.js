/**
 * Google Apps Script — 同一ブック内の複数シートへ、送信元フォームごとに行を追記する
 *
 * === セットアップ手順 ===
 * 1. スプレッドシートに次の名前のシートを用意する（名前は完全一致）:
 *    - 「サンプル制作」… 無料サンプル依頼フォーム用
 *    - 「問い合わせ」… 相談・問い合わせフォーム用
 * 2. 各シートの 1 行目にヘッダーを入力:
 *    【サンプル制作】
 *    No | 会社名 | 氏名 | メールアドレス | 既存サイトURL | カラーテーマ | 業種 | 制作イメージ | 診断結果 | 送信日時
 *    【問い合わせ】
 *    No | 相談種類 | サイト有無 | 既存サイトURL | 詳細 | 予算 | 希望時期 | 氏名 | メールアドレス | 電話 | 屋号・会社名 | 送信日時
 * 3. メニュー「拡張機能」→「Apps Script」を開く
 * 4. このファイルの内容をコピー＆ペーストして保存
 * 5. 「デプロイ」→「新しいデプロイ」→ 種類「ウェブアプリ」を選択
 *    - 次のユーザーとして実行: 自分
 *    - アクセスできるユーザー: 全員
 * 6. デプロイ後に表示される URL をコピー
 * 7. プロジェクトの .env に VITE_GOOGLE_SHEET_URL= を設定
 *
 * 書き込み先は JSON の recordSheet で指定します（サイト側コンポーネントがセット）。
 * recordSheet が無い場合は、相談フォーム項目があれば「問い合わせ」、それ以外は「サンプル制作」にフォールバックします。
 */

var SAMPLE_SHEET_NAME = 'サンプル制作';
var INQUIRY_SHEET_NAME = '問い合わせ';

function resolveTargetSheetName(data) {
  if (data.recordSheet === SAMPLE_SHEET_NAME || data.recordSheet === INQUIRY_SHEET_NAME) {
    return data.recordSheet;
  }
  if (
    data.consultationType != null ||
    data.formType === '相談フォーム'
  ) {
    return INQUIRY_SHEET_NAME;
  }
  return SAMPLE_SHEET_NAME;
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var targetName = resolveTargetSheetName(data);
    var sheet = ss.getSheetByName(targetName);
    if (!sheet) {
      throw new Error(
        'シート「' + targetName + '」が見つかりません。シート名を「' +
          SAMPLE_SHEET_NAME +
          '」「' +
          INQUIRY_SHEET_NAME +
          '」に合わせるか、このスクリプトの定数 SAMPLE_SHEET_NAME / INQUIRY_SHEET_NAME を編集してください。'
      );
    }

    var lastRow = sheet.getLastRow();
    var no = lastRow; // 1 行目をヘッダーとしている場合、追加行の No は直前までの末尾行と一致するカウント

    if (targetName === INQUIRY_SHEET_NAME) {
      sheet.appendRow([
        no,
        data.consultationType || '',
        data.hasWebsite || '',
        data.existingUrl || '',
        data.details || '',
        data.budget || '',
        data.timeline || '',
        data.fullName || '',
        data.email || '',
        data.phone || '',
        data.businessName || '',
        data.submittedAt || new Date().toISOString(),
      ]);
    } else {
      sheet.appendRow([
        no,
        data.companyName || '',
        data.fullName || '',
        data.email || '',
        data.existingUrl || '',
        data.colorTheme || '',
        data.industry || '',
        data.designStyle || '',
        data.diagnosisResult || '',
        data.submittedAt || new Date().toISOString(),
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok', sheet: targetName }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
