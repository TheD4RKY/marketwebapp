import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const { status } = router.query;
    const query = router.query;
    const finalnicena:any = query.cena;
    console.log({finalnicena});
    const [loading, setLoading] = useState(false);

    const [item, setItem] = useState({
        name: 'Product',
        description: 'Popis',
        image:
            'https://i.pinimg.com/564x/fa/c4/a2/fac4a2062dd7d3ed780dc872eef297fc.jpg',
        quantity: 0,
        price: finalnicena,
    });

    const changeQuantity = (value) => {
        setItem({ ...item, quantity: Math.max(0, value) });
    };

    const onInputChange = (e) => {
        changeQuantity(parseInt(e.target.value));
    };

    const onQuantityPlus = () => {
        changeQuantity(item.quantity + 1);
    };

    const onQuantityMinus = () => {
        changeQuantity(item.quantity - 1);
    };

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);
    const createCheckOutSession = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-stripe-session', {
            item: item,
        });
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });
        if (result.error) {
            alert(result.error.message);
        }
        setLoading(false);
    };
    return (
        <div className={styles.container}>
            <main>
                {status && status === 'success' && (
                    <div className='bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700'>
                        Payment Successful
                    </div>
                )}
                {status && status === 'cancel' && (
                    <div className='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
                        Payment Unsuccessful
                    </div>
                )}
                <div className='shadow-lg border rounded p-2 '>
                    <Image src={item.image} width={300} height={150} alt={item.name} />
                    <h2 className='text-2xl'>$ {item.price}</h2>
                    <h3 className='text-xl'>{item.name}</h3>
                    <p className='text-gray-500'>{item.description}</p>
                    <p className='text-sm text-gray-600 mt-1'>Quantity:</p>
                    <div className='border rounded'>
                        <button
                            onClick={onQuantityMinus}
                            className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600'
                        >
                            -
                        </button>
                        <input
                            type='number'
                            className='p-2'
                            onChange={onInputChange}
                            value={item.quantity}
                        />
                        <button
                            onClick={onQuantityPlus}
                            className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600'
                        >
                            +
                        </button>
                    </div>
                    <p>Total: {item.quantity * item.price} czk</p>
                    <button
                        disabled={item.quantity === 0 || loading}
                        onClick={createCheckOutSession}
                        className='bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100'
                    >
                        {loading ? 'Processing...' : 'Buy'}
                    </button>
                </div>
               
                <div className='bg-yellow-100 text-yellow-700 p-2 mt-2 rounded border mb-2 border-yellow-700'>
                    TESTOVACI KARTA
                    <p>4242 4242 4242 4242</p>
                </div>
                
            </main>
        </div>
    );
}