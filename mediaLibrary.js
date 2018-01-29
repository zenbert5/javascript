
// media class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._rating = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get rating() {
    return this._rating;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !(this._isCheckedOut);
  }

  getAverageRating() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this._rating.reduce(reducer) / this._rating.length;
  }

  addRating(newRating) {
    this._rating.push(newRating);
  }
}

// book class
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
  	return this._pages;
	}
}

// movie class
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// cd class
class CD extends Media {
  constructor(title, artist, runTime) {
    super(title);
    this._artist = artist;
    this._runTime = runTime;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get runTime() {
    return this._runTime;
  }

  get songs() {
    return this._songs;
  }

  insertSong(newSong) {
    this._songs.push(newSong);
  }

  shuffleCD() {
    if (typeof this._songs !== 'undefined') {
    	return this._songs[Math.floor(Math.random() * this._songs.length)];
    } else return '--no songs--';
  }
}

/* */

const historyOfEverything = new Book('A short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(`[${historyOfEverything.title}] is checked out: ${historyOfEverything.isCheckedOut}`);

// push 3 ratings
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// display rating and average
// console.log(historyOfEverything.rating);
console.log(`Average rating is ${historyOfEverything.getAverageRating().toFixed(2)}\n`);

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(`[${speed.title}] is checked out: ${speed.isCheckedOut}`);

// add 3 ratings
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// log average rating
console.log(`Average rating is ${speed.getAverageRating().toFixed(2)}`);

const ATB = new CD('Trilogy', 'ATB', 316);
ATB.insertSong('Renegade');
ATB.insertSong('Feel Alive');
ATB.insertSong('Made of Glass');
ATB.insertSong('The Chosen Ones');

// shuffle CD
console.log(ATB.shuffleCD());