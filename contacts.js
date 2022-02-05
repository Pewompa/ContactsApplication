const form = document.querySelector('form');

const nom = document.querySelector('#name');
const sur = document.querySelector('#surname');

const code = document.querySelector('#code');
const numb = document.querySelector('#numb');

const street = document.querySelector('#address');
const homeNumb = document.querySelector('#number');
const post = document.querySelector('#post');
const city = document.querySelector('#city');
const country = document.querySelector('#country');

const table = document.querySelector('table')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = nom.value;
    const surname = sur.value;
    const phone = `${code.value} ${numb.value}`;
    const address = `${street.value} ${homeNumb.value} ${post.value} ${city.value} ${country.value}`;

    let tabl = table
    let row = tabl.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();

    cell1.innerText = nombre
    cell2.innerText = surname
    cell3.innerText = phone
    cell4.innerText = address;
    cell5.innerHTML = '<button type="button" class="btn">&times;</button>';

    row.addEventListener('click', function (e) {
        e.target.className === 'btn' && confirm('Delete contact?') === true && row.remove();
    });

    nom.value = ''
    sur.value = ''
    code.value = ''
    numb.value = ''
    street.value = ''
    homeNumb.value = ''
    post.value = ''
    city.value = ''
    country.value = ''

})

//search bar retrieved from https://www.w3schools.com/howto/howto_js_filter_table.asp 
function myFunction() {
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            console.log(txtValue)
            console.log(filter)
            console.log(txtValue.toUpperCase().indexOf(filter))
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
        console.log(tr[i])
    }
}

$('h2').text('Contact List')

