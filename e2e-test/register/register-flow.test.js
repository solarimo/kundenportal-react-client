const puppeteer =  require('puppeteer');

it('should be able to register', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/register');
  
  // fill out address
  await page.type('#addr-check-strasse', 'Musterstraße');
  await page.type('#addr-check-hausnummer', '15A');
  await page.type('#addr-check-plz', '12345');
  await page.type('#addr-check-stadt', 'Musterstadt');

  const strasse = await page.$eval('#addr-check-strasse', (el) => el.value);
  const hausnummer = await page.$eval('#addr-check-hausnummer', (el) => el.value);
  const plz = await page.$eval('#addr-check-plz', (el) => el.value);
  const stadt = await page.$eval('#addr-check-stadt', (el) => el.value);

  expect(strasse).toEqual('Musterstraße');
  expect(hausnummer).toEqual('15A');
  expect(plz).toEqual('12345');
  expect(stadt).toEqual('Musterstadt');

  // submit
  await page.click('button[type="submit"]');
  await page.waitForSelector('label[for="p4"]');
  // stromverbrauch estimation
  await page.click('label[for="p4"]');
  const stromverbrauch = await page.$eval('#calc-verbrauch', el => el.value);
  expect(parseInt(stromverbrauch)).toEqual(4250);

  // submit
  await page.click('#calc-to-vertragsdaten');
  // fill personal data
  await page.select('select[name="anrede"]', 'HERR');
  await page.select('select[name="titel"]', 'PROF');
  await page.type('input[name="vorname"]', 'Max');
  await page.type('input[name="nachname"]', 'Mustermann');
  await page.type('input[name="nachname"]', 'Mustermann');
  await page.type('input[name="geburtsdatum"]', '01.01.1980');
  await page.type('input[name="telefonnummer"]', '+402783478736');
  await page.type('input[name="email"]', 'max@test.com');
  await page.type('input[name="password"]', 'maxistschlau');
  await page.type('input[name="passwordRepeated"]', 'maxistschlau');
  // submit personal data
  await page.click('#pers-to-zaehler');

  // fill out zaehlerdata
  await page.select('select[name="type"]', 'ANBIETERWECHSEL');
  await page.type('input[name="zaehlernummer"]', 'musternummer');
  await page.type('input[name="bisherigerAnbieter"]', 'Firma Sowieso');
  await page.select('select[name="bereitsGekuendigt"]', 'BEREITS_GEKUENDIGT');
  await page.type('input[name="vertragslaufzeitBis"]', '01.01.3001');
  // submit
  await page.click('#zaehler-to-konto');

  // fill out bank data 
  await page.type('input[name="kontoinhaber"]', 'Max Mustermann');
  await page.type('input[name="iban"]', 'DE89 3704 0044 0532 0130 00');
  // submit
  await page.click('#konto-to-optional');

  // fill out optional data
  await page.waitForSelector('input[name="rabattCode"]');
  await page.type('input[name="rabattCode"]', 'solaristcool');
  await page.type('input[name="empfehlung"]', 'mein nachbar');
  //submit
  await page.click('#optional-to-overview');
  // await browser.close();
});