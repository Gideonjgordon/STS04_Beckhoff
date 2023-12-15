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
        // Place your code here!
        // Add a single event listener to the document for click, keydown, and mousedown
var MaxWidth = $(document).width();
var MaxHeight = $(document).height();
var Tchmikeyboard = $('#TcHmiKeyboard');

// Max width and height logger
console.log('Page Max Width & Height', MaxWidth, ' ', MaxHeight);

$(document).on('click', function (event) {
    // Get all classes and id of the clicked element
    var elementClasses = event.target.classList;
    var elementId = event.target.id;

    // Get the top and left coordinates of the clicked element
    var offset = $(event.target).offset();
    var clickedElementTop = (offset.top / MaxHeight) * 100;
    var clickedElementLeft = (offset.left / MaxWidth) * 100;
    var clickedElementRight = ((MaxWidth - (offset.left + $(event.target).width())) / MaxWidth) * 100;
    var clickedElementDown = ((MaxHeight - (offset.top + $(event.target).height())) / MaxHeight) * 100;

    // Log the top and left coordinates to the console as percentages
    console.log('Clicked Element Coordinates (Percentage):');
    console.log('Top:', clickedElementTop.toFixed(2) + '%');
    console.log('Left:', clickedElementLeft.toFixed(2) + '%');
    console.log('Right:', clickedElementRight.toFixed(2) + '%');
    console.log('Down:', clickedElementDown.toFixed(2) + '%');

    // Log all classes to the console   
    console.log('Element ID identified - ' + elementId);
    console.log('Clicked Element Classes:');

    var hasTextboxClass = false;
    var hasTchmiKeyboardClass = false;

    for (var i = 0; i < elementClasses.length; i++) {
        console.log(elementClasses[i]);
        if (elementClasses[i] === 'TcHmi_Controls_Beckhoff_TcHmiNumericInput-template-input') {
            hasTextboxClass = true;
            hasTchmiKeyboardClass = false;
            break; // No need to continue checking if the class is found
        }
        else if (elementClasses[i] === 'TcHmi_Controls_Beckhoff_TcHmiKeyboard-template-padding-container' || elementClasses[i] === 'tchmi-keyboard-template-key') {
            hasTextboxClass = false;
            hasTchmiKeyboardClass = true;
            break; // No need to continue checking if the class is found
        } else { // add condition here to break out of the loop
            hasTextboxClass = false;
           // console.log('textbox input not present');
           // $('#TcHmiKeyboard').animate({
           //     top: -100 + '%',
           //     left: -100 + '%',
           // });
        }
    }

    // Check the result
    if (hasTextboxClass) {
        console.log('textbox input present');
        // Check whether we are far up or far down
        var animationDirection = clickedElementLeft > 50 ? 'left' : 'right';
        // Adjust the vertical position for 'up' and 'down'
        var leftAdjustment = animationDirection === 'left' ? 0.75 : 59.75;

        // Animate the keyboard either above or below the clicked element
        $('#TcHmiKeyboard').animate({
            top: 20.5 + '%',
            left: leftAdjustment + '%',
            opacity: 0.97
        },100);
    } else if (hasTchmiKeyboardClass) {
        ;
    } else {
        console.log('textbox input not present');
        $('#TcHmiKeyboard').animate({
            top: -100 + '%',
            left: -100 + '%',
        });
    }
});




    });
})(TcHmi);
