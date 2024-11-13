import Navbar from "../components/Navbar";

export default function Examples() {
    const code1 = `method MultipleReturns(x: int, y: int) returns (more: int, less: int) 
    requires 0 < y
    ensures less < x < more
    {
    more := x + y;
    less := x - y;
    // comments: are not strictly necessary.
    }`;
    const code2 = `method Abs(x: int) returns (y: int)
    ensures 0 <= y
    {
    if x < 0 {
        return -x;
    } else {
        return x;
    }
    }`;
    const code3 =`method Testing()
    {
    var v := Abs(3);
    assert 0 <= v;
    }`

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
            
            <h2 style={{ marginTop: "30px" }}><b>Dafny Method Example #1:</b></h2>
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

            <p style={{ marginTop: "10px" }}>This portion of code is a method, which is basically a function in any other language, called MultipleReturns. It takes two inputs: x (an integer) and y (an integer). It has two return values: more (an integer) and less (an integer). It has a requires statement which requires y to be greater than 0 and an ensure statement that makes sure less is less than x and more is greater than x. Inside the method, more is assigned the value of x + y and less is assigned the value of x - y. Then, a comment is made using //.</p>
            <p style={{ marginTop: "10px" }}>I additionally learned that functions exist in Dafny but serve a different purpose.</p>
            <p style={{ marginTop: "10px" }}>Assignments use <b>:=</b> and Equality uses <b>==</b></p>
            <p style={{ marginTop: "10px" }}>Single line comments are made using <b>//</b> and Multi-line comments can be made using <b>/**/</b></p>
            <p style={{ marginTop: "10px" }}><b>requires</b> statements are preconditions which put restrictions on the input variables and <b>ensures</b> statements are postconditions which put restrictions on the return variables.</p>
            <p style={{ marginTop: "10px" }}>ensures statements can also be written like: <br></br><b>ensures less &lt; x<br></br>ensures x &lt; more</b><br></br> or <br></br><b>ensures less &lt; x && x &lt; more</b><br></br> or <br></br><b>ensures less &lt; x &lt; more</b></p>

            <h2 style={{ marginTop: "30px" }}><b>Dafny Method Example #2:</b></h2>
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

            <p style={{ marginTop: "10px" }}>This portion of code is another method example called Abs and takes in one input x which is an int and returns a value y which is also an int. There is also an ensure statement that makes sure that y is greater than or equal to 0 because that is what should be returned when taking an absolute value. Inside the method, there is an if statement that returns -x if the value of x is less than 0 or else it returns x. This method ultimately takes the absolute value of x and returns it.</p>
            <p style={{ marginTop: "10px" }}>This function displays the use of <b>return</b> statements and if statements in Dafny.</p>
            <p style={{ marginTop: "10px" }}>Dafny also has the other comparison operators: <b>&lt;, &gt;, &lt;=, &gt;=, and ==</b>.</p>

            <h2 style={{ marginTop: "30px" }}><b>Dafny Method Example #3:</b></h2>
            <pre style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                borderRadius: "5px",
                fontFamily: "monospace",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                border: "1px solid #ddd"
            }}>
                <code>{code3}</code>
            </pre>

            <p style={{ marginTop: "10px" }}>This code continues a Testing() method which uses the absolute value function and tests it using the assert statement. This <b>assert</b> statement makes sure that v, which is assigned the value Abs(3), is greater than or equal to 0. It should be greater than or equal to 0 because it is an absolute value. </p>
        </div>
    );
}
