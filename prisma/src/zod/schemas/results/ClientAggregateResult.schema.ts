import * as z from 'zod';
export const ClientAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    phone: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    address: z.number(),
    bankAccount: z.number(),
    city: z.number(),
    country: z.number(),
    legalForm: z.number(),
    nip: z.number(),
    notes: z.number(),
    postalCode: z.number(),
    regon: z.number(),
    Author: z.number(),
    Contact: z.number(),
    Document: z.number(),
    Invoice: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    address: z.string().nullable(),
    bankAccount: z.string().nullable(),
    city: z.string().nullable(),
    country: z.string().nullable(),
    legalForm: z.string().nullable(),
    nip: z.string().nullable(),
    notes: z.string().nullable(),
    postalCode: z.string().nullable(),
    regon: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    address: z.string().nullable(),
    bankAccount: z.string().nullable(),
    city: z.string().nullable(),
    country: z.string().nullable(),
    legalForm: z.string().nullable(),
    nip: z.string().nullable(),
    notes: z.string().nullable(),
    postalCode: z.string().nullable(),
    regon: z.string().nullable()
  }).nullable().optional()});