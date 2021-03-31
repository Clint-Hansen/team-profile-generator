const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    let intern = new Intern('Grant', '001', 'grant@mail.com', 'Utah State')
    
    expect(intern.name).toBe('Grant');
    expect(intern.id).toBe('001');
    expect(intern.email).toBe('grant@mail.com');
    expect(intern.school).toBe('Utah State');
    expect(intern.role).toBe('Intern');
});

test('returns the intern name', () => {
    const intern = new Intern('Grant');

    expect(intern.name).toBe('Grant')

});

test('returns the intern id', () => {
    const intern = new Intern('Grant', '001', 'grant@mail.com', 'Utah State');

    expect(intern.id).toBe('001');
});

test('returns intern email address', () => {
    const intern = new Intern('Grant', '001', 'grant@mail.com', 'Utah State');

    expect(intern.email).toBe('grant@mail.com')
});

test('returns intern role', () => {
    const intern = new Intern('Grant', '001', 'grant@mail.com', 'Utah State');

    expect(intern.role).toBe('Intern');
});

test('returns intern school', () => {
    const intern = new Intern('Grant', '001', 'grant@mail.com', 'Utah State');

    expect(intern.school).toBe('Utah State');
})