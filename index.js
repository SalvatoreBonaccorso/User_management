var users = [];
var id = 0;

// Mi creo una funzione che mi permette di aggiungere nuovi utenti
exports.addUser = function (param1, param2) {
    var user = {
        name: param1,
        surname: param2,
        id: 0
    }
    user.id = id;
    users.push(user);
    id++;

    //return "You have insert a new user ; ";
    return user;
}

// Mi creo una funzione che mi permette di cancellare un utente in base all'indice
exports.deleteUser = function (index) {
    users.splice(index, 1);
    return users;
}

// Cercare un utente in base al nome 
exports.findByName = function (param1) {
    var array = [];
    for (var i = 0; i < users.length; i++) {  // scorro tutti gli utenti
        if (users[i].name == param1) {
            array.push(users[i]);
        }
    }
    if (array != undefined) {
        //return 'Questi sono tutti gli users che si chiamano '+param1+' :\n'+array;
        return array;
    }
    return "Not exist the name " + param1 + " in users";
}
// Meccanismo di reset che mi svuota la lista utente
exports.reset = function () {
    users = [];
    id = 0;
}
// Dimensione di quanti utenti sono stati inseriti
exports.getUsers = function () {
    return users.length;
}
exports.getId = function () {
    return id;
}
console.log(users.length);