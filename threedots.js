//sobkichu ekjayga anar system no 1.

const familyAges = [21, 24, 28, 45, 65];
const friendsAges = [21, 20, 22, 23, 19]
const allAges = familyAges.concat(friendsAges);
//console.log(allAges);

//system no 2.

const familyAges2 = [21, 24, 28, 45, 65];
const friendsAges2 = [21, 20, 22, 23, 19]
const cousinAges = [30, 29, 23, 25, 18]

const allAges2 = [...familyAges2, ...friendsAges2, 5, ...cousinAges];
console.log(allAges2);

//another example

const businessMan = 650;
const minister = 550;
const sochib = 450;

const takaPoisa = [650, 450, 550, 250, 350, 150];

const maximum = Math.max(...takaPoisa);
console.log(maximum);
