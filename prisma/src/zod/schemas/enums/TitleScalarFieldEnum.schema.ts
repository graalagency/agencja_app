import * as z from 'zod';

export const TitleScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'clientId', 'publisherId', 'title', 'isbn', 'languageCode', 'classCode', 'edition', 'pages', 'copyrightYear', 'copyrightOwner', 'keywords', 'volume', 'totalVolumes', 'isHit', 'isCollection', 'isCD', 'notes', 'dateOfReceipt', 'createdAt', 'updatedAt'])

export type TitleScalarFieldEnum = z.infer<typeof TitleScalarFieldEnumSchema>;