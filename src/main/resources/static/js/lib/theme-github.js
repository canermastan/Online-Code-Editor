define("ace/theme/github.css",["require","exports","module"], function(require, exports, module){module.exports = "/* CSS style content from github's default pygments highlighter template.\n   Cursor and selection styles from textmate.css. */\n.ace-github .ace_gutter {\n  background: #e8e8e8;\n  color: #AAA;\n}\n\n.ace-github  {\n  background: #fff;\n  color: #000;\n}\n\n.ace-github .ace_keyword {\n  font-weight: bold;\n}\n\n.ace-github .ace_string {\n  color: #D14;\n}\n\n.ace-github .ace_variable.ace_class {\n  color: teal;\n}\n\n.ace-github .ace_constant.ace_numeric {\n  color: #099;\n}\n\n.ace-github .ace_constant.ace_buildin {\n  color: #0086B3;\n}\n\n.ace-github .ace_support.ace_function {\n  color: #0086B3;\n}\n\n.ace-github .ace_comment {\n  color: #998;\n  font-style: italic;\n}\n\n.ace-github .ace_variable.ace_language  {\n  color: #0086B3;\n}\n\n.ace-github .ace_paren {\n  font-weight: bold;\n}\n\n.ace-github .ace_boolean {\n  font-weight: bold;\n}\n\n.ace-github .ace_string.ace_regexp {\n  color: #009926;\n  font-weight: normal;\n}\n\n.ace-github .ace_variable.ace_instance {\n  color: teal;\n}\n\n.ace-github .ace_constant.ace_language {\n  font-weight: bold;\n}\n\n.ace-github .ace_cursor {\n  color: black;\n}\n\n.ace-github.ace_focus .ace_marker-layer .ace_active-line {\n  background: rgb(255, 255, 204);\n}\n.ace-github .ace_marker-layer .ace_active-line {\n  background: rgb(245, 245, 245);\n}\n\n.ace-github .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-github.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n/* bold keywords cause cursor issues for some fonts */\n/* this disables bold style for editor and keeps for static highlighter */\n.ace-github.ace_nobold .ace_line > span {\n    font-weight: normal !important;\n}\n\n.ace-github .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-github .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-github .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-github .ace_gutter-active-line {\n    background-color : rgba(0, 0, 0, 0.07);\n}\n\n.ace-github .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-github .ace_invisible {\n  color: #BFBFBF\n}\n\n.ace-github .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-github .ace_indent-guide {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\n}";

});

define("ace/theme/github",["require","exports","module","ace/theme/github.css","ace/lib/dom"], function(require, exports, module){exports.isDark = false;
exports.cssClass = "ace-github";
exports.cssText = require("./github.css");
var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);

});                (function() {
                    window.require(["ace/theme/github"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            