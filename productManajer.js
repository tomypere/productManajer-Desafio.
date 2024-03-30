
let products = [];

const addProduct = (title, description, price, thumbnail, code, stock) => {

    const newProduct = {
        id: products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }

    if(Object.values(newProduct).includes(undefined)){
        console.log("Todos los campos son obligatorios")
        return
    }

    const productExist = products.find( product => product.code === code);
    if(productExist){
        console.log(`El producto ${title} con el código ${code} ya existe`)
        return
    }

    products.push(newProduct);

}

const getProducts = () => {
    console.log(products)
    return products
}

const getProductById = (id) => {
    const product = products.find( product => product.id === id)
    if(!product){
        console.log(`No se encontro el producto con el id ${id}`)
        return
    }

    console.log(product)
    return product

}




//Test

addProduct("Producto 1", "el primer producto", 299, "http://www.google.com", "ADF123", 10);
addProduct("Producto 2", "el segundo producto", 899, "http://www.google.com", "ADF124", 10);
addProduct("Producto 3", "el tercer producto", 899, "http://www.google.com", "ADF124", 10);
addProduct("Producto 4", "el cuarto producto", 899, "http://www.google.com", "ADF125", 10);
addProduct("Producto 5", "el quinto producto", 899, "http://www.google.com", "ADF126");

//getProducts();

getProductById(1)