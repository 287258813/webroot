
let child = {
    name: 'Mingjiang',
    age: 8,
    height: 130,
    address: {
        zipcode: 663399,
        detail: 'xxxxxxxxxxxx'
    }
}

const { name, address: { zipcode, detail } } = child

console.log(name, zipcode, detail)
