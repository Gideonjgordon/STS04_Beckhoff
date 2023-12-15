// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Controls.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Functions.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />
/// <reference path="./../../Packages/jQuery.3.7.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    let destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', (e, data) => {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();
        // ----------------------
        // Start Placing your code here!
        //---------------------Obtaining the ADS state of the PLC ---------------------

        
        //var ADS_Status = TcHmi.Symbol.readEx2("%s%PLC1.GVL.stHMI.bStart%/s%");
        // Create a timer that checks the value every 1 second
        var timer = setInterval(function () {
            // Show loading animation when you start reading the variable
           // showLoadingAnimation();

            // Read ADS_Status from the PLC
            TcHmi.Symbol.readEx2("%s%PLC1.GVL.stHMI.bStart%/s%", function (data) {
                // Check if the value is available
                if (data.error === TcHmi.Errors.NONE) {
                    // Assign the value to the adsStatus variable
                    adsStatus = data.value;

                    // Output the value
                    console.log("adsStatus:", adsStatus);

                    // Hide the loading animation when you finish reading the variable
                   // hideLoadingAnimation();
                } else {
                    // Display an alert if there is an error reading the variable
                    alert("Error reading ADS_Status");
                    //hideLoadingAnimation();
                }
            });
        }, 1000); // 1000 milliseconds = 1 second


// Getting javascript equivalent of the values
        $(document).on('click', function (event) {
            var Element1 = event.target;

            while (Element1) {
                var elementId = Element1.id || 'No ID';

                // Skip logging if the ID is 'No ID'
                if (
                    elementId !== 'No ID' &&
                    !elementId.includes('Desktop') &&
                    !elementId.includes('TcHmiTabNavigation') &&
                    !elementId.includes('.') &&
                    !elementId.includes('_Content')
                ) {
                    console.log('Element ID:', elementId);
                    console.log('------------------- Needed hierarchy reached');

                    // Check if the element exists before accessing its attributes
                    var element = document.getElementById(elementId);

                    if (element) {
                        // Get the specific attributes 'id' and 'data-tchmi-value'
                        var idAttribute = element.getAttribute('id');
                        var tchmiValueAttribute = element.getAttribute('data-tchmi-value');
                        // Use this to search for the elements in everything you click
                        var elementAttributes = element.attributes;

                        if (idAttribute !== null) {
                            console.log('id:', idAttribute);
                        } else {
                            console.log('id not found.');
                        }

                        if (tchmiValueAttribute !== null) {
                            console.log('data-tchmi-value:', tchmiValueAttribute);
                        } else {
                            console.log('data-tchmi-value not found.');
                        }
                        
                        for (var i = 0; i < elementAttributes.length; i++) {
                            //disable this command when you dont need it
                            console.log(elementAttributes[i].name + ':', elementAttributes[i].value);
                           // ; 
                        }
                    } else {
                        console.log('Element not found.');
                    }
                }

                Element1 = Element1.parentNode;
            }

            console.log('  ');
        });





    });
})(TcHmi);
