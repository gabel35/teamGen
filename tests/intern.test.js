const Employee = require ("../lib/employee");
const Intern = require("../lib/Intern");

describe ("intern class", () => {
    describe('testing intern', () => {
        it("setting name, id, email, and school values to the user's input", () => {
            const testIntern = new Intern("Gabriel", 12345, "gabrieljose3135@gmail.com", "gabel35")

            expect(testIntern.name).toEqual("Gabriel");
            expect(testIntern.id).toEqual(12345);
            expect(testIntern.email).toEqual("gabrieljose3135@gmail.com");
            expect(testIntern.school).toEqual("Columbia University")
        });
    });
    describe("get error", () => {
        it("should throw an error if not provided with valid inputs", () => {
            const err = new Intern("", "", "");
            expect(() => {
            if (err.name === "" && err.id === "" && err.email === "" && err.school === "")
                throw new Error("Error - cannot leave blank.");
            }).toThrow("Error - cannot leave blank.");
        });
    });
});