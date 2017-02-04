import { browserHistory } from 'react-router';

// TODO doesn't work on mac
export function navigate(event, url) {
  if (event.ctrlKey) {
    window.open(url, '_blank');
  } else {
    browserHistory.push(url);
  }
}
