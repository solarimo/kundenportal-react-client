export const required = (value: string) => value ? undefined : 'Pflichtfeld'; 
export const mustBeNumber = (value: number) => isNaN(value) ? 'Muss eine Zahl sein' : undefined;
export const mustBeXlong = (length: number) => (value: string) => (value.length == length) ? undefined : `Länge muss ${length} sein`;