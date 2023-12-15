// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Controls.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Functions.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />
/// <reference path="./../../Packages/jQuery.3.7.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code, you need to use the return value of the method register()
    let destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', (e, data) => {
        // This event will be raised only once, so we can free resources.
        // It's best practice to use the destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();

        // Use jQuery to find the TcHmiAdsState within the Desktop
        var adsStateElement = $('#Desktop #TcHmiAdsState');

        // Check if the 'TcHmiAdsState' element exists within 'desktop'
        if (adsStateElement.length > 0) {
            console.log('Element with ID "TcHmiAdsState" found within the "desktop" element.');

            // Log all attributes
            var attributes = adsStateElement[0].attributes;
            for (var i = 0; i < attributes.length; i++) {
                console.log(attributes[i].name + ':', attributes[i].value);
            }
        } else {
            console.log('Element with ID "TcHmiAdsState" not found within the "desktop" element.');
        }
    });
})(TcHmi);
