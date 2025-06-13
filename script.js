const firebaseConfig = {
    apiKey: "AIzaSyDUMMY_KEY", // Thay bằng Firebase API Key của bạn
    authDomain: "hot-gadgets-dummy.firebaseapp.com",
    projectId: "hot-gadgets-dummy",
    storageBucket: "hot-gadgets-dummy.appspot.com",
    messagingSenderId: "DUMMY_SENDER_ID",
    appId: "DUMMY_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let compare = JSON.parse(localStorage.getItem('compare')) || [];
let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
let orders = JSON.parse(localStorage.getItem('orders')) || [];

const products = {
    iphone15: {
        id: 'iphone15', name: 'iPhone 15 Pro', price: 27990000, category: 'Điện thoại thông minh', brand: 'Apple',
        description: 'iPhone tiên tiến nhất với thiết kế titan, nút Hành động, chip A17 Pro mạnh mẽ.',
        specs: { RAM: '8GB', Storage: '256GB', Screen: '6.1" Super Retina XDR' }, imgSrc: 'https://images.unsplash.com/photo-1592899677971-0b06e0a6d2b1?auto=format&fit=crop&w=800&q=80',
        stock: 10
    },
    samsung24: {
        id: 'samsung24', name: 'Samsung Galaxy S24 Ultra', price: 33590000, category: 'Điện thoại thông minh', brand: 'Samsung',
        description: 'Flagship đỉnh cao với bút S Pen, camera 200MP, tính năng AI hỗ trợ công việc.',
        specs: { RAM: '12GB', Storage: '512GB', Screen: '6.8" Dynamic AMOLED 2X' }, imgSrc: 'https://images.unsplash.com/photo-1610945265064-0e34e40d7bc3?auto=format&fit=crop&w=800&q=80',
        stock: 15
    },
    pixel8: {
        id: 'pixel8', name: 'Google Pixel 8 Pro', price: 25190000, category: 'Điện thoại thông minh', brand: 'Google',
        description: 'Trải nghiệm Android thuần túy với camera AI vượt trội và chip Tensor G3.',
        specs: { RAM: '12GB', Storage: '256GB', Screen: '6.7" OLED' }, imgSrc: 'https://images.unsplash.com/photo-1604315653088-6c0e86f3f3a7?auto=format&fit=crop&w=800&q=80',
        stock: 8
    },
    oneplus12: {
        id: 'oneplus12', name: 'OnePlus 12', price: 25190000, category: 'Điện thoại thông minh', brand: 'OnePlus',
        description: 'Flagship với Snapdragon 8 Gen 3, màn hình AMOLED 120Hz, sạc nhanh 100W.',
        specs: { RAM: '16GB', Storage: '512GB', Screen: '6.82" AMOLED' }, imgSrc: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=format&fit=crop&w=800&q=80',
        stock: 12
    },
    xiaomi14: {
        id: 'xiaomi14', name: 'Xiaomi 14 Pro', price: 27990000, category: 'Điện thoại thông minh', brand: 'Xiaomi',
        description: 'HyperOS, camera Leica, màn hình 144Hz cho hiệu suất tối ưu.',
        specs: { RAM: '12GB', Storage: '256GB', Screen: '6.73" AMOLED' }, imgSrc: 'https://images.pexels.com/photos/7743467/pexels-photo-7743467.jpeg?auto=format&fit=crop&w=800&q=80',
        stock: 0
    },
    macbookm3: {
        id: 'macbookm3', name: 'MacBook Pro M3', price: 55990000, category: 'Máy tính xách tay', brand: 'Apple',
        description: 'Chip M3 đột phá, màn hình Liquid Retina, hiệu suất cho dân chuyên nghiệp.',
        specs: { RAM: '16GB', Storage: '1TB', Screen: '14" Liquid Retina XDR' }, imgSrc: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        stock: 5
    },
    dellxps13: {
        id: 'dellxps13', name: 'Dell XPS 13', price: 36390000, category: 'Máy tính xách tay', brand: 'Dell',
        description: 'Laptop siêu di động với màn hình InfinityEdge và bộ vi xử lý Intel mạnh mẽ.',
        specs: { RAM: '16GB', Storage: '512GB', Screen: '13.4" OLED' }, imgSrc: 'https://images.unsplash.com/photo-1611078489935-0cb7bf04a5b8?auto=format&fit=crop&w=800&q=80',
        stock: 7
    },
    asusrog: {
        id: 'asusrog', name: 'ASUS ROG Gaming Laptop', price: 50390000, category: 'Máy tính xách tay', brand: 'ASUS',
        description: 'Laptop chơi game hiệu năng cao với đồ họa RTX 4070 và màn hình 144Hz.',
        specs: { RAM: '32GB', Storage: '1TB', Screen: '16" QHD+' }, imgSrc: 'https://images.unsplash.com/photo-1629131726692-1ae78a5c6336?auto=format&fit=crop&w=800&q=80',
        stock: 4
    },
    lenovo12: {
        id: 'lenovo12', name: 'Lenovo ThinkPad X1 Carbon Gen 12', price: 41990000, category: 'Máy tính xách tay', brand: 'Lenovo',
        description: 'Laptop doanh nhân nhẹ với Intel Ultra 9 và màn hình OLED 2.8K.',
        specs: { RAM: '32GB', Storage: '1TB', Screen: '14" OLED' }, imgSrc: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
        stock: 6
    },
    hpspectre: {
        id: 'hpspectre', name: 'HP Spectre x360 14', price: 44790000, category: 'Máy tính xách tay', brand: 'HP',
        description: 'Laptop chuyển đổi với Intel thế hệ 13, màn hình OLED 3:2, hỗ trợ bút.',
        specs: { RAM: '16GB', Storage: '1TB', Screen: '13.5" OLED' }, imgSrc: 'https://images.unsplash.com/photo-1611078489935-0cb7bf04a5b8?auto=format&fit=crop&w=800&q=80',
        stock: 3
    },
    sonywh: {
        id: 'sonywh', name: 'Sony WH-1000XM5', price: 11190000, category: 'Âm thanh', brand: 'Sony',
        description: 'Tai nghe khử tiếng ồn hàng đầu với chất lượng âm thanh và sự thoải mái tuyệt vời.',
        specs: { Battery: '30 giờ', NoiseCancel: 'Có', Type: 'Over-ear' }, imgSrc: 'https://images.unsplash.com/photo-1594631252845-4e8f67f64b4a?auto=format&fit=crop&w=800&q=80',
        stock: 20
    },
    airpods: {
        id: 'airpods', name: 'AirPods Pro', price: 6990000, category: 'Âm thanh', brand: 'Apple',
        description: 'Âm thanh không gian cá nhân hóa, theo dõi chuyển động đầu, chế độ xuyên âm.',
        specs: { Battery: '6 giờ', NoiseCancel: 'Có', Type: 'In-ear' }, imgSrc: 'https://images.unsplash.com/photo-1606220838315-7b7b2b1860cd?auto=format&fit=crop&w=800&q=80',
        stock: 25
    },
    homepod: {
        id: 'homepod', name: 'HomePod mini', price: 2790000, category: 'Âm thanh', brand: 'Apple',
        description: 'Loa thông minh nhỏ gọn với âm thanh đầy phòng và trí thông minh Siri.',
        specs: { Connectivity: 'Wi-Fi, Bluetooth', Assistant: 'Siri' }, imgSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        stock: 30
    },
    boseultra: {
        id: 'boseultra', name: 'Bose QuietComfort Ultra', price: 9790000, category: 'Âm thanh', brand: 'Bose',
        description: 'Tai nghe nhét tai khử tiếng ồn cao cấp với âm thanh sống động.',
        specs: { Battery: '6 giờ', NoiseCancel: 'Có', Type: 'In-ear' }, imgSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        stock: 18
    },
    jblboombox: {
        id: 'jblboombox', name: 'JBL Boombox 3', price: 13990000, category: 'Âm thanh', brand: 'JBL',
        description: 'Loa di động mạnh mẽ với âm trầm sâu và pin 24 giờ.',
        specs: { Battery: '24 giờ', Waterproof: 'IP67' }, imgSrc: 'https://images.unsplash.com/photo-1589003073299-cbe2d5410f81?auto=format&fit=crop&w=800&q=80',
        stock: 10
    },
    razerblade: {
        id: 'razerblade', name: 'Razer Blade 16', price: 75590000, category: 'Chơi game', brand: 'Razer',
        description: 'Laptop chơi game với RTX 4090, màn hình Mini-LED 4K, tần số quét 240Hz.',
        specs: { RAM: '32GB', Storage: '2TB', Screen: '16" Mini-LED' }, imgSrc: 'https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=format&fit=crop&w=800&q=80',
        stock: 2
    },
    applewatch: {
        id: 'applewatch', name: 'Apple Watch Ultra 2', price: 22390000, category: 'Phụ kiện', brand: 'Apple',
        description: 'Đồng hồ thông minh bền bỉ với cử chỉ chạm đôi và pin 36 giờ.',
        specs: { Battery: '36 giờ', Waterproof: '100m' }, imgSrc: 'https://images.unsplash.com/photo-1553546072-7be3a7e78371?auto=format&fit=crop&w=800&q=80',
        stock: 15
    }
};

function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        showToast('Lỗi lưu trữ dữ liệu!', 'error');
    }
}

function showToast(message, type = 'success') {
    Toastify({
        text: message,
        duration: 3000,
        position: 'top-right',
        backgroundColor: type === 'success' ? '#38a169' : '#e53e3e'
    }).showToast();
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCart() {
    const cartContent = document.querySelector('.cart-content');
    const cartTotal = document.querySelector('.cart-total');
    cartContent.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const product = products[item.id];
        if (!product) return;
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        cartContent.innerHTML += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${product.imgSrc}" alt="${product.name}">
                <div class="cart-item-details">
                    <h4>${product.name}</h4>
                    <p>${formatPrice(itemTotal)}</p>
                    <div class="quantity-control">
                        <button class="quantity-btn decrease">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="${product.stock}">
                        <button class="quantity-btn increase">+</button>
                    </div>
                </div>
                <span class="remove-from-cart" aria-label="Xóa ${product.name} khỏi giỏ hàng">×</span>
            </div>
        `;
    });

    cartTotal.textContent = `Tổng cộng: ${formatPrice(total)}`;
    updateCartCount();
    saveToLocalStorage('cart', cart);
}

function updateWishlist() {
    const wishlistContent = document.querySelector('.wishlist-content');
    wishlistContent.innerHTML = '';

    wishlist.forEach(id => {
        const product = products[id];
        if (!product) return;
        wishlistContent.innerHTML += `
            <div class="cart-item" data-id="${id}">
                <img src="${product.imgSrc}" alt="${product.name}">
                <div class="cart-item-details">
                    <h4>${product.name}</h4>
                    <p>${formatPrice(product.price)}</p>
                </div>
                <span class="remove-from-wishlist" aria-label="Xóa ${product.name} khỏi danh sách yêu thích">×</span>
            </div>
        `;
    });

    saveToLocalStorage('wishlist', wishlist);
}

function updateCompare() {
    const compareContent = document.querySelector('.compare-content');
    compareContent.innerHTML = '';

    if (compare.length === 0) {
        compareContent.innerHTML = '<p>Chưa có sản phẩm nào để so sánh.</p>';
        return;
    }

    let table = '<table class="w-full border-collapse"><tr><th>Tên</th><th>Giá</th><th>Danh mục</th><th>Thương hiệu</th><th>Thông số</th></tr>';
    compare.forEach(id => {
        const product = products[id];
        if (!product) return;
        table += `
            <tr data-id="${id}">
                <td>${product.name}</td>
                <td>${formatPrice(product.price)}</td>
                <td>${product.category}</td>
                <td>${product.brand}</td>
                <td>${Object.entries(product.specs).map(([key, value]) => `${key}: ${value}`).join('<br>')}</td>
            </tr>
        `;
    });
    table += '</table>';
    compareContent.innerHTML = table;
    saveToLocalStorage('compare', compare);
}

function filterProducts() {
    const search = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('filter-category').value;
    const brand = document.getElementById('filter-brand').value;
    const priceSort = document.getElementById('filter-price').value;
    const productGrid = document.querySelector('.product-grid');

    let filteredProducts = Object.values(products).filter(product => {
        return (
            product.name.toLowerCase().includes(search) &&
            (category === '' || product.category === category) &&
            (brand === '' || product.brand === brand)
        );
    });

    if (priceSort === 'low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        productGrid.innerHTML += `
            <div class="product-item product-card">
                <img src="${product.imgSrc}" alt="${product.name}" class="img" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <p class="stock-status ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}">${product.stock > 0 ? 'Còn hàng' : 'Hết hàng'}</p>
                    <div class="rating" data-id="${product.id}">Đánh giá: ${(ratings[product.id] || []).length > 0 ? (ratings[product.id].reduce((sum, r) => sum + r.rating, 0) / ratings[product.id].length).toFixed(1) : '0'} ★</div>
                    <div class="flex flex-col gap-2">
                        <button class="btn-add-cart add-to-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''} tabindex="0" aria-label="Thêm ${product.name} vào giỏ hàng">Thêm vào giỏ</button>
                        <button class="btn bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 add-to-wishlist" data-id="${product.id}" tabindex="0" aria-label="Thêm ${product.name} vào danh sách yêu thích">Yêu thích</button>
                        <button class="btn bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 quick-view" data-id="${product.id}" tabindex="0" aria-label="Xem nhanh ${product.name}">Xem nhanh</button>
                        <button class="btn bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 compare" data-id="${product.id}" tabindex="0" aria-label="Thêm ${product.name} vào so sánh">So sánh</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function openModal(modalClass) {
    const modal = document.querySelector(`.${modalClass}`);
    modal.classList.remove('hidden');
    modal.focus();
    document.body.style.overflow = 'hidden';
}

function closeModal(modalClass) {
    const modal = document.querySelector(`.${modalClass}`);
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: '.swiper-pagination', clickable: true }
    });

    updateCart();
    updateWishlist();
    updateCompare();
    filterProducts();

    auth.onAuthStateChanged(user => {
        const signInBtn = document.querySelector('.sign-in');
        if (user) {
            signInBtn.textContent = 'Đăng xuất';
            signInBtn.addEventListener('click', () => {
                auth.signOut().then(() => showToast('Đăng xuất thành công!'));
            });
        } else {
            signInBtn.textContent = 'Đăng nhập';
            signInBtn.addEventListener('click', () => openModal('auth-modal'));
        }
    });

    document.addEventListener('click', e => {
        if (e.target.classList.contains('cart-icon')) {
            openModal('cart-modal');
        } else if (e.target.classList.contains('wishlist')) {
            openModal('wishlist-modal');
        } else if (e.target.classList.contains('close')) {
            const modal = e.target.closest('.modal');
            closeModal(modal.classList[1]);
        } else if (e.target.classList.contains('add-to-cart')) {
            const id = e.target.dataset.id;
            const product = products[id];
            if (product.stock === 0) {
                showToast(`${product.name} đã hết hàng!`, 'error');
                return;
            }
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.quantity < product.stock) {
                    existingItem.quantity++;
                    showToast(`${product.name} đã được thêm vào giỏ hàng!`);
                } else {
                    showToast(`Không thể thêm thêm ${product.name}, đã đạt giới hạn tồn kho!`, 'error');
                }
            } else {
                cart.push({ id, quantity: 1 });
                showToast(`${product.name} đã được thêm vào giỏ hàng!`);
            }
            updateCart();
        } else if (e.target.classList.contains('remove-from-cart')) {
            const id = e.target.closest('.cart-item').dataset.id;
            cart = cart.filter(item => item.id !== id);
            showToast(`${products[id].name} đã được xóa khỏi giỏ hàng!`);
            updateCart();
        } else if (e.target.classList.contains('add-to-wishlist')) {
            const id = e.target.dataset.id;
            if (!wishlist.includes(id)) {
                wishlist.push(id);
                showToast(`${products[id].name} đã được thêm vào danh sách yêu thích!`);
            } else {
                showToast(`${products[id].name} đã có trong danh sách yêu thích!`, 'error');
            }
            updateWishlist();
        } else if (e.target.classList.contains('remove-from-wishlist')) {
            const id = e.target.closest('.cart-item').dataset.id;
            wishlist = wishlist.filter(wid => wid !== id);
            showToast(`${products[id].name} đã được xóa khỏi danh sách yêu thích!`);
            updateWishlist();
        } else if (e.target.classList.contains('quick-view')) {
            const id = e.target.dataset.id;
            const product = products[id];
            const quickViewContent = document.querySelector('.quick-view-content');
            quickViewContent.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.name}" class="w-full h-64 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold">${product.name}</h3>
                <p>${product.description}</p>
                <p class="font-bold">${formatPrice(product.price)}</p>
                <p class="${product.stock > 0 ? 'text-green-500' : 'text-red-500'}">${product.stock > 0 ? 'Còn hàng' : 'Hết hàng'}</p>
                <ul>${Object.entries(product.specs).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}</ul>
                <button class="btn-add-cart btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 w-full" data-id="${id}" ${product.stock === 0 ? 'disabled' : ''}>Thêm vào giỏ</button>
            `;
            openModal('quick-view-modal');
        } else if (e.target.classList.contains('compare')) {
            const id = e.target.dataset.id;
            if (compare.length < 4 && !compare.includes(id)) {
                compare.push(id);
                showToast(`${products[id].name} đã được thêm vào so sánh!`);
                updateCompare();
            } else {
                showToast('Không thể thêm! Đã đạt giới hạn so sánh hoặc sản phẩm đã có.', 'error');
            }
        } else if (e.target.classList.contains('clear-compare')) {
            compare = [];
            showToast('Đã xóa tất cả sản phẩm so sánh!');
            updateCompare();
        } else if (e.target.classList.contains('checkout')) {
            if (cart.length === 0) {
                showToast('Giỏ hàng trống!', 'error');
                return;
            }
            openModal('checkout-modal');
        } else if (e.target.classList.contains('clear-cart')) {
            cart = [];
            showToast('Giỏ hàng đã được xóa!');
            updateCart();
        } else if (e.target.classList.contains('clear-wishlist')) {
            wishlist = [];
            showToast('Danh sách yêu thích đã được xóa!');
            updateWishlist();
        } else if (e.target.classList.contains('decrease')) {
            const id = e.target.closest('.cart-item').dataset.id;
            const item = cart.find(i => i.id === id);
            if (item.quantity > 1) {
                item.quantity--;
                updateCart();
            }
        } else if (e.target.classList.contains('increase')) {
            const id = e.target.closest('.cart-item').dataset.id;
            const item = cart.find(i => i.id === id);
            const product = products[id];
            if (item.quantity < product.stock) {
                item.quantity++;
                updateCart();
            } else {
                showToast(`Không thể thêm thêm ${product.name}, đã đạt giới hạn tồn kho!`, 'error');
            }
        }
    });

    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('border-b-2', 'border-blue-500'));
            tab.classList.add('border-b-2', 'border-blue-500');
            document.querySelectorAll('.auth-form').forEach(form => form.classList.add('hidden'));
            document.querySelector(`.${tab.dataset.tab}-form`).classList.remove('hidden');
        });
    });

    document.getElementById('signin-form').addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Email không hợp lệ!', 'error');
            return;
        }
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                showToast('Đăng nhập thành công!');
                closeModal('auth-modal');
            })
            .catch(error => showToast(`Lỗi đăng nhập: ${error.message}`, 'error'));
    });

    document.getElementById('signup-form').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Email không hợp lệ!', 'error');
            return;
        }
        if (password.length < 6) {
            showToast('Mật khẩu phải dài ít nhất 6 ký tự!', 'error');
            return;
        }
        if (password !== confirmPassword) {
            showToast('Mật khẩu xác nhận không khớp!', 'error');
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                userCredential.user.updateProfile({ displayName: name });
                showToast('Đăng ký thành công!');
                closeModal('auth-modal');
            })
            .catch(error => showToast(`Lỗi đăng ký: ${error.message}`, 'error'));
    });

    document.getElementById('checkout-form').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('checkout-name').value;
        const email = document.getElementById('checkout-email').value;
        const address = document.getElementById('checkout-address').value;
        const phone = document.getElementById('checkout-phone').value;
        const paymentMethod = document.getElementById('checkout-payment').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10,11}$/;
        if (!emailRegex.test(email)) {
            showToast('Email không hợp lệ!', 'error');
            return;
        }
        if (!phoneRegex.test(phone)) {
            showToast('Số điện thoại không hợp lệ!', 'error');
            return;
        }
        const order = {
            id: `ORDER-${Date.now()}`,
            date: new Date().toLocaleString('vi-VN'),
            items: cart,
            total: cart.reduce((sum, item) => sum + products[item.id].price * item.quantity, 0),
            customer: { name, email, address, phone },
            paymentMethod
        };
        orders.push(order);
        saveToLocalStorage('orders', orders);
        cart = [];
        updateCart();
        closeModal('checkout-modal');
        showToast('Thanh toán thành công! Đơn hàng của bạn đã được ghi nhận.');
    });

    document.getElementById('rating-form').addEventListener('submit', e => {
        e.preventDefault();
        const productId = document.getElementById('rating-form').dataset.productId;
        const rating = parseInt(document.querySelector('.star.filled:last-child').dataset.value);
        const comment = document.querySelector('#rating-form textarea').value;
        if (!ratings[productId]) ratings[productId] = [];
        ratings[productId].push({ rating, comment });
        saveToLocalStorage('ratings', ratings);
        showToast('Đánh giá của bạn đã được gửi!');
        closeModal('rating-modal');
        filterProducts();
    });

    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.dataset.value);
            document.querySelectorAll('.star').forEach(s => {
                s.classList.toggle('filled', parseInt(s.dataset.value) <= value);
            });
        });
    });

    document.getElementById('search').addEventListener('input', filterProducts);
    document.getElementById('filter-category').addEventListener('change', filterProducts);
    document.getElementById('filter-brand').addEventListener('change', filterProducts);
    document.getElementById('filter-price').addEventListener('change', filterProducts);

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', e => {
            const id = e.target.closest('.cart-item').dataset.id;
            const item = cart.find(i => i.id === id);
            const product = products[id];
            const value = parseInt(e.target.value);
            if (value < 1) {
                e.target.value = 1;
                item.quantity = 1;
            } else if (value > product.stock) {
                e.target.value = product.stock;
                item.quantity = product.stock;
                showToast(`Không thể thêm thêm ${product.name}, đã đạt giới hạn tồn kho!`, 'error');
            } else {
                item.quantity = value;
            }
            updateCart();
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeModal(modal.classList[1]);
        });
        modal.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeModal(modal.classList[1]);
        });
    });
});
