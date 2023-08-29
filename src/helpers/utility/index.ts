export const itemDeletedAndAdded = <T>(
  main_array: T[],
  new_array: T[]
): {
  itemsToBeDeleted: T[];
  itemsToBeAdded: T[];
} => {
  const itemsToBeDeleted: T[] = main_array.filter(
    (item) => new_array.includes(item)
  );
  const itemsToBeAdded: T[] = new_array.filter((p) => !main_array.includes(p));
  return {
    itemsToBeAdded,
    itemsToBeDeleted,
  };
};