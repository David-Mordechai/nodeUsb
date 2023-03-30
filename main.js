// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// var usb_1 = require("usb");
// usb_1.usb.on('connect', function (device) {
//     console.log('connect');
//     console.log(device);
// });
// usb_1.usb.on('disconnect', function (device) {
//     console.log('disconnect');
//     console.log(device);
// });

// usb_1.usb.on('attach', function (device) {
//     console.log('attach');
//     console.log(device);
// });
// usb_1.usb.on('detach', function (device) {
//     console.log('detach');
//     console.log(device);
// });

// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const nodeUsb = require('usb');

// nodeUsb.usb.on('attach', function (device) {
//     console.log('attach');
//     console.log(device);
// });
// nodeUsb.usb.on('detach', function (device) {
//     console.log('detach');
//     console.log(device);
// });


// const usbDetect = require('usb-detection');
// const drivelist = require('drivelist');

// let usbList = [];

// usbDetect.startMonitoring();

// // Detect insert
// usbDetect.on('add', () => {
//     const poll = setInterval(() => {
//         drivelist.list().then((drives) => {
//             drives.forEach((drive) => {
//                 if (drive.isUSB) {
//                     const mountPath = drive.mountpoints[0].path;
//                     if (!usbList.includes(mountPath)) {
//                         console.log(mountPath); //op
//                         usbList.push(mountPath);
//                         clearInterval(poll)
//                     }
//                 }
//             })
//         })
//     }, 2000)
// });


// // Detect remove
// usbDetect.on('remove', () => {
//     let newUsbList = []
//     let removalList = []
//     drivelist.list().then((drives) => {
//         drives.forEach((drive) => {
//             if (drive.isUSB) {
//                 newUsbList.push(drive.mountpoints[0].path);
//             }
//         })
//         removalList = usbList.filter(x => !newUsbList.includes(x));
//         usbList = usbList.filter(x => !removalList.includes(x))
//         console.log(removalList) // op
//     })
// });

//usbDetect.stopMonitoring()







// const usbEvents = require('detect-usb');
const usbEvents = require('./UsbDetecter/USBEventsController')

// To start listening
usbEvents.startListening();

// To get list of connected USBs
// (async () => {
//     console.log(await usbEvents.getUSBList());
// })();

usbEvents.on('insert', (detectedUsb) => {
    console.log(detectedUsb.data.key);
})

usbEvents.on('eject', (data) => {
    console.log(data);
})

// To stop listening
// usbEvents.stopListening();