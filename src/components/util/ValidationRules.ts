const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const required = (value: string) => value ? undefined : 'Pflichtfeld'; 
export const mustBeNumber = (value: string) => /^\d+$/.test(value) === false ? 'Muss eine Zahl sein' : undefined;
const mustBeXlong = (length: number) => (value: string) => (value.length === length) ? undefined : `Länge muss ${length} sein`;
export const mustbe5long = mustBeXlong(5);
export const isEmail = (value: string) => emailRegex.test(value) ? undefined : 'ungültige Email'; 
export const isPhonenumber = (values: string) => /^[+\d]\d+\d$/.test(values) ? undefined : 'ungültige Telefonnummer';

export const futureDate = (value: string) => {
  const nums = value.split('.').map(num => parseInt(num));
  const date = new Date(`${nums[1]} ${nums[0]} ${nums[2]}`);
  return (date < new Date()) ? 'Datum muss in der Zukunft liegen' : undefined;
}
export const isDate = (value: string) => /\d{2}\.\d{2}\.\d{4}$/.test(value) ? undefined : 'ungültiges Datum';

export const pastDate = (value: string) => {
  const nums = value.split('.').map(num => parseInt(num));
  const date = new Date(`${nums[1]} ${nums[0]} ${nums[2]}`);
  return (date > new Date()) ? 'Datum muss in der Vergangenheit liegen' : undefined;
}