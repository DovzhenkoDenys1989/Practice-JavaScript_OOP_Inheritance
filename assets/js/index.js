"use strict";

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("ERROR!!! Enter not a name");
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw new TypeError("ERROR!!! Enter not a surname");
    }
    this._surname = newSurname;
  }

  get surname() {
    return this._surname;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  get course() {
    const course = new Date().getFullYear() - this.year;
    if (course < 1 || course > 5) {
      throw new RangeError("ERROR!!! No such course found");
    }
    return `student ${this.fullName} at ${course} course university`;
  }
}

const student = new Student("Bob", "Smith", 2018);
