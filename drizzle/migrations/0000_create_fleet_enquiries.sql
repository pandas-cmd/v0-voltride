CREATE TABLE public.fleet_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 email text NOT NULL,
 company text NOT NULL,
 phone text NOT NULL DEFAULT '',
 fleet_size integer NOT NULL,
 interest text NOT NULL,
 routes text NOT NULL DEFAULT '',
 message text NOT NULL DEFAULT '',
 consent boolean NOT NULL,
 status text NOT NULL DEFAULT 'new'
);
GRANT ALL ON public.fleet_enquiries TO service_role;
ALTER TABLE public.fleet_enquiries ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.fleet_enquiries IS 'Private fleet enquiries. Only a validated public server submission can insert. No browser reads or writes.';