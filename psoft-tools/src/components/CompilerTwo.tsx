import React, { useState } from 'react';

const ExecuteJavaCode = () => {
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);  // Allow error to be string or null

  // Define the Java code to execute
  const execution_data = {
    clientId: '10e32ea9b8f6cc457e4bc07d621ae687',  // Replace with your JDoodle client ID
    clientSecret: '9feb2b2c787590c445066fc4bbb529c3c697ad0f4b81785e4e215765403560e0',  // Replace with your JDoodle client secret
    script: `
      public class Main {
        public static void main(String[] args) {
          System.out.println("Hello, World!");
        }
      }
    `,  // Java code to run
    language: 'java',  
    versionIndex: '0',  
  };

  const executeScript = async () => {
    try {
      const response = await fetch('https://api.jdoodle.com/v1/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(execution_data),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to execute the script: ${errorMessage}`);
      }
  
      const data = await response.json();
      setOutput(data.output || 'No output returned');
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setOutput('');
    }
  };
  

  return (
    <div>
      {/* <h1>Execute Java Code</h1> */}
      <button onClick={executeScript}>Run Script</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {output && <pre>{output}</pre>}
    </div>
  );
};

export default ExecuteJavaCode;
