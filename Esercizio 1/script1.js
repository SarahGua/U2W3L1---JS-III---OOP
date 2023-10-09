class User {
    constructor (_firstname, _lastname, _age, _location){
        this.firstname = _firstname
        this.lastname = _lastname
        this.age = _age
        this.location = _location
    }

    whoIsOlder (user){
        if (this.age > user.age){
            return ('user1 is older')
        } else {
            return ('user2 is older')
        }
    }
}

const user1 = new User ('Sarah', 'Guarneri', 26, 'Busto Arsizio')
const user2 = new User ('Rita', 'Lupi', 55, 'Busto Arsizio')

const compare = user1.whoIsOlder(user2)

console.log(compare)