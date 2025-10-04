import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Contactez-moi</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            N'hésitez pas à me contacter. Je suis ouvert à de nouvelles opportunités et collaborations.
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Informations de contact */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-indigo-600 mr-4" size={24} />
              <div>
                <h4 className="font-bold">Email</h4>
                <a href="mailto:zikoghb12@gmail.com" className="text-gray-700 hover:text-indigo-600">zikoghb12@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <FaPhone className="text-indigo-600 mr-4" size={24} />
              <div>
                <h4 className="font-bold">Téléphone</h4>
                <p className="text-gray-700">0679412403</p>
              </div>
            </div>
            <div className="flex items-center">
                <h4 className="font-bold mr-4">Réseaux</h4>
                <a href="https://www.linkedin.com/in/zakaria-ghrib-164169273" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 mr-4"><FaLinkedin size={24}/></a>
                <a href="https://github.com/zakariaghrib" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600"><FaGithub size={24}/></a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="w-full md:w-2/3">
            {/* ---- LA MODIFICATION EST ICI ---- */}
            <form action="https://formspree.io/f/xnngzjkd" method="POST">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" type="text" name="name" placeholder="Votre Nom" required />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" type="email" name="email" placeholder="Votre Email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <textarea className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 h-48 resize-none" name="message" placeholder="Votre Message" required></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <button className="shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-8 rounded-lg" type="submit">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;