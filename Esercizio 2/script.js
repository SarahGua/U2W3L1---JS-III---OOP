const namePet = document.getElementById('name-pet')
const nameOwner = document.getElementById('name-owner')
const nameSpecie = document.getElementById('specie')
const nameBreed = document.getElementById('breed')

const infoPet = []

class Pet {
    constructor(_namePet, _nameOwner, _specie, _breed){
        this.namePet = _namePet
        this.nameOwner = _nameOwner
        this.specie = _specie
        this.breed = _breed
    }
}

const list = function (){
    const listPet = document.querySelector('ul')
    listPet. innerHTML = ''
    infoPet.forEach((pet) => {
        const newLi = document.createElement('li')
        newLi.innerText = `I am ${pet.namePet}, my owner is ${pet.nameOwner}, I am a ${pet.specie}, ${pet.breed}`
        listPet.appendChild(newLi)
    })
}

const formPet = document.querySelector('form')
formPet.addEventListener ('submit', function(e){
    e.preventDefault()
    const newPet = new Pet(
        namePet.value,
        nameOwner.value,
        nameSpecie.value,
        nameBreed.value,
    )
    console.log('Nuovo animali:', newPet)

    infoPet.push(newPet)

    namePet.value = ''
    nameOwner.value = ''
    nameSpecie.value = ''
    nameBreed.value = ''

    list()
})

