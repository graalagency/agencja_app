import * as z from 'zod';
export const AuthorAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    sourceId: z.number(),
    firstName: z.number(),
    middleName: z.number(),
    lastName: z.number(),
    suffix: z.number(),
    penName: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    photos: z.number(),
    personalEmail: z.number(),
    workEmail: z.number(),
    clientId: z.number(),
    Client: z.number(),
    TitleAuthors: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    suffix: z.string().nullable(),
    penName: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    personalEmail: z.string().nullable(),
    workEmail: z.string().nullable(),
    clientId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    suffix: z.string().nullable(),
    penName: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    personalEmail: z.string().nullable(),
    workEmail: z.string().nullable(),
    clientId: z.number().int().nullable()
  }).nullable().optional()});