import React, { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [id === 'first-name' ? 'firstName' : id === 'last-name' ? 'lastName' : id]: value
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
    
        try {
          // Replace with your EmailJS service ID, template ID, and public key
          await emailjs.send(
            'service_i596kms', 
            'template_c1fq0ir',
            {
              from_name: formData.firstName + ' ' + formData.lastName,
              from_email: formData.email,
              message: formData.message,
            },
            'lfsf9oAUbJohqnjrD'
          );
          
          setSubmitStatus('success');
          // Clear form
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        } catch (error) {
          console.error('Failed to send email:', error);
          setSubmitStatus('error');
        } finally {
          setIsSubmitting(false);
        }
      };
  return (
    <section id="contact" className="py-16 md:py-24 bg-pastel-yellow/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-pastel-purple">
                Trabajemos juntos
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
              ¿Tienes un proyecto en mente? Me encantaría saberlo. Ponte en contacto y creemos algo asombroso.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-pastel-pink/20 p-2 text-pastel-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-gray-500">+52 8117878087</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-pastel-blue/20 p-2 text-pastel-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <span className="text-gray-500">barbara23.elizondo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-pastel-purple/20 p-2 text-pastel-purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="text-gray-500">Monterrey, N.L. Mx</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-pastel-purple"
                  >
                    Nombre
                  </label>
                  <Input 
                    id="first-name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-pastel-purple/30 focus-visible:ring-pastel-purple" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-pastel-purple"
                  >
                    Apellido
                  </label>
                  <Input 
                    id="last-name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-pastel-purple/30 focus-visible:ring-pastel-purple" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-pastel-purple"
                >
                  Correo
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="border-pastel-purple/30 focus-visible:ring-pastel-purple" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-pastel-purple"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] border-pastel-purple/30 focus-visible:ring-pastel-purple"
                  required
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-3 rounded-md bg-green-50 text-green-700">
                  Mensaje enviado exitosamente.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 rounded-md bg-red-50 text-red-700">
                  Falla en envio de mensaje. Intenta de nuevo, o contactame directamente.
                </div>
              )}
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pastel-pink to-pastel-purple hover:opacity-90 text-white"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

