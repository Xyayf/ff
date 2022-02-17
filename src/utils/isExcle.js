export const isExcel = file => {
  return /\.(xlsx|xls|csv)$/.test(file.name)
}
