'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function EmailNotification() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 10000) // Show after 10 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!showNotification) return null

  return (
    <div className="fixed bottom-4 right-4 bg-blue-100 border-2 border-blue-400 p-4 rounded-lg shadow-lg z-50">
      <div className="flex items-center">
        <Image src="/mail-icon.gif" alt="You've Got Mail" width={32} height={32} className="mr-2" />
        <div>
          <h3 className="font-bold">You Have Got Mail!</h3>
          <p className="text-sm">Click here to check your inbox</p>
        </div>
      </div>
      <button 
        onClick={() => setShowNotification(false)}
        className="mt-2 text-xs text-blue-600 hover:underline"
      >
        Close
      </button>
    </div>
  )
}

