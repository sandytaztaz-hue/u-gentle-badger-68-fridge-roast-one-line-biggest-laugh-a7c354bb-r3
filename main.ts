import * as fs from "node:fs";

const LINE =
  "My fridge cut off my water until I bought its $49 filter — it ransoms my thirst by subscription.";

if (LINE.length === 0 || LINE.trim().length === 0) {
  throw new Error("entry is empty");
}
if (LINE.length > 200) {
  throw new Error("entry is " + LINE.length + " chars, must be at most 200");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
