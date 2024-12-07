declare module '../Java8Lexer.js' {
    import * as antlr4 from 'antlr4';
    export class Java8Lexer extends antlr4.Lexer {
      constructor(input: antlr4.InputStream);
    }
  }

  declare module '../Java8Parser.js' {
    import * as antlr4 from 'antlr4';
    export class Java8Lexer extends antlr4.Lexer {
      constructor(input: antlr4.InputStream);
    }
  }