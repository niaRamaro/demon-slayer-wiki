export default function formatFileName(fileName: string): string {
  if (!fileName) {
    return '';
  }

  const rules = [
    ['/', '++'],
    [':', '--'],
  ];

  return rules.reduce(
    (formatedFileName, [searchFor, replaceWith]) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      formatedFileName.split(searchFor).join(replaceWith),
    fileName,
  );
}
