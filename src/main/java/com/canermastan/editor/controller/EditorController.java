package com.canermastan.editor.controller;

import com.canermastan.editor.model.Editor;
import com.canermastan.editor.utils.EditorUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@Controller
public class EditorController {

    @Autowired
    public EditorController(EditorUtil editorUtil) {
        this.editorUtil = editorUtil;
    }
    private final EditorUtil editorUtil;

    @PostMapping("/compile")
    public @ResponseBody String compile(@RequestBody Editor editor) throws IOException {

        File file = switch (editor.getLanguage()) {
            case "javascript" -> new File("main.js");
            case "c++" -> new File("main.cpp");
            case "python" -> new File("main.py");
            case "go" -> new File("main.go");
            default -> new File("main" + "." + editor.getLanguage());
        };

        String output = null;

        if (file.createNewFile()){
            BufferedWriter writer = new BufferedWriter(new FileWriter(file));
            writer.write(editor.getCode()); // write Code on file
            writer.close();
            switch (editor.getLanguage()){
                case "go":
                    output = editorUtil.compile("go run main.go");
                    break;
                case "python":
                    output = editorUtil.compile("python main.py");
                    break;
                case "javascript":
                    output = editorUtil.compile("node main.js");
                    break;
                case "c++":
                    Process processCpp = Runtime.getRuntime().exec("g++ main.cpp -o main");
                    output = editorUtil.compile("./main");
                    break;
                case "c":
                    Process processC = Runtime.getRuntime().exec("gcc main.c -o main");
                    output = editorUtil.compile("./main");
                    break;
                case "php":
                    output = editorUtil.compile("php -f main.php");
                    break;
            }
        }

        if (file.delete()){
            return output;
        }

        return String.valueOf(0);
    }

}
