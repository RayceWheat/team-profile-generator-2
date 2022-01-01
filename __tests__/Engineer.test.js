const { test, expect } = require('@jest/globals');

const Engineer = require('../lib/Engineer.js');

test('creates the employee object', () => {
    const engineer = new Engineer('Jon', 2, 'Email@Email.com', 'Jon@Github');

    expect(engineer.name).toBe('Jon');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('Email@Email.com');
    expect(engineer.github).toBe('Jon@Github');
});

test('tests the functions to return the correct information', () => {
    const engineer = new Engineer('Jon', 2, 'Email@Email.com', 'Jon@Github');

    expect(engineer.getName()).toBe('Jon');
    expect(engineer.getId()).toBe(2);
    expect(engineer.getEmail()).toBe('Email@Email.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGitHub()).toBe('Jon@Github');
});