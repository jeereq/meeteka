import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFetchDataEmail } from '../../hooks/useFetchDataEmail';
import { emailTo } from '../../config';
import { useState } from 'react';

export function Contact() {
  const { t } = useLanguage()
  const [state, setState]: any = useState({ name: "", email: "", message: "" })
  const { fetch, loading } = useFetchDataEmail({ uri: "contact" })
  const onChange = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setState((prev: any) => ({ ...prev, [name]: value }))
  }
  return (
    <section className="section-padding max-w-10xl bg-black text-white" id="contact">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            {t("contact.title").split(" ").map(function (element, index: number) {
              if (index == 0) {
                return element
              } else {
                return <span className="heading-highlight text-black">{element}</span>
              }
            })}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t("contact.description")}
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-highlight rounded-full">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-gray-400">{t("contact.email")}</p>
                <a href={emailTo} className="hover:text-highlight">contact@meeteka.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="p-3 bg-highlight rounded-full">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-gray-400">{t("contact.phone")}</p>
                <a href="tel:+243825455938" className='hover:text-highlight'>+243 825 455 938</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-highlight rounded-full">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-gray-400">{t("contact.address")}</p>
                <p>kinshasa Avenue,<br />Bethel, 15  bis</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-8 rounded-3xl">
          <form className="space-y-6"
            onSubmit={function (e: any) {
              e.preventDefault()
              e.stopPropagation()

              // Handle form submission

              fetch(state, "POST").then(function (data) {
                if (data.error) {
                  alert(data.error)
                } else {
                  alert("Message sent")
                }
              }
              ).catch(function (error) {
                alert(error)
              })
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={state.name}
                  onChange={onChange}
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-black focus:border-highlight focus:ring-0 transition-colors"
                  placeholder={t("contact.name.placeholder")}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  value={state.email}
                  onChange={onChange}
                  name="email"
                  required
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-black focus:border-highlight focus:ring-0 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                value={state.message}
                onChange={onChange}
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-black focus:border-highlight focus:ring-0 transition-colors"
                placeholder={t("contact.message.placeholder")}
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              {loading ? "..." : t("contact.button.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}