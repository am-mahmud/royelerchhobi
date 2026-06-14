import { readFileSync } from "fs";
import { join } from "path";
import sizeOf from "image-size";

const files = [
  "1.jpg", "3.jpg", "4.jpg", "5.jpg",
  "7.jpeg", "9.jpeg", "11.jpeg",
  "13.jpeg", "14.jpeg", "15.jpeg",
];

files.forEach((file) => {
  const filePath = join(process.cwd(), "public", "assest", file);
  const dimensions = sizeOf(readFileSync(filePath));
  console.log(`${file}: width=${dimensions.width} height=${dimensions.height}`);
});