'use client'

import { useState } from 'react'

const defaultValue = [
  {
    "name": "Itinéraire des Saveurs, une marque Intermarché",
    "type": "Saveur d'Allemagne - Jambon cru fumé de la Forêt Noire",
    "packaging": "la barquette de 8 tranches - 100 g",
    "price": "3,40 €",
    "quantity": "2",
    "promo": "Vous bénéficiez de 0,60 € d'économies",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/023BD24452BFADE8AB421581CAC74689.jpg"
  },
  {
    "name": "Terres de Breizh",
    "type": "Les Bonnes Allumettes bretonnes fumées",
    "packaging": "les barquettes de 2 x 100g - 200g",
    "price": "2,39 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/39A32AB00B98FCCC1D7A32C4706CB05C.jpg"
  },
  {
    "name": "Pâturages, une marque Intermarché",
    "type": "Fromage blanc nature",
    "packaging": "le pot de 1kg",
    "price": "1,90 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/FA072AD612CE2B15E6CBBBEA915A0714.jpg"
  },
  {
    "name": "Pâturages, une marque Intermarché",
    "type": "Faisselle",
    "packaging": "les 4 pots de 100 g",
    "price": "1,83 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/9A0966A71C82E5F0EAD08A88222DDC66.jpg"
  },
  {
    "name": "Pâturages, une marque Intermarché",
    "type": "Frutimax - Yaourt aux bons morceaux de fruits",
    "packaging": "les 8 pots de 125g - 1kg",
    "price": "2,29 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/6F5BA473E524CEFBC3B4580C57661CFA.jpg"
  },
  {
    "name": "Pâturages, une marque Intermarché",
    "type": "Emmental français râpé",
    "packaging": "le sachet de 500 g",
    "price": "4,12 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/DD0E0E3D5A44BDBE96A4C5E04B35A806.jpg"
  },
  {
    "name": "Pâturages, une marque Intermarché",
    "type": "Camembert",
    "packaging": "la boite de 250 g",
    "price": "1,49 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/D6EFB39450E4194A30D054E7A1723517.jpg"
  },
  {
    "name": "Pâturages, une marque Intermarché",
    "type": "Le Sainte-Maure fromage de chèvre",
    "packaging": "la bûche de 200g",
    "price": "2,09 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/F2F936EC6BBB3366825728B72F8610FB.jpg"
  },
  {
    "name": "Pâturages, une marque Intermarché",
    "type": "Lait demi-écrémé",
    "packaging": "les 6 briques de 1 l - 6L",
    "price": "5,94 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/956B827E0781C2E25BE72B3589D1AF76.jpg"
  },
  {
    "name": "Top Budget",
    "type": "Sucre en poudre",
    "packaging": "Le sachet de 1kg",
    "price": "1,41 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/BADD1627EA85B6D458B5181685627C2C.jpg"
  },
  {
    "name": "Alsa",
    "type": "Sucre vanillé à l'extrait naturel de vanille",
    "packaging": "les 12 sachets de 7,5 g",
    "price": "2,07 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/6B2BEB82D247904C87FDAC7C6B86BA00.jpg"
  },
  {
    "name": "Chabrior, une marque Intermarché",
    "type": "Biscottes complètes sans sucres ajoutés",
    "packaging": "les 2 sachets de 18 - 300 g",
    "price": "1,35 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/375A2AE3AEB8AB87700694DE873B3945.jpg"
  },
  {
    "name": "Ivoria, une marque Intermarché",
    "type": "Chocolat noir dessert",
    "packaging": "les 2 tablettes de 200 g - 400g",
    "price": "6,01 €",
    "quantity": "2",
    "promo": "Vous bénéficiez de 1,07 € d'économies",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/8FFB4F3F14AFC993586DB575B987AA37.jpg"
  },
  {
    "name": "Jacquet",
    "type": "Pain de mie complet grandes tranches - Sans Sucres Ajoutés",
    "packaging": "SACHET DE 550 GR",
    "price": "1,87 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/66FE20FF0B529A620C60B078CCB62993.jpg"
  },
  {
    "name": "St Eloi, une marque Intermarché",
    "type": "Riz Basmati",
    "packaging": "le paquet de 500 g",
    "price": "1,35 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/4DF3A0B93C1FFB0F2D90B21FF1D87E4E.jpg"
  },
  {
    "name": "Panzani",
    "type": "Purée de tomates nature - Tomacouli",
    "packaging": "Les 3 briques de 200g - 600g",
    "price": "1,62 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/C57A2BF960D52D1DA7091CF2422AEF66.jpg"
  },
  {
    "name": "Ben's Original",
    "type": "Riz complet en vrac 12 min",
    "packaging": "La boite de 500g",
    "price": "2,26 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/B09526A9334DF471A04F2923F47D750B.jpg"
  },
  {
    "name": "Paquito, une marque Intermarché",
    "type": "Jus multifruits à base de concentrés",
    "packaging": "la brique de 1 l",
    "price": "1,31 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/C4A9BB0189EFC2A20511B2C24808FC66.jpg"
  },
  {
    "name": "Look, une marque Intermarché",
    "type": "Limonade",
    "packaging": "les 4 bouteilles de 50 cl - 2L",
    "price": "2,74 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/91ED8FB9103E777053B2736142F0EBB8.jpg"
  },
  {
    "name": "Cristaline",
    "type": "Eaux de source",
    "packaging": "le pack de 6 bouteilles de 1,5L - 9L",
    "price": "1,12 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/15288EF90E5286EE2AA538539DA34E36.jpg"
  },
  {
    "name": "Coca-Cola",
    "type": "Zero - Soda au cola sans sucres",
    "packaging": "les 6 canettes de 330 ml",
    "price": "3,29 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/63744B773FB0FEC42C70D52C3A1713FB.jpg"
  },
  {
    "name": "fever tree",
    "type": "Boisson Ginger Beer",
    "packaging": "la bouteille de 50cl",
    "price": "2,67 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/A27B981184085384BEDE59A04A941258.jpg"
  },
  {
    "name": "Whiskas",
    "type": "Pâtée pour chat la carte mer et campagne en terrine",
    "packaging": "les 4 boîtes de 400g - 1,6kg",
    "price": "4,76 €",
    "quantity": "1",
    "promo": "",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/F2876DB915180C0BC9A0746455E59A8D.jpg"
  },
  {
    "name": "Labell, une marque Intermarché",
    "type": "Papier toilette Le Classique",
    "packaging": "le paquet de 12 rouleaux",
    "price": "2,85 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/50560042F2C0D61358752E25D73A7059.jpg"
  },
  {
    "name": "Labell, une marque Intermarché",
    "type": "Crème lavante mains amande douce",
    "packaging": "la recharge de 500 ml",
    "price": "1,21 €",
    "quantity": "1",
    "promo": "5% En avantage carte",
    "image": "file:///C:/Users/sebas/Downloads/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/Panier%20-%20Intermarch%C3%A9%20-%20Super%20Nemours_files/618340365AFA403C249428EB986C6374.jpg"
  }
];


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
  const [parsedArray, setParsedArray] = useState<Product[] | null>(defaultValue)
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

