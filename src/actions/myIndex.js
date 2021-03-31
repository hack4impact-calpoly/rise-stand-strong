export const increment = (num) => (
  {
    type: 'Increment',
    payload: num,
  }
);

export const decrement = () => (
  {
    type: 'Decrement',
  }
);
