export type GetPluralTuple = [one: string, few: string, many: string];

export function getPlural(
    number: number,
    strings: GetPluralTuple | Readonly<GetPluralTuple>,
): string {
    const cases = [2, 0, 1, 1, 1, 2];
    const stringIndex = number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)];

    return strings[stringIndex];
}
