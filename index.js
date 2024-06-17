const clearButton = $(".clearRead"),
    notificationCount = $("var"),
    newNotificationTag = $(".redDot"),
    newNotificationElement = $(".removeBg");

clearButton.click(function () {
    newNotificationTag.removeClass("after:inline-block after:bg-redDot after:ml-2 after:w-2 after:h-2 after:rounded-full");
    notificationCount.text("0");
    newNotificationElement.removeClass("bg-newNotifyBgColor");
}); 
/**
* Event handler for the clear button click event.
* Makes the new notification appear as old.
*/