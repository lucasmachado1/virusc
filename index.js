const puppeteer = require('puppeteer');

console.log('Estrutura em funcionamento.');

async function robo() {

  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  const urlweb = 'https://www.google.com/search?client=firefox-b-d&q=dados+covid+19';
  await page.goto(urlweb);

  const casos = await page.evaluate(() => {
	  return document.querySelector('.m7B03').firstChild.childNodes.item(0).innerText;
	  });
  const  rec = await page.evaluate(() => {
	  return document.querySelector('.QmWbpe').nextElementSibling.firstChild.nextSibling.childNodes.item(0).firstChild.innerText;
	  });	 
 const  mor = await page.evaluate(() => {
	  return document.querySelector('.QmWbpe').nextElementSibling.nextSibling.firstElementChild.nextElementSibling.childNodes.item(0).firstElementChild.innerText;
	  });	  
	  
	
   await page.screenshot({ path: 'sdasdsad.png' });
   //await browser.close();
   
   
  var http = require('http');
  var server = http.createServer(function (req, res){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(`
		
		<h1>Casos: ${casos}</h1>
		<h1>Recuperados: ${rec}</h1>
		<h1>Mortes: ${mor}</h1>
		<h1>data:</h1>
		`);
        res.end();
  });

}

robo();