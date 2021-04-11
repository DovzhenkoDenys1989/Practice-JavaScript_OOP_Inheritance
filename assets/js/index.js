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
      throw new TypeError(`ERROR!!! Parameter "${newName}" has unappropriate type`);
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw new TypeError(`ERROR!!! Parameter "${newSurname}" has unappropriate type`);
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
      throw new TypeError(`ERROR!!! Parameter "${newYear}" has unappropriate type`);
    }
    this._year = newYear;
  }

  get year() {
    return this._year;
  }

  get course() {
    const course = new Date().getFullYear() - this.year;
    if (course < 1 || course > 5) {
      throw new RangeError(`ERROR!!! No such "${course}" course found`);
    }
    return `student ${this.fullName} at ${course} course university`;
  }
}

const student = new Student("Bob", "Smith", 2019);
