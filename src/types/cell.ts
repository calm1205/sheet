/** column-row （列-行） */
export type CellIndex = `${number}-${number}`;

/** 各セルの値 */
export type Cells = {
  [key in CellIndex]: Cell;
};

/** セルの値 */
export type Cell = {
  value: string;
};

/** クリップボードにコピーされたセルの情報 */
export type ClipboardCells = { [key in CellIndex]: Cell };
