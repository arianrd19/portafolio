import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname } from "path";

const ASSETS_DIR = "src/assets";
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function compress(dir) {
  const entries = await readdir(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) continue;
    const ext = extname(entry).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
    if (info.size < 200_000) continue;

    const sizeBefore = (info.size / 1024).toFixed(0);
    console.log(`Compressing ${entry} (${sizeBefore}KB)...`);

    const tmpFile = fullPath + ".tmp";
    try {
      await sharp(fullPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(tmpFile);
      await rename(tmpFile, fullPath);
      const newInfo = await stat(fullPath);
      console.log(`  → ${(newInfo.size / 1024).toFixed(0)}KB`);
    } catch (e) {
      console.error(`  Error: ${e.message}`);
    }
  }
}

compress(ASSETS_DIR).then(() => console.log("Done!"));
