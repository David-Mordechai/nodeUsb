const usbEvents = require('./UsbDetecter/USBEventsController')

// To start listening
usbEvents.startListening().then(() => {
    console.log('Usb events listener is running...');
});

// To get list of connected USBs
// (async () => {
//     console.log(await usbEvents.getUSBList());
// })();

usbEvents.on('insert', (detectedUsb) => {
    console.log(detectedUsb.data.key);
    console.log(detectedUsb.data.name);
})

usbEvents.on('eject', (data) => {
    console.log(data);
})

// detect ctrl+C
process.on("SIGINT", function () {
    
    // To stop listening
    usbEvents.stopListening();
    console.log('Usb events listener stoped...');
    
    //graceful shutdown
    process.exit();
});
