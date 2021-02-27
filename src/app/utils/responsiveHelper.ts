
export function checkDeviceSize() {
  if (window.innerWidth < 479) {
    return 'mobile';
  } else if (window.innerWidth < 767) {
    return 'pad';
  }
  return 'desktop';
}
