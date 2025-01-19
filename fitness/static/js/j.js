document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];
    
    var formData = new FormData();
    formData.append('file', file);
    
    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Action: ${data.action}<br>Confidence: ${data.confidence}`;
    })
    .catch(error => console.error('Error:', error));
});
