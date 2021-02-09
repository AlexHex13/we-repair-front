import BodyPart from './body/BodyPart'
import FaceComponent from './faceComponent/FaceComponent'
import Header from './header/Header'
import PostHeader from './header/PostHeader'




export default function HomePage() {
  return (
    <>   
    <Header />
    <PostHeader/>
    <FaceComponent/>
    <BodyPart/>
    </>

  );
}

