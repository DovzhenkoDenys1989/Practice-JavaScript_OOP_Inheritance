"use strict";

class User {
  /**
   * 
   * @param {string} name 
   * @param {string} surname 
   */
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError(`Parameter "${newName}" has unappropriate type`);
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw new TypeError(`Parameter "${newSurname}" has unappropriate type`);
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
  /**
   * 
   * @param {string} name 
   * @param {string} surname 
   * @param {number} year 
   */
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  set year(newYear) {
    if (typeof newYear !== "number") {
      throw new TypeError(`Parameter "${newYear}" has unappropriate type`);
    }
    this._year = newYear;
  }

  get year() {
    return this._year;
  }

  getCourse() {
    const course = new Date().getFullYear() - this.year + 1;
    if (course < 1 || course > 5) {
      throw new RangeError(`No such "${course}" course found`);
    }
    return course;
  }
}

const student = new Student("Bob", "Smith", 2019);
