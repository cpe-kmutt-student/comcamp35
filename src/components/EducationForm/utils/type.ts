import { ISelectItem } from '../../Form/Select'

export enum DegreeEnum {
  G9 = 'ม.3',
  VC = 'ปวช',
}

export interface IDegree extends ISelectItem {
  value: DegreeEnum
}
