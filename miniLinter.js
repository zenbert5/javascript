let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

// break story into words
let storyWords = story.split(' ');

// tally words count in story
console.log('There are '+storyWords.length+' words in the story.');

// construct new words array, filtering unnecessary words
let betterWords = storyWords.filter(function(word) {
  if (word === unnecessaryWords[0] || word === unnecessaryWords[1] || word === unnecessaryWords[2]) {
    return false;
  } else {
    return true;
  }
});

storyWords = betterWords;

// count overused words and sentences
let oWord1=0, oWord2=0, oWord3=0, sentences=0;
for (let i = 0; i < storyWords.length; i++) {
  if (storyWords[i][storyWords.length-1] === '.' || storyWords[i][storyWords.length-1] === '!') {
    ++sentences;
  }
  switch(storyWords[i]) {
    case overusedWords[0]:
      storyWords.splice(i,1);
      ++oWord1;
      break;
    case overusedWords[1]:
      storyWords.splice(i,1);
      ++oWord2;
      break;
    case overusedWords[2]:
      storyWords.splice(i,1);
      ++oWord3;
      break;
  }
}

// log output to console
console.log(`There are ${sentences} sentences in the story.`);
console.log(`'really' was overused ${oWord1} times, 'very' was overused ${oWord2} times, and 'basically' was overused ${oWord3} times.`);
console.log(betterWords.join(' '));
console.log('New length of story is '+storyWords.length);