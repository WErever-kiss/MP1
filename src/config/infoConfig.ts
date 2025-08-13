export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Zihan Yang'
export const headline = 'Colleage Student at XUFE'
export const introduction =
  "Hi!我是Zihan Yang!我目前就读于西安财经大学大数据管理与应用专业本科二年级。"
export const email = '1018258027@qq.com'
export const githubUsername = 'WErever-kiss'

// about page
export const aboutMeHeadline = '关于我和这个网站'
export const aboutParagraphs = [
  "Hi!我是Zihan Yang!我目前就读于西安财经大学大数据管理与应用专业本科二年级。",
  '我学习了计算机二级的WPS的全部内容，并且获取了证书。',
  "我将会在这个网站中分享我的学习经验，大多数学习经验会是计算机方面的。",
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
    href: '',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
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
