//import fs from 'fs';

// Rest of the code remains the same


// // Array to store JSON data from each file
// const jsonDataArray = [];

// // Function to read and parse JSON from each file
// const readJsonFile = (filename) => {
//   const data = fs.readFileSync(filename, 'utf8');
//   const jsonData = JSON.parse(data);
//   jsonDataArray.push(jsonData);
// };

// // List of your JS files
// const fileNames = [
//   'songData-a.json',
//   'songData-b.json',
//   'songData-c.json',
//   'songData-d.json',
//   'songData-e.json',
//   'songData-f.json',
//   'songData-g.json',
//   'songData-h.json',
//   'songData-i.json',
//   'songData-j.json',
//   'songData-k.json',
//   'songData-l.json',
//   'songData-m.json',
//   'songData-n.json',
//   'songData-o.json',
//   'songData-p.json',
//   'songData-q.json',
//   'songData-r.json',
//   'songData-s.json',
//   'songData-t.json',
//   'songData-u.json',
//   'songData-v.json',
//   'songData-w.json',
//   'songData-x.json',
//   'songData-y.json',
//   'songData-z.json',
  
//   // Add the rest of your file names here
// ];

// // Loop through each file and read its JSON content
// fileNames.forEach((filename) => {
//   readJsonFile(filename);
// });

// // Combine all JSON data into one object
// const combinedJsonData = Object.assign({}, ...jsonDataArray);

// // Write the combined JSON data to a new file
// fs.writeFileSync('songscombined.json', JSON.stringify(combinedJsonData, null, 2));

// console.log('JSON files combined successfully.');


// import fs from 'fs';

// // Rest of the code remains the same

// // Array to store JSON data from each file
// const jsonDataArray = [];

// // Function to read and parse JSON from each file
// const readJsonFile = (filename) => {
//   const data = fs.readFileSync(filename, 'utf8');
//   const jsonData = JSON.parse(data);
//   jsonDataArray.push(...jsonData); // Use spread operator to push individual objects
// };

// // List of your JS files
// const fileNames = [
//       'songData-a.json',
//       'songData-b.json',
//       'songData-c.json',
//       'songData-d.json',
//       'songData-e.json',
//       'songData-f.json',
//       'songData-g.json',
//       'songData-h.json',
//       'songData-i.json',
//       'songData-j.json',
//       'songData-k.json',
//       'songData-l.json',
//       'songData-m.json',
//       'songData-n.json',
//       'songData-o.json',
//       'songData-p.json',
//       'songData-q.json',
//       'songData-r.json',
//       'songData-s.json',
//       'songData-t.json',
//       'songData-u.json',
//       'songData-v.json',
//       'songData-w.json',
//       'songData-x.json',
//       'songData-y.json',
//       'songData-z.json',
//   // Add the rest of your file names here
// ];

// // Loop through each file and read its JSON content
// fileNames.forEach((filename) => {
//   readJsonFile(filename);
// });

// // Write the combined JSON data to a new file
// fs.writeFileSync('songscombined.json', JSON.stringify(jsonDataArray, null, 2));

// console.log('JSON files combined successfully.');


import fs from 'fs';

// Rest of the code remains the same

// Object to store JSON data from each file
const jsonDataObject = {
  songs: {},
};

// Function to read and parse JSON from each file
const readJsonFile = (filename) => {
  const data = fs.readFileSync(filename, 'utf8');
  const jsonData = JSON.parse(data);

  // Iterate through each song in jsonData and use songSlug as the inner property
  jsonData.forEach((song) => {
    jsonDataObject.songs[song.songSlug] = song;
  });
};

// List of your JS files
const fileNames = [
      'songData-a.json',
      'songData-b.json',
      'songData-c.json',
      'songData-d.json',
      'songData-e.json',
      'songData-f.json',
      'songData-g.json',
      'songData-h.json',
      'songData-i.json',
      'songData-j.json',
      'songData-k.json',
      'songData-l.json',
      'songData-m.json',
      'songData-n.json',
      'songData-o.json',
      'songData-p.json',
      'songData-q.json',
      'songData-r.json',
      'songData-s.json',
      'songData-t.json',
      'songData-u.json',
      'songData-v.json',
      'songData-w.json',
      'songData-x.json',
      'songData-y.json',
      'songData-z.json',
  // Add the rest of your file names here
];

// Loop through each file and read its JSON content
fileNames.forEach((filename) => {
  readJsonFile(filename);
});

// Write the combined JSON data to a new file
fs.writeFileSync('songscombined.json', JSON.stringify(jsonDataObject, null, 2));

console.log('JSON files combined successfully.');

