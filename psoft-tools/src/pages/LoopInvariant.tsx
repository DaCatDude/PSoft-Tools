import { Editor } from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { parse, createVisitor } from 'java-ast';



//Create Routing File

export default function LoopInvariant() {
    const [data, setData] = useState("");
    const [code, setCode] = useState("int example(int x){\n\twhile(x>0){\n\n\t}\n}");
    const [loading, setLoading] = useState(false);

    const createTable = () => {
        setLoading(true);
        const ast = parse(code);

        const methodVisitor = createVisitor({
            visitMethodDeclaration: (node: { Identifier: { getText: () => any; }[]; }) => {
                console.log('Method name:', node.Identifier[0].getText());
            },
        });

        methodVisitor.visit(ast);
        setLoading(false); // Set loading to false after parsing
    };



    const handleClickClear = () => {
        setData("");
        //setCode("// input code");
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
                        defaultValue={`int example(int x){\n\twhile(x>0){\n\n\t}\n}`} />
                </div>
                <div className="flex flex-col justify-center relative pl-8">
                    <div className=" flex-grow" style={{ whiteSpace: "pre", textAlign: "left" }}>
                        {loading ? (
                            <ThreeDots color="gray" height={100} width={100} />
                        ) : (
                            data
                        )}
                    </div>
                    <div className="flex flex-row justify-evenly max-h-11 mb-4">
                        <button onClick={handleClickClear}>Clear</button>
                        <button onClick={createTable}>Create Table</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
