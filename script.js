let statusDiv = document.querySelector('.status');


function generatePassword(){
	var length = 8,
	charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	res = '';

	for (var i = 0, n = charset.length; i < length; ++i) {
		res += charset.charAt(Math.floor(Math.random() * n));
	}
    statusDiv.innerHTML = res;
}

function copy(event) {
    const content = document.querySelector('.status').innerHTML;
    navigator.clipboard.writeText(content);
    
}