import DATA from '../Data/Data.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            resolve(DATA)
        }, 3000)
    })
}

export const pedirProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            resolve(DATA.find(prod => prod.id === id))
        }, 2000)
    })
}