document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("#bucket-list input[type='checkbox']");
    
    checkboxes.forEach((checkbox) => {
        const itemId = checkbox.getAttribute("data-id");
        const savedState = localStorage.getItem(`bucketlist-item-${itemId}`);

        if (savedState === "true") {
            checkbox.checked = true;
        }

        checkbox.addEventListener("change", function () {
            localStorage.setItem(`bucketlist-item-${itemId}`, this.checked);
        });
    });
});