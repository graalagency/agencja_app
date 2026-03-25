import * as z from 'zod';

export const AgreementScalarFieldEnumSchema = z.enum(['id', 'sourceId', 'publisherId', 'clientId', 'titleId', 'agrDate', 'validYY', 'pubTermMM', 'maxCopies', 'minCopies', 'copiesToOwner', 'copiesToGraal', 'currencyCode', 'commission', 'commissionMaterials', 'estimatedCopyPrice', 'graalShare', 'graalRepresent', 'languageCode', 'countryId', 'localTitle', 'localIsbn', 'localPubDate', 'clientReference', 'agrDoc', 'status', 'remarks', 'agentId', 'dateMod', 'userMod', 'createdAt', 'updatedAt'])

export type AgreementScalarFieldEnum = z.infer<typeof AgreementScalarFieldEnumSchema>;