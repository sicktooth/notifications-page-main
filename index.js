const clear = $(".clearRead"),
    number = $("var"),
    newNotify = $(".removeBg");

clear.on("click", function () {
    $('style').append(".redDot::after{ display:none}")
    number.text("0");
    newNotify.removeClass("bg-newNotifyBgColor");
});  /**
 * Event handler for the clear button click event.
 * Removes the 'redDot' class from the 'clearRead' element.
 */