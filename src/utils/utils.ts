export function buildIncludesObject(relations: string[]): any {
  const result: any = {};

  for (const relation of relations) {
    const relationParts = relation.split('.').filter((relation) => !!relation);
    let currentObj = result;

    for (let i = 0; i < relationParts.length; i++) {
      const part = relationParts[i];
      if (i === relationParts.length - 1) {
        // Last part of the relation
        currentObj[part] = true;
      } else {
        // Nested relation
        currentObj[part] = currentObj[part] || {};
        currentObj[part].include = currentObj[part].include || {};
        currentObj = currentObj[part].include;
      }
    }
  }

  return result;
}

export function buildWhereObject(filters: Record<string, any>) {
  const where = {};

  if (filters) {
    for (const key in filters) {
      if (Object.hasOwnProperty.call(filters, key) && !!filters[key]) {
        where[key] = {
          equals: filters[key],
        };
      }
    }
  }

  return where;
}
