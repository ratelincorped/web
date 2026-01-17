import { DarkModeToggle } from '@/feature/theme/component/theme-toggle'
import Image from 'next/image'

const HelloSections = () => {
  return (
    <section className=" absolute top-0 left-0 flex flex-col items-center justify-between w-full pt-4">
        <header className="flex justify-between w-full">
            <h3>Hello, User</h3>
            <DarkModeToggle />
        </header>
        <div className=" relative h-1/4 flex flex-col items-center">
          <Image
            src="ratel-logo.svg"
            alt="logo"
            height={100}
            width={300}
            className=" h-3/4 pt-10"
          />
        </div>
    
      </section>
  )
}

export default HelloSections