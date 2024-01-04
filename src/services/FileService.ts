import fs from "fs";

class FileService {
    static DEFAULT_ENCODING: BufferEncoding = "utf-8";

    /** Determine if file exists
     * @param filepath filepath to be checked if file exists
     * @returns {boolean}
     */
    static FileExists(filepath: string): boolean {
        return fs.existsSync(filepath);
    }

    /** Parse JSON File into Object
     * @param filepath
     * @returns
     */
    static Parse(
        filepath: string,
        encoding: BufferEncoding = FileService.DEFAULT_ENCODING
    ): Object {
        return JSON.parse(fs.readFileSync(filepath, encoding));
    }
}

export { FileService };
