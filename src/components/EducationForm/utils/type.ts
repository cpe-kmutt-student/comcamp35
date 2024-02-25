import { ISelectItem } from '../../Form/Select'

export enum DegreeEnum {
  G10 = 'ม.4',
  G11 = 'ม.5',
  G12 = 'ม.6',
  VC1 = 'ปวช',
  VC2 = 'ปวส',
}

export interface IDegree extends ISelectItem {
  value: DegreeEnum
}
