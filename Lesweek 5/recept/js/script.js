let recipe = {
    name:"Soup",
    portions: 4,
    ingredients: ['pumpkin', 'carrot', 'water', 'bouillon'],
};
console.log(recipe.name);
console.log('Portions: ' + recipe.portions);
console.log('Ingredients: ');
for(let i=0; i< recipe.ingredients.length; i++){
    console.log(recipe.ingredients[i]);
}

let books = [
    {title: ‘Harry Potter',
    author: ‘J.K. Rowling,
    alreadyRead: false
    },
    {title: ‘Jane Eyre’,
    author: ‘Charlotte Brontë',
    alreadyRead: true
    },
    {title: ‘De verschrikkelijke schoolmeester.’,
    author: ‘Dolf Verroen',
    alreadyRead: true
    }
    ];