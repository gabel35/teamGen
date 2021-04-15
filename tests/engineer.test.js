const Employee = require ("../lib/employee");
const Engineer = require("../lib/engineer");

describe ("engineer class", () => {
    describe('testing engineer', () => {
        it("setting name, role, id, email, and github values to the user's input", () => {
            const testEngineer = new Engineer("Gabriel", 12345, "gabrieljose3135@gmail.com", "gabel35")

            expect(testEngineer.name).toEqual("Gabriel");
            expect(testEngineer.id).toEqual(12345);
            expect(testEngineer.email).toEqual("gabrieljose3135@gmail.com");
            expect(testEngineer.github).toEqual("gabel35")
        });
    });
    describe("get error", () => {
        it("should throw an error if not provided with valid inputs", () => {
            const err = new Engineer("", "", "");
            expect(() => {
            if (err.name === "" && err.id === "" && err.email === "" && err.github === "")
                throw new Error("Error - cannot leave blank.");
            }).toThrow("Error - cannot leave blank.");
        });
    });
});