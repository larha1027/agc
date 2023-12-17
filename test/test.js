// Importa la librería de Playwright
const { chromium } = require('playwright');

// Define tu caso de prueba
(async () => {
  try {
    // Abre un navegador
    const browser = await chromium.launch();

    // Crea una nueva página
    const page = await browser.newPage();

    // Navega a una URL
    await page.goto('https://github.com/Mili200986/AgroagcaWeb');
    await page.waitForLoadState('load');

   

    // Realiza aserciones (verifica que algo (Titulo) esté en la página)
    const AGROAGCA = await page.title();
    console.log('Título de la página:', AGROAGCA);

   

          
    // Cierra el navegador
    await browser.close();

    const TIMEOUT = 180000; // 180 segundos 3 minutos



  } catch (error) {
    console.error('Error durante la ejecución de las pruebas:', error);
  }
})();
