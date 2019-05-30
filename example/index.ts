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
    for (const item of [1, 2, 3]) {
      console.log(item)
    }

    console.log('ter');
  }
}
