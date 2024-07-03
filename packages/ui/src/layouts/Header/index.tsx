import { Button } from '../../button'
import { Dice5Icon, GitPullRequestIcon, SearchLgIcon, UserCircleIcon } from '@var-meta/icons'
import { HStack } from "@var-meta/ui"
import Link from 'next/link'
function Header() {
  return (
    <header className='flex h-16 w-full justify-center border-b-[1px] border-b-[#ddd]'>
      <HStack className='container flex flex-nowrap justify-between w-full' >
        <Link href="/" className='text-3xl text-zinc-900 font-semibold '>
          Built on Gno
        </Link>
        <div className="flex justify-end w-auto gap-2 md:gap-4 xl:gap-6 items-center">
          <Link href='https://github.com/vAR-META-Tech/built-on-gno' target='_blank'>
            <GitPullRequestIcon />
          </Link>
          <UserCircleIcon />
          <SearchLgIcon />
          <Button startIcon={<Dice5Icon />} className='rounded-full'>Random project</Button>
        </div>
      </HStack>
    </header>
  )
}

export default Header