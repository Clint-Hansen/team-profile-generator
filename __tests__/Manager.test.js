const Manager = require('../lib/Manager')


test('creates manager object', () => {
    const manager = new Manager('Jan', '004', 'jan@mail.com','235');

    expect(manager.name).toBe('Jan');
    expect(manager.id).toBe('004');
    expect(manager.email).toBe('jan@mail.com');
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe('235');
}); 

test('returns the manager name', () => {
    const manager = new Manager('Jan');

    expect(manager.name).toBe('Jan')

});

test('returns the manager id', () => {
    const manager = new Manager('Jan', '004', 'jan@mail.com');

    expect(manager.id).toBe('004');
});

test('returns manager email address', () => {
    const manager = new Manager('Jan', '004', 'jan@mail.com');

    expect(manager.email).toBe('jan@mail.com')
});

test('returns manager role', () => {
    const manager = new Manager('Jan', '004', 'jan@mail.com');

    expect(manager.role).toBe('Manager');
});

test('returns manager office number', () => {
    const manager = new Manager('Jan', '004', 'jan@mail.com','235');

    expect(manager.officeNumber).toBe('235');
})