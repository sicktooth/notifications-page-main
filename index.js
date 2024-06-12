const clear = $(".clearRead"),
    clearRead = $(".redDot"),
    number = $("var"),
    newNotify = $(".removeBg");

$("article").css("cursor", "pointer")
clear.on("click", function () {
    clearRead.removeClass("redDot");
    number.text("0");
    newNotify.removeClass("bg-newNotifyBgColor");
});  /**
 * Event handler for the clear button click event.
 * Removes the 'edDot' class from the 'clearRead' element.
 */