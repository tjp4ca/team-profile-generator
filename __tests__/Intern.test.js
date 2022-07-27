const Intern = require ("../lib/Intern.js");
const Employee = require ("../lib/Employee.js");

// jest.mock("../lib/Employee.js")

test ("creates an intern object", () => {
    const intern = new Intern("Mike", "3", "fakeEmail@gmail.com", "fakeSchool");

    expect(intern.name).toBe("Mike");
    expect(intern.id).toBe("3");
    expect(intern.email).toBe("fakeEmail@gmail.com");
    expect(intern.getSchool()).toEqual("fakeSchool");
    expect(intern.getRole()).toEqual("Intern");
    
});