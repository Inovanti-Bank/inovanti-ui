// @ts-expect-error doesn't support ts
import ImageZoom from 'react-image-zooom'

import './styles.css'

type RenderBase64Type = {
  base64: string
}

export function RenderBase64({ base64 }: RenderBase64Type) {
  return base64.includes('application/pdf') ? (
    <object
      className="w-full h-[80dvh] min-w-[55vw] mt-5"
      data={base64}
      type="application/pdf"
    />
  ) : (
    <ImageZoom
      style={{ maxHeight: '80dvh' }}
      className="image-zoom w-auto h-auto max-w-fit max-h-[80dvh]"
      src={base64}
      alt="imagem enviada"
      zoom={270}
    />
  )
}
