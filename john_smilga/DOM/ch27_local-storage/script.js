localStorage.setItem('name', 'Vinita');
localStorage.setItem('lastName', 'Ravinder');
localStorage.setItem('address', 'Bas Gokal');


sessionStorage.setItem('name', 'Annu');

console.log(localStorage.getItem('name'));
localStorage.removeItem('lastName');
console.log(localStorage.getItem('lastName'));