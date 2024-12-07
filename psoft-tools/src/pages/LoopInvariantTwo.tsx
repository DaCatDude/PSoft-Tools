import * as antlr4 from 'antlr4';
import Navbar from "../components/Navbar";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Java8Lexer } from './Java8Lexer.js';
import { Java8Parser } from './Java8Parser.js';

console.log('JavaLexer:', Java8Lexer);
console.log('JavaParser:', Java8Parser);

function extractVarsFromLoops(code: string) {
    const inputStream = new antlr4.InputStream(code);
    const lexer = new Java8Lexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new Java8Parser(tokenStream);
    const tree = parser.compilationUnit(); 

    let modifiedVariables: { name: string; value: string; loopIteration: number }[] = [];

    function extractLoopVariables(node: any, loopIteration: number) {
        
        console.log("Node:", node);

        //find nodes that are for or while loops statements
        if (node instanceof Java8Parser.ForStatementContext || node instanceof Java8Parser.WhileStatementContext) {
            console.log("Loop:", node);

            node.children?.forEach((child: any) => {
                //check
                console.log("Child node type:", child.constructor.name); 
                console.log("Child node text:", child.getText());  
                
                if (child instanceof Java8Parser.BasicForStatementContext || child instanceof Java8Parser.BasicForStatementContext) {
                    const statement = child.getText();
                    console.log("Statement inside loop:", statement);

                    //get changed variable
                    if (statement.includes("=")) {
                        const [lhs, rhs] = statement.split("=").map(s => s.trim()); // Split and clean up the sides
                        console.log(`Detected assignment: ${lhs} = ${rhs}`);
                        modifiedVariables.push({
                            name: lhs,
                            value: rhs,
                            loopIteration,
                        });
                    }
                }
            });
        }

        //go through all nodes
        if (node.children) {
            node.children.forEach((childNode: any) => extractLoopVariables(childNode, loopIteration));
        }
    }

    
    extractLoopVariables(tree, 1);

    return modifiedVariables;
}


export default function LoopInvariantTwo() {
    const [data, setData] = useState(""); 
    const [code, setCode] = useState("// input code");
    const [loading, setLoading] = useState(false);
    const [variables, setVariables] = useState<{ name: string; value: string; loopIteration: number }[]>([]); // Store the modified variables

    const handleClickClear = () => {
        setData("");
        setCode("// input code");
        setVariables([]); 
    };

    const handleLoop = () => {
        setLoading(true);
        console.log(code);

        //get variables
        const modifiedVars = extractVarsFromLoops(code);
        setVariables(modifiedVars); 
        console.log("Modified Variables:", modifiedVars);

        setLoading(false);
    };

    const handleEditorChange = (value: string | undefined) => {
        if (value) {
            setCode(value);
        }
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="screen" style={{ paddingTop: "50px", width: "100%", overflow: "hidden" }}>
                <div style={{ width: "50%", justifyContent: "left" }}>
                    <Editor 
                        height="92vh" 
                        width="50vw" 
                        onChange={handleEditorChange} 
                        defaultLanguage="java"
                        defaultValue={code} 
                    />
                </div>
                <div className="flex flex-col relative pl-8">
                    <div className="flex-grow" style={{ whiteSpace: "pre-line", textAlign: "left" }}>
                        {loading ? (
                            <ThreeDots color="gray" height={100} width={100} />
                        ) : (
                            <div>
                                <div>
                                    <h3>Modified Variables in Loops:</h3>
                                    <ul>
                                        {variables.map((variable, index) => (
                                            <li key={index}>
                                                Iteration {variable.loopIteration}: {variable.name} = {variable.value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>{data}</div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-row justify-evenly max-h-11 mb-4">
                        <button onClick={handleClickClear}>Clear</button>
                        <button onClick={handleLoop}>Check Variables</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
