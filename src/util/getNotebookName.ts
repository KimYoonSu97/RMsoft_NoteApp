export const getNotebookName = (
  notebookId: string
): { title: string; color: string } => {
  const noteBook = localStorage.getItem(notebookId);
  const noteBookName = JSON.parse(noteBook!);

  return noteBookName;
};
