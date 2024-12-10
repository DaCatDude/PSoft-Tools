import { Editor } from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { post } from "../lib/api";
import { ThreeDots } from "react-loader-spinner";
import dafnyParser from "../lib/DafnyParser";
import JDoodleCompiler from "../components/JDoodleCompiler";

//Create Routing File

export default function HoareTriple() {
    const [data, setData] = useState("");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCoverage = () => {
        setLoading(true);
    
        const contents = {
            filename: "test.java",
            code: code,
        };
    
        fetch("http://localhost:8080/upload-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contents),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((responseData) => {
                setLoading(false);
                setData(JSON.stringify(responseData, null, 2));
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error occurred:", error);
                setData("Error: Unable to process the request.");
            });
    };    

    const handleClickClear = () => {
        setData("");
        setCode("// Input Java code");
    };

    const handleEditorChange = (value: string | undefined) => {
        if (value) {
            //console.log(value);
            setCode(value);
            //console.log(code);
        }
    };
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div
                className="screen"
                style={{ paddingTop: "50px", width: "100%", overflow: "hidden" }}
            >
                <div style={{ width: "50%", justifyContent: "left" }}>

                    <Editor height="92vh" width="50vw" onChange={handleEditorChange} defaultLanguage="java"
                        defaultValue={`//Input Java code`} />
                </div>
                <div className="flex flex-col justify-center relative pl-8">
                    <JDoodleCompiler/>
                    <div className=" flex-grow" style={{ whiteSpace: "pre", textAlign: "left" }}>
                        {loading ? (
                            <ThreeDots color="gray" height={100} width={100} />
                        ) : (
                            data
                        )}
                    </div>
                    <div className="flex flex-row justify-evenly max-h-11 mb-4">
                        <button onClick={handleClickClear}>Clear</button>
                        <button onClick={handleCoverage}>Check Branch Coverage</button>
                    </div>
                </div>
            </div>
        </div>
    );
}