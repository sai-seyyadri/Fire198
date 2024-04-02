document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("add-todo-button").addEventListener("click", function() {
        console.log("Button clicked"); 
        var form = document.getElementById("add-todo-form");
        console.log("Form display before toggle:", form.style.display); 
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
        console.log("Form display after toggle:", form.style.display); 
    });

    document.getElementById("add-todo").addEventListener("submit", function(event) {
        event.preventDefault(); 
        console.log("ToDo form submitted");
    });
});
