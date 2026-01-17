import Link from "next/link"

const serviceList : {name: String, link: String}[] = [
  {
    name : "Schools Management",
    link : "/schools/home",
  },
  {
    name : "Rentals Management",
    link : "/rentals",
  },
  {
    name : "Projects Management",
    link : "/projects",
  },
  {
    name : "Businesses Management",
    link : "/businesses",
  },
  {
    name : "Tasker Service",
    link : "/tasker",
  }
]

const ServiceList = () => {
  return (
    <section className=" absolute bottom-0 left-0 h-1/4 w-full flex justify-center items-center">
      <ul className="flex items-center justify-evenly space-x-4">
        {serviceList.map((service)=>(
          <li key={service.name.valueOf()} className="w-[200] border p-4">
            <Link href={service.link.valueOf()} >
            {service.name}
            </Link>
          </li>
        ))}
      </ul>
      <footer className=" absolute bottom-0 left-0 flex items-center justify-center w-full py-2 border-t">Footer</footer>
    </section>
  )
}

export default ServiceList