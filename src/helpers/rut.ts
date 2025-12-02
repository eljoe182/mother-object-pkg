export class Rut {
  static create(): string {
    return this.validate(Math.floor(Math.random() * 99_000_000) + 1_000_000);
  }

  private static calculateDv = (rut: number): string => {
    const documentNumber = `${rut}`;

    let counter = 0;
    let multiply = 2;

    for (let i = 1; i <= documentNumber.length; i++) {
      counter += Number(documentNumber.charAt(documentNumber.length - i)) * multiply;
      multiply = multiply === 7 ? 2 : multiply + 1;
    }

    const moduleValue = 11 - (counter % 11);
    if (moduleValue === 10) return 'K';
    if (moduleValue === 11) return '0';
    return `${moduleValue}`.toUpperCase();
  };

  private static validate(document: number): string {
    const dv = this.calculateDv(document);
    return `${document}-${dv}`;
  }
}
