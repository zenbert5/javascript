let MessageMixer = {};

MessageMixer.countCharacter = function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count;
};

MessageMixer.capitalizeFirstCharacterOfWords = function(string) {
  let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
  return arr.join(" ");
};


MessageMixer.reverseWord = function(word) {
  return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
   return words.join(" ");
};


MessageMixer.replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

// replace string with <from: match> to <to: replace option>
MessageMixer.replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

// replace char in string to code
MessageMixer.encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};

// palindrome - string + reverse input string as output
MessageMixer.palindrome = function(string) {
  return `${string} ${MessageMixer.reverseWord(string)}`;
};

// piglatin module function
MessageMixer.piglatin = function(sentence) {
  let tempSentence = sentence.split(' ');
  let newSentence = '';

  for (let k = 0; k < tempSentence.length; k++) {
      let piggy = tempSentence[k].toLowerCase().split('');
      for (let i = 0; i < piggy.length; i++) {
          if (piggy[i].match(/[aeiou]/i)) {
              newSentence += piggy.slice(i, piggy.length + 1).concat(piggy.slice(0, i)).join('') + 'ay ';
              break;
          }
      }
  }
  return newSentence.replace(/[^a-z\s]/, '');
};

// export default MessageMixer;
module.exports = MessageMixer;