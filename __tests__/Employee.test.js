const { test, expect } = require('@jest/globals');

const Employee = require('../lib/Employee.js');

test('creates a Employee object', () => {
    const employee = new Employee('Bobert', 1, 'Email@Email.com');

    expect(employee.name).toBe('Bobert');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Email@Email.com');
});

test('checks employee name', () => {
    const employee = new Employee('Bobert', 1, 'Email@Email.com');

    expect(employee.getName()).toBe('Bobert');
});

test('checks employees Id', () => {
    const employee = new Employee('Bobert', 1, 'Email@Email.com');

    expect(employee.getId()).toBe(1);
});

test('checks employee email', () => {
    const employee = new Employee('Bobert', 1, 'Email@Email.com');

    expect(employee.getEmail()).toBe('Email@Email.com');
});

test('checks employee role', () => {
    const employee = new Employee('Bobert', 1, 'Email@Email.com');

    expect(employee.getRole()).toBe('Employee');
});