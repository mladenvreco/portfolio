"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useForm, ValidationError } from "@formspree/react";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xgvkpozq");

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
                <h2 className="font-serif text-2xl md:text-3xl">
                  Stojim Vam na raspolaganju.
                </h2>
                <p className="text-sm md:text-base mt-2">
                  Tražite pouzdanog partnera za sledeći projekat? Tu sam da
                  saslušam i pomognem – slobodno se javite!
                </p>
              </div>
            )}
            <div className="w-full md:w-1/2">
              {state.succeeded ? (
                <div className="text-lg font-semibold text-gray-900">
                  Hvala što ste me kontaktirali, odgovoriću Vam u roku od 24h.
                  Svako dobro!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-left"
                    >
                      Ime i prezime
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="Vaše ime i prezime"
                      required
                    />
                    <ValidationError
                      prefix="Ime"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-left"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="Vaša email adresa"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-left"
                    >
                      Poruka
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="Vaša poruka"
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Poruka"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 mt-4 transition duration-300 group"
                  >
                    <span>Pošaljite poruku</span>
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
