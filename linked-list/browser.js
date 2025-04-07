// simple  implemntation of a browser history that use doubly linked list fo back and forth navigation
class BrowserHistory {
  constructor() {
    this.current = null;
  }
  // when visiting a url
  visit(url) {
    const newPage = {
      url,
      prev: this.current,
      next: null,
    };
    if (this.current) {
      this.current.next = newPage;
    }
    this.current = newPage;
  }
  goBack() {
    if (!this.current?.prev) return false;
    this.current = this.current.prev;
    return this.current.url;
  }
  goForward() {
    if (!this.current?.next) return false;
    this.current = this.current.next;
    return this.current.url;
  }
} // Usage
const history = new BrowserHistory();
history.visit("google.com");
history.visit("facebook.com");
history.visit("twitter.com");

console.log(history.goBack()); // "facebook.com"
console.log(history.goBack()); // "google.com"
console.log(history.goForward()); // "facebook.com"
