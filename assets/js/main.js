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
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png"
      },
      {
        id: 2,
        title: "Anti-Mage",
        desc: "Фармить як монстр. Коли з'являється Manta Style — ворогам краще здаватися.",
        stat: "Вінрейт: 58%",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png"
      },
      {
        id: 3,
        title: "Invoker",
        desc: "Складний маг із 10 заклинаннями. Вимагає бездоганного макро.",
        stat: "Вінрейт: 53%",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png"
      },
      {
        id: 4,
        title: "Juggernaut",
        desc: "Надійний керрі. Blade Fury забезпечує імунітет до магії, а Omnislash - домінує в 1х1.",
        stat: "Вінрейт: 60%",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png"
      },
      {
        id: 5,
        title: "Arc Warden",
        desc: "Майстер мікроконтролю та копій. Ідеальний для пізньої гри.",
        stat: "Вінрейт: 80%",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png"
      },
      {
        id: 6,
        title: "Broodmother",
        desc: "Захоплює лінію своїми павутинами та армією дрібних павуків. Пушить тавери швидко.",
        stat: "Вінрейт: 75%",
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
              <button class="btn-buy" data-id="${product.id}">Детальна стата</button>
            </div>
          `;
        })
        .join("");

      container.innerHTML = htmlString;
    }
});