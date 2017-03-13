import Rx, {Observable} from 'rxjs/Rx';

const button = document.querySelector('button');

Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .map(event => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe( (count) => console.log(`clicked ${count} times 😀`));

const observable = Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});

console.log('before subscribe');
observable.subscribe({
  next: x => console.log('%c get value:' + x,'color: red'),
  error: err => console.log('error:', err),
  complete: () => console.log('%c completed', 'font-size: 20px;color: purple')
});
console.log('after subscribe');