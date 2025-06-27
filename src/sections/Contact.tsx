"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useForm, ValidationError } from "@formspree/react";

const contactText = {
  sr: {
    heading: "Stojim Vam na raspolaganju.",
    desc: "Tražite pouzdanog partnera za sledeći projekat? Tu sam da saslušam i pomognem – slobodno se javite!",
    name: "Ime i prezime",
    namePlaceholder: "Vaše ime i prezime",
    email: "Email",
    emailPlaceholder: "Vaša email adresa",
    message: "Poruka",
    messagePlaceholder: "Vaša poruka",
    send: "Pošaljite poruku",
    thanks:
      "Hvala što ste me kontaktirali, odgovoriću Vam u roku od 24h. Svako dobro!",
    prefixName: "Ime",
    prefixEmail: "Email",
    prefixMessage: "Poruka",
  },
  en: {
    heading: "I'm at your service.",
    desc: "Looking for a reliable partner for your next project? I'm here to listen and help – feel free to reach out!",
    name: "Full Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "Your email address",
    message: "Message",
    messagePlaceholder: "Your message",
    send: "Send Message",
    thanks:
      "Thank you for contacting me, I will reply within 24h. All the best!",
    prefixName: "Name",
    prefixEmail: "Email",
    prefixMessage: "Message",
  },
};

export const ContactSection = ({ lang = "sr" }: { lang?: "sr" | "en" }) => {
  const [state, handleSubmit] = useForm("xgvkpozq");
  const t = contactText[lang];

  return (
    <div id="kontakt" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {!state.succeeded && (
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">{t.heading}</h2>
                <p className="text-sm md:text-base mt-2">{t.desc}</p>
              </div>
            )}
            <div className="w-full md:w-1/2">
              {state.succeeded ? (
                <div className="text-lg font-semibold text-gray-900">
                  {t.thanks}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-left"
                    >
                      {t.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder={t.namePlaceholder}
                      required
                    />
                    <ValidationError
                      prefix={t.prefixName}
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-left"
                    >
                      {t.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder={t.emailPlaceholder}
                      required
                    />
                    <ValidationError
                      prefix={t.prefixEmail}
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-left"
                    >
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder={t.messagePlaceholder}
                      required
                    ></textarea>
                    <ValidationError
                      prefix={t.prefixMessage}
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 mt-4 transition duration-300 group"
                  >
                    <span>{t.send}</span>
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
