document.addEventListener("DOMContentLoaded", () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Mes actual (enero = 0, diciembre = 11)

    if (currentMonth === 11) { // Si es diciembre
        const originalHeader = document.querySelector("header");
        console.log(originalHeader);

        // Crea un nuevo header vacío
        const newHeader = document.createElement("header");

        // Agrega la clase christmas-header solo en diciembre
        newHeader.classList.add("christmas-header");

        // Inserta el nuevo header vacío antes del original
        originalHeader.parentNode.insertBefore(newHeader, originalHeader);

        // Opcional: Elimina el header original si ya no lo necesitas
        // originalHeader.remove();

        console.log(newHeader);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Mes actual (enero = 0, diciembre = 11)

    if (currentMonth === 11) { // Si es diciembre
        const newYearDiv = document.querySelector(".b-page_newyear");

        if (newYearDiv) {
            newYearDiv.style.display = "block"; // Mostrar el div solo en diciembre
        }
    }
});
