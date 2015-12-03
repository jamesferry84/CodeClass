/**
 * Created by James on 03/12/2015.
 */
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.showPrintMargin(false);
editor.highlightActiveLine(false);
session = editor.getSession();
session.setMode("ace/mode/javascript");
session.useWrapMode(true);

session.on('change', function(e) {
   getInput();
    updateUserIdentifier();
    upload = document.getElementById('run');
    if (document.getElementById('console').value != "The input is valid") {
        upload.disabled(true);
    } else
    {
        upload.disabled(false);
    }
});


function clearCode() {
    editor.value("");
}
