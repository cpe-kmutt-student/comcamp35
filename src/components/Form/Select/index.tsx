import { Select as RDSelect } from '@radix-ui/themes'

export interface ISelectItem {
  label: string
  value: string
}

type Props = {
  items: ISelectItem[]
  placeholder?: string
  onSelect?: (value: string) => void
}

const Select: React.FC<Props> = ({ items, placeholder, onSelect }: Props): JSX.Element => {
  return (
    <RDSelect.Root onValueChange={onSelect}>
      <RDSelect.Trigger placeholder={placeholder} />
      <RDSelect.Content>
        <RDSelect.Group>
          {items.map((item: ISelectItem, i: number) => (
            <RDSelect.Item key={i} value={item.value}>
              {item.label}
            </RDSelect.Item>
          ))}
        </RDSelect.Group>
      </RDSelect.Content>
    </RDSelect.Root>
  )
}

export default Select
