const puppeteer = require("puppeteer");

(async function () {

  const browser = await puppeteer.launch({ 
    headless: false 
  })

  const page = await browser.newPage(); // Create a new page instance

  await page.goto("https://conta.olx.com.br/chats")
  await page.waitFor(5000)

  const unreadChats = page.$$('#main > div.sc-kOnlKp.gctqZm > div > div > div > div.sc-iyvyFf.sc-kXeGPI.iFvxHc > div:nth-child(1) > div > div > div:nth-child(9) > div > div > div.sc-iyvyFf.sc-hBbWxd.flUqSp > div:nth-child(2) > div.sc-iyvyFf.sc-gRnDUn.hXKyRE')
  const chatBoxes = page.$$('.sc-iyvyFf.kIoutN')

  chatBoxes.forEach(el => {
    console.log(el)
  })
  
})()