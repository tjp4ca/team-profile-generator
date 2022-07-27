const Employee = require ("../lib/Employee.js");

test ("creates an Employee object", () => {
    const employee = new Employee();

    expect(employee.name).toBe();
    expect(employee.id).toBe();
    expect(employee.email).toBe();
});