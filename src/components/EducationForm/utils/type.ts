import { ISelectItem } from '../../Form/Select'

export enum DegreeEnum {
  G9 = 'ม.3',
  VC = 'ปวส',
}

export interface IDegree extends ISelectItem {
  value: DegreeEnum
}
