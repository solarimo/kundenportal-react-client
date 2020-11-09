export interface Address {
  strasse: string;
  hausnummer: string;
  postleitzahl: string;
  stadt: string;
  addressId: string;

}

export function addressToString(addr: Address): string {
  return `${addr.strasse} ${addr.hausnummer}, ${addr.postleitzahl} ${addr.stadt}`;
}