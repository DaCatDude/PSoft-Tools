import * as antlr4 from 'antlr4';
import { JavaLexer } from '../Java8Lexer.js';
import { JavaParser } from './JavaParser'; // Path to your generated JavaParser

// Function to parse the Java code input
function parseJavaCode(inputCode: string) {
  const inputStream = new antlr4.InputStream(inputCode); // Create an input stream from the user's input
  const lexer = new JavaLexer(inputStream); // Create a lexer for the input
  const tokenStream = new antlr4.CommonTokenStream(lexer); // Create a token stream from the lexer
  const parser = new JavaParser(tokenStream); // Create a parser for the token stream
  const tree = parser.compilationUnit(); // Parse the Java code using the starting rule (compilationUnit)
  return tree;
}