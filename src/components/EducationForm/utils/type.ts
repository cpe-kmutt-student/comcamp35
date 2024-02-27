import { ISelectItem } from '../../Form/Select'

export enum DegreeEnum {
  G10 = 'ม.4',
  G11 = 'ม.5',
  G12 = 'ม.6',
  VC = 'ปวช.',
}

export enum MajorEnum {
  ok1 = 'วิทยาศาสตร์-คณิตศาสตร์',
  ok2 = 'วิทยาศาสตร์-คณิตศาสตร์-คอมพิวเตอร์',
  ok3 = 'วิทยาศาสตร์-คอมพิวเตอร์',
  ahkay1 = 'ปวช. สาขา ศึกษาในสาขาคอมพิวเตอร์ธุรกิจ',
  ahkay2 = 'ปวช. สาขา สาขาช่างไฟฟ้ากําลัง(อิเล็กทรอนิกส์)',
  ahkay3 = 'ปวช. สาขา สาขาเมคคาทรอนิกส์และหุ่นยนต์',
  ouou = 'สายอื่น ๆ ที่ เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยี',
}

export interface IDegree extends ISelectItem {
  value: DegreeEnum
}

export interface IMajor extends ISelectItem {
  value: MajorEnum
}
