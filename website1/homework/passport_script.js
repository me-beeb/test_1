const node_surname = document.getElementById("surname")
const node_name = document.getElementById("name")
const node_otchestvo = document.getElementById("otchestvo")

function find_edit_surname ()  {
    node_surname.innerText = "Alabina"
}

function find_edit_name () {
    node_name.innerText = "Svetlana"
}

function find_edit_otchestvo () {
    node_otchestvo.innerText = "Gennadievna"
}

node_surname.addEventListener("click", find_edit_surname)
node_name.addEventListener("click", find_edit_name)
node_otchestvo.addEventListener("click", find_edit_otchestvo)
