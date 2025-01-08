'use client'

import { useState } from 'react'

const script = `
 const products = [];
    const cleanUpText = (text) => text.trim().replace(/\s+/g, ' ').replace(/\n/g, '');
    const productsNodes = document.querySelector('.cart__products').querySelectorAll('.productCard__content');
    productsNodes.forEach((productNode) => {
      const product = {
        name: cleanUpText(productNode.querySelector('.product--details__summary').querySelector('p').textContent),
        type: cleanUpText(productNode.querySelector('.product--details__title').textContent),
        packaging: cleanUpText(productNode.querySelector('.product--details__packaging').textContent),
        price: cleanUpText(productNode.querySelector('.product--price').textContent),
        quantity: cleanUpText(productNode.querySelector('.addToCart-button__quantity').textContent),
        promo: cleanUpText(productNode.querySelector('.product--footer__promoContainer').textContent),
        image: productNode.querySelector('.product--details__image').src,
      };
      products.push(product);
    });
    console.log(products);
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
            className="w-full h-40 p-2 border rounded bg-black"
            value={jsonInput}
            onChange={handleInputChange}
            placeholder="JSON Data..."
          />
        </div>
        <button
           className="border border-purple-400 hover:bg-purlpe-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => copyScriptToClipboard()}
        >
          Copy script
        </button>
        <button
          className="bg-purple-400 hover:bg-purlpe-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleParseJson}
        >
          Parse JSON
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

