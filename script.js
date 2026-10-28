// ATLANTIC TRAVEL AGENCY
// Website Interactions

document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close mobile menu after selecting a link
    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

            menuToggle.textContent = "☰";
        });
    });

    // Automatic copyright year
    document.getElementById("currentYear").textContent =
        new Date().getFullYear();

    // Travel inquiry form
    const travelForm = document.getElementById("travelForm");

    travelForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const customerName =
            document.getElementById("customerName").value.trim();

        const serviceType =
            document.getElementById("serviceType").value;

        const destination =
            document.getElementById("destination").value.trim();

        const travelDate =
            document.getElementById("travelDate").value;

        const message =
            document.getElementById("message").value.trim();

        if (!customerName || !serviceType || !destination) {
            alert("Please complete all required fields.");
            return;
        }

        const whatsappMessage = [
            "Hello Atlantic Travel Agency!",
            "",
            "I would like to make a travel inquiry.",
            "",
            "Name: " + customerName,
            "Service: " + serviceType,
            "Destination: " + destination,
            "Preferred Travel Date: " + (travelDate || "Not specified"),
            "Additional Information: " + (message || "None"),
            "",
            "Thank you."
        ].join("\n");

        const whatsappURL =
            "https://wa.me/252614162143?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });

});