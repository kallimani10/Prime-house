import { isSet } from '../../data/business'

/** Shows a real value, or a clearly marked editable placeholder. */
export default function PlaceholderText({ value, label, className = '' }) {
  if (isSet(value)) return <span className={className}>{value}</span>
  return (
    <span className={`placeholder-chip ${className}`} title="Edit in src/data/business.js">
      [Add {label}]
    </span>
  )
}
