export class Test {
  private test = true;

  constructor() {
    if (this.test === true) {
      console.log('test');
    }
  }

  fn(): void {
    console.log('ts');
  }

  private _fun(): void {
    console.log('ter');
  }
}
