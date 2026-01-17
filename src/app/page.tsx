import GlobalSearch from "@/components/root/global-search";
import ServiceList from "@/components/root/service-list";
import HelloSections from "@/components/root/sections";

export default function HomePage() {
  return (
    <main className="relative px-4 md:px-8 lg:px-16 w-full h-full">
      <HelloSections />
      <GlobalSearch />
      <ServiceList />
    </main>
  );
}
