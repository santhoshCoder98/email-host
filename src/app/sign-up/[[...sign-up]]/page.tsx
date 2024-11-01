import { SignUp } from '@clerk/nextjs'
import react from 'react'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignUp />
    </div>
  )
}