import XLSX from 'xlsx'

export const getHeader = sheet => {
  const headers = []
  /* sheet['!ref']表示所有单元格的范围，例如从A1到F8则记录为 A1:F8 */
  const range = XLSX.utils.decode_range(sheet['!ref'])
  let C; const R = range.s.r /* 从第一行开始 */
  /* 按列进行数据遍历 */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* 查找第一行中的单元格 */
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]

    let hdr = 'UNKNOWN ' + C // <-- 进行默认值设置
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)

    headers.push(hdr)
  }
  return headers
}
