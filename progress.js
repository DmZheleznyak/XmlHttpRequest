function log(html) {
	document.getElementById('log').innerHTML = html;
}

console.log( document.body )
var file = document.body.getElementById('fileItem').files[0];


document.forms.upload.onsubmit = function() {

	var file = this.elements.myfile.files[0];
	if (file) {
		upload(file);
	}
	return false;
}

function upload(file) {

	var xhr = new XMLHttpRequest();

	xhr.open("POST", "http://localhost:8000/upload", true);
	open(method, url, async, user, password)
	xhr.send(file);

	xhr.onload = xhr.onerror = function() { // обработка запроса
		if (this.status === 200) {
			log("success");
		} else {
			log("error " + this.status);
		}
	};

	if (e.lengthComputable) { 
		var percentComplete = (e.loaded / e.total) * 100; // это значение использовать для отображения progress bar 
	}

	xhr.upload.onprogress = function(event) {  	// обработчик для закачки , отображение количества загрузки в байтах
		log(event.loaded + ' / ' + event.total);
	}

}