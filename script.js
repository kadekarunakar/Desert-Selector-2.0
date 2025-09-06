const ingredientsData = {
    gulabJamun: [
        "All-purpose flour",
        "Baking soda",
        "Sugar",
        "Cardamom",
        "Ghee or oil",
        "Rose water"
    ],
    cake: [
        "Sugar",
        "Eggs",
        "Butter",
        "Baking powder",
        "Vanilla extract"
    ],
    iceCream: [
        "Heavy cream",
        "Condensed milk",
        "Vanilla extract",
        "(Optional: fruits, nuts, or chocolate chips)"
    ],
    kalakhand: [
        "Paneer or chenna",
        "Sweetened condensed milk",
        "Cardamom powder",
        "Chopped pistachios/almonds"
    ]
};

// --------- Navigation Highlight + Scroll ---------
const navItems = document.querySelectorAll("nav ul li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        const sectionId = item.textContent.trim();
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
    });
});

// --------- View Ingredients (Dynamic) ---------
const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.closest("section");
        const dessertAttr = btn.getAttribute("data-dessert");
        let existingList = section.querySelector(".ingredients-list");

        if (existingList) {
            // Remove ingredients list
            existingList.remove();
            btn.textContent = "View Ingredients";
        } else {
            // Create ingredients list
            const ul = document.createElement("ul");
            ul.className = "ingredients-list";

            ingredientsData[dessertAttr].forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });

            section.appendChild(ul);
            btn.textContent = "Hide Ingredients";
        }
    });
});

// --------- Make existing .top images scroll to top ---------
const topImages = document.querySelectorAll(".top");

topImages.forEach(img => {
    img.style.cursor = "pointer"; // make it look clickable
    img.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
