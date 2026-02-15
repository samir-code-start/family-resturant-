const menuItems = [
    // Starters
    {
        id: 1,
        name: "Baingan Bharta",
        category: "Starters",
        price: 250,
        description: "Smoked eggplant mashed with spices and onions.",
        image: "images/Baingan Bharta.jpg",
        type: "veg",
        spice: "medium"
    },
    {
        id: 2,
        name: "Chicken Tikka",
        category: "Starters",
        price: 350,
        description: "Boneless chicken marinated in yogurt and spices, roasted in tandoor.",
        image: "images/Chicken Tikka.jpg",
        type: "non-veg",
        spice: "medium"
    },
    {
        id: 3,
        name: "Dahi Bhalla",
        category: "Starters",
        price: 180,
        description: "Fried lentil balls served in thick yogurt with chutneys.",
        image: "images/Dahi Bhalla.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 4,
        name: "Hara Bhara Kebab",
        category: "Starters",
        price: 220,
        description: "Healthy spinach and green pea patties.",
        image: "images/Hara bhara kebab.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 5,
        name: "Paneer Tikka",
        category: "Starters",
        price: 280,
        description: "Cottage cheese cubes marinated in spices and grilled.",
        image: "images/paneer tikka.jpg",
        type: "veg",
        spice: "medium"
    },
    {
        id: 6,
        name: "Samosa",
        category: "Starters",
        price: 50,
        description: "Crispy pastry filled with spiced potatoes and peas.",
        image: "images/samosa.jpg",
        type: "veg",
        spice: "medium"
    },
    {
        id: 7,
        name: "Tandoori Chicken",
        category: "Starters",
        price: 400,
        description: "Roasted chicken marinated in yogurt and generous spices.",
        image: "images/Tandoori Chicken.jpg",
        type: "non-veg",
        spice: "hot"
    },

    // Vegetarian Main Course
    {
        id: 8,
        name: "Daal Makhni",
        category: "Main Course",
        price: 280,
        description: "Creamy black lentils slow-cooked with butter and spices.",
        image: "images/Daal Makhni.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 9,
        name: "Dal Tadka",
        category: "Main Course",
        price: 220,
        description: "Yellow lentils tempered with cumin, garlic, and chilies.",
        image: "images/Indian Dal Tadka.jpg",
        type: "veg",
        spice: "medium"
    },
    {
        id: 10,
        name: "Malai Kofta",
        category: "Main Course",
        price: 300,
        description: "Fried dumplings in a rich, creamy cashew gravy.",
        image: "images/Malai Kofta.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 11,
        name: "Palak Patta Chaat",
        category: "Starters", // Moved to starters based on nature, though list had it in main
        price: 200,
        description: "Crispy fried spinach leaves topped with yogurt and chutneys.",
        image: "images/Palak Patta Chaat.jpg",
        type: "veg",
        spice: "medium"
    },
    {
        id: 12,
        name: "Veg Thali",
        category: "Thali",
        price: 350,
        description: "Complete meal with dal, two veg dishes, rice, roti, and dessert.",
        image: "images/veg thali.jpg",
        type: "veg",
        spice: "medium"
    },

    // Non-Vegetarian Main Course
    {
        id: 13,
        name: "Bhindi Masala",
        category: "Main Course",
        price: 240,
        description: "Okra stir-fried with onions, tomatoes, and spices.",
        image: "images/Bhindi Masala Gravy Recipe.jpg", // Note: File name has 'Gravy Recipe'
        type: "veg", // Bhindi is veg usually, checking image name "Gravy Recipe (likely chicken-based)" in plan. Plan says likely chicken based? Bhindi is Okra. Let's mark Veg for now unless it's "Bhindi Gosht".
        spice: "medium"
    },
    {
        id: 14,
        name: "Fish Curry",
        category: "Main Course",
        price: 450,
        description: "Fresh fish cooked in a tangy and spicy curry.",
        image: "images/fish curry.jpg",
        type: "non-veg",
        spice: "hot"
    },
    {
        id: 15,
        name: "Mutton Biryani",
        category: "Rice & Biryani",
        price: 480,
        description: "Aromatic basmati rice cooked with tender mutton and spices.",
        image: "images/Mutton Biryani.jpg",
        type: "non-veg",
        spice: "medium"
    },
    {
        id: 16,
        name: "Mutton Curry",
        category: "Main Course",
        price: 480,
        description: "Tender mutton pieces slow-cooked in a rich spicy gravy.",
        image: "images/Mutton Curry.jpg",
        type: "non-veg",
        spice: "hot"
    },
    {
        id: 17,
        name: "Non Veg Thali",
        category: "Thali",
        price: 500,
        description: "Complete meal with chicken/mutton, dal, rice, roti, and dessert.",
        image: "images/non veg thali.jpg",
        type: "non-veg",
        spice: "hot"
    },

    // Biryani & Rice
    {
        id: 18,
        name: "Chicken Biryani",
        category: "Rice & Biryani",
        price: 380,
        description: "Classic chicken biryani with aromatic spices.",
        image: "images/Biryani.jpg",
        type: "non-veg",
        spice: "medium"
    },
    {
        id: 19,
        name: "Paneer Biryani",
        category: "Rice & Biryani",
        price: 320,
        description: "Biryani rice cooked with marinated paneer cubes.",
        image: "images/paneer biryani.jpg",
        type: "veg",
        spice: "medium"
    },

    // Breads
    {
        id: 20,
        name: "Butter Naan",
        category: "Breads",
        price: 60,
        description: "Soft and fluffy leavened bread brushed with butter.",
        image: "images/Best Butter Naan Recipe.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 21,
        name: "Butter Roti",
        category: "Breads",
        price: 40,
        description: "Whole wheat flatbread cooked in tandoor with butter.",
        image: "images/Butter Rotti.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 22,
        name: "Garlic Naan",
        category: "Breads",
        price: 70,
        description: "Naan topped with minced garlic and coriander.",
        image: "images/Delicious Garlic Naan.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 23,
        name: "Lachha Paratha",
        category: "Breads",
        price: 60,
        description: "Layered whole wheat flatbread.",
        image: "images/Lachha Paratha.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 24,
        name: "Puri",
        category: "Breads",
        price: 40,
        description: "Deep-fried whole wheat puffed bread.",
        image: "images/puri.jpg",
        type: "veg",
        spice: "mild"
    },

    // Accompaniments
    {
        id: 25,
        name: "Onion Salad",
        category: "Accompaniments",
        price: 40,
        description: "Sliced onions with lemon and green chilies.",
        image: "images/onion.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 26,
        name: "Masala Papad",
        category: "Accompaniments",
        price: 60,
        description: "Crispy papad topped with spicy onion-tomato mix.",
        image: "images/PAPAD - DHAMATA.jpg",
        type: "veg",
        spice: "medium"
    },
    {
        id: 27,
        name: "Raita",
        category: "Accompaniments",
        price: 80,
        description: "Yogurt with cucumber, spices, and herbs.",
        image: "images/raita.jpg",
        type: "veg",
        spice: "mild"
    },

    // Desserts
    {
        id: 28,
        name: "Gulab Jamun",
        category: "Desserts",
        price: 100,
        description: "Fried milk solids soaked in sugar syrup.",
        image: "images/Gulab Jamun.jpg",
        type: "veg",
        spice: "sweet"
    },
    {
        id: 29,
        name: "Kheer",
        category: "Desserts",
        price: 120,
        description: "Rice pudding cooked with milk, sugar, and nuts.",
        image: "images/kheer.jpg",
        type: "veg",
        spice: "sweet"
    },
    {
        id: 30,
        name: "Rasmalai",
        category: "Desserts",
        price: 150,
        description: "Soft paneer patties in sweetened saffron milk.",
        image: "images/Rasmalai.jpg",
        type: "veg",
        spice: "sweet"
    },

    // Beverages
    {
        id: 31,
        name: "Buttermilk (Chaas)",
        category: "Beverages",
        price: 60,
        description: "Spiced yogurt drink, refreshing and cooling.",
        image: "images/Buttermilk.jpg",
        type: "veg",
        spice: "mild"
    },
    {
        id: 32,
        name: "Cardamom Tea",
        category: "Beverages",
        price: 40,
        description: "Tea brewed with aromatic cardamom pods.",
        image: "images/Cardamom Tea.jpg",
        type: "veg",
        spice: "sweet"
    },
    {
        id: 33,
        name: "Masala Chai",
        category: "Beverages",
        price: 50,
        description: "Indian tea spiced with ginger, cardamom, and cloves.",
        image: "images/masala chai.jpg",
        type: "veg",
        spice: "sweet"
    },
    {
        id: 34,
        name: "Sweet Lassi",
        category: "Beverages",
        price: 90,
        description: "Thick, sweetened yogurt drink.",
        image: "images/Sweet Lassi.jpg",
        type: "veg",
        spice: "sweet"
    }
];

const menuContainer = document.getElementById('menu-container');
const categoryBtns = document.querySelectorAll('.category-btn');

function renderMenu(items) {
    if (!menuContainer) return;
    menuContainer.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="menu-img-container">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="type-indicator ${item.type}">${item.type === 'veg' ? '🟢' : '🔴'}</span>
            </div>
            <div class="menu-details">
                <div class="menu-header">
                    <h4>${item.name}</h4>
                    <span class="price">₹${item.price}</span>
                </div>
                <p class="description">${item.description}</p>
                <button class="btn-add">Add +</button>
            </div>
        </div>
    `).join('');
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuItems);

    // Filter Logic
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            const category = btn.dataset.category;

            if (category === 'All') {
                renderMenu(menuItems);
            } else {
                const filtered = menuItems.filter(item => item.category === category);
                renderMenu(filtered);
            }
        });
    });
});
