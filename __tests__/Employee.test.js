const Employee = require('../lib/Employee.js')

test('creates a new employee', () => {
    const employee = new Employee('Bill', '123', 'bill@mail.com', 'Manager');

    expect(employee.name).toBe('Bill')
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('bill@mail.com');
    expect(employee.role).toBe('Manager')
});

test('returns the employee name', () => {
    const employee = new Employee('Bill');

    expect(employee.name).toBe('Bill')

});

test('returns the employee id', () => {
    const employee = new Employee('Bill', '123', 'bill@mail.com', 'Manager');

    expect(employee.id).toBe('123');
});

test('returns employee email address', () => {
    const employee = new Employee('Bill', '123', 'bill@mail.com', 'Manager');

    expect(employee.email).toBe('bill@mail.com')
});

test('returns employee role', () => {
    const employee = new Employee('Bill', '123', 'bill@mail.com', 'Manager');

    expect(employee.role).toBe('Manager');
});
