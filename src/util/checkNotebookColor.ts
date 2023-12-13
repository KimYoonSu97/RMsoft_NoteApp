export const checkNotebookColor = (): string => {
  const color = window.prompt(
    '노트북 색상을 입력해주세요. 색상이 없다면 기본색상으로 지정됩니다. ex) "red, pink, yellow"'
  );
  const validColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
  ];

  const selectedColor = validColors.includes(color!) ? color : "pink";

  return selectedColor!;
};
