/**
 * Dependence
 */
import { exec } from "child_process";
import { buildJson } from "./build.json";

/**
 * Types
 */
import type { ExecException } from "child_process";

export const build = async (ttf: string, png: string, json: string): Promise<void> => {
    let command = `./msdf-atlas-gen/bin/msdf-atlas-gen -font "${ttf}" -imageout "${png}" -json "${json}"`;

    await exec(command, (error: ExecException | null, stdout: string, stderr: string) => {
        console.log(command);

        if(error) {
            console.log(`Error: ${error.message}`);
        }
        if(stderr) {
            console.log(`stderr: ${stderr}`);
        }
        if(stdout) {
            console.log(`stdout: ${stdout}`);
        }

        buildJson(ttf, json);
    });
}