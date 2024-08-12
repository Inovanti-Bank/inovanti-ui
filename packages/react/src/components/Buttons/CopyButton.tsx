import { useRef } from 'react'
import { useToast } from '../Toast/use-toast'
import { Button, ButtonProps } from './Button'

export interface CopyButtonProps extends ButtonProps {
  textToCopy: string
  withoutStyles?: boolean
  shouldFormat?: boolean
}

export function CopyButton({
  textToCopy,
  children,
  withoutStyles = false,
  shouldFormat = true,
  ...props
}: CopyButtonProps) {
  const { toast } = useToast()

  let formattedText = textToCopy
  if (shouldFormat) {
    try {
      formattedText = JSON.stringify(JSON.parse(textToCopy), null, 2)
    } catch {
      console.error('failed to format json')
    }
  }
  const textToCopyRef = useRef<HTMLTextAreaElement | null>(null)
  const handleCopy = () => {
    if (textToCopyRef.current) {
      textToCopyRef.current.select()
      document.execCommand('copy')
      return toast({
        title: 'Copiado!',
        description: 'Texto copiado para área de transferência',
      })
    }
    return toast({
      title: 'Falha!',
      description: 'Falha ao copiar para área de transferência',
    })
  }

  return (
    <>
      <textarea
        ref={textToCopyRef}
        style={{ position: 'absolute', left: '-99999px' }}
        readOnly
        value={formattedText}
      />
      {withoutStyles ? (
        <button className="cursor-pointer" onClick={handleCopy} {...props}>
          {children}
        </button>
      ) : (
        <Button $width={'52'} onClick={handleCopy} {...props}>
          {children}
        </Button>
      )}
    </>
  )
}
