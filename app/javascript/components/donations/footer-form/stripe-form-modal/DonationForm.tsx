import React, { useCallback, useState } from 'react'
import { StripeForm } from '../../StripeForm'
import { ExercismStripeElements } from '../../ExercismStripeElements'
import currency from 'currency.js'

export const DonationForm = ({
  amount,
  onCancel,
  onSuccess,
  onSettled,
  onProcessing,
}: {
  amount: currency
  onSuccess: () => void
  onProcessing: () => void
  onSettled: () => void
  onCancel: () => void
}): JSX.Element => {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleProcessing = useCallback(() => {
    onProcessing()
    setIsProcessing(true)
  }, [onProcessing])

  const handleSettled = useCallback(() => {
    onSettled()
    setIsProcessing(false)
  }, [onSettled])

  return (
    <ExercismStripeElements>
      <StripeForm
        paymentIntentType="payment"
        amount={amount}
        onSuccess={onSuccess}
        onProcessing={handleProcessing}
        onSettled={handleSettled}
      />
      <button
        type="button"
        className="btn-enhanced btn-s"
        onClick={onCancel}
        disabled={isProcessing}
      >
        Cancel
      </button>
    </ExercismStripeElements>
  )
}
