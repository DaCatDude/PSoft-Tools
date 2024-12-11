import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

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

            File file = new File(dir, fileName);

            try (FileWriter writer = new FileWriter(file)) {
                writer.write(code);
            }

            return ResponseEntity.ok("Code saved to file: " + file.getAbsolutePath());
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to save code: " + e.getMessage());
        }
    }
}
