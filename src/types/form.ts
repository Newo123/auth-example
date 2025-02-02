import { z } from 'zod';
import { loginSchema, registerSchema } from '../lib/validation';

export type RegisterFormValues = z.infer<typeof registerSchema>;

export type LoginFormValues = z.infer<typeof loginSchema>;
