import * as z from 'zod';
export const ContactAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    phoneNumber: z.number(),
    firstName: z.number(),
    middleName: z.number(),
    lastName: z.number(),
    informal: z.number(),
    fax: z.number(),
    email: z.number(),
    contactPosition: z.number(),
    accountant: z.number(),
    photos: z.number(),
    clientId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    Client: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    informal: z.number().nullable(),
    accountant: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    informal: z.number().nullable(),
    accountant: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    phoneNumber: z.string().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    informal: z.number().int().nullable(),
    fax: z.string().nullable(),
    email: z.string().nullable(),
    contactPosition: z.string().nullable(),
    accountant: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    phoneNumber: z.string().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    informal: z.number().int().nullable(),
    fax: z.string().nullable(),
    email: z.string().nullable(),
    contactPosition: z.string().nullable(),
    accountant: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});