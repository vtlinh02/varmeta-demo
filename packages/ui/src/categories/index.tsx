import { Avatar } from "@var-meta/ui";
import Link from "next/link";
import { useMemo } from "react";

type Propjects = {
  logo: string
}

interface Props {
  title: string;
  link: string;
  projects: Propjects[]
}

export const Category = ({ projects, link, title }: Props) => {
  const [firstThree, lastThree] = useMemo(() => ([projects.slice(0, 3), projects.slice(0, projects.length - 3)]), [projects])

  return (
    <Link href={link}>
      <div className="flex flex-col gap-4 h-full">
        <div className="text-xl font-bold mx-2">{title}</div>
        <div className="rounded-3xl bg-white shadow-xl p-6 flex gap-1">
          {firstThree.map((i) => (
            <Avatar
              key={i.logo}
              indicator="none"
              radius="half"
              size="2xl"
              className="border-2"
              src={i.logo}
            />
          ))}
          {lastThree.length > 0 &&
            <div className="h-16 w-16 rounded-full border-2 justify-center items-center flex">
              <span className="text-xl text-gray-400 text-center">+{lastThree.length}</span>
            </div>
          }
        </div>
      </div></Link>
  )
}
