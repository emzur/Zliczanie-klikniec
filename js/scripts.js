var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	
	var list = document.getElementById('list');
	var itemLength = document.getElementsByTagName('li').length;

	list.innerHTML += '<li>item ' + itemLength + '</li>';
		
});