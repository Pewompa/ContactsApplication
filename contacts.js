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
    

    let row = table.insertRow();
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
    country.value = '';
    

})

//search bar retrieved from https://www.w3schools.com/howto/howto_js_filter_table.asp 
function search() {
    let input = document.getElementById("lookUp");
    let filter = input.value.toUpperCase();
    // let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
$('h2').text('Contact List')

//prevent the page from rereshing when hitting enter in the search bar retrieved from https://social.msdn.microsoft.com/Forums/en-US/6f8e3b5b-098b-4a3b-a8d1-4312ea280221/avoid-page-refresh-when-i-press-enter-key?forum=aspgettingstarted
$(function(){  
    $(':text').bind('keydown',function(e){
        if(e.keyCode==13)
        e.preventDefault();                  
    });  
});  
  
