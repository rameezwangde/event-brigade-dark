import fs from 'fs/promises';
import path from 'path';
import heicConvert from 'heic-convert';

const srcDir = './Goyal Properties Annual Day 2024';
const destDir = './src/assets/goyal-properties';

async function main() {
  await fs.mkdir(destDir, { recursive: true });
  const files = await fs.readdir(srcDir);
  
  for (const file of files) {
    if (file.toLowerCase().endsWith('.heic')) {
      const srcPath = path.join(srcDir, file);
      const destFile = file.slice(0, -5) + '.jpg';
      const destPath = path.join(destDir, destFile);
      
      console.log(`Converting ${file} -> ${destFile}...`);
      try {
        const inputBuffer = await fs.readFile(srcPath);
        const outputBuffer = await heicConvert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.85
        });
        await fs.writeFile(destPath, outputBuffer);
        console.log(`Successfully converted ${file}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
  console.log('Conversion run completed.');
}

main();
