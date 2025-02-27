import { ArrowLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

export function GoBackButton() {
  const navigate = useNavigate()
  return (
    <button
      className="inline-flex cursor-pointer  items-end justify-center"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft />
    </button>
  )
}