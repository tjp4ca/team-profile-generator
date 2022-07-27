const Manager = require ("../lib/Manager.js");

test ("creates an Manager object", () => {
    const manager = new Manager();

    expect(manager.name).toBe();
    expect(manager.id).toBe();
    expect(manager.email).toBe();
    expect(manager.getOffice()).toEqual();
    expect(manager.getRole()).toEqual("Manager");
    
});