const greetings = ["Love you", "It's gonna be fine"];

export function getRandomGreeting() {
  const randIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randIndex];
}
