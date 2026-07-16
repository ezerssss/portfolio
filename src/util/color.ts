export function nameToColor(name: string): string {
    let hash = 0;

    // 1. Generate a hash integer from the string characters
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    // 2. Convert the hash integer into a 6-character Hex code
    let color = "#";
    for (let i = 0; i < 3; i++) {
        // Extract a byte (8 bits) from the hash
        const value = (hash >> (i * 8)) & 0xff;
        // Format to hex and pad with leading zeros if necessary
        color += ("00" + value.toString(16)).slice(-2);
    }

    return color;
}
