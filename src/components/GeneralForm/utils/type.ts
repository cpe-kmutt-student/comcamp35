import { ISelectItem } from '../../Form/Select'

export enum InsuranceEnum {
  GOV = 'สิทธิสวัสดิการการรักษาพยาบาลของข้าราชการ',
  SOCIAL = 'สิทธิประกันสังคม',
  GOLDEN = 'สิทธิบัตรทอง',
  HEALTH = 'สิทธิประกันสุขภาพ',
  OTHER = 'อื่นๆ',
}

export interface IInsurance extends ISelectItem {
  value: InsuranceEnum
}
