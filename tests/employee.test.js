const Employee = require("../lib/Employee");

describe('employee class', () => {
  describe('testing name, role, id, and email', () => {
    it("setting name, role, id, and email values to the user's input", () => {
      const testEmployee = new Employee ("Gabriel", "manager", 12345, "gabrieljose3135@gmail.com");
      expect(testEmployee.name).toEqual("Gabriel");
      expect(testEmployee.role).toEqual("manager");
      expect(testEmployee.id).toEqual(12345);
      expect(testEmployee.email).toEqual("gabrieljose3135@gmail.com");
    });
  })
  describe("get error", () => {
    it("should throw an error if not provided with valid inputs", () => {
        const err = new Employee("", "", "");
        expect(() => {
        if (err.name === "" && err.role === "" && err.id === "" && err.email === "")
            throw new Error("Error - cannot leave blank.");
        }).toThrow("Error - cannot leave blank.");
    });
  });
})

