// This is a JavaScript file

$(document).on("click", "#camera", function(){
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true
     });

function onSuccess(imageURI) {
    var image = document.getElementById('Imagem');
    image.src = imageURI;
}

function onFail(message) {
    alert('Ocorreu um Erro: ' + message);
}
});

$(document).on("click", "#qrcode", function(){
     cordova.plugins.barcodeScanner.scan(
      function (result) {

                var qrcodzin = $("#fim");
                qrcodzin.text(result.text);
      },
      function (error) {
          alert("fALHA AO SCANEAR: " + error);
      },
      {
          preferFrontCamera : false,
          showFlipCameraButton : true, 
          showTorchButton : true, 
          torchOn: true, 
          saveHistory: true,
          prompt : "Coloque a Camera no Código para Scanear", 
          resultDisplayDuration: 500, 
          formats : "QR_CODE,PDF_417,CODE_39",
          orientation : "landscape", 
          disableAnimations : true, 
          disableSuccessBeep: false 
      }
   );

});

   function redeConexao() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Conexão Desconhecida';
    states[Connection.ETHERNET] = 'Ethernet Conexão';
    states[Connection.WIFI]     = 'Conexão WiFi';
    states[Connection.CELL_2G]  = 'Cell 2G Conexão';
    states[Connection.CELL_3G]  = 'Cell 3G Conexão';
    states[Connection.CELL_4G]  = 'Cell 4G Conexão';
    states[Connection.CELL]     = 'Cell Genérico conexãon';
    states[Connection.NONE]     = 'Não Conexão Internet';

    alert('Tipo de Conexão: ' + states[networkState]);
}

$(document).on("click", "#conexao", function(){
   redeConexao();
});