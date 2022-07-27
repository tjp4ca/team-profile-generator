const Manager = require ("../lib/Manager.js");
const Employee = require ("../lib/Employee.js");

// jest.mock("../lib/Employee.js")

test ("creates a manager object", () => {
    const manager = new Manager("Gabe", "1", "fakeEmail@gmail.com", "123");

    expect(manager.name).toBe("Gabe");
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("fakeEmail@gmail.com");
    expect(manager.getOffice()).toEqual("123");
    expect(manager.getRole()).toEqual("Manager");
    
});