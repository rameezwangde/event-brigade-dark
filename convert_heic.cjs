const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const convert = require('heic-convert');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

async function processDirectory(dir) {
  const files = await readdir(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const fileStat = await stat(fullPath);

    if (fileStat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.toLowerCase().endsWith('.heic')) {
      console.log(`Converting: ${fullPath}`);
      try {
        const inputBuffer = await readFile(fullPath);
        const outputBuffer = await convert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 1 // high quality
        });
        
        const newPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.jpg';
        await writeFile(newPath, outputBuffer);
        console.log(`Successfully converted to: ${newPath}`);
        
        // Delete original file
        await unlink(fullPath);
        console.log(`Deleted original: ${fullPath}`);
      } catch (err) {
        console.error(`Failed to convert ${fullPath}:`, err);
      }
    }
  }
}

async function run() {
  const targetDir = path.join(__dirname, 'src', 'assets');
  console.log(`Starting conversion in ${targetDir}`);
  await processDirectory(targetDir);
  console.log('Conversion complete!');
}

run();
