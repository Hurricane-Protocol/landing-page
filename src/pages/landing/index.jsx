import About from "./landing.about";
import Balances from "./landing.balances";
import Banner from "./landing.banner";
import Direction from "./landing.direction";
import FAQ from "./landing.faq";
import NftComming from "./landing.nftcomming";
import Optimization from "./landing.optimization";
import Terra from "./landing.terra";

const LandingPage = () => {
  return (
    <>
      <Banner id={"Banner"} />
      <About />
      <Direction />
      <Optimization />
      {/* <Balances /> */}
      <Terra />
      <NftComming />
      <FAQ />
    </>
  );
};

export default LandingPage;
