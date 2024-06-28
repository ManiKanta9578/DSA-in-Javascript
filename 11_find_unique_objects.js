// Write logic to get unique objects from below array ?
// I/P: [{name: "Mani"},{name:"Kanta"},{name: "Kotni"},{name:"Mani"},{name: "111111"}];
// O/P: [{name: "Kanta"},{name:"Mani"}{name: "111111"}


//Using methods such as reduce and a Set 
const input = [
  { name: "Mani" },
  { name: "Kanta" },
  { name: "Kotni" },
  { name: "Mani" },
  { name: "111111" }
];

const uniqueObjects = input.reduce((acc, curr) => {
  if (!acc.some((obj) => obj.name === curr.name)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log("uniqueObjects: ", uniqueObjects);


//Using Map and the filter 
const input2 = [
  { name: "Mani" },
  { name: "Kanta" },
  { name: "Kotni" },
  { name: "Mani" },
  { name: "111111" }
];

const uniqueObjects2 = input2.filter((item, index, array) =>
  index === array.findIndex(obj => obj.name === item.name)
);

console.log("uniqueObjects2: ", uniqueObjects2);


//without using inbuilt methods
const input3 = [
  { name: "Mani" },
  { name: "Kanta" },
  { name: "Kotni" },
  { name: "Mani" },
  { name: "111111" }
];

const uniqueObjects3 = [];
const seenNames = {};

for (let i = 0; i < input3.length; i++) {
  const currentName = input3[i].name;
  if (!seenNames[currentName]) {
    seenNames[currentName] = true;
    uniqueObjects3.push(input3[i]);
  }
}

console.log("uniqueObjects3: ", uniqueObjects3);
