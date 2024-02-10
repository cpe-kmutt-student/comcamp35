import { ISelectItem } from 'src/components/Form/Select'
import { IInsurance, InsuranceEnum } from './type'

export const prefixChoices: ISelectItem[] = [
  {
    label: 'นาย',
    value: 'นาย',
  },
  {
    label: 'นางสาว',
    value: 'นางสาว',
  },
]

export const shirtSizeChoices: ISelectItem[] = [
  {
    label: 'S',
    value: 'S',
  },
  {
    label: 'M',
    value: 'M',
  },
  {
    label: 'L',
    value: 'L',
  },
  {
    label: 'XL',
    value: 'XL',
  },
  {
    label: '2XL',
    value: '2XL',
  },
  {
    label: '3XL',
    value: '3XL',
  },
  {
    label: '4XL',
    value: '4XL',
  },
  {
    label: '5XL',
    value: '5XL',
  },
  {
    label: '6XL',
    value: '6XL',
  },
  {
    label: '7XL',
    value: '7XL',
  },
  {
    label: '8XL',
    value: '8XL',
  },
]

export const insuranceChoices: IInsurance[] = [
  {
    label: 'สิทธิสวัสดิการการรักษาพยาบาลของข้าราชการ',
    value: InsuranceEnum.GOV,
  },
  {
    label: 'สิทธิประกันสังคม',
    value: InsuranceEnum.SOCIAL,
  },
  {
    label: 'สิทธิบัตรทอง',
    value: InsuranceEnum.GOLDEN,
  },
  {
    label: 'สิทธิประกันสุขภาพ',
    value: InsuranceEnum.HEALTH,
  },
  {
    label: 'อื่นๆ',
    value: InsuranceEnum.OTHER,
  },
]
