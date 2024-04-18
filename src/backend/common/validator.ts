// import Ajv, { Schema } from 'ajv';

// export const getValidator = (schema: Schema) => {
//     const ajv = new Ajv({ allErrors: true });
//     try {
//         const validate = ajv.compile(schema);
//         return (data: any) => {
//             const valid = validate(data);
//             return { valid, errors: validate.errors };
//         };
//     } catch (e) {
//         console.error(`schema compilation error: ${e.message} ${e.stack} ${JSON.stringify(schema, null, 4)}`);
//         throw e;
//     }
// };

// modified code my Otis Zeon
import Ajv, { Schema } from 'ajv';

export const getValidator = (schema: Schema) => {
    const ajv = new Ajv({ allErrors: true });
    try {
        const validate = ajv.compile(schema);
        return (data: any) => {
            const valid = validate(data);
            return { valid, errors: validate.errors };
        };
    } catch (e: unknown) {
        if (e instanceof Error) {
            // Now that we've confirmed e is an Error, it's safe to access message and stack
            console.error(`schema compilation error: ${e.message} ${e.stack} ${JSON.stringify(schema, null, 4)}`);
        } else {
            // If e is not an Error, log a generic error message or handle differently
            console.error(`An unknown error occurred during schema compilation: ${JSON.stringify(schema, null, 4)}`);
        }
        throw e;
    }
};


