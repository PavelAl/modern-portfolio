export type BrandIconType =
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
