import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.*;
import java.nio.file.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CodeController {

    @PostMapping("/upload-code")
    public ResponseEntity<String> handleCodeUpload(@RequestBody JSONParsing obj) {
        String code = obj.getCode();
        String fileName = obj.getFilename();
        String directory = "uploadedFiles";

        try {
            File dir = new File(directory);
            if (!dir.exists()) {
                dir.mkdirs();
            }

            Path filePath = Paths.get(System.getProperty("java.io.tmpdir"), fileName);
            Files.write(filePath, code.getBytes());

            Process compileProcess = Runtime.getRuntime().exec("javac " + filePath);
            int compileStatus = compileProcess.waitFor();
            if (compileStatus != 0) {
                return ResponseEntity.status(500).body("Failed to compile");
            }

            String jacocoAgentPath = "/path/to/jacocoagent.jar"; // Update with your actual path
            String outputDir = System.getProperty("java.io.tmpdir") + "/coverage";
            Process runProcess = Runtime.getRuntime().exec(new String[]{
                "java",
                "-javaagent:" + jacocoAgentPath + "=destfile=" + outputDir + "/jacoco.exec",
                fileName
            });

            int runStatus = runProcess.waitFor();
            if (runStatus != 0) {
                return ResponseEntity.status(500).body("Execution Failed");
            }

            generateCoverageReport(outputDir);


            return ResponseEntity.ok("Coverage report generated at: " + outputDir + "/html-report");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to save code: " + e.getMessage());
        }
    }

    private void generateCoverageReport(String outputDir) throws IOException {
        String jacocoCliPath = "/path/to/jacococli.jar";
        String classFilesDir = System.getProperty("java.io.tmpdir");

        Process process = Runtime.getRuntime().exec(new String[]{
            "java", "-jar", jacocoCliPath,
            "report", outputDir + "/jacoco.exec",
            "--classfiles", classFilesDir,
            "--sourcefiles", "/path/to/source",
            "--html", outputDir + "/html-report"
        });

        int status = process.waitFor();
        if (status != 0) {
            throw new IOException("Failed to generate JaCoCo report.");
        }

        System.out.println("Coverage report generated at: " + outputDir + "/html-report");
    }
}
