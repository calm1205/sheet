/**
 * csvをtsvに変換
 */
export const csv2tsv = (values: string[][]) => {
  const tsv = values.map((rows) => rows.join("\t")).join("\n");
  return tsv;
};
