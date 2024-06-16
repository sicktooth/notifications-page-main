const clear = $(".clearRead"),
    after = $(".redDot"),
    number = $("var"),
    newNotify = $(".removeBg");

clear.on("click", function () {
    if (after) {
       const style = window.getComputedStyle(after, ':after');
       style.css('display', 'none');
    }
    number.text("0");
    newNotify.removeClass("bg-newNotifyBgColor");
});  /**
 * Event handler for the clear button click event.
 * Removes the 'redDot' class from the 'clearRead' element.
 */