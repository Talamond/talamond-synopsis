// todo: what is the type?
export function navigate(event: React.MouseEvent<HTMLElement>, url: string, history: any) {
  if (event.ctrlKey || event.metaKey) {
    window.open(url, '_blank');
  } else {
    history.push(url)
  }
}
