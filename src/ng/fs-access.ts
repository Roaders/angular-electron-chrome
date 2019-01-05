import { join } from "path";
import { readFileSync } from 'fs';

const path = join(__dirname, "../../package.json");

const packageJson = JSON.parse(readFileSync(path).toString());

console.log(`packageContent: ${packageJson.name}`);
