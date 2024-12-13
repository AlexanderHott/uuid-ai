import { expect, test } from 'vitest'
import { uuidv4 } from './index'

function isAlphaNumeric(str: string) {
    if (str.length === 0) return false;

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (
            !(
                (code >= 48 && code <= 57) || // 0-9
                (code >= 65 && code <= 90) || // A-Z
                (code >= 97 && code <= 122)   // a-z
            )
        ) {
            return false;
        }
    }
    return true;
}


test('generates a uuid', async () => {
    const idOrNull = await uuidv4();
    expect(typeof idOrNull).toBe("string");

    const id = idOrNull as string;

    const parts = id.split("-")
    expect(parts.length).toBe(5)

    const [a, b, c, d, e] = parts;

    expect(a.length).toBe(8)
    expect(isAlphaNumeric(a)).toBe(true);

    expect(b.length).toBe(4)
    expect(isAlphaNumeric(b)).toBe(true);

    expect(c.length).toBe(4)
    expect(isAlphaNumeric(c)).toBe(true);

    expect(d.length).toBe(4)
    expect(isAlphaNumeric(d)).toBe(true);

    expect(e.length).toBe(12)
    expect(isAlphaNumeric(e)).toBe(true);
});

test("uuid are different", async () => {
    const id1 = await uuidv4();
    const id2 = await uuidv4();
    expect(id1 === id2).toBe(false);
});
