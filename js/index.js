function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



var header = document.getElementById("productOptions");
var btns = header.getElementsByClassName("fav");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if (this.className != "fav active") {
            this.className = "fav active";
        } else {
            this.className = "fav";
        }
    });
}

function showShare() {
    var x = document.getElementById('shareBtns');
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
        x.style.opacity = '100%';
    } else {
        x.style.visibility = 'hidden';
        x.style.opacity = '0%';
    }
}