const clear = $(".clearRead"),
    clearRead = $(".redDot"),
    number = $("var"),
    newNotify = $(".removeBg");

clear.on("click", function () {
    clearRead.removeClass("redDot");
    number.text("0");
    newNotify.removeClass("bg-newNotifyBgColor");
});  /**
 * Event handler for the clear button click event.
 * Removes the 'redDot' class from the 'clearRead' element.
 */