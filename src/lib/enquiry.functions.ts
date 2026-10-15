import { createServerFn } from '@tanstack/react-start';
import { enquirySchema } from './enquiry-schema';
export const submitEnquiry=createServerFn({method:'POST'}).inputValidator((input:unknown)=>enquirySchema.parse(input)).handler(async({data})=>{
 // This endpoint intentionally accepts public contact enquiries, never returns private records,
 // and inserts only the allowlisted fields after validation and consent checks.
 const {website,...enquiry}=data;
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const {data:row,error}=await supabaseAdmin.from('fleet_enquiries').insert(enquiry).select('id').single();
 if(error){console.error('Fleet enquiry save failed',error.code);throw new Error('Your enquiry could not be saved. Please try again.');}
 return {reference:row.id.slice(0,8).toUpperCase()};
});
