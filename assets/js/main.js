document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav) mainNav.classList.remove('active');
        });
    });

    const products = [
      {
        id: 1,
        title: "Pudge",
        desc: "Найвідоміший хук в історії гри. Чудово ініціює бої та збирає заряди Flesh Heap.",
        stat: "Вінрейт: 65%",
        price: 500,
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png"
      },
      {
        id: 2,
        title: "Anti-Mage",
        desc: "Фармить як монстр. Коли з'являється Manta Style — ворогам краще здаватися.",
        stat: "Вінрейт: 58%",
        price: 650,
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png"
      },
      {
        id: 3,
        title: "Invoker",
        desc: "Складний маг із 10 заклинаннями. Вимагає бездоганного макро.",
        stat: "Вінрейт: 53%",
        price: 800,
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png"
      },
      {
        id: 4,
        title: "Juggernaut",
        desc: "Надійний керрі. Blade Fury забезпечує імунітет до магії, а Omnislash - домінує в 1х1.",
        stat: "Вінрейт: 60%",
        price: 600,
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png"
      },
      {
        id: 5,
        title: "Arc Warden",
        desc: "Майстер мікроконтролю та копій. Ідеальний для пізньої гри.",
        stat: "Вінрейт: 80%",
        price: 900,
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png"
      },
      {
        id: 6,
        title: "Broodmother",
        desc: "Захоплює лінію своїми павутинами та армією дрібних павуків. Пушить тавери швидко.",
        stat: "Вінрейт: 75%",
        price: 550,
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png"
      }
    ];

    const container = document.querySelector(".products-grid");

    if (container) {
      const htmlString = products
        .map((product) => {
          return `
            <div class="product-card">
              <img src="${product.image}" alt="${product.title}" class="product-img">
              <h3 class="product-title">${product.title}</h3>
              <p class="product-desc">${product.desc}</p>
              <span class="product-stat">${product.stat}</span>
              <button class="btn-buy" data-id="${product.id}">В арсенал</button>
            </div>
          `;
        })
        .join("");

      container.innerHTML = htmlString;
    }

    // --- ЛОГІКА ЛАБОРАТОРНОЇ №10 ---
    let cart = [];

    container.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-buy")) {
        const productId = Number(event.target.dataset.id);
        const selectedProduct = products.find((p) => p.id === productId);
        
        if (selectedProduct) {
          addToCart(selectedProduct);
        }
      }
    });

    function addToCart(product) {
      const existingItem = cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      updateUI();
    }

    function calculateTotal() {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }

    function updateUI() {
      const cartCounter = document.querySelector(".btn-cart span");
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

      if (cartCounter) {
        cartCounter.textContent = `Арсенал (${totalItems})`;
      }

      console.log("Поточний кошик:", cart);
      console.log("Загальна сума:", calculateTotal(), "грн");
    }
});