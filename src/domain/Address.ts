export class Address {
  strasse: string;
  hausnummer: string;
  postleitzahl: string;
  stadt: string;
  addressId: string;

  toString() {
    return `${this.strasse} ${this.hausnummer}, ${this.postleitzahl} ${this.stadt}`;
  }
}
