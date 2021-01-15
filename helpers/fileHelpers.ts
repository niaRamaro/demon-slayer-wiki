const rules = [
  [' ', '_'],
  ['/', '++'],
  [':', '--'],
  ['"', '=='],
  ['?', '+-+'],
];

function replaceCharacters(text: string, isReserve: boolean) {
  const searchFor = isReserve ? 1 : 0;
  const replaceWith = isReserve ? 0 : 1;

  return rules.reduce(
    (formatedFileName, rule) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      formatedFileName.split(rule[searchFor]).join(rule[replaceWith]),
    text,
  );
}
export function formatFileName(fileName = ''): string {
  return replaceCharacters(fileName, false);
}

export function reverseFileName(fileName = ''): string {
  return replaceCharacters(fileName, true);
}
