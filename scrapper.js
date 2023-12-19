import puppeteer from "puppeteer";

import { writeFile } from "fs/promises";

function storeSongLinks(data, alphabet) {
  const jsonLinks = JSON.stringify(data, null, 2); // Convert array to JSON with indentation
  writeFile(`songLinks-${alphabet}.json`, jsonLinks);
  // other code here
}
async function scrapeLinksAndSaveData(url, alphabet) {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(0);
  page.setDefaultTimeout(0);

  // Navigate to the initial page
  await page.goto(url, { waitUntil: "domcontentloaded" });

  // Get all anchor tags on the page
  const links = await page.$$eval(".site-main a", (anchors) =>
    anchors.map((a, index) => a.href)
  );

  console.log(links);
  storeSongLinks(links, alphabet);
  console.log(`links extracted`);
}

// Replace 'https://example.com' with the actual URL of the page you want to scrape

const alphabetList = [
  "i",
  "j",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];


alphabetList.forEach((letter) =>
  scrapeLinksAndSaveData(`https://tamilchristiansongs.org/${letter}/`, letter)
);
