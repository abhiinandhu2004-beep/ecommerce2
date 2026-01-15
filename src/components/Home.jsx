import Body from "./Body"
import DemandedItems from "./DemandedItems"
import Navbar from "./Navbar"
import Shop from "./Shop"
import RecentSearched from "./RecentSearched"
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <div className='bg-[#222222]'>
      {/* <Navbar/> */}
      <Body/>
      <Shop/>
      <DemandedItems/>
      <RecentSearched/>
      {/* <Footer/> */}
    </div>
    </>
  )
}

export default Home
