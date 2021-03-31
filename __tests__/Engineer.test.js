const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    let engineer = new Engineer('Grant', '001', 'grant@mail.com', 'GrantGit')
    
    expect(engineer.name).toBe('Grant');
    expect(engineer.id).toBe('001');
    expect(engineer.email).toBe('grant@mail.com');
    expect(engineer.github).toBe('GrantGit');
    expect(engineer.role).toBe('Engineer');
});

test('returns the engineer name', () => {
    const engineer = new Engineer('Grant');

    expect(engineer.name).toBe('Grant')

});

test('returns the engineer id', () => {
    const engineer = new Engineer('Grant', '001', 'grant@mail.com');

    expect(engineer.id).toBe('001');
});

test('returns engineer email address', () => {
    const engineer = new Engineer('Grant', '001', 'grant@mail.com');

    expect(engineer.email).toBe('grant@mail.com')
});

test('returns engineer role', () => {
    const engineer = new Engineer('Grant', '001', 'grant@mail.com');

    expect(engineer.role).toBe('Engineer');
});

test('returns engineer github', () => {
    const engineer = new Engineer('Grant', '001', 'grant@mail.com', 'GrantGit');

    expect(engineer.github).toBe('GrantGit');
})