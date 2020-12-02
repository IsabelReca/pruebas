function palindromo(mitexto){
    var mitextosep = mitexto.split("");
    mitextosep = mitextosep.reverse().join('');

    if(mitexto == mitextosep){
        return true;
    }else{
        return false;
    }
}
//console.log(palindromo('ana'));

function numEnt(nums){
    var multiplos = nums.filter(num => num % 7 == 0);
    return multiplos;
}
//console.log(numEnt([1, 8, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14]));

var persona = {
    "name": "John",
    "surname": "Doe",
    "age": "30",
    "country": "Spain",
    "city": "Madrid",
    "employed": "true",
    "dni": "00000000A",
}

function retNombreyEdad(persona){
    return {
        'nombre': persona.name,
        'edad': persona.age
    }
}
//console.log(retNombreyEdad(persona));

function delEmployedydni(persona){      
    delete persona.employed;
    delete persona.dni;

    return persona;
}
//console.log(delEmployedydni(persona));

(() => {
    const getTodos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        return response.json();
    }
    
    getTodos()
    .then(json => console.log(json))
    .catch(error => console.log(error));
})();