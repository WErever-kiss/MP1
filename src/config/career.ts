// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: '天一成长教育中心',
      title: 'Math Teacher',
      logo: 'college',
      start: '2024',
      end: '2025'
    },
  ]