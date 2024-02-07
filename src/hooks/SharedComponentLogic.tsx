const useSharedComponentLogic = () => {
    const create_id = (prefix: string = "elem-") => {
        if (typeof crypto !== "undefined" && crypto.getRandomValues) {
            // Generate a UUID using crypto API
            const uuidArray = new Uint8Array(16);
            crypto.getRandomValues(uuidArray);

            // Set version and variant bits
            uuidArray[6] = (uuidArray[6] & 0x0f) | 0x40; // Version 4
            uuidArray[8] = (uuidArray[8] & 0x3f) | 0x80; // Variant

            // Convert to hex string
            return Array.from(uuidArray)
                .map((byte) => byte.toString(16).padStart(2, "0"))
                .join("");
        } else {
            // Fallback to pseudo-random method
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (c) {
                    const r = (Math.random() * 16) | 0;
                    const v = c === "x" ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                }
            );
        }
    };

    return { create_id };
};

export default useSharedComponentLogic;
