document.addEventListener('DOMContentLoaded', () => {
    // Dữ liệu sản phẩm
    const products = {
        iphone15: { name: 'iPhone 15 Pro', price: 27990000, category: 'Điện thoại thông minh', brand: 'Apple', description: 'iPhone tiên tiến nhất với thiết kế titan, nút Hành động, chip A17 Pro mạnh mẽ.', imgClass: 'iphone' },
        samsung24: { name: 'Samsung Galaxy S24 Ultra', price: 33590000, category: 'Điện thoại thông minh', brand: 'Samsung', description: 'Flagship đỉnh cao với bút S Pen, camera 200MP, tính năng AI hỗ trợ công việc.', imgClass: 'samsung' },
        pixel8: { name: 'Google Pixel 8 Pro', price: 25190000, category: 'Điện thoại thông minh', brand: 'Google', description: 'Trải nghiệm Android thuần túy với camera AI vượt trội và chip Tensor G3.', imgClass: 'pixel' },
        oneplus12: { name: 'OnePlus 12', price: 25190000, category: 'Điện thoại thông minh', brand: 'OnePlus', description: 'Flagship với Snapdragon 8 Gen 3, màn hình AMOLED 120Hz, sạc nhanh 100W.', imgClass: 'oneplus' },
        xiaomi14: { name: 'Xiaomi 14 Pro', price: 27990000, category: 'Điện thoại thông minh', brand: 'Xiaomi', description: 'HyperOS, camera Leica, màn hình 144Hz cho hiệu suất tối ưu.', imgClass: 'xiaomi' },
        macbookm3: { name: 'MacBook Pro M3', price: 55990000, category: 'Máy tính xách tay', brand: 'Apple', description: 'Chip M3 đột phá, màn hình Liquid Retina, hiệu suất cho dân chuyên nghiệp.', imgClass: 'macbook' },
        dellxps13: { name: 'Dell XPS 13', price: 36390000, category: 'Máy tính xách tay', brand: 'Dell', description: 'Laptop siêu di động với màn hình InfinityEdge và bộ vi xử lý Intel mạnh mẽ.', imgClass: 'dell' },
        asusrog: { name: 'ASUS ROG Gaming Laptop', price: 50390000, category: 'Máy tính xách tay', brand: 'ASUS', description: 'Laptop chơi game hiệu năng cao với đồ họa RTX 4070 và màn hình 144Hz.', imgClass: 'asus' },
        lenovo12: { name: 'Lenovo ThinkPad X1 Carbon Gen 12', price: 41990000, category: 'Máy tính xách tay', brand: 'Lenovo', description: 'Laptop doanh nhân nhẹ với Intel Ultra 9 và màn hình OLED 2.8K.', imgClass: 'lenovo' },
        hpspectre: { name: 'HP Spectre x360 14', price: 44790000, category: 'Máy tính xách tay', brand: 'HP', description: 'Laptop chuyển đổi với Intel thế hệ 13, màn hình OLED 3:2, hỗ trợ bút.', imgClass: 'hp' },
        sonywh: { name: 'Sony WH-1000XM5', price: 11190000, category: 'Âm thanh', brand: 'Sony', description: 'Tai nghe khử tiếng ồn hàng đầu với chất lượng âm thanh và sự thoải mái tuyệt vời.', imgClass: 'sony' },
        airpods: { name: 'AirPods Pro', price: 6990000, category: 'Âm thanh', brand: 'Apple', description: 'Âm thanh không gian cá nhân hóa, theo dõi chuyển động đầu, chế độ xuyên âm.', imgClass: 'airpods' },
        homepod: { name: 'HomePod mini', price: 2790000, category: 'Âm thanh', brand: 'Apple', description: 'Loa thông minh nhỏ gọn với âm thanh đầy phòng và trí thông minh Siri.', imgClass: 'homepod' },
        boseultra: { name: 'Bose QuietComfort Ultra', price: 9790000, category: 'Âm thanh', brand: 'Bose', description: 'Tai nghe nhét tai khử tiếng ồn cao cấp với âm thanh sống động.', imgClass: 'bose' },
        jblboombox: { name: 'JBL Boombox 3', price: 13990000, category: 'Âm thanh', brand: 'JBL', description: 'Loa di động mạnh mẽ với âm trầm sâu và pin 24 giờ.', imgClass: 'jbl' },
        razerblade: { name: 'Razer Blade 16', price: 75590000, category: 'Chơi game', brand: 'Razer', description: 'Laptop chơi game với RTX 4090, màn hình Mini-LED 4K, tần số quét 240Hz.', imgClass: 'razer' },
        applewatch: { name: 'Apple Watch Ultra 2', price: 22390000, category: 'Phụ kiện', brand: 'Apple', description: 'Đồng hồ thông minh bền bỉ với cử chỉ chạm đôi và pin 36 giờ.', imgClass: 'applewatch' }
    };

    // Trạng thái
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};

    // Phần tử DOM
    const cartModal = document.querySelector('.cart-modal');
    const wishlistModal = document.querySelector('.wishlist-modal');
    const authModal = document.querySelector('.auth-modal');
    const quickViewModal = document.querySelector('.quick-view-modal');
    const compareModal = document.querySelector('.compare-modal');
    const checkoutModal = document.querySelector('.checkout-modal');
    const ratingModal = document.querySelector('.rating-modal');
    const cartCount = document.querySelector('.cart-count');
    const cartContent = document.querySelector('.cart-modal .cart-content');
    const cartTotal = document.querySelector('.cart-modal .cart-total');
    const wishlistContent = document.querySelector('.wishlist-modal .wishlist-content');
    const quickViewContent = document.querySelector('.quick-view-modal .quick-view-content');
    const compareContent = document.querySelector('.compare-modal .compare-content');
    const closeModals = document.querySelectorAll('.modal .close');
    const checkoutBtn = document.querySelector('.checkout');
    const clearCartBtn = document.querySelector('.clear-cart');
    const clearWishlistBtn = document.querySelector('.clear-wishlist');
    const clearCompareBtn = document.querySelector('.clear-compare');
    const signInBtn = document.querySelector('.sign-in');
    const wishlistBtn = document.querySelector('.wishlist');
    const authTabs = document.querySelectorAll('.auth-tabs .tab');
    const authForms = document.querySelectorAll('.auth-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
    const checkoutForm = document.getElementById('checkout-form');
    const ratingForm = document.getElementById('rating-form');
    const searchInput = document.getElementById('search');
    const filterCategory = document.getElementById('filter-category');
    const filterBrand = document.getElementById('filter-brand');
    const filterPrice = document.getElementById('filter-price');
    const productGrid = document.querySelectorAll('.product-grid');

    // Khởi tạo Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        autoplay: { delay: 3000 },
    });

    // Hiển thị thông báo Toast
    function showToast(message) {
        Toastify({
            text: message,
            duration: 3000,
            gravity: 'top',
            position: 'right',
            backgroundColor: '#38a169',
        }).showToast();
    }

    // Cập nhật giỏ hàng
    function updateCart() {
        cartCount.textContent = cart.length;
        if (cart.length === 0) {
            cartContent.innerHTML = '<p>Giỏ hàng của bạn đang trống</p>';
            cartTotal.textContent = '0 VNĐ';
        } else {
            cartContent.innerHTML = cart.map(item => `
                <p class="flex justify-between">
                    ${item.name} - ${item.price.toLocaleString('vi-VN')} VNĐ
                    <button class="remove-from-cart text-red-500" data-id="${item.id}" aria-label="Xóa ${item.name} khỏi giỏ hàng">Xóa</button>
                </p>
            `).join('');
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = `${total.toLocaleString('vi-VN')} VNĐ`;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                cart = cart.filter(item => item.id !== id);
                updateCart();
                showToast(`${products[id].name} đã được xóa khỏi giỏ hàng!`);
            });
        });
    }

    // Cập nhật danh sách yêu thích
    function updateWishlist() {
        if (wishlist.length === 0) {
            wishlistContent.innerHTML = '<p>Danh sách yêu thích của bạn đang trống</p>';
        } else {
            wishlistContent.innerHTML = wishlist.map(item => `
                <p class="flex justify-between">
                    ${item.name} - ${item.price.toLocaleString('vi-VN')} VNĐ
                    <button class="remove-from-wishlist text-red-500" data-id="${item.id}" aria-label="Xóa ${item.name} khỏi danh sách yêu thích">Xóa</button>
                </p>
            `).join('');
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        document.querySelectorAll('.remove-from-wishlist').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                wishlist = wishlist.filter(item => item.id !== id);
                updateWishlist();
                showToast(`${products[id].name} đã được xóa khỏi danh sách yêu thích!`);
            });
        });
    }

    // Cập nhật so sánh sản phẩm
    function updateCompare() {
        if (compareList.length === 0) {
            compareContent.innerHTML = '<p>Chưa có sản phẩm nào để so sánh</p>';
        } else {
            compareContent.innerHTML = `
                <table class="w-full border-collapse">
                    <tr class="border-b">
                        <th class="p-2">Tên</th>
                        ${compareList.map(item => `<th class="p-2">${item.name}</th>`).join('')}
                    </tr>
                    <tr class="border-b">
                        <td class="p-2">Giá</td>
                        ${compareList.map(item => `<td class="p-2">${item.price.toLocaleString('vi-VN')} VNĐ</td>`).join('')}
                    </tr>
                    <tr class="border-b">
                        <td class="p-2">Danh mục</td>
                        ${compareList.map(item => `<td class="p-2">${item.category}</td>`).join('')}
                    </tr>
                    <tr class="border-b">
                        <td class="p-2">Thương hiệu</td>
                        ${compareList.map(item => `<td class="p-2">${item.brand}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="p-2">Mô tả</td>
                        ${compareList.map(item => `<td class="p-2">${item.description}</td>`).join('')}
                    </tr>
                </table>
            `;
        }
        localStorage.setItem('compareList', JSON.stringify(compareList));
    }

    // Hiển thị đánh giá
    function displayRatings() {
        document.querySelectorAll('.rating').forEach(ratingDiv => {
            const productId = ratingDiv.getAttribute('data-id');
            const productRatings = ratings[productId] || [];
            const average = productRatings.length ? (productRatings.reduce((sum, r) => sum + r.rating, 0) / productRatings.length).toFixed(1) : 0;
            ratingDiv.innerHTML = `
                <span class="cursor-pointer text-blue-500" data-id="${productId}" aria-label="Đánh giá ${products[productId].name}">Đánh giá: ${average} ★</span>
            `;
            ratingDiv.querySelector('span').addEventListener('click', () => {
                ratingModal.classList.remove('hidden');
                ratingForm.setAttribute('data-id', productId);
            });
        });
    }

    // Lọc sản phẩm
    function filterProducts() {
        const query = searchInput.value.toLowerCase();
        const category = filterCategory.value;
        const brand = filterBrand.value;
        let priceSort = filterPrice.value;

        let filteredProducts = Object.keys(products).map(id => ({ id, ...products[id] }));

        // Lọc theo tìm kiếm
        if (query) {
            filteredProducts = filteredProducts.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) || 
                p.brand.toLowerCase().includes(query)
            );
        }

        // Lọc theo danh mục
        if (category) {
            filteredProducts = filteredProducts.filter(p => p.category === category);
        }

        // Lọc theo thương hiệu
        if (brand) {
            filteredProducts = filteredProducts.filter(p => p.brand === brand);
        }

        // Sắp xếp theo giá
        if (priceSort) {
            filteredProducts.sort((a, b) => 
                priceSort === 'low-to-high' ? a.price - b.price : b.price - a.price
            );
        }

        // Cập nhật giao diện
        productGrid.forEach(grid => {
            const items = grid.querySelectorAll('.product-item');
            items.forEach(item => {
                const id = item.querySelector('.add-to-cart').getAttribute('data-id');
                if (filteredProducts.some(p => p.id === id)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    }

    // Mở giỏ hàng
    cartCount.parentElement.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
        updateCart();
    });

    // Mở danh sách yêu thích
    wishlistBtn.addEventListener('click', () => {
        wishlistModal.classList.remove('hidden');
        updateWishlist();
    });

    // Đóng modal
    closeModals.forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.modal').classList.add('hidden');
        });
    });

    // Đóng modal khi click bên ngoài
    [cartModal, wishlistModal, authModal, quickViewModal, compareModal, checkoutModal, ratingModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    });

    // Thêm vào giỏ hàng
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const product = { ...products[productId], id: productId };
            if (!cart.some(item => item.id === productId)) {
                cart.push(product);
                updateCart();
                showToast(`${product.name} đã được thêm vào giỏ hàng!`);
            } else {
                showToast(`${product.name} đã có trong giỏ hàng!`);
            }
        });
    });

    // Thêm vào danh sách yêu thích
    document.querySelectorAll('.add-to-wishlist').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const product = { ...products[productId], id: productId };
            if (!wishlist.some(item => item.id === productId)) {
                wishlist.push(product);
                updateWishlist();
                showToast(`${product.name} đã được thêm vào danh sách yêu thích!`);
            } else {
                showToast(`${product.name} đã có trong danh sách yêu thích!`);
            }
        });
    });

    // Xem nhanh sản phẩm
    document.querySelectorAll('.quick-view').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const product = products[productId];
            quickViewContent.innerHTML = `
                <div class="img ${product.imgClass} h-40 bg-gray-300 mb-4" role="img" aria-label="${product.name}"></div>
                <h3 class="text-xl font-bold">${product.name}</h3>
                <p>${product.description}</p>
                <p class="price font-bold">${product.price.toLocaleString('vi-VN')} VNĐ</p>
                <p>Danh mục: ${product.category}</p>
                <p>Thương hiệu: ${product.brand}</p>
                <button class="btn add-to-cart bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 w-full" data-id="${productId}" aria-label="Thêm ${product.name} vào giỏ hàng">Thêm vào giỏ</button>
            `;
            quickViewModal.classList.remove('hidden');
            quickViewContent.querySelector('.add-to-cart').addEventListener('click', () => {
                const product = { ...products[productId], id: productId };
                if (!cart.some(item => item.id === productId)) {
                    cart.push(product);
                    updateCart();
                    showToast(`${product.name} đã được thêm vào giỏ hàng!`);
                } else {
                    showToast(`${product.name} đã có trong giỏ hàng!`);
                }
            });
        });
    });

    // Thêm vào so sánh
    document.querySelectorAll('.product-item').forEach(item => {
        const compareBtn = document.createElement('button');
        compareBtn.className = 'btn compare bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-2';
        compareBtn.textContent = 'So sánh';
        compareBtn.setAttribute('data-id', item.querySelector('.add-to-cart').getAttribute('data-id'));
        compareBtn.setAttribute('aria-label', `Thêm ${products[compareBtn.getAttribute('data-id')].name} vào so sánh`);
        item.querySelector('.flex').appendChild(compareBtn);
        compareBtn.addEventListener('click', () => {
            const productId = compareBtn.getAttribute('data-id');
            const product = { ...products[productId], id: productId };
            if (compareList.length < 3 && !compareList.some(item => item.id === productId)) {
                compareList.push(product);
                updateCompare();
                showToast(`${product.name} đã được thêm vào so sánh!`);
                compareModal.classList.remove('hidden');
            } else if (compareList.length >= 3) {
                showToast('Chỉ có thể so sánh tối đa 3 sản phẩm!');
            } else {
                showToast(`${product.name} đã có trong danh sách so sánh!`);
            }
        });
    });

    // Xóa giỏ hàng
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        updateCart();
        showToast('Giỏ hàng đã được xóa!');
    });

    // Xóa danh sách yêu thích
    clearWishlistBtn.addEventListener('click', () => {
        wishlist = [];
        updateWishlist();
        showToast('Danh sách yêu thích đã được xóa!');
    });

    // Xóa so sánh
    clearCompareBtn.addEventListener('click', () => {
        compareList = [];
        updateCompare();
        showToast('Danh sách so sánh đã được xóa!');
    });

    // Thanh toán
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            cartModal.classList.add('hidden');
            checkoutModal.classList.remove('hidden');
        } else {
            showToast('Giỏ hàng của bạn đang trống!');
        }
    });

    // Xử lý form thanh toán
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thanh toán thành công!');
        cart = [];
        updateCart();
        checkoutModal.classList.add('hidden');
        checkoutForm.reset();
    });

    // Mở modal đăng nhập
    signInBtn.addEventListener('click', () => {
        authModal.classList.remove('hidden');
    });

    // Chuyển tab đăng nhập/đăng ký
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('border-b-2', 'border-blue-500'));
            tab.classList.add('border-b-2', 'border-blue-500');
            authForms.forEach(form => form.classList.add('hidden'));
            document.querySelector(`.${tab.getAttribute('data-tab')}-form`).classList.remove('hidden');
        });
    });

    // Form đăng ký bản tin
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        showToast(`Đã đăng ký nhận bản tin với ${email}!`);
        newsletterForm.reset();
    });

    // Form đăng nhập
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signInForm.querySelector('input[type="email"]').value;
        showToast(`Đã đăng nhập với ${email}`);
        signInForm.reset();
        authModal.classList.add('hidden');
    });

    // Form đăng ký
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = signUpForm.querySelectorAll('input[type="password"]')[1].value;
        if (password === confirmPassword) {
            showToast(`Tài khoản đã được tạo cho ${name} với ${email}`);
            signUpForm.reset();
            authModal.classList.add('hidden');
        } else {
            showToast('Mật khẩu không khớp!');
        }
    });

    // Xử lý đánh giá
    let selectedRating = 0;
    ratingForm.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value'));
            ratingForm.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < selectedRating; i++) {
                ratingForm.querySelectorAll('.star')[i].classList.add('selected');
            }
        });
    });

    ratingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const productId = ratingForm.getAttribute('data-id');
        const comment = ratingForm.querySelector('textarea').value;
        if (selectedRating > 0) {
            ratings[productId] = ratings[productId] || [];
            ratings[productId].push({ rating: selectedRating, comment });
            localStorage.setItem('ratings', JSON.stringify(ratings));
            displayRatings();
            showToast(`Đã gửi đánh giá cho ${products[productId].name}!`);
            ratingModal.classList.add('hidden');
            ratingForm.reset();
            ratingForm.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
            selectedRating = 0;
        } else {
            showToast('Vui lòng chọn số sao!');
        }
    });

    // Tìm kiếm và lọc
    [searchInput, filterCategory, filterBrand, filterPrice].forEach(input => {
        input.addEventListener('input', filterProducts);
    });

    // Khởi tạo
    updateCart();
    updateWishlist();
    updateCompare();
    displayRatings();
    filterProducts();
});
