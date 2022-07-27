const Employee = require ("../lib/Employee.js");

test ("creates an employee object", () => {
    const employee = new Employee("Michael", "2", "fakeEmail@gmail.com");

    expect(employee.name).toBe("Michael");
    expect(employee.id).toBe("2");
    expect(employee.email).toBe("fakeEmail@gmail.com");
});