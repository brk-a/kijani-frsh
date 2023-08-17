const productData = [
    {
        id: 1,
        image: '/assets/aubergine-long.jpeg', 
        title: 'Aubergines (long)',
        description: 'Fine, long, plump aubergines',
        price: 450.23,
        sku: "a001234567b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 2,
        image: '/assets/aubergine-round.jpeg', 
        title: 'Aubergines (round)',
        description: 'Fine, round, plump aubergines',
        price: 400.55,
        sku: "a001234568b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 3,
        image: '/assets/aubergine-yellow.jpeg', 
        title: 'Aubergines (yellow)',
        description: 'Fine, plump, yellow aubergines',
        price: 550.12,
        sku: "a001234569b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 4,
        image: '/assets/baby-spinach.jpeg', 
        title: 'Baby Spinach',
        description: 'Dark green freshly-picked baby spinach',
        price: 150.39,
        sku: "a001234570b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 5,
        image: '/assets/beets.jpeg', 
        title: 'Beetroot',
        description: 'Dark red sugar beets',
        price: 750.50,
        sku: "a001234571b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 6,
        image: '/assets/collection-capsicum.jpeg', 
        title: 'Assorted Capsicum',
        description: 'Red, yellow and green capsicum',
        price: 652.19,
        sku: "a001234572b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 7,
        image: '/assets/collection-chillies.jpeg', 
        title: 'Assorted Chillies',
        description: 'Red, yellow and green chillies',
        price: 459.95,
        sku: "a001234573b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 8,
        image: '/assets/courgette-collection.jpeg', 
        title: 'Assorted Courgettes',
        description: 'Dark green, long/round courgettes',
        price: 469.99,
        sku: "a001234573b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 9,
        image: '/assets/courgette.jpeg', 
        title: 'Courgettes (long)',
        description: 'Dark green, fine, long, plump courgettes',
        price: 290.01,
        sku: "a001234574b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 10,
        image: '/assets/dhania.jpeg', 
        title: 'Dhania (aka corriander)',
        description: 'Large leaves, strong aroma, no seeds, soft stems',
        price: 173.05,
        sku: "a001234575b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 11,
        image: '/assets/dill.jpeg', 
        title: 'Dill',
        description: 'Large leaves, strong aroma',
        price: 105.33,
        sku: "a001234576b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 12,
        image: '/assets/fenugreek.jpeg', 
        title: 'Fenugreek',
        description: 'Large leaves, strong aroma, no seeds, soft stems',
        price: 675.00,
        sku: "a001234577b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 13,
        image: '/assets/garlic.jpeg', 
        title: 'Garlic (large bulb)',
        description: 'Large bulb, strong aroma, firm and nicely seperated sections',
        price: 220.37,
        sku: "a001234578b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 14,
        image: '/assets/ginger.jpeg', 
        title: 'Tangawizi (aka ginger)',
        description: 'Large, yellow rhizomes. form to the touch',
        price: 137.35,
        sku: "a001234579b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 15,
        image: '/assets/green-capsicum.jpeg', 
        title: 'Green Capsicum',
        description: 'Large bell, few seeds, no chilli sting',
        price: 373.56,
        sku: "a001234580b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 16,
        image: '/assets/green-chilli.jpeg', 
        title: 'Green Chilli',
        description: 'Large, few seeds, strong chilli sting',
        price: 122.90,
        sku: "a001234581b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 17,
        image: '/assets/mature-spinach.jpeg', 
        title: 'Mature Spinach',
        description: 'Large, dark green leaves.soft stems. ideal for creamed spinach or with ugali',
        price: 115.00,
        sku: "a001234582b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 18,
        image: '/assets/mint.jpeg', 
        title: 'Mint',
        description: 'Large leaves, strong aroma, soft stems',
        price: 199.99,
        sku: "a001234583b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 19,
        image: '/assets/napa-cabbage.jpeg', 
        title: 'Napa Cabbage',
        description: 'Large leaves. ideal for kimchi',
        price: 374.99,
        sku: "a001234584b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 20,
        image: '/assets/onion-red.jpeg', 
        title: 'Red Onion',
        description: 'Strong aroma, large bulb. ideal for onion rings',
        price: 175.57,
        sku: "a001234585b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 21,
        image: '/assets/onion-white.jpeg', 
        title: 'White Onion',
        description: 'Large bulb. ideal for onion rings',
        price: 133.33,
        sku: "a001234586b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 22,
        image: '/assets/onions-spring.jpeg', 
        title: 'Spring (aka Green) Onion',
        description: 'Strong aroma. ideal size leaves. soft, large stem. ideal for garnishes',
        price: 105.50,
        sku: "a001234587b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 23,
        image: '/assets/parsley.jpeg', 
        title: 'Parsley',
        description: 'Large leaves, strong aroma, no seeds, soft stems',
        price: 144.00,
        sku: "a001234588b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 24,
        image: '/assets/red-cabbage.jpeg', 
        title: 'Red Cabbage',
        description: 'Large leaves. soft stems. ideal for salads',
        price: 235.36,
        sku: "a001234589b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 25,
        image: '/assets/red-capsicum.jpeg', 
        title: 'Red Capsicum',
        description: 'Large bell, few seeds, no chilli sting',
        price: 373.75,
        sku: "a001234590b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 26,
        image: '/assets/red-chilli.jpeg', 
        title: 'Red Chilli',
        description: 'Large, few seeds, strong chilli sting',
        price: 122.50,
        sku: "a001234591b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 27,
        image: '/assets/sun-dried-tomato.jpeg', 
        title: 'Sun-dried Tomatoes',
        description: 'Strong aroma. large tomatoes. Garnished with rosemary and oregano',
        price: 875.99,
        sku: "a001234592b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 28,
        image: '/assets/tomato.jpeg', 
        title: 'Tomato',
        description: 'Round, plump and juicy tomatoes. no marks. smooth skin',
        price: 124.99,
        sku: "a001234593b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 30,
        image: '/assets/yellow-capsicum.jpeg', 
        title: 'Yellow Capsicum',
        description: 'Large bell, few seeds, no chilli sting',
        price: 374.99,
        sku: "a001234594b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 31,
        image: '/assets/turnip.jpeg', 
        title: 'Turnip',
        description: 'Round, plump and juicy turnips. no marks. smooth skin',
        price: 173.75,
        sku: "a001234595b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 32,
        image: '/assets/sage.jpeg', 
        title: 'Sage',
        description: 'Freshly harvested sage leaves and flowers',
        price: 193.75,
        sku: "a001234596b",
        stockLevel: 100,
        quantityToCart: 0
    },
    {
        id: 33,
        image: '/assets/bay-leaves.jpeg', 
        title: 'Bay leaves',
        description: 'Freshly harvested and slightly dried bay leaves',
        price: 223.75,
        sku: "a001234597b",
        stockLevel: 100,
        quantityToCart: 0
    },
]

export default productData
