"use client"
import { useProjects } from '@/apis'
import HeroSection from '@/components/HeroSection/HeroSection'
import { Card } from '@repo/ui'
import Image from 'next/image'

const DetailCategory = () => {
  const { data } = useProjects()

  return (
    <>
      <HeroSection />
      <div className='container flex w-full gap-6 justify-center mt-10 sm:mt-20 md:mt-32'>
        {data?.map((project) => (
          <Card title={project.name} >
            {project.projects.map((project) => (
              <div className='flex flex-col'>
                <div className='rounded-full w-16 h-16 border-2 relative'>
                  <Image src={project.logo} alt='' layout='fill' className='rounded-full object-cover' />
                </div>
                <h2 className='text-lg font-semibold text-ellipsis'>
                  {project.name}
                </h2>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </>
  )
}

export default DetailCategory