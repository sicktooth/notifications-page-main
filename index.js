const clear = $(".clearRead"),
    clearRead = $(".redDot"),
    number = $("var");


clear.on("click", function () {
    clearRead.removeClass("redDot");
    number.text("0");
});  /**
 * Event handler for the clear button click event.
 * Removes the 'edDot' class from the 'clearRead' element.
 */