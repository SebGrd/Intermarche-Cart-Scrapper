'use client'

import { useState } from 'react'

const script = `
(function(d, script) {
  script = d.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.onload = function(){
  getProducts();
  };
  script.src = 'https://intermarche-cart-scrapper.vercel.app/scrapper.js';
  d.getElementsByTagName('head')[0].appendChild(script);
}(document));
`;

type Product = {
  name: string,
  type: string,
  packaging: string,
  price: string,
  quantity: string,
  promo: string,
  image: string,
}

export default function Home() {
  const [jsonInput, setJsonInput] = useState('')
  const [parsedArray, setParsedArray] = useState<Product[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value)
    setError(null)
  }

  const handleParseJson = () => {
    try {
      const parsed = JSON.parse(jsonInput)
      if (!Array.isArray(parsed)) {
        throw new Error('Input is not a valid JSON array')
      }
      setParsedArray(parsed)
      setError(null)
    } catch (err) {
      setParsedArray(null)
      setError('Invalid JSON array input:' + err)
    }
  }

  const copyScriptToClipboard = () => {
    navigator.clipboard.writeText(script)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-4">Partage Panier Intermarché</h1>
        <div className="mb-4">
          <textarea
            className="w-full h-32 p-2 border rounded bg-black"
            value={jsonInput}
            onChange={handleInputChange}
            placeholder="JSON Data..."
          />
        </div>
        <button
          className="border border-purple-400 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => copyScriptToClipboard()}
        >
          Copy script
        </button>
        <button
          className="bg-purple-400 hover:bg-purlpe-700 text-white font-bold py-2 px-4 rounded mr-16"
          onClick={handleParseJson}
        >
          Parse JSON
        </button>
        <input
          className='border border-purple-400 rounded p-2 bg-transparent mr-2'
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <a
          className="bg-purple-400 hover:bg-purlpe-700 text-white font-bold py-2.5 px-4 rounded mr-2"
          href={`mailto:${email}?subject=Liste de course du ${new Date()}&body=https://intermarche-cart-scrapper.vercel.app/ \n ${parsedArray && JSON.stringify(parsedArray)}`}>Envoyer
        </a>
        <button
          className="border border-purple-400 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => copyScriptToClipboard()}
        >
          Copy mail
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {parsedArray && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">List de course:</h2>
            {parsedArray?.map((product, index) => (
              // Make a nice card not too big in height with the image displayed on the left
              <article key={index} className='border rounded p-4 mb-2'>
                <div className="flex items-start justify-start gap-4">
                  <img
                    className="w-24 h-24 object-cover rounded"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex flex-col items-start flex-grow ml-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-gray-500">{product.type}</p>
                    <p className="text-gray-500">{product.packaging}</p>
                  </div>
                  <div className='flex flex-col justify-between items-end self-end'>
                    {product.promo &&
                      <p className="text-black font-medium bg-yellow-500 rounded p-1 mb-2">{product.promo}</p>
                    }
                    <p className="font-bold text-3xl">x{product.quantity}</p>
                    <p className="text-gray-500">{product.price}</p>

                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

