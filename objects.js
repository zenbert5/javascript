/*
    example of object(class) declaration including properties and methods

 */
let person = {
  name: 'Shawn',
  age: 99,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
  	return `Hello, my name is ${this.name}`;
  },
  sayGoodbye() {
    return 'Goodbye!';
  }
};

let friend = {
  name: 'Joe'
}

friend.sayHello = person.sayHello;

// new object field or property can be added dynamically
person.hobbies = ['photography', 'listen to music'];

person.hobbies.pop();

let day = 'Saturday';
let alarm;


if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person.hobbies);
console.log(person[alarm]);
console.log(person['name']);
console.log(person['age']);
console.log(person.sayHello());
console.log(friend.sayHello());


/*
    Object class set and get methods allow process of data before accessing or setting property values

*/


let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(newAge) {
  	if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  },
  get age() {
  	return `${this._name} is ${this._age} years old.`;
}
};

person.age = 'Thirty-nine';
person.age = 39;

console.log(person.age);
