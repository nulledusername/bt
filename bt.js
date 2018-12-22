
navigator.bluetooth.requestDevice({
  filters: [{ services: [0xffe5] }]
})
  .then(function(device) {
    
    return device.gatt.connect();
  })
  .then(function(server) {

    return server.getPrimaryService(0xffe5);
  })
  .then(function(service) {
    
    return service.getCharacteristic(0xffe9);
  })
  .then(function(characteristic) {
    
    var data = new Uint8Array([0xbb, 0x25, 0x05, 0x44]);
    return characteristic.writeValue(data);
  })
  .catch(function(error) {
     
     console.error('Falló!', error);
  });