import { IDegree, DegreeEnum, IMajor, MajorEnum } from './type'

export const degreeChoices: IDegree[] = [
  {
    label: 'ม.4',
    value: DegreeEnum.G10,
  },
  {
    label: 'ม.5',
    value: DegreeEnum.G11,
  },
  {
    label: 'ปวช ปี1',
    value: DegreeEnum.VC1,
  },
  {
    label: 'ปวช ปี2',
    value: DegreeEnum.VC2,
  },
]

export const majorChoices: IMajor[] = [
  {
    label: 'วิทยาศาสตร์-คณิตศาสตร์',
    value: MajorEnum.ok1,
  },
  {
    label: 'วิทยาศาสตร์-คณิตศาสตร์-คอมพิวเตอร์',
    value: MajorEnum.ok2,
  },
  {
    label: 'วิทยาศาสตร์-คอมพิวเตอร์',
    value: MajorEnum.ok3,
  },
  {
    label: 'ปวช. สาขา ศึกษาในสาขาคอมพิวเตอร์ธุรกิจ',
    value: MajorEnum.ahkay1,
  },
  {
    label: 'ปวช. สาขา สาขาช่างไฟฟ้ากําลัง(อิเล็กทรอนิกส์)',
    value: MajorEnum.ahkay2,
  },
  {
    label: 'ปวช. สาขา สาขาเมคคาทรอนิกส์และหุ่นยนต์',
    value: MajorEnum.ahkay3,
  },
  {
    label: 'สายอื่น ๆ ที่ เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยี',
    value: MajorEnum.ouou,
  },
]
