

let titre = document.querySelector('.title'); 
let alex = document.querySelector('.alex'); 


function hover(e, enter, leave) {
	e.addEventListener('mouseenter', enter); 
 e.addEventListener('mouseleave', leave); 
}

hover(titre, ()=> titre.classList.add('hover'), ()=> titre.classList.remove('hover')); 


alex.addEventListener('mouseenter', ()=> { alex.classList.add('hoverimg'); 
					 console.log('salut')})

alex.addEventListener('mouseleave', ()=> { alex.classList.remove('hoverimg'); 
					 console.log('bye')})



/* neil.addEventListener('mouseenter', ()=> console.log('aeln'))
neil.addEventListener('mouseleave', ()=> console.log('bye')); */