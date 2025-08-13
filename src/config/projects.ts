// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "奖项 & 荣誉"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: '计算机二级证书',
    description: '',
    date: '2024',
    location: '陕西，西安',
  },
  {
    name: '普通话二级甲等',
    description: '',
    date: '2024',
    location: '陕西，西安',
  },
]

// Research & Projects
export const projectHeadLine = "研究项目"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: '心伴AI智能语音陪伴体',
    description: 'AI智能体（技术支持来自九天大模型）',
    link: { href: 'https://jiutian.10086.cn/largemodel/cmstore/#/cmstore/createPage?fullScreen=1&appId=6858bfee4c78b04e5a6f7498&chatMode=llm&isEditAgent=true', label: 'Match' },
    tags: ['AI', '心理', '智能体', '挑战杯', '九天']
  },
  {
    name: '学生信息管理系统与成绩查询系统',
    description: '',
    link: { href: 'https://kdocs.cn/l/cpfF3oFdJhsg', label: 'HomeWork System' },
    tags: ['信息管理', '网站搭建', '信息查询']
  },
  {
    name: '第十五届大学生三创赛',
    description: '2024sanchuang',
    link: { href: 'http://www.3chuang.net/', label: 'Match' },
    tags: ['三创', '心理']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "爱好 & 志愿经历"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: '陕西省高校秋季招聘会西安财经大学就业协会招聘会摄影部志愿者',
    description:
      '协助现场拍摄，录制相关素材。',
    date: '2024-10-12',
    location: '陕西，西安',
  },
]
