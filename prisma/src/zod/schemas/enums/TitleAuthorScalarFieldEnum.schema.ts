import * as z from 'zod';

export const TitleAuthorScalarFieldEnumSchema = z.enum(['titleId', 'authorId', 'isMain', 'order'])

export type TitleAuthorScalarFieldEnum = z.infer<typeof TitleAuthorScalarFieldEnumSchema>;