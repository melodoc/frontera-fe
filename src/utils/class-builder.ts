export class ClassBuilder {
  private classes: string[] = [];

  public constructor() {
    return this;
  }

  public append(className: string | undefined | null): ClassBuilder {
    if (className) {
      this.classes.push(className);
    }

    return this;
  }

  public build(): string {
    return this.classes.join(" ").trim();
  }
}
