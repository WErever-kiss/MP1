
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'XiAn University Of Finacial and Economy',
      major: '大数据管理与应用',
      logo: 'college',
      start: '2024',
      end: 'present'
    },
    {
      school: 'The First Middle School In ChangZhi',
      major: '理科',
      logo: 'senior high school',
      start: '2021',
      end: '2024'
    },
  ]