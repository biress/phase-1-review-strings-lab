// Write your code in this file!

const currentUser = 'John Doe';

// 1) is defined
// currentUser is defined above

// 2) contains "Welcome to Flatbook, "
// 3) contains the value of the 'currentUser' variable
// 4) ends with an exclamation point!
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// 5) contains "WELCOME TO FLATBOOK, "
// 6) contains the value of the 'currentUser' variable
// 7) ends with an exclamation point
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// 8) contains "Welcome, "
// 9) contains the first initial of the name stored in the 'currentUser' variable
// 10) ends with an exclamation point
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;
