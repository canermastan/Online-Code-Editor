let editor;
let selectedLanguage;
let editorLanguage;

window.onload = () => {
    ace.require("ace/ext/language_tools");
    editor = ace.edit("editor");
    editor.setFontSize(17); // make it dynamic
    let code = document.getElementById('code').innerHTML;
    editor.setValue(code, -1); // set value and move cursor to the start of the text
    editor.setTheme("ace/theme/eclipse"); // themes -> https://ace.c9.io/build/kitchen-sink.html
    editor.resize(true);
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false,
        autoScrollEditorIntoView: true,
        copyWithEmptySelection: true,
    });
}

$('#languages').dropdown().on("click", function () {
    editorLanguage = $('#languages').dropdown('get value');
    selectedLanguage = editorLanguage
    switch (selectedLanguage){
        case "go":
            editorLanguage = "golang";
            break;
        case "c" || "c++":
            editorLanguage = "c_cpp";
            break;
        case "c#":
            editorLanguage = "csharp";
            break;
    }
    editor.session.setMode("ace/mode/" + editorLanguage);
})

function executeCode(){
    $.ajax({
        type: "POST",
        url: "/compile",

        data: JSON.stringify({
            language: selectedLanguage,
            code: editor.getSession().getValue()
        }),
        contentType: "application/json",
        success: function (response) {
            $('#output').text(response);
        },
        error: function (xhr) {
            $('#output').text(xhr.responseText);
        }
    })
}