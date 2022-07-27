const Engineer = require ("../lib/Engineer.js");
const Employee = require ("../lib/Employee.js");

// jest.mock("../lib/Employee.js")

test ("creates an engineer object", () => {
    const engineer = new Engineer("Michael", "2", "fakeEmail@gmail.com", "fakeGitHub");

    expect(engineer.name).toBe("Michael");
    expect(engineer.id).toBe("2");
    expect(engineer.email).toBe("fakeEmail@gmail.com");
    expect(engineer.getGithub()).toEqual("fakeGitHub");
    expect(engineer.getRole()).toEqual("Engineer");
    
});