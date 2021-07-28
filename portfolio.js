function showPass() {
    var x = document.getElementById("1input");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    }
