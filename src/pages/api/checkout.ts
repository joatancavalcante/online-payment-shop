// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '@/src/lib/stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function Checkout(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { checkoutItems } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!checkoutItems) {
    return res.status(400).json({ error: 'Items not found' })
  }

  const successUrl = `${process.env.LOCAL_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.LOCAL_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: checkoutItems,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
