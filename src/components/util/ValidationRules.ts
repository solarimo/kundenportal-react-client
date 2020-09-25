export const required = (value: string) => value ? undefined : 'Pflichtfeld'; 
export const mustBeNumber = (value: string) => /^\d+$/.test(value) === false ? 'Muss eine Zahl sein' : undefined;
export const mustBeXlong = (length: number) => (value: string) => (value.length === length) ? undefined : `Länge muss ${length} sein`;
export const mustbe5long = mustBeXlong(5);