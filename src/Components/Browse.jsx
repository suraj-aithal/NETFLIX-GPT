import Header from "./Header"
import UseNowPlaying from "../hooks/useNowplayingmovies"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
    UseNowPlaying();

  return (
    <div>
      <Header />
      {/** 
       Main Container
         -video background
         -video title
        Secendory Container
         -Movielist * n
         - cards * n
      */}
      <Maincontainer />
      <Secondarycontainer />
    </div>
  )
}

export default Browse