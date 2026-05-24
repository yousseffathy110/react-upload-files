const UNIT: number = 1024;

export const normalizeFileSize = (size: number): number =>
  Math.round(size / UNIT);
