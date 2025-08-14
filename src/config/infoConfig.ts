export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Zihan Yang'
export const headline = 'Colleage Student at XUFE'
export const introduction =
  "Nice to meet you!这是我的个人网站！我目前就读于西安财经大学，大数据管理与应用专业，本科二年级。"
export const email = '1018258027@qq.com'
export const githubUsername = 'WErever-kiss'

// about page
export const aboutMeHeadline = '关于我和这个网站'
export const aboutParagraphs = [
  "Nice to meet you！这是我的个人网站！我目前就读于西安财经大学，大数据管理与应用专业，本科二年级。",
  '我学习了计算机二级的WPS的全部内容，并且获取了证书。',
  "最近我正在学习Python。",
  "我将会在这个网站中分享我的学习经验，大多数学习经验会是计算机方面的，或是英语方面的 XD",
  '非常感谢Dreke Hu的网站搭建知识分享，也非常感谢Corey Chiu的优秀网站模板!',
]

// blog
export const blogHeadLine = "我在想......"
export const blogIntro =
  "我会写一些AI知识，学习经验，以及我的生活。"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: '抖音',
    icon: 'tiktok',
    href: 'https://v.douyin.com/YYss09Xex88/9@5.com',
  },
  {
    name: 'BiliBili',
    icon: 'bilibili',
    href: 'https://b23.tv/N6vV43r',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
