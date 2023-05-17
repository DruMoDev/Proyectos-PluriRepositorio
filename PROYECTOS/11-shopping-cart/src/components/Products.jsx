import React from 'react'
import "./products.css"
import { AddToCartIcon} from "./Icons"

export function Products({products}) {
  return (
    <main className='products'>
        <ul>
            {products.slice(0, 30).map(product => (
                <li key={product.id}>
                    <img src={product.thumbnail} alt={product.title}></img>
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon></AddToCartIcon>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </main>
  )
}

