const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "smartphone",
        price: 29990000,
        originalPrice: 34990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/iphone_15_pro_max.png",
        rating: 4.8,
        reviews: 1234,
        badge: "new",
        description: "iPhone 15 Pro Max mới nhất với chip A17 Pro và camera 48MP",
        specs: ["Chip A17 Pro", "Camera 48MP", "128GB Storage", "6.7 inch Display"],
        stock: 100
    },
    {
        id: 2,
        name: "MacBook Air M3",
        category: "laptop",
        price: 32990000,
        originalPrice: 35990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/macbook_air_m3.png",
        rating: 4.9,
        reviews: 856,
        badge: "sale",
        description: "MacBook Air với chip M3 mạnh mẽ, pin lâu và thiết kế siêu mỏng",
        specs: ["Chip M3", "8GB RAM", "256GB SSD", "13.6 inch Retina"],
        stock: 50
    },
    {
        id: 3,
        name: "Apple Watch Series 9",
        category: "smartwatch",
        price: 9990000,
        originalPrice: 11990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/apple_watch_series_9.png",
        rating: 4.7,
        reviews: 642,
        badge: "sale",
        description: "Apple Watch Series 9 với tính năng theo dõi sức khỏe toàn diện",
        specs: ["S9 Chip", "Always-On Display", "Water Resistant", "GPS + Cellular"],
        stock: 200
    },
    {
        id: 4,
        name: "AirPods Pro 2",
        category: "headphone",
        price: 6490000,
        originalPrice: 7490000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/airpods_pro_2.png",
        rating: 4.6,
        reviews: 923,
        badge: "hot",
        description: "AirPods Pro 2 với chống ồn chủ động và âm thanh không gian",
        specs: ["Active Noise Cancellation", "Spatial Audio", "6h Battery", "MagSafe Charging"],
        stock: 150
    },
    {
        id: 5,
        name: "Samsung Galaxy S24 Ultra",
        category: "smartphone",
        price: 31990000,
        originalPrice: 33990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/samsung_galaxy_s24_ultra.png",
        rating: 4.7,
        reviews: 789,
        badge: "new",
        description: "Galaxy S24 Ultra với S Pen tích hợp và camera zoom 100x",
        specs: ["Snapdragon 8 Gen 3", "200MP Camera", "512GB Storage", "6.8 inch AMOLED"],
        stock: 80
    },
    {
        id: 6,
        name: "Dell XPS 13",
        category: "laptop",
        price: 28990000,
        originalPrice: 31990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/dell_xps_13.png",
        rating: 4.5,
        reviews: 456,
        badge: "sale",
        description: "Dell XPS 13 với màn hình InfinityEdge và hiệu năng mạnh mẽ",
        specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "13.4 inch FHD+"],
        stock: 60
    },
    {
        id: 7,
        name: "iPhone 16 Pro",
        category: "smartphone",
        price: 27990000,
        originalPrice: 32990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/iphone_16_pro.png",
        rating: 4.9,
        reviews: 1500,
        badge: "new",
        description: "iPhone 16 Pro với chip A18 và hệ thống camera cải tiến",
        specs: ["Chip A18", "Camera 48MP", "256GB Storage", "6.3 inch Display"],
        stock: 120
    },
    {
        id: 8,
        name: "Samsung Galaxy Z Fold 6",
        category: "smartphone",
        price: 44990000,
        originalPrice: 47990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/galaxy_z_fold_6.png",
        rating: 4.8,
        reviews: 900,
        badge: "new",
        description: "Galaxy Z Fold 6 với màn hình gập AMOLED và hiệu năng đỉnh cao",
        specs: ["Snapdragon 8 Gen 3", "12GB RAM", "512GB Storage", "7.6 inch AMOLED"],
        stock: 50
    },
    {
        id: 9,
        name: "Google Pixel 9",
        category: "smartphone",
        price: 22990000,
        originalPrice: 25990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/pixel_9.png",
        rating: 4.7,
        reviews: 670,
        badge: "hot",
        description: "Google Pixel 9 với camera AI tiên tiến và Android thuần",
        specs: ["Tensor G4", "Camera 50MP", "128GB Storage", "6.3 inch OLED"],
        stock: 90
    },
    {
        id: 10,
        name: "Xiaomi 14 Ultra",
        category: "smartphone",
        price: 24990000,
        originalPrice: 27990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/xiaomi_14_ultra.png",
        rating: 4.6,
        reviews: 820,
        badge: "sale",
        description: "Xiaomi 14 Ultra với camera Leica và hiệu năng mạnh mẽ",
        specs: ["Snapdragon 8 Gen 3", "Camera 50MP", "256GB Storage", "6.73 inch AMOLED"],
        stock: 100
    },
    {
        id: 11,
        name: "OnePlus 12",
        category: "smartphone",
        price: 19990000,
        originalPrice: 22990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/oneplus_12.png",
        rating: 4.7,
        reviews: 550,
        badge: "hot",
        description: "OnePlus 12 với sạc nhanh 100W và màn hình AMOLED mượt mà",
        specs: ["Snapdragon 8 Gen 3", "Camera 64MP", "256GB Storage", "6.82 inch AMOLED"],
        stock: 110
    },
    {
        id: 12,
        name: "Oppo Find X7",
        category: "smartphone",
        price: 20990000,
        originalPrice: 23990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/oppo_find_x7.png",
        rating: 4.5,
        reviews: 600,
        badge: "sale",
        description: "Oppo Find X7 với thiết kế cao cấp và camera chất lượng",
        specs: ["Dimensity 9300", "Camera 50MP", "256GB Storage", "6.78 inch AMOLED"],
        stock: 80
    },
    {
        id: 13,
        name: "Vivo X100",
        category: "smartphone",
        price: 18990000,
        originalPrice: 21990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/vivo_x100.png",
        rating: 4.6,
        reviews: 480,
        badge: "hot",
        description: "Vivo X100 với camera Zeiss và hiệu năng ổn định",
        specs: ["Dimensity 9300", "Camera 50MP", "256GB Storage", "6.78 inch AMOLED"],
        stock: 100
    },
    {
        id: 14,
        name: "Huawei Mate 60 Pro",
        category: "smartphone",
        price: 23990000,
        originalPrice: 26990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/huawei_mate_60_pro.png",
        rating: 4.7,
        reviews: 720,
        badge: "new",
        description: "Huawei Mate 60 Pro với thiết kế sang trọng và camera đỉnh cao",
        specs: ["Kirin 9000S", "Camera 50MP", "256GB Storage", "6.82 inch OLED"],
        stock: 70
    },
    {
        id: 15,
        name: "Realme GT 5",
        category: "smartphone",
        price: 15990000,
        originalPrice: 18990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/realme_gt_5.png",
        rating: 4.5,
        reviews: 400,
        badge: "sale",
        description: "Realme GT 5 với sạc siêu nhanh 240W và hiệu năng mạnh",
        specs: ["Snapdragon 8 Gen 2", "Camera 50MP", "256GB Storage", "6.74 inch AMOLED"],
        stock: 90
    },
    {
        id: 16,
        name: "Nokia X50",
        category: "smartphone",
        price: 12990000,
        originalPrice: 15990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/nokia_x50.png",
        rating: 4.4,
        reviews: 350,
        badge: "hot",
        description: "Nokia X50 với độ bền cao và camera PureView",
        specs: ["Snapdragon 7 Gen 1", "Camera 108MP", "128GB Storage", "6.81 inch IPS"],
        stock: 120
    },
    {
        id: 17,
        name: "MacBook Pro M4",
        category: "laptop",
        price: 49990000,
        originalPrice: 52990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/macbook_pro_m4.png",
        rating: 4.9,
        reviews: 1100,
        badge: "new",
        description: "MacBook Pro M4 với hiệu năng vượt trội và màn hình Mini-LED",
        specs: ["Chip M4 Pro", "16GB RAM", "1TB SSD", "14.2 inch Mini-LED"],
        stock: 40
    },
    {
        id: 18,
        name: "Dell Alienware m16",
        category: "laptop",
        price: 45990000,
        originalPrice: 48990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/alienware_m16.png",
        rating: 4.8,
        reviews: 650,
        badge: "hot",
        description: "Alienware m16 với cấu hình gaming đỉnh cao và màn hình QHD+",
        specs: ["Intel Core i9", "32GB RAM", "1TB SSD", "16 inch QHD+"],
        stock: 30
    },
    {
        id: 19,
        name: "HP Spectre x360",
        category: "laptop",
        price: 34990000,
        originalPrice: 37990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/hp_spectre_x360.png",
        rating: 4.7,
        reviews: 520,
        badge: "sale",
        description: "HP Spectre x360 với thiết kế gập 360 độ và màn hình OLED",
        specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "13.5 inch OLED"],
        stock: 50
    },
    {
        id: 20,
        name: "Lenovo ThinkPad X1 Carbon",
        category: "laptop",
        price: 39990000,
        originalPrice: 42990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/thinkpad_x1_carbon.png",
        rating: 4.8,
        reviews: 700,
        badge: "hot",
        description: "ThinkPad X1 Carbon với độ bền cao và hiệu năng doanh nghiệp",
        specs: ["Intel Core i7", "16GB RAM", "1TB SSD", "14 inch WQHD"],
        stock: 60
    },
    {
        id: 21,
        name: "Asus ROG Zephyrus G14",
        category: "laptop",
        price: 37990000,
        originalPrice: 40990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/rog_zephyrus_g14.png",
        rating: 4.7,
        reviews: 580,
        badge: "sale",
        description: "ROG Zephyrus G14 với hiệu năng gaming và thiết kế nhỏ gọn",
        specs: ["AMD Ryzen 9", "16GB RAM", "1TB SSD", "14 inch QHD"],
        stock: 45
    },
    {
        id: 22,
        name: "Acer Predator Helios 18",
        category: "laptop",
        price: 49990000,
        originalPrice: 52990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/predator_helios_18.png",
        rating: 4.8,
        reviews: 620,
        badge: "hot",
        description: "Predator Helios 18 với màn hình lớn và hiệu năng gaming mạnh mẽ",
        specs: ["Intel Core i9", "32GB RAM", "2TB SSD", "18 inch QHD+"],
        stock: 25
    },
    {
        id: 23,
        name: "Microsoft Surface Laptop 6",
        category: "laptop",
        price: 32990000,
        originalPrice: 35990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/surface_laptop_6.png",
        rating: 4.6,
        reviews: 490,
        badge: "new",
        description: "Surface Laptop 6 với thiết kế hiện đại và hiệu năng ổn định",
        specs: ["Intel Core Ultra 7", "16GB RAM", "512GB SSD", "13.5 inch PixelSense"],
        stock: 70
    },
    {
        id: 24,
        name: "Razer Blade 16",
        category: "laptop",
        price: 54990000,
        originalPrice: 57990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/razer_blade_16.png",
        rating: 4.9,
        reviews: 800,
        badge: "hot",
        description: "Razer Blade 16 với hiệu năng gaming và thiết kế cao cấp",
        specs: ["Intel Core i9", "32GB RAM", "1TB SSD", "16 inch OLED"],
        stock: 30
    },
    {
        id: 25,
        name: "LG Gram 17",
        category: "laptop",
        price: 36990000,
        originalPrice: 39990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/lg_gram_17.png",
        rating: 4.7,
        reviews: 530,
        badge: "sale",
        description: "LG Gram 17 với trọng lượng siêu nhẹ và màn hình lớn",
        specs: ["Intel Core i7", "16GB RAM", "1TB SSD", "17 inch WQXGA"],
        stock: 55
    },
    {
        id: 26,
        name: "Samsung Galaxy Book 4",
        category: "laptop",
        price: 29990000,
        originalPrice: 32990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/galaxy_book_4.png",
        rating: 4.6,
        reviews: 470,
        badge: "new",
        description: "Galaxy Book 4 với màn hình AMOLED và tích hợp hệ sinh thái Samsung",
        specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "14 inch AMOLED"],
        stock: 65
    },
    {
        id: 27,
        name: "Apple Watch Ultra 2",
        category: "smartwatch",
        price: 19990000,
        originalPrice: 22990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/apple_watch_ultra_2.png",
        rating: 4.8,
        reviews: 950,
        badge: "new",
        description: "Apple Watch Ultra 2 với độ bền cao và tính năng thể thao nâng cao",
        specs: ["S9 Chip", "49mm Case", "Water Resistant 100m", "GPS + Cellular"],
        stock: 100
    },
    {
        id: 28,
        name: "Samsung Galaxy Watch 7",
        category: "smartwatch",
        price: 8990000,
        originalPrice: 10990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/galaxy_watch_7.png",
        rating: 4.7,
        reviews: 600,
        badge: "sale",
        description: "Galaxy Watch 7 với theo dõi sức khỏe và thiết kế thời thượng",
        specs: ["Exynos W930", "AMOLED Display", "Water Resistant", "40mm Case"],
        stock: 150
    },
    {
        id: 29,
        name: "Garmin Fenix 8",
        category: "smartwatch",
        price: 24990000,
        originalPrice: 27990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/garmin_fenix_8.png",
        rating: 4.8,
        reviews: 720,
        badge: "hot",
        description: "Garmin Fenix 8 với tính năng thể thao chuyên nghiệp",
        specs: ["AMOLED Display", "Multi-GNSS", "Water Resistant", "47mm Case"],
        stock: 80
    },
    {
        id: 30,
        name: "Fitbit Versa 5",
        category: "smartwatch",
        price: 6990000,
        originalPrice: 8990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/fitbit_versa_5.png",
        rating: 4.6,
        reviews: 500,
        badge: "sale",
        description: "Fitbit Versa 5 với theo dõi sức khỏe và pin lâu",
        specs: ["AMOLED Display", "Heart Rate Monitor", "Water Resistant", "40mm Case"],
        stock: 200
    },
    {
        id: 31,
        name: "Huawei Watch GT 4",
        category: "smartwatch",
        price: 7990000,
        originalPrice: 9990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/huawei_watch_gt_4.png",
        rating: 4.7,
        reviews: 650,
        badge: "hot",
        description: "Huawei Watch GT 4 với pin 14 ngày và thiết kế sang trọng",
        specs: ["AMOLED Display", "Heart Rate Monitor", "Water Resistant", "46mm Case"],
        stock: 180
    },
    {
        id: 32,
        name: "Sony WF-1000XM5",
        category: "headphone",
        price: 7990000,
        originalPrice: 8990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/sony_wf_1000xm5.png",
        rating: 4.8,
        reviews: 850,
        badge: "new",
        description: "Sony WF-1000XM5 với chống ồn hàng đầu và âm thanh Hi-Res",
        specs: ["Active Noise Cancellation", "Hi-Res Audio", "8h Battery", "IPX4"],
        stock: 120
    },
    {
        id: 33,
        name: "Bose QuietComfort Ultra",
        category: "headphone",
        price: 9990000,
        originalPrice: 10990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/bose_quietcomfort_ultra.png",
        rating: 4.7,
        reviews: 700,
        badge: "hot",
        description: "Bose QuietComfort Ultra với chống ồn vượt trội và âm thanh cân bằng",
        specs: ["Active Noise Cancellation", "24h Battery", "Bluetooth 5.3", "IPX4"],
        stock: 100
    },
    {
        id: 34,
        name: "JBL Tour Pro 2",
        category: "headphone",
        price: 6490000,
        originalPrice: 7490000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/jbl_tour_pro_2.png",
        rating: 4.6,
        reviews: 600,
        badge: "sale",
        description: "JBL Tour Pro 2 với âm thanh mạnh mẽ và màn hình cảm ứng trên hộp",
        specs: ["Active Noise Cancellation", "10h Battery", "Bluetooth 5.3", "IPX5"],
        stock: 150
    },
    {
        id: 35,
        name: "Anker Soundcore Liberty 4",
        category: "headphone",
        price: 4990000,
        originalPrice: 5990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/soundcore_liberty_4.png",
        rating: 4.5,
        reviews: 550,
        badge: "hot",
        description: "Soundcore Liberty 4 với âm thanh chất lượng và giá hợp lý",
        specs: ["Active Noise Cancellation", "9h Battery", "Bluetooth 5.3", "IPX4"],
        stock: 200
    },
    {
        id: 36,
        name: "Sennheiser Momentum 4",
        category: "headphone",
        price: 8990000,
        originalPrice: 9990000,
        image: "C:/Users/LENOVO/OneDrive/Desktop/hotgadgets/images/sennheiser_momentum_4.png",
        rating: 4.8,
        reviews: 750,
        badge: "new",
        description: "Sennheiser Momentum 4 với âm thanh Hi-Fi và pin 60 giờ",
        specs: ["Active Noise Cancellation", "60h Battery", "Bluetooth 5.2", "IPX4"],
        stock: 90
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let user = JSON.parse(localStorage.getItem('user')) || null;
let currentProducts = [...products];
let currentPage = 1;
const itemsPerPage = 12;

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
    initializeCart();
    initializeWishlist();
    initializeCompare();
    initializeProducts();
    initializeEventListeners();
    updateUserUI();
    setTimeout(() => {
        document.getElementById('loadingSpinner').classList.add('hidden');
    }, 1000);
});

function updateUserUI() {
    const userName = document.getElementById('userName');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const profileLink = document.getElementById('profileLink');
    const logoutLink = document.getElementById('logoutLink');
    const ordersLink = document.getElementById('ordersLink');

    if (user) {
        userName.textContent = user.name;
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        profileLink.style.display = 'block';
        logoutLink.style.display = 'block';
        ordersLink.style.display = 'block';
    } else {
        userName.textContent = 'Tài khoản';
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
        profileLink.style.display = 'none';
        logoutLink.style.display = 'none';
        ordersLink.style.display = 'none';
    }
}

function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
        user = foundUser;
        localStorage.setItem('user', JSON.stringify(user));
        updateUserUI();
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        showAlert('Đăng nhập thành công!', 'success');
    } else {
        showAlert('Email hoặc mật khẩu không đúng!', 'danger');
    }
}

function registerUser(name, email, phone, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        showAlert('Email đã được đăng ký!', 'danger');
        return;
    }
    const newUser = { id: users.length + 1, name, email, phone, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    user = newUser;
    localStorage.setItem('user', JSON.stringify(user));
    updateUserUI();
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    showAlert('Đăng ký thành công!', 'success');
}

function logoutUser() {
    user = null;
    localStorage.removeItem('user');
    updateUserUI();
    showAlert('Đăng xuất thành công!', 'success');
}

function initializeCart() {
    updateCartUI();
    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    document.getElementById('closeCart').addEventListener('click', toggleCart);
    document.getElementById('cartOverlay').addEventListener('click', toggleCart);
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showAlert('Sản phẩm không tồn tại hoặc đã hết hàng!', 'danger');
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (cartItem.quantity + quantity > product.stock) {
            showAlert('Không đủ hàng trong kho!', 'danger');
            return;
        }
        cartItem.quantity += quantity;
    } else {
        if (quantity > product.stock) {
            showAlert('Không đủ hàng trong kho!', 'danger');
            return;
        }
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showAlert('Đã thêm vào giỏ hàng!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showAlert('Đã xóa sản phẩm khỏi giỏ hàng!', 'info');
}

function updateCartQuantity(productId, quantity) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem && quantity > 0 && quantity <= product.stock) {
        cartItem.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    } else if (quantity > product.stock) {
        showAlert('Số lượng vượt quá hàng tồn kho!', 'danger');
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showAlert('Đã xóa toàn bộ giỏ hàng!', 'info');
}

function updateCartUI() {
    const cartContent = document.getElementById('cartContent');
    const cartCount = document.getElementById('cartCount');
    const emptyCart = document.getElementById('emptyCart');
    const cartFooter = document.getElementById('cartFooter');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartFooter.style.display = 'none';
        cartContent.innerHTML = '';
        return;
    }

    emptyCart.style.display = 'none';
    cartFooter.style.display = 'block';

    cartContent.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="${item.stock}" 
                           onchange="updateCartQuantity(${item.id}, this.value)">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 30000;
    const total = subtotal + shipping;

    subtotalEl.textContent = formatPrice(subtotal);
    shippingEl.textContent = formatPrice(shipping);
    totalEl.textContent = formatPrice(total);
}

function checkout() {
    if (cart.length === 0) {
        showAlert('Giỏ hàng đang trống!', 'warning');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 30000;
    const total = subtotal + shipping;

    document.getElementById('checkoutSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('checkoutShipping').textContent = formatPrice(shipping);
    document.getElementById('checkoutTotal').textContent = formatPrice(total);

    new bootstrap.Modal(document.getElementById('checkoutModal')).show();
}

function initializeWishlist() {
    document.getElementById('wishlistToggle').addEventListener('click', () => {
        renderWishlist();
        new bootstrap.Modal(document.getElementById('wishlistModal')).show();
    });
    updateWishlistUI();
}

function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        showAlert('Đã xóa khỏi danh sách yêu thích!', 'info');
    } else {
        wishlist.push(productId);
        showAlert('Đã thêm vào danh sách yêu thích!', 'success');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderWishlist();
    updateWishlistUI();
}

function renderWishlist() {
    const wishlistContent = document.getElementById('wishlistContent');
    const wishlistProducts = products.filter(p => wishlist.includes(p.id));

    if (wishlistProducts.length === 0) {
        wishlistContent.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-heart fa-3x text-muted mb-3"></i>
                <p class="text-muted">Danh sách yêu thích của bạn đang trống</p>
            </div>
        `;
        return;
    }

    wishlistContent.innerHTML = wishlistProducts.map(product => `
        <div class="col-md-6 mb-4">
            <div class="product-card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <div class="product-price">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                        ${product.originalPrice ? `<span class="discount-percent">${calculateDiscount(product.price, product.originalPrice)}%</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart me-2"></i>Thêm vào giỏ
                        </button>
                        <button class="btn-wishlist active" onclick="toggleWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function updateWishlistUI() {
    const wishlistCount = document.getElementById('wishlistCount');
    wishlistCount.textContent = wishlist.length;

    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-id') || btn.id.replace('modalWishlist', '')) || 0;
        if (wishlist.includes(productId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function initializeCompare() {
    updateCompareUI();
}

function addToCompare(productId) {
    if (compareList.length >= 4) {
        showAlert('Bạn chỉ có thể so sánh tối đa 4 sản phẩm!', 'warning');
        return;
    }

    if (!compareList.includes(productId)) {
        compareList.push(productId);
        localStorage.setItem('compareList', JSON.stringify(compareList));
        showAlert('Đã thêm sản phẩm vào so sánh!', 'success');
        renderCompare();
        new bootstrap.Modal(document.getElementById('compareModal')).show();
    } else {
        showAlert('Sản phẩm đã có trong danh sách so sánh!', 'info');
    }
    updateCompareUI();
}

function removeFromCompare(productId) {
    compareList = compareList.filter(id => id !== productId);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    showAlert('Đã xóa sản phẩm khỏi so sánh!', 'info');
    renderCompare();
    updateCompareUI();
}

function renderCompare() {
    const compareProducts = products.filter(p => compareList.includes(p.id));
    const compareTableBody = document.getElementById('compareTableBody');
    const headers = [
        document.getElementById('compareProduct1'),
        document.getElementById('compareProduct2'),
        document.getElementById('compareProduct3'),
        document.getElementById('compareProduct4')
    ];

    headers.forEach(header => header.innerHTML = '');

    compareProducts.forEach((product, index) => {
        headers[index].innerHTML = `
            ${product.name}
            <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCompare(${product.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
    });

    const fields = [
        { label: 'Hình ảnh', key: 'image', type: 'image' },
        { label: 'Giá', key: 'price', type: 'price' },
        { label: 'Đánh giá', key: 'rating', type: 'rating' },
        { label: 'Mô tả', key: 'description', type: 'text' },
        { label: 'Thông số', key: 'specs', type: 'list' }
    ];

    compareTableBody.innerHTML = fields.map(field => `
        <tr>
            <th>${field.label}</th>
            ${compareProducts.map(product => {
                if (field.type === 'image') {
                    return `<td><img src="${product[field.key]}" alt="${product.name}" style="width: 100px; height: 100px; object-fit: contain;"></td>`;
                } else if (field.type === 'price') {
                    return `<td>${formatPrice(product[field.key])}</td>`;
                } else if (field.type === 'rating') {
                    return `<td>${renderStars(product[field.key])} (${product[field.key]})</td>`;
                } else if (field.type === 'list') {
                    return `<td><ul>${product[field.key].map(spec => `<li>${spec}</li>`).join('')}</ul></td>`;
                } else {
                    return `<td>${product[field.key]}</td>`;
                }
            }).join('')}
            ${Array(4 - compareProducts.length).fill('<td></td>').join('')}
        </tr>
    `).join('');
}

function updateCompareUI() {
    document.querySelectorAll('.btn-compare').forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-id')) || 0;
        if (compareList.includes(productId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    const debouncedSearch = debounce(searchProducts, 300);

    searchInput.addEventListener('input', debouncedSearch);
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchProducts();
            saveSearchQuery(query);
        }
    });
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!query) {
        currentProducts = [...products];
        renderProducts();
        return;
    }

    currentProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.specs.some(spec => spec.toLowerCase().includes(query))
        );
    });

    renderProducts();
    if (currentProducts.length === 0) {
        showAlert('Không tìm thấy sản phẩm nào!', 'info');
    }
}

function saveSearchQuery(query) {
    if (!searchHistory.includes(query)) {
        searchHistory.unshift(query);
        if (searchHistory.length > 5) searchHistory.pop();
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
}

function initializeProducts() {
    renderProducts();
    initializeFilters();
    initializeSort();
    initializePagination();
    initializeSearch();
}

function renderProducts() {
    const productsContainer = document.getElementById('productsContainer');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = currentProducts.slice(start, end);

    productsContainer.innerHTML = paginatedProducts.map(product => `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div class="product-card">
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
                <img src="${product.image}" class="card-img-top lazy" data-src="${product.image}" alt="${product.name}" 
                     onclick="openQuickView(${product.id})">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description.substring(0, 80)}...</p>
                    <div class="product-rating">
                        <div class="stars">${renderStars(product.rating)}</div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                        ${product.originalPrice ? `<span class="discount-percent">${calculateDiscount(product.price, product.originalPrice)}%</span>` : ''}
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart me-2"></i>Thêm vào giỏ
                    </button>
                    <div class="product-actions mt-2">
                        <button class="btn-wishlist" data-id="${product.id}" onclick="toggleWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn-compare" data-id="${product.id}" onclick="addToCompare(${product.id})">
                            <i class="fas fa-balance-scale"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    lazyLoadImages();
    updatePagination();
    updateWishlistUI();
    updateCompareUI();
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalMainImage').src = product.image;
    document.getElementById('modalProductRating').innerHTML = renderStars(product.rating);
    document.getElementById('modalRatingCount').textContent = `(${product.reviews})`;
    document.getElementById('modalCurrentPrice').textContent = formatPrice(product.price);
    document.getElementById('modalOriginalPrice').textContent = product.originalPrice ? formatPrice(product.originalPrice) : '';
    document.getElementById('modalDiscount').textContent = product.originalPrice ? `${calculateDiscount(product.price, product.originalPrice)}%` : '';
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalSpecs').innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');
    document.getElementById('modalAddToCart').onclick = () => addToCart(product.id);
    document.getElementById('modalWishlist').onclick = () => toggleWishlist(product.id);
    document.getElementById('modalWishlist').id = `modalWishlist${product.id}`;

    document.getElementById('modalThumbnails').innerHTML = `
        <img src="${product.image}" class="thumbnail active" onclick="changeMainImage('${product.image}')">
    `;

    new bootstrap.Modal(document.getElementById('quickViewModal')).show();
}

function changeMainImage(src) {
    document.getElementById('modalMainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

function initializeFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            filterByCategory(btn.getAttribute('data-category'));
        });
    });
}

function filterByCategory(category) {
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(p => p.category === category);
    }
    currentPage = 1;
    renderProducts();
}

function initializeSort() {
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        const value = e.target.value;
        sortProducts(value);
    });
}

function sortProducts(sortType) {
    switch (sortType) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-az':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            currentProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            currentProducts = [...products];
    }
    currentPage = 1;
    renderProducts();
}

function initializePagination() {
    document.getElementById('pagination').addEventListener('click', (e) => {
        if (e.target.classList.contains('page-link')) {
            e.preventDefault();
            const page = parseInt(e.target.getAttribute('data-page'));
            if (page && page !== currentPage) {
                currentPage = page;
                renderProducts();
                window.scrollTo({ top: document.getElementById('products').offsetTop - 100, behavior: 'smooth' });
            }
        }
    });
}

function updatePagination() {
    const totalPages = Math.ceil(currentProducts.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    let paginationHTML = '';

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage - 1}"><i class="fas fa-chevron-left"></i></a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            </li>
        `;
    }

    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage + 1}"><i class="fas fa-chevron-right"></i></a>
        </li>
    `;

    pagination.innerHTML = paginationHTML;
}

function renderOrders() {
    const ordersContent = document.getElementById('ordersContent');
    if (orders.length === 0) {
        ordersContent.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-box-open fa-3x text-muted mb-3"></i>
                <p class="text-muted">Bạn chưa có đơn hàng nào!</p>
            </div>
        `;
        return;
    }

    ordersContent.innerHTML = orders.map(order => `
        <div class="card mb-3">
            <div class="card-header">
                Đơn hàng #${order.id} - ${new Date(order.createdAt).toLocaleDateString('vi-VN')}
            </div>
            <div class="card-body">
                <p><strong>Tổng tiền:</strong> ${formatPrice(order.total)}</p>
                <p><strong>Phương thức:</strong> ${order.paymentMethod === 'cash' ? 'Thanh toán khi nhận hàng' : 'Thẻ ngân hàng'}</p>
                <p><strong>Địa chỉ:</strong> ${order.address}</p>
                <h6>Sản phẩm:</h6>
                <ul>
                    ${order.items.map(item => `
                        <li>${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderSuccessModal(order) {
    const successOrderDetails = document.getElementById('successOrderDetails');
    successOrderDetails.innerHTML = `
        <div class="card">
            <div class="card-header">
                Đơn hàng #${order.id} - ${new Date(order.createdAt).toLocaleDateString('vi-VN')}
            </div>
            <div class="card-body">
                <h6>Sản phẩm:</h6>
                <ul>
                    ${order.items.map(item => `
                        <li>${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}</li>
                    `).join('')}
                </ul>
                <div class="cart-summary">
                    <div class="cart-summary-row">
                        <span>Tạm tính:</span>
                        <span>${formatPrice(order.subtotal)}</span>
                    </div>
                    <div class="cart-summary-row">
                        <span>Phí vận chuyển:</span>
                        <span>${formatPrice(order.shipping)}</span>
                    </div>
                    <div class="cart-summary-row cart-summary-total">
                        <span>Tổng cộng:</span>
                        <span>${formatPrice(order.total)}</span>
                    </div>
                </div>
                <p class="mt-3"><strong>Địa chỉ giao hàng:</strong> ${order.address}</p>
                <p><strong>Phương thức thanh toán:</strong> ${order.paymentMethod === 'cash' ? 'Thanh toán khi nhận hàng' : 'Thẻ ngân hàng'}</p>
            </div>
        </div>
    `;
    new bootstrap.Modal(document.getElementById('successModal')).show();
}

function viewOrders() {
    bootstrap.Modal.getInstance(document.getElementById('successModal')).hide();
    renderOrders();
    new bootstrap.Modal(document.getElementById('ordersModal')).show();
}

function initializeEventListeners() {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        if (validateEmail(email) && password.length >= 6) {
            loginUser(email, password);
        } else {
            showAlert('Vui lòng nhập email hợp lệ và mật khẩu tối thiểu 6 ký tự!', 'danger');
        }
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const phone = document.getElementById('registerPhone').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!validateEmail(email)) {
            showAlert('Email không hợp lệ!', 'danger');
            return;
        }
        if (!validatePhone(phone)) {
            showAlert('Số điện thoại không hợp lệ!', 'danger');
            return;
        }
        if (password.length < 6) {
            showAlert('Mật khẩu phải tối thiểu 6 ký tự!', 'danger');
            return;
        }
        if (password !== confirmPassword) {
            showAlert('Mật khẩu xác nhận không khớp!', 'danger');
            return;
        }

        registerUser(name, email, phone, password);
    });

    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('checkoutName').value.trim();
        const address = document.getElementById('checkoutAddress').value.trim();
        const phone = document.getElementById('checkoutPhone').value.trim();
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        if (!name || !address || !validatePhone(phone)) {
            showAlert('Vui lòng nhập đầy đủ thông tin hợp lệ!', 'danger');
            return;
        }

        const order = {
            id: orders.length + 1,
            userId: user ? user.id : null,
            items: [...cart],
            subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            shipping: 30000,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 30000,
            name,
            address,
            phone,
            paymentMethod,
            createdAt: new Date().toISOString()
        };

        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        clearCart();
        bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
        renderSuccessModal(order);
    });

    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('.newsletter-input').value.trim();
        if (validateEmail(email)) {
            showAlert('Đã đăng ký nhận tin tức thành công!', 'success');
            e.target.reset();
        } else {
            showAlert('Vui lòng nhập email hợp lệ!', 'danger');
        }
    });

    document.getElementById('ordersLink').addEventListener('click', () => {
        renderOrders();
        new bootstrap.Modal(document.getElementById('ordersModal')).show();
    });

    document.getElementById('logoutLink').addEventListener('click', logoutUser);

    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

function calculateDiscount(currentPrice, originalPrice) {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return `
        ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
        ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
    `;
}

function showAlert(message, type) {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type} alert-floating alert-dismissible fade show`;
    alertContainer.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertContainer);
    setTimeout(() => {
        alertContainer.remove();
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img.lazy');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^\d{10,11}$/.test(phone);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}