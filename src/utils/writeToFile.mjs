import fs from 'fs';
import path from 'path';

export const writeToFile = async (filePath, content) => {
  try {
    const dir = path.dirname(filePath);
    await fs.promises.mkdir(dir, { recursive: true });
    await fs.promises.writeFile(filePath, content, 'utf8');
  } catch (error) {
    console.error(error);
  }
};
