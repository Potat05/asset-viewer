
import type * as zod from "zod";



export namespace KeyValues {

    type StringPos = {
        line: number;
        column: number;
        index: number;
    }

    type Token = StringPos & ({
        type: 'newline';
    } | {
        type: 'openbracket' | 'closebracket';
    } | {
        type: 'string';
        string: string;
    } | {
        type: 'comment',
        comment: string;
    });

    function tokenize(str: string): Token[] {

        let tokens: Token[] = [];

        let line: number = 0;
        let column: number = 0;
        let index: number = 0;

        const increment = (count: number): StringPos => {
            const start = { line, column, index };
            while(count > 0) {
                index++;
                column++;
                if(str[index] == '\n') {
                    line++;
                    column = 0;
                }
                count--;
            }
            return start;
        }

        const goto = (gotoIndex: number): StringPos => {
            if(gotoIndex < index) {
                throw new Error('Tokenizer goto index is less than current index.');
            }
            return increment(gotoIndex - index);
        }

        while(index < str.length) {

            if(/\//.test(str[index])) {
                // / Comment
                const start = index;
                const end = str.indexOf('\n', index + 1);
                const comment = str.slice(start, end);
                tokens.push({ type: 'comment', comment, ...goto(end + 1) });
            } else if(/"/.test(str[index])) {
                // "String"
                const start = index;
                const end = str.indexOf('"', start + 1);
                const string = str.slice(start + 1, end);
                tokens.push({ type: 'string', string, ...goto(end + 1) });
            } else if(/[a-zA-Z0-9]/.test(str[index])) {
                // String | Key String
                const last = tokens.at(-1);

                // If string is first in line, end is whitespace, otherwise it's newline.
                const endChar = (!last || last.type == 'newline') ? ' ' : '\n';

                const start = index;
                const end = str.indexOf(endChar, start + 1);
                const string = str.slice(start, end);
                tokens.push({ type: 'string', string, ...goto(end + 1) });
            } else if(/{/.test(str[index])) {
                // {
                tokens.push({ type: 'openbracket', ...increment(1) });
            } else if(/}/.test(str[index])) {
                // }
                tokens.push({ type: 'closebracket', ...increment(1) });
            } else if(/\n/.test(str[index])) {
                // \n
                tokens.push({ type: 'newline', ...increment(1) });
            } else {
                // Anything that doesn't match above.
                increment(1);
            }

        }

        return tokens;

    }

    function sanitizeTokens(tokens: Token[]): Token[] {

        // Remove comments
        tokens = tokens.filter(token => token.type != 'comment');

        // Bracket counts must match up.
        let brackets: number = 0;
        for(const token of tokens) {
            if(token.type == 'openbracket') brackets++;
            if(token.type == 'closebracket') brackets--;
        }
        for(; brackets > 0; brackets--) {
            tokens.push({ type: 'closebracket', line: -1, column: -1, index: -1 });
        }

        // Remove multiple newlines next to each other.
        for(let i = 0; i < tokens.length-1; i++) {
            if(tokens[i].type == 'newline' && tokens[i+1].type == 'newline') {
                tokens.splice(i, 1);
                i--;
            }
        }

        // Remove newlines next to opening brackets ("Key"\n{})
        for(let i = 1; i < tokens.length; i++) {
            if(tokens[i].type == 'openbracket' && tokens[i-1].type == 'newline') {
                tokens.splice(i-1, 1);
                i--;
            }
        }

        // Remove first and last newline
        if(tokens[0].type == 'newline') tokens.splice(0, 1);
        if(tokens[tokens.length - 1].type == 'newline') tokens.splice(tokens.length - 1, 1);



        return tokens;

    }



    function parseTokenized(tokens: Token[], lowerKeys: boolean): unknown {

        // TODO: Make error messages better.

        type StackType = {[key: string]: string | StackType};

        let stack: StackType[] = [ {} ];

        for(let i = 0; i < tokens.length;) {

            const obj = stack.pop();

            if(obj === undefined) {
                throw new Error('parseTokenized empty stack.');
            }



            const key = tokens[i++];
            if(key.type == 'closebracket') {
                continue;
            } else if(key.type != 'string') {
                throw new Error(`Expected key. at Ln ${key.line}, Col ${key.column}`);
            }
            const keyString = (lowerKeys ? key.string.toLowerCase() : key.string);



            const value = tokens[i++];

            if(value.type == 'openbracket') {
                const newObj = {};
                obj[keyString] = newObj;
                stack.push(obj, newObj);
                continue;
            } else if(value.type == 'string') {
                obj[keyString] = value.string;
                stack.push(obj);
            } else {
                throw new Error(`Invalid value. at Ln ${value.line}, Col ${value.column}`);
            }

        }

        return stack.pop();
        
    }



    type ParseOptions<Validator extends zod.ZodType | void> = {
        lowerKeys?: boolean;
        validator?: Validator;
    }

    export function parse(str: string, options: ParseOptions<void>): unknown;
    export function parse<Validator extends zod.ZodType>(str: string, options: ParseOptions<Validator>): zod.TypeOf<Validator>;
    export function parse(str: string, options: ParseOptions<zod.ZodType | void> = {}) {

        const lowerKeys = options.lowerKeys ?? true;
        const validator = options.validator;

        // Clean up the string.
        str = str.replace(/\r\n/g, '\n');
        str = str.replace(/\r/g, '\n');

        // Tokenize
        let tokens = tokenize(str);
        tokens = sanitizeTokens(tokens);
        tokens = tokens.filter(token => token.type != 'newline');

        // Parse
        const obj = parseTokenized(tokens, lowerKeys);

        // Validate
        if(validator) return validator.parse(obj);
        return obj;
    }

    export function stringify(data: unknown): string {
        throw new Error('Unimplemented.');
    }

}


