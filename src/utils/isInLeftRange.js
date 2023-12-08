const leftRangeNumbers = [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31];

export const isInLeftRange = (dayNumber) => {
  return leftRangeNumbers.includes(dayNumber);
};
