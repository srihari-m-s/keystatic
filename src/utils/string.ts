export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function filterNonEmptyStrings(
  values: unknown[] | null | undefined,
): string[] {
  if (!Array.isArray(values)) return [];
  return values.filter(isNonEmptyString);
}
