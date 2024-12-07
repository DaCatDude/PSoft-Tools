
declare module './Java8Lexer.js' {
  import * as antlr4 from 'antlr4';
  
  // Declare the Java8Lexer class extending antlr4.Lexer
  export class Java8Lexer extends antlr4.Lexer {
    constructor(input: antlr4.InputStream);
  }
}

declare module './Java8Parser.js' {
  import * as antlr4 from 'antlr4';
  
  export class Java8Parser extends antlr4.Parser {
    constructor(input: antlr4.CommonTokenStream);
    
    compilationUnit(): any;  // Replace with the actual return type, if known
  }
}
