import { ISelectItem } from '../../Form/Select'

export enum PrefixEnum {
  MR = 'นาย',
  MRS = 'นางสาว',
  OTHER = 'อื่นๆ',
}

export enum ShirtSizeEnum {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = '2XL',
}

export enum InsuranceEnum {
  GOV = 'สิทธิสวัสดิการการรักษาพยาบาลของข้าราชการ',
  SOCIAL = 'สิทธิประกันสังคม',
  GOLDEN = 'สิทธิบัตรทอง',
  HEALTH = 'สิทธิประกันสุขภาพ',
  OTHER = 'อื่นๆ',
}

export interface IPrefix extends ISelectItem {
  value: PrefixEnum
}

export interface IShirtSize extends ISelectItem {
  value: ShirtSizeEnum
}

export interface IInsurance extends ISelectItem {
  value: InsuranceEnum
}
