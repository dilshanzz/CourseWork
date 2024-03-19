const storeList = [
    {
        "itemCode":"  B1001  ",
        "itemName":"Classic Burger  (Large)" ,
        amount:  750.00,
        dis:0,
        "itemCat":"Burger",   
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1002",
        "itemName":"Classic Burger (Regular)",
        amount:1500.00 ,
        dis: 15,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    }, 
    {
        "itemCode": "B1003",
        "itemName":"Turkey Burger",
        amount: 1600.00 ,
        dis: 0,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": " B1004 ",
        "itemName":"Chicken Burger (Large)",
        amount: 1400.00 ,
        dis: 0,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1005",
        "itemName":"Chicken Burger (Regular)",
        amount: 800.00,
        dis:20 ,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1006 ",
        "itemName":"Cheese Burger (Large) ",
        amount: 1000.00,
        dis: 0,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1007 ",
        "itemName":"Cheese Burger (Regular) ",
        amount: 600.00 ,
        dis: 0,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1008 ",
        "itemName":"Bacon Burger",
        amount:650.00  ,
        dis:15 ,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1009 ",
        "itemName":"Shawarma Burger",
        amount: 800.00 ,
        dis: 0,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1010 ",
        "itemName":"Olive Burger ",
        amount: 1800.00 ,
        dis: 0,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1012",
        "itemName":"Double-Cheese Burger ",
        amount:1250.00 ,
        dis:20 ,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1013 ",
        "itemName":"Crispy Chicken Burger (Regular)",
        amount: 1200.00,
        dis: 0,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1014 ",
        "itemName":"Crispy Chicken Burger (Large) ",
        amount: 1600.00 ,
        dis: 10,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1015",
        "itemName":"Paneer Burger",
        amount: 900.00,
        dis: 0,
        "itemCat":"Burger",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1016",
        "itemName":"Crispy Chicken Submarine (Large)",
        amount: 2000.00,
        dis: 0,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1017 ",
        "itemName":"Crispy Chicken Submarine (Regular)",
        amount: 1500.00 ,
        dis: 0,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1018",
        "itemName":"Chicken Submarine (Large)",
        amount: 1800.00 ,
        dis: 3,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1019 ",
        "itemName":"Chicken Submarine (Regular) ",
        amount: 1400.00,
        dis: 0,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1020",
        "itemName":"Grinder Submarine",
        amount: 2300.00 ,
        dis: 0,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1021 ",
        "itemName":"Cheese Submarine",
        amount: 2200.00 ,
        dis: 0,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1022",
        "itemName":"Double Cheese n Chicken Submarine",
        amount: 1900.00 ,
        dis: 16,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1023",
        "itemName":"Special Horgie Submarine",
        amount: 2800.00,
        dis: 0,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1024",
        "itemName":"MOS Special Submarine",
        amount: 3000.00,
        dis: 0,
        "itemCat":"Submarine",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1025",
        "itemName":"Steak Fries (Large)",
        amount: 1200.00,
        dis: 0,
        "itemCat":"Fries",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1026 ",
        "itemName":"Steak Fries (Medium)",
        amount: 600.00,
        dis: 0,
        "itemCat":"Fries",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1027 ",
        "itemName":"French Fries (Large)",
        amount: 800.00,
        dis: 0,
        "itemCat":"Fries",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1028 ",
        "itemName":"French Fries (Medium)",
        amount: 650.00 ,
        dis: 0,
        "itemCat":"Fries",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1029 ",
        "itemName":"French Fries (Small)",
        amount: 450.00 ,
        dis: 0,
        "itemCat":"Fries",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1030",
        "itemName":"Sweet Potato Fries (Large)",
        amount: 600.00,
        dis: 0,
        "itemCat":"Pasta",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1031",
        "itemName":"Chicken n Cheese Pasta",
        amount: 1600.00,
        dis: 15,
        "itemCat":"Pasta",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1032",
        "itemName":"Chicken Penne Pasta",
        amount: 1700.00 ,
        dis: 0,
        "itemCat":"Pasta",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1033",
        "itemName":"Ground Turkey Pasta Bake",
        amount: 2900.00 ,
        dis: 10,
        "itemCat":"Pasta",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1034",
        "itemName":"Creamy Shrimp Pasta",
        amount: 2000.00 ,
        dis: 0,
        "itemCat":"Pasta",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1035",
        "itemName":"Lemon Butter Pasta ",
        amount: 1950.00 ,
        dis: 0,
        "itemCat":"Pasta",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1036",
        "itemName":"Tagliatelle Pasta",
        amount: 2400.00,
        dis: 1,
        "itemCat":"Pasta",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1037 ",
        "itemName":"Baked Ravioli ",
        amount: 2000.00 ,
        dis: 1,
        "itemCat":"Pasta",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1038",
        "itemName":"Fried Chicken (Small) ",
        amount: 1200.00,
        dis: 0,
        "itemCat":"Chicken",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1039 ",
        "itemName":"Fried Chicken (Regular)",
        amount: 2300.00 ,
        dis: 10,
        "itemCat":"Chicken",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1040",
        "itemName":"Fried Chicken (Large)",
        amount: 3100.00,
        dis: 5,
        "itemCat":"Chicken",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1041",
        "itemName":"Hot Wings (Large) ",
        amount: 2400.00 ,
        dis: 0,
        "itemCat":"Chicken",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1042 ",
        "itemName":"Devilled Chicken (Large) ",
        amount: 900.00,
        dis: 0,
        "itemCat":"Chicken",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1043",
        "itemName":"BBQ Chicken (Regular)",
        amount: 2100.00,
        dis: 0,
        "itemCat":"Chicken",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1044 ",
        "itemName":"Pepsi (330ml)",
        amount: 990.00 ,
        dis: 5,
        "itemCat":"Beverages",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1045",
        "itemName":"Coca-Cola (330ml)",
        amount: 1230.00,
        dis: 0,
        "itemCat":"Beverages",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1046",
        "itemName":"Sprite (330ml) ",
        amount: 1500.00 ,
        dis: 3,
        "itemCat":"Beverages",
        itemQty : 10,
        "exp":"1"
    },
    {
        "itemCode": "B1047",
        "itemName":"Mirinda (330ml) ",
        amount: 850.00,
        dis: 7,
        "itemCat":"Beverages",
        itemQty : 10,
        "exp":"1"
    },

]