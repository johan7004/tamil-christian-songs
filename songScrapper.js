import puppeteer from "puppeteer";

const data = [];

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

async function readSongData(alpha) {
  try {
    const fileContent = await readFile(`songLinks-${alpha}.json`, "utf-8");
    const songData = JSON.parse(fileContent);

    // Now you can work with the 'songData' array as needed

    // Example: Print the array elements
    processLinksSequentially(songData, alpha);

    // Example: Modify the array
  } catch (error) {
    console.error("Error reading song data:", error);
  }
}

alphabetList.forEach((alphabet) => {
  readSongData(alphabet);
});

async function getSong(url, alphabet) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const songData = await page.evaluate((alphabet) => {
    const songTitle = document.querySelector(".entry-header h1")?.innerText;
    const songTamil = document.querySelectorAll("#tamiltext p");
    const songEnglishTitle =
      document.querySelectorAll("#tamilroman h2")?.innerText;
    const songEnglishTamil = document.querySelectorAll("#roman_tamiltext p");

    function generateUniqueID() {
      const timestamp = new Date().getTime();
      const random = Math.floor(Math.random() * 10000);
      const uniqueID = `jws-${timestamp}-${random}`;
      return uniqueID;
    }
    function generateSlug(title) {
      return title
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")
        .trim();
    }

    // Generate a unique ID
    const uniqueID = generateUniqueID();

    const songObj = {
      title: songTitle ? songTitle : "Song title not available",
      songAlphabet: alphabet,
      songSlug: songTitle
        ? generateSlug(songTitle)
        : generateSlug("this song has not title"),
      songId: uniqueID,
      tamilLyric:
        songTamil &&
        Array.from(songTamil).map((song) =>
          song.innerText ? song.innerText : "Song not available"
        ),
      englishTitle: songEnglishTitle
        ? songEnglishTitle
        : "English title not available",
      englishTamilLyric:
        songEnglishTamil &&
        Array.from(songEnglishTamil).map((song) =>
          song.innerText ? song.innerText : "Song not available"
        ),
    };

    return songObj;
  });

  data.push(songData);

  console.log(data);

  await browser.close();
}

// Use for...of loop to iterate over values, not indexes
const processLinksSequentially = async (urlList, alphabet) => {
  for (const link of urlList) {
    await getSong(link, alphabet); // Make sure to await the function call
  }
  storeSong(data, alphabet);
};

import { writeFile, readFile } from "fs/promises";

function storeSong(data, alphabet) {
  const jsonLinks = JSON.stringify(data, null, 2); // Convert array to JSON with indentation
  writeFile(`songData-${alphabet}.json`, jsonLinks);
  // other code here
}
