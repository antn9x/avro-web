interface PrimitiveType {
    name: string;
    type: 'null' | 'boolean' | 'int' | 'long' |
    'float' | 'double' | 'bytes' | 'string'
}

interface RecordsType {
    type: 'record';
    name: string;
    fields: {
        name: string;
        type: Schema;
        default?: any
    }[]
}

interface EnumsType {
    type: 'enum';
    name: string;
    symbols: string[]
}

interface ParsedSchema<T> {
    encode: (payload: T) => Buffer;
    decode: (payload: Buffer) => T;
}

type AvroSchema = PrimitiveType | RecordsType | EnumsType;

export function parse<T>(schema: AvroSchema): ParsedSchema<T>;

module 'buffer' {
    export class Buffer {
        concat(args: any[]): Buffer;
    };
}

export default {
    parse
};