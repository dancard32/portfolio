interface MainContentProps {
  className: string
  children: React.ReactNode
}

export default function MainContent({ className, children }: MainContentProps) {
  return (
    <div className={`${className} p-0 m-0 md:p-4 md:m-4`}>
      <div className='flex flex-col gap-y-2! md:p-4! p-2!'>{children}</div>
    </div>
  )
}
