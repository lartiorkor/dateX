const geolocation = require ('google-geolocation') ({
    key: 'AIzaSyA1NqKsyDkU2DAh2JR-0sDazvcqbY9qInM'
  });
   
  // Configure API parameters
  const params = {
    wifiAccessPoints: [
      {
        macAddress: '01:23:45:67:89:AB',
        signalStrength: -65,
        signalToNoiseRatio: 40
      }
    ]
  };
   
  // Get data
  geolocation (params, (err, data) => {
    if (err) {
      console.log (err);
      return;
    }
   
    console.log (data);
  });