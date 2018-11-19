document.forms.upload.onsubmit = function(e) { 					//обработчик отаправки формы
// по дефолту при onsubmit происходит отправка формы и перезагрузка страницы
	e.preventDefault() // отменяем перезагрузку страницы
	
	var formData = new FormData()

	formData.append('sampleFile', document.getElementsByClassName('form-control-file')[0].files[0] )

	var xhr = new XMLHttpRequest()

	xhr.open("POST", 'http://localhost:8000/upload')

	xhr.send( formData )

	xhr.onreadystatechange = function(  ) { 

		if ( this.status === 200 ) {
			console.log( `this.upload`, this.upload )
		} else {
			console.log(`this.status`, this.status )
		}

	}

}


// Свойство XMLHttpRequest.upload возвращает объект XMLHttpRequestUpload, 
// представляющий процесс загрузки. Это непрозрачный объект, но так как он является XMLHttpRequestEventTarget, 
// к нему можно добавить обработчики событий
	
// formData.append( name(первый аргумент), file ) 
// должен соответстовать с именем файла , 
// когда input подвязан к форме, а когда мы его отвязали 
// мы сами его задаём

// if (e.lengthComputable) { 
// 	var percentComplete = (e.loaded / e.total) * 100; // это значение использовать для отображения progress bar 
// }

// xhr.upload.onprogress = function(event) {  	// обработчик для закачки , отображение количества загрузки в байтах
// 	log(event.loaded + ' / ' + event.total);
// }

// function log(html) {
// 	document.getElementById('log').innerHTML = html;
// }