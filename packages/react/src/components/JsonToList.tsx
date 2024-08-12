import { Text } from "./Text"

export type JsonToListProps = {
  json: { [string: string]: string | number | null }
}

export function JsonToList({ json }: JsonToListProps) {
  return (
    <div className="max-h-[70dvh] overflow-x-auto">
      {Object.entries(json).map(([key, value]) => (
        <li key={key}>
          <Text>
            <strong>{key}:</strong> {value !== null ? value.toString() : '-'}
          </Text>
        </li>
      ))}
    </div>
  )
}
