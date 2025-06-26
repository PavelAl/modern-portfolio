export type BrandIconType =
  | "accessibility"
  | "aws"
  | "css"
  | "figma"
  | "git"
  | "gitlab"
  | "html"
  | "javascript"
  | "jenkins"
  | "jest"
  | "jira"
  | "materialui"
  | "mobx"
  | "nodejs"
  | "npm"
  | "react"
  | "redux"
  | "responsiveDesign"
  | "rollup"
  | "sass"
  | "storybook"
  | "typescript"
  | "vite"
  | "vscode";

export interface BrandIconProps {
  icon: BrandIconType;
  className?: string;
}
