import LinkGenerator from "@/components/Club/Linkgenerator";
import ClubNavbar from "@/components/ClubNavbar";
import ClubFooter from "@/components/ClubFooter";
import Private from "@/components/auth/Private";

export default function Linkgenerator() {


  return (
    <Private> 
      
      <ClubNavbar />
      <LinkGenerator/>
      <ClubFooter/>
      
    </Private>
  )
}
