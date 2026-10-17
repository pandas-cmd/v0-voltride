import { describe, expect, it } from 'vitest';
import { enquirySchema } from '@/lib/enquiry-schema';

const enquiry = { name: 'Fleet Operator', email: 'operator@example.com', company: 'Test Operator', phone: '', fleet_size: 3, interest: 'Coach leasing', routes: '', message: '', consent: true, website: '' };
describe('Fleet enquiry protection', () => {
  it('requires permission to use enquiry details', () => {
    expect(enquirySchema.safeParse({ ...enquiry, consent: false }).success).toBe(false);
    expect(enquirySchema.safeParse(enquiry).success).toBe(true);
  });
  it('rejects automated honeypot submissions', () => {
    expect(enquirySchema.safeParse({ ...enquiry, website: 'spam.example.com' }).success).toBe(false);
  });
});