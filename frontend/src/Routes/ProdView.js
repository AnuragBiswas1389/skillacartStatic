import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import CrafterProfile from "../components/CraftersProfile/CrafterProfile";
import LgCrafterProfile from "../components/CraftersProfile/LgCrafterProfile";
import PhotoReview from "../components/Review/PhotoReview/PhotoReview";
import ReviewCard from "../components/Review/ReviewCard/ReviewCard";

function ProdView(props) {
  return (
    <section>
      <Nav></Nav>
      <CrafterProfile></CrafterProfile>
      <LgCrafterProfile></LgCrafterProfile>
      <PhotoReview></PhotoReview>
      <ReviewCard rating={3}></ReviewCard>
    </section>
  );
}

export default ProdView;
