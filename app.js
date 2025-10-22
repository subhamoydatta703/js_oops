function personMAker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hello, I'm ${this.name}`);
    },
  };

  return person;
}
