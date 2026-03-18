import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiNextdotjs,
  SiMysql,
  SiPython,
} from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'
import type { IconType } from 'react-icons'

type Category = 'frontend' | 'backend'

interface Skill {
  name: string
  category: Category
  icon: IconType
  color: string
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React',       category: 'frontend', icon: SiReact,      color: '#61DAFB' },
  { name: 'TypeScript',  category: 'frontend', icon: SiTypescript,  color: '#3178C6' },
  { name: 'Vue.js',      category: 'frontend', icon: SiVuedotjs,    color: '#4FC08D' },
  { name: 'Next.js',     category: 'frontend', icon: SiNextdotjs,   color: '#000000' },
  // Backend / Language
  { name: 'MySQL',       category: 'backend',  icon: SiMysql,       color: '#4479A1' },
  { name: 'Python',      category: 'backend',  icon: SiPython,      color: '#3776AB' },
  { name: 'Java',        category: 'backend',  icon: FaJava,        color: '#ED8B00' },
  { name: 'C',           category: 'backend',  icon: FaCode,        color: '#5C6BC0' },
]
