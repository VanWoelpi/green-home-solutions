import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xrbqgbal");

  // Toast bei Erfolg zeigen
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Danke für deine Nachricht!",
        description: "Wir melden uns schnellstmöglich bei dir.",
      });
    }
  }, [state.succeeded, toast]);

  return (
      <section id="kontakt" className="section-default">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">
            Kontaktformular
          </h2>

          {!state.succeeded ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                />
                <ValidationError prefix="E-Mail" field="email" errors={state.errors} />

                <textarea
                    name="message"
                    placeholder="Deine Nachricht"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                />
                <ValidationError prefix="Nachricht" field="message" errors={state.errors} />

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-300"
                >
                  {state.submitting ? "Wird gesendet…" : "Absenden"}
                </button>
              </form>
          ) : (
              <div className="text-center text-green-400 font-medium text-lg">
                Deine Nachricht wurde erfolgreich versendet.
              </div>
          )}
        </div>
      </section>
  );
};

export default ContactForm;
