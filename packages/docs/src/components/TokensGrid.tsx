import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValues?: boolean
  hasTailwindValues?: boolean
}

export function TokensGrid({ tokens, hasRemValues = false, hasTailwindValues = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValues || hasTailwindValues && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValues && (
                <td>{(Number(value.replace('rem', '')) || 0) * 16}px</td>
              )}
              {hasTailwindValues && (
                Number(key || 0) ? <td>{Number(key || 0) * 4}px</td> : <td>-</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
