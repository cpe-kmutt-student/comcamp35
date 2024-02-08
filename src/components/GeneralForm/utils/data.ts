import { IInsurance, IPrefix, IShirtSize, InsuranceEnum, PrefixEnum, ShirtSizeEnum } from './type'

export const prefixChoices: IPrefix[] = [
  {
    label: PrefixEnum.MR,
    value: PrefixEnum.MR,
  },
  {
    label: PrefixEnum.MRS,
    value: PrefixEnum.MRS,
  },
  {
    label: PrefixEnum.OTHER,
    value: PrefixEnum.OTHER,
  },
]

export const shirtSizeChoices: IShirtSize[] = [
  {
    label: 'S',
    value: ShirtSizeEnum.S,
  },
  {
    label: 'M',
    value: ShirtSizeEnum.M,
  },
  {
    label: 'L',
    value: ShirtSizeEnum.L,
  },
  {
    label: 'XL',
    value: ShirtSizeEnum.XL,
  },
  {
    label: '2XL',
    value: ShirtSizeEnum.XXL,
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
