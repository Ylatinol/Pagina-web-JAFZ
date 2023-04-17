
// Capturar la pestaña actual del navegador
chrome.tabs.captureTab(null, { format: 'png' }, function (dataUrl) {
    // Crear una nueva imagen en un elemento <img> con el resultado de la captura
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
});
#ofrecemos {
    max - height: 0;
    overflow: hidden;
    transition: max - height 0.3s ease -in -out;
}

#ofrecemos.in {
    max - height: 500px; /* Establece la altura máxima deseada para el acordeón */
}