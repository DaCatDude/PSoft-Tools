import Navbar from "../components/Navbar";

export default function Examples() {
    const code1 = `method MultipleReturns(x: int, y: int) returns (more: int, less: int) {
    more := x + y;
    less := x - y;
    // comments: are not strictly necessary.
}`;

    return (
        <div style={{ padding: "20px", marginTop: "60px", textAlign: "left" }}>
            <div>
                <Navbar />
            </div>
            <h1>Dafny Examples</h1>
            <p style={{ marginTop: "10px" }}>This page is a learning page dedicated to learning Dafny and TypeScript.</p>
            
            <h2 style={{ marginTop: "30px" }}>Dafny Method Example:</h2>
            <pre style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                borderRadius: "5px",
                fontFamily: "monospace",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                border: "1px solid #ddd"
            }}>
                <code>{code1}</code>
            </pre>

            <p style={{ marginTop: "10px" }}>This portion of code is a method, which is basically a function in any other language, called MultipleReturns. It takes two inputs: x (an integer) and y (an integer). It has two return values: more (an integer) and less (an integer). Inside the method, more is assigned the value of x + y and less is assigned the value of x - y. Then, a comment is made using //.</p>
            <p style={{ marginTop: "10px" }}>I additionally learned that functions exist in Dafny but serve a different purpose.</p>
        </div>
    );
}
