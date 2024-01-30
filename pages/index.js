import Footer from "@/components/Footer"
import Homepage from "@/components/Homepage"
import Head from "next/head"

export default function Home() {

  const head = () => (
    <Head>
      <title>Wellness Z - B2B Healthtech Platform</title>
      <meta name="description" content="WellnessZ is a B2B healthtech platform, your all-in-one solution for nutritionists, gym owners, wellness coaches, hospitals, and more in the health industry. From online presence to CRM, lead generation, and marketing, we've got you covered. Empower your wellness coaching business and brand with us today." />
      <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href="https://www.wellnessz.in" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="WellnessZ - A B2B Healthtech Platform" />
      <meta property="og:description" content="WellnessZ is a B2B healthtech platform, your all-in-one solution for nutritionists, gym owners, wellness coaches, hospitals, and more in the health industry. From online presence to CRM, lead generation, and marketing, we've got you covered. Empower your wellness coaching business and brand with us today." />
      <meta property="og:url" content="https://www.wellnessz.in" />
      <meta property="og:site_name" content="WellnessZ" />
    </Head>
  );

  return (
    <>
      {head()}
      <Homepage />
      <Footer />
    </>
  )
}
