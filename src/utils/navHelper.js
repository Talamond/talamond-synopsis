import { browserHistory } from 'react-router';

export function navigate(event, url) {
  if (event.ctrlKey) {
    window.open(url, '_blank');
  } else {
    browserHistory.push(url);
  }
}
