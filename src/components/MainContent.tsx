interface MainContentProps {
  className: string
  children: React.ReactNode
}

export default function MainContent({ className, children }: MainContentProps) {
  return <div className={`${className} p-0 m-0 md:p-4 md:m-4`}>{children}</div>
}
