import Navbar from "../components/Navbar";

export default function Examples() {
    const code1 = `method MultipleReturns(x: int, y: int) returns (more: int, less: int) {
    more := x + y;
    less := x - y;
    // comments: are not strictly necessary.
    }`;
    const code2 = `method Abs(x: int) returns (y: int)
    {
    if x < 0 {
        return -x;
    } else {
        return x;
    }
    }`;

    return (
        <div style={{ padding: "20px", marginTop: "60px", textAlign: "left" }}>
            <div>
                <Navbar />
            </div>
            <h1>Dafny Examples</h1>
            <p style={{ marginTop: "10px" }}>This page is a learning page dedicated to learning Dafny and TypeScript.</p>
            <p style={{ marginTop: "10px" }}>I used this <a href="https://dafny.org/dafny/OnlineTutorial/guide" target="_blank" rel="noopener noreferrer">
                link
            </a> to learn Dafny and by making this page, I learned some TypeScript.</p>
            
            <h2 style={{ marginTop: "30px" }}>Dafny Method Example #1:</h2>
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
            <p style={{ marginTop: "10px" }}>Assignments use := and Equality uses ==</p>
            <p style={{ marginTop: "10px" }}>Single line comments are made using // and Multi-line comments can be made using /**/</p>

            <h2 style={{ marginTop: "30px" }}>Dafny Method Example #2:</h2>
            <pre style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                borderRadius: "5px",
                fontFamily: "monospace",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                border: "1px solid #ddd"
            }}>
                <code>{code2}</code>
            </pre>

            <p style={{ marginTop: "10px" }}>This portion of code is another method example called Abs and takes in one input x which is an int and returns a value y which is also an int. Inside the method, there is an if statement that returns -x if the value of x is less than 0 or else it returns x. This method ultimately takes the absolute value of x and returns it.</p>
            <p style={{ marginTop: "10px" }}>This function displays the use of return statements and if statements in Dafny.</p>
            <p style={{ marginTop: "10px" }}>Dafny also has the other comparison operators: &lt;, &gt;, &lt;=, &gt;=, and ==.</p>
        </div>
    );
}
