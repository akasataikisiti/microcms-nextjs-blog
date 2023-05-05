// [
//   { category: "java", parent: "programming" },
//   { category: "niticjou", parent: "other" },
//   { category: "typescript", parent: "programming" },
//   { category: "eat", parent: "other" },
//   { category: "github", parent: "tools" },
//   { category: "test", parent: "test" },
// ];
// // というオブジェクトの配列を。recudeを使って次の様な形に変換するtypescriptのコードを書いてください。
// [
//   { "programming", ["java", "typescript"]},
//   { "other", ["niticjou", "eat"]},
//   { "tools", ["github"]},
// ]
const categories = [
  { category: "java", parent: "programming" },
  { category: "niticjou", parent: "other" },
  { category: "typescript", parent: "programming" },
  { category: "eat", parent: "other" },
  { category: "github", parent: "tools" },
  { category: "test", parent: "test" },
];

type Category = { [key: string]: string[] };

const result: Category = categories.reduce((acc, curr) => {
  if (!acc[curr.parent]) {
    acc[curr.parent] = [curr.category];
  } else {
    acc[curr.parent].push(curr.category);
  }
  return acc;
}, {});

console.log(result);
