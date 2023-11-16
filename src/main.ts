console.log('Welcome to TypeScript!');

interface Greeting {
  message: string;
  repetitions: number;
}

const greeting: Greeting = {
  message: 'Good day',
  repetitions: 2,
};

for (let i = 0; i < greeting.repetitions; i++) {
  console.log(greeting.message);
}
