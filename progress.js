document.forms.upload.onsubmit = function(e) { 					//обработчик отаправки формы
// по дефолту при onsubmit происходит отправка формы и перезагрузка страницы
	e.preventDefault() // отменяем перезагрузку страницы

	var xhr = new XMLHttpRequest()	
	var formData = new FormData()
	const bar = document.querySelector('.progress-bar');
	const files =  document.getElementsByClassName('form-control-file')[0].files[0];

	formData.append('sampleFile', files)
	xhr.upload.onprogress = ({ loaded, total }) => bar.style.width = loaded *100 / total + '%'; 
	xhr.open("POST", 'http://localhost:8000/upload')
	xhr.send( formData )
}