/**
* This code makes it possible to check if you already have an element in the array 
* if it is the case it tells you, if not it adds it
**/

function addItem(bag, newItem) {
if (bag.indexOf(newItem) === -1) {
    return 'Tu as ajouté ' + newItem + ' a ton inventaire';
}
else {
    return `Vous posseder déjà ${newItem} dans votre inventaire.`
}
}

bag = ['pokéball', 'potion'];

/**
* Call a function that contains two arguments
**/

console.log(addItem(bag, 'super bonbon'))
