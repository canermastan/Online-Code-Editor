package com.canermastan.editor.utils;

import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@Component
public class EditorUtil {
    public String compile(String command){
        String output = null;
        StringBuilder stringBuilder = new StringBuilder();
        try {
            Process process = Runtime.getRuntime().exec(command);

            BufferedReader stdInput = new BufferedReader(new
                    InputStreamReader(process.getInputStream()));

            BufferedReader stdError = new BufferedReader(new
                    InputStreamReader(process.getErrorStream()));

            System.out.println("Here is the standard output of the command:\n");
            while ((output = stdInput.readLine()) != null) {
                stringBuilder.append('\n').append(output);
            }

            // read any errors from the attempted command
            System.out.println("Here is the standard error of the command (if any):\n");
            while ((output = stdError.readLine()) != null) {
                stringBuilder.append('\n').append(output);
            }
            return stringBuilder.toString();

        } catch (Exception e) {
            System.out.println("exception happened - here's what I know: ");
            e.printStackTrace();
        }
        return "SERVER ERROR! Please Contact Me!";
    }
}
