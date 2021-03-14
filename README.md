# portfolio-js-art

2️⃣ My second project while studying on the course "Practical JavaScript (Advanced)". 
Project "Art"🚕
Volumetric project in the classic
style.

🎯 Tasks before the project:

Good day, developer. You have received an archive with the sources of our project. You have a bare-metal layout without interactivity. The archive contains everything you need to complete it: HTML layout, styles written in the LESS preprocessor and converted to regular CSS, all the necessary images and fonts (already included). Note that some elements will need to set the display (flex) property to hide / show them.

You have the right to change the project as you need to achieve the goal - add the necessary ids, classes, styles, animations, connect additional styles (for example animate.css) ...

But there are also several conditions:
JavaScript code must be native, without using libraries, frameworks or plugins (e.g. JQuery)
The console should be clear of any errors
All variable / class names should not contain Cyrillic or transliteration. No peremennaya
The final version should be built on any modular structure. We plan to expand in the future.
Operability in all modern browsers (Chrome, Firefox, Opera, IE11, Edge, Safari)
Animations are very welcome, but are also left to discretion (you can change the installed classes from animate.css as you like)
Using ES6

List of tasks for implementation:
1) The first screen should have a slider. Arrows are optional. Should turn over automatically at adequate intervals. Swipe animation: from top to bottom.
2) When you click on these buttons:

These buttons on each slide

The modal window should be called (class popup-design)
When you click on the cross or background - disappear.
3) When you click on these buttons:

A modal window should be called (class popup-consultation)
When you click on the cross or background - disappear.

4) There is a form inside all modals. It should be sent via ajax (without reloading the page) and capture all the entered data. It is also necessary to notify the user about the sending status (sending, sent, error). In the last two states, it is necessary to replace the content of the modal window with a notification.
A mask or phone number validation is required (required number of numbers, country code).
Filling in the name and comment - only in Russian.

5) When you click on a gift
a modal window (popup-gift) should appear and the gift itself completely disappears from the page. When you click on the cross or background, the window disappears.

6) When you click on this button:
additional styles (blocks) should be loaded (shown). The button itself disappears.

7) Implementation of the calculator:
Set your prices, preferably multiples of 1000 (or 500). The result is displayed in the lower, colored box.
Mandatory for selection - the first 2 select. Only when they are selected - the cost is shown. If 1 mandatory and “Additional services” are selected, the total amount is not displayed. Also, the logic should persist across selection changes.
If IWANTPOPART (from gift modal) is entered in the “Promo code” field, then the total amount is reduced by 30%. Also, the logic should persist across selection changes.

8) Implementation of filtering elements:
Classes of photos by which filtering is already set (in HTML). If the last 2 items are selected, we show the portfolio-no block
Also, there is a switching of the active tab and its style.

9) When you hover your mouse over these blocks:
They should be replaced with a picture:

Pictures are prepared and are in the img folder with postfixes "-1"
Pay attention to the layout - there are stubs for these pictures.
When the mouse is removed from the block, everything returns to its place.

10) Slider implementation:
Arrows are required, must turn over the slides. Should turn over automatically at adequate intervals. Swipe animation: horizontal.

11) Implement an accordion:
When you click on an element, a text with a hint smoothly appears under it. The active element has a different style.

12) Implementation of the form
Requirements for it are the same as in the modal window. You can notify the user about the status in any way. A mask or validation of the phone number is required (the required number of numbers, code).
Filling in the name and comment - only in Russian.

13) If the user has scrolled to the end of the page, but did not click any button, a modal window (popup-gift) should appear and the gift itself completely disappears from the page. When you click on the cross or background, the window disappears.

14) If the user is on the page for more than 60 seconds, a popup-consultation should appear. When you click on the cross or background, the window disappears. It is not interrupted by any actions, but if any modal window is already open, nothing happens.

15) On the tablet version (width 992 and less), when you click on a hamburger, a submenu should be displayed. If a person unfolds the tablet and the width becomes larger, it is hidden.

16) A modular structure of the project is required, the assembly (bundle) must be connected.

17) No duplication of code. You don't need to bind separate actions to each button. Use a function or loops. 
