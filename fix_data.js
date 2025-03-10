const fs = require('fs');

// Read the data file
const dataFile = fs.readFileSync('data.js', 'utf8');

// Parse the database variable out of the file
const startMarker = 'const surnameDatabase = [';
const endMarker = '];';
const startIndex = dataFile.indexOf(startMarker) + startMarker.length;
const endIndex = dataFile.lastIndexOf(endMarker);
const dataContent = dataFile.substring(startIndex, endIndex);

// Add upvotes property to each object
const modifiedContent = dataContent.replace(/}\s*,\s*{/g, ', upvotes: 0 },\n    {');

// Make sure the last entry also gets the upvotes property
let finalContent = modifiedContent;
if (!finalContent.endsWith('upvotes: 0')) {
    finalContent += ', upvotes: 0';
}

const modifiedData = `${dataFile.substring(0, startIndex)}${finalContent}${dataFile.substring(endIndex)}`;

// Write the modified content back
fs.writeFileSync('data_updated.js', modifiedData);

console.log('Added upvotes property to all entries');