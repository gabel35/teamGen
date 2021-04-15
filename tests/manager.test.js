const Employee = require ("../lib/employee");
const Manager = require("../lib/Manager");

describe ("manager class", () => {
    describe('testing manager', () => {
        it("setting name, id, email, and office number values to the user's input", () => {
            const testManager = new Manager("Gabriel", 12345, "gabrieljose3135@gmail.com", "PH9-304")

            expect(testManager.name).toEqual("Gabriel");
            expect(testManager.id).toEqual(12345);
            expect(testManager.email).toEqual("gabrieljose3135@gmail.com");
            expect(testManager.office).toEqual("PH9-304")
        });
    });
    describe("get error", () => {
        it("should throw an error if not provided with valid inputs", () => {
            const err = new Manager("", "", "");
            expect(() => {
            if (err.name === "" && err.gid === "" && err.email === "" && err.office === "")
                throw new Error("Error - cannot leave blank.");
            }).toThrow("Error - cannot leave blank.");
        });
    });
});