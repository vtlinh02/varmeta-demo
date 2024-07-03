type Props = {
  title?: string
  children?: React.ReactNode
}

export const Card = ({ children, title }: Props) => {
  return (
    <div className='flex flex-col gap-2 justify-start items-start'>
      <h3 className='px-4 font-bold text-lg lg:text-2xl text-ellipsis'>{title}</h3>
      <div className='rounded-3xl shadow-lg bg-white p-6 flex flex-wrap gap-6'>
        {children}
      </div>
    </div>
  )
}