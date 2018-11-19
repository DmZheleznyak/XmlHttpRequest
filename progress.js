// function log(html) {
// 	document.getElementById('log').innerHTML = html;
// }

// console.log( window )
// var file = document.getElementsByClassName('form-control-file')[0].files[0];

document.forms.upload.onsubmit = function(e) { //обработчик отаправки формы
	// console.log(e)
	var formData = new FormData( document.forms )

	formData.append('Wonderful-image', document.getElementsByClassName('form-control-file')[0].files[0] )

	var xhr = new XMLHttpRequest()

	xhr.open("POST", "http://localhost:8000/upload", false)

	xhr.send( formData )

	if ( xhr.status === 200 ) {
		console.log('BLa')
	} else {
		console.log( xhr.status )
	}

	e.preventDefault();
}



function upload(file) {
// отправка формы через FormData

	console.log(`file in upload`, file )

	// formData.append('image', file)

	// var xhr = new XMLHttpRequest();

	// xhr.open("POST", "http://localhost:8000/upload", true);
	
	// xhr.send( formData );

	// xhr.onload = xhr.onerror = function() { // обработка запроса 
	// 	if (this.status === 200) {						// расделить обработку ошибки и успешное отправку файла
	// 		log("success");											// обработка ошибки с сервера не через try catch
	// 	} else {
	// 		log("error " + this.status);
	// 	}
	// };

	// if (e.lengthComputable) { 
	// 	var percentComplete = (e.loaded / e.total) * 100; // это значение использовать для отображения progress bar 
	// }

	// xhr.upload.onprogress = function(event) {  	// обработчик для закачки , отображение количества загрузки в байтах
	// 	log(event.loaded + ' / ' + event.total);
	// }

}