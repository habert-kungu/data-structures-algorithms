// type User = {
//   name: String;
//   age: number;
// };
//
// function isAdult(user: User): boolean {
//   return user.age >= 18;
// }
// const justine = {
//   name: "Justine",
//   age: 23,
// } satisfies User;
// const isjustineAdult = isAdult(justine);
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: "Justine",
  age: 23,
};

const isJustineAnAdult = isAdult(justine);
console.log(isJustineAnAdult);
