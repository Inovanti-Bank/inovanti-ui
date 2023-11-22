import { X } from 'phosphor-react'
import {
  RadixProvider,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProviderProps {
  children: React.ReactNode
}

export interface ToastProps {
  title: string
  description?: string
  open?: boolean
  withClose?: boolean
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <RadixProvider duration={4000} swipeDirection="right">
      {children}
      <ToastViewport />
    </RadixProvider>
  )
}

export function Toast({
  title,
  description,
  open = true,
  withClose = false,
}: ToastProps) {
  return (
    <ToastRoot open={open}>
      <ToastTitle>{title}</ToastTitle>
      {description && <ToastDescription>{description}</ToastDescription>}
      {withClose && (
        <ToastClose aria-label="Close">
          <span aria-hidden>
            <X />
          </span>
        </ToastClose>
      )}
    </ToastRoot>
  )
}
