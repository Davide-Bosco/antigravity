import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Inserisci il nome"),
  company: z.string().min(2, "Inserisci l azienda"),
  email: z.string().email("Email non valida"),
  phone: z.string().optional(),
  sector: z.string().min(1, "Seleziona un settore"),
  interest: z.string().min(1, "Seleziona un interesse"),
  message: z.string().min(10, "Il messaggio è troppo breve"),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Devi accettare la privacy policy" }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
