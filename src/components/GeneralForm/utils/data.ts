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
    label: 'S (รอบอก 33 นิ้ว)',
    value: 'S',
  },
  {
    label: 'M (รอบอก 36 นิ้ว)',
    value: 'M',
  },
  {
    label: 'L (รอบอก 40 นิ้ว)',
    value: 'L',
  },
  {
    label: 'XL (รอบอก 44 นิ้ว)',
    value: 'XL',
  },
  {
    label: 'XXL (รอบอก 48 นิ้ว)',
    value: 'XXL',
  },
  {
    label: '3XL (รอบอก 52 นิ้ว)',
    value: '3XL',
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
