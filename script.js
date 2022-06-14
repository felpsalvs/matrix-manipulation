const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.table({isAdult});
//O método some testa se algum elemento na matriz passa no teste implementado pela função fornecida.

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.table({allAdults});
// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.


const comment = comments.find(comment => comment.id === 523423);
console.table(comment);
// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

const index = comments.findIndex(comment => comment.id === 523423);
console.table(index);
// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
// O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.