'use client'

import { useState } from 'react'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function OrdersPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deliveryDate: '',
    productType: '',
    message: '',
    quantity: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Order submitted:', formData)
    
    setSubmitted(true)
    
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        deliveryDate: '',
        productType: '',
        message: '',
        quantity: '',
      })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-4">
              Comandă Produse
            </h1>
            <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
              Completează formularul de mai jos pentru a plasa comanda sau sună-ne direct la <a href="tel:0725857222" className="text-accent font-semibold">0725857222</a>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-bold text-green-800 mb-2">
                Comandă trimisă cu succes!
              </h2>
              <p className="text-green-600 mb-4">
                Te vom contacta în cel mai scurt timp pentru a confirma comanda.
              </p>
              <p className="text-gray-600 text-sm">
                Dacă ai întrebări urgente, sună-ne la <a href="tel:0725857222" className="text-accent font-semibold">0725857222</a>
              </p>
            </div>
          ) : (
            <RevealOnScroll>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      placeholder="Introduceți numele"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      placeholder="0725857222"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    placeholder="exemplu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                    Tip produs <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="productType"
                    required
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                    className="form-input"
                  >
                    <option value="">Selectează tip produs</option>
                    <option value="tort">Tort</option>
                    <option value="prajituri">Prăjituri</option>
                    <option value="brownies">Brownies</option>
                    <option value="biscuiti">Biscuiți</option>
                    <option value="personalizat">Comandă personalizată</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Data livrării dorită <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="deliveryDate"
                      required
                      value={formData.deliveryDate}
                      onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Cantitate (opțional)
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="form-input"
                      placeholder="ex: 1 tort"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Detalii suplimentare / Mesaj special
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                    placeholder="Ex: Tort cu tema Harry Potter, 20 persoane, decor personalizat..."
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Notă:</strong> După trimiterea formularului, te vom contacta în cel mai scurt timp pentru a confirma comanda și detalii suplimentare. 
                    Pentru comenzi urgente, te rugăm să ne suni direct la <a href="tel:0725857222" className="text-accent font-semibold">0725857222</a>
                  </p>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Trimite comanda
                </button>
              </form>
            </RevealOnScroll>
          )}

          {/* Alternative Contact */}
          <RevealOnScroll>
            <div className="mt-12 bg-primary/5 rounded-lg p-8 text-center">
              <h3 className="text-xl font-display font-semibold text-primary mb-2">
                Preferi să ne suni direct?
              </h3>
              <p className="text-gray-600 mb-4">
                Sună-ne la <a href="tel:0725857222" className="text-accent text-xl font-bold">0725857222</a>
              </p>
              <p className="text-sm text-gray-500">
                Oricând de luni până duminică, 08:00 - 20:00
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}

