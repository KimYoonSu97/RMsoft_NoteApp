export const getPreviewBody = (input: string): string => {
  const paragraphs = input.split("\n\n");

  // 두 번째 줄이 비어있으면 세 번째 줄부터 차례로 비어 있지 않은 줄을 미리보기로 사용
  for (let i = 1; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i].trim();
    if (paragraph !== "") {
      return paragraph;
    }
  }

  // 모든 줄이 비어있을 경우 빈 문자열 반환
  return "";
};
