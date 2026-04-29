import BlogsListing from "./components/sections/BlogsListing";
import { HeroBanner } from "./components/sections/Hero";

export default function Home(): React.JSX.Element {
  return (
    <>
      <HeroBanner />
      <BlogsListing />
    </>
  );
}
