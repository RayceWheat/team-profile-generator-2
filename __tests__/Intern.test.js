const { test, expect } = require('@jest/globals');

const Intern = require('../lib/Intern.js');

test('creates the intern object', () => {
    const intern = new Intern('Jenny', 2, 'Email@Email.com', 'University@University');

    expect(intern.name).toBe('Jenny');
    expect(intern.id).toBe(2);
    expect(intern.email).toBe('Email@Email.com');
    expect(intern.school).toBe('University@University');
});

test('tests the functions to return the correct information', () => {
    const intern = new Intern('Jenny', 2, 'Email@Email.com', 'University@University');

    expect(intern.getName()).toBe('Jenny');
    expect(intern.getId()).toBe(2);
    expect(intern.getEmail()).toBe('Email@Email.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('University@University');
});