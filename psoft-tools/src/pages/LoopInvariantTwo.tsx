import antlr4 from 'antlr4';
import {Java8Lexer} from '../Java8Lexer.g4';
import {Java8Parser} from '../Java8Parser.g4';

class JavaMethodCounter {
    static countMethods(javaCode: string): number {
        const inputStream = new antlr4.InputStream(javaCode);
        const lexer = new Java8Lexer(inputStream);
        const tokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new Java8Parser(tokenStream);

        const tree = parser.compilationUnit();

        //tester
        //use visitor or listener to count the number of methods
        const methodVisitor = new Java8Parser.Java8Visitor();
        let methodCount = 0;

        methodVisitor.visitMethodDeclaration = (ctx) => {
            methodCount++;
            return methodCount;
        };

        //go through the parse tree and count methods
        methodVisitor.visit(tree);

        return methodCount;
    }
}

const javaCode = `
class MyClass {
    void methodOne() {}
    void methodTwo() {}
}
`;

const methodCount = JavaMethodCounter.countMethods(javaCode);
console.log(`Number of methods: ${methodCount}`);
