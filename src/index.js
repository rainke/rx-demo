import Rx, {Observable} from 'rxjs/Rx';

const button = document.querySelector('button');

Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .scan(count => count + 1, 0)
  .subscribe( (count) => console.log(`clicked ${count} times`));
