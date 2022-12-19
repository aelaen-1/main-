

let alex = document.querySelector('img.alex'); 
let about = document.querySelector('#relou2'); 
let dropdown = document.querySelector('.dropdown'); 

function hover(e, enter, leave) {
	e.addEventListener('mouseenter', enter); ; 
 e.addEventListener('mouseleave', leave); 
}

																	

hover(alex,
	  ()=> { alex.classList.add('hoverimg')}, 
	  ()=> {alex.classList.remove('hoverimg')}
	 ); 

hover(about, () => dropdown.classList.add('ok'), () => dropdown.classList.remove('ok'))
hover(dropdown, console.log('rien'),() => dropdown.classList.remove('ok'))

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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