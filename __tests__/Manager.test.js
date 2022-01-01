const { test, expect } = require('@jest/globals');

const Manager = require('../lib/Manager.js');

test('creates the manager object', () => {
    const manager = new Manager('Bob', 1, 'Email@Email.com', 101);

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('Email@Email.com');
    expect(manager.offficeNumber).toBe(101);
});

test('returns the name of the manager', () => {
    const manager = new Manager('Bob', 1, 'Email@Email.com', 101);

    expect(manager.getName()).toBe('Bob');
});

test('returns the id of the manager', () => {
    const manager = new Manager('Bob', 1, 'Email@Email.com', 101);

    expect(manager.getId()).toBe(1);
});

test('gives the email of the manager', () => {
    const manager = new Manager('Bob', 1, 'Email@Email.com', 101);

    expect(manager.getEmail()).toBe('Email@Email.com');
});

test('Gives the managers role', () => {
    const manager = new Manager('Bob', 1, 'Email@Email.com', 101);

    expect(manager.getRole()).toBe('Manager');
});