/**
 * Dependence
 */
import fs from "fs-extra";
import path from "path";
import { readdir } from "node:fs/promises";
import { build } from "./build";

const main = async () => {
    const fontsPath = path.resolve(__dirname, "../fonts");
    const fontsInPath = path.resolve(fontsPath, "in");
    const fontsOutPath = path.resolve(fontsPath, "out");

    /**
     * Отчищаем директорию выхода
     */
    await fs.emptyDir(fontsOutPath);
    
    /**
     * Проходимся по файлам
     */
    const filesIn = await readdir(fontsInPath);

    for(const file of filesIn) {
        const extension = path.parse(file).ext;
        const name = path.parse(file).name;

        if(extension === ".ttf") {
            const ttf = `${fontsInPath}${path.sep}${file}`;
            const png = `${fontsOutPath}${path.sep}${name}.png`;
            const json = `${fontsOutPath}${path.sep}${name}.json`;

            await build(ttf, png, json);
        }
    }
}

try {
    main();
} catch (error) {
    console.log(`Error: ${error}`);
}