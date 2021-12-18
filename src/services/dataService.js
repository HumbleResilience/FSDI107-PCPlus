var catalog=[
    {
        _id: "alkdsflsad",
        title: "Phantom Gaming Computer",
        price: 1000,
        stock: 50,
        image: "gamingpc1.jpg",
        category: "Gaming Computers"

    },
    {
        _id: "alkdsflasdfsdfsad",
        title: "Rig Gaming Computer",
        price: 1500,
        stock: 50,
        image: "gamingpc2.jpg",
        category: "Gaming Computers"
    },
    {
        
        _id: "alkdsflasdfsdfsadsdfsdf",
        title: "Sun Gaming Computer",
        price: 1200,
        stock: 50,
        image: "gamingpc3.jpg",
        category: "Gaming Computers"
    },
    {
        _id: "alkdsasdfsdfflasdfsdfsadsdfsdf",
        title: "Ape Gaming Computer",
        price: 1000,
        stock: 50,
        image: "gamingpc4.jpg",
        category: "Gaming Computers"
    },
    {
        _id: "asdfalkdsasdfsdfflasdfsdfsadsdfsdf",
        title: "Hell Gaming Computer",
        price: 1100,
        stock: 50,
        image: "gamingpc5.jpg",
        category: "Gaming Computers"
    },
    {
        _id: "asdfalkdsasdfsdffasdfsadflasdfsdfsadsdfsdf",
        title: "blue Gaming Computer",
        price: 900,
        stock: 50,
        image: "gamingpc6.jpg",
        category: "Gaming Computers"
    }


];

class DataService{
    getCatalog(){
        //do the magic to connect to server
        //and retrieve the catalog

        return catalog;
    }
}

export default DataService;