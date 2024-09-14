import Header from "./Header"
import UseNowPlaying from "../hooks/useNowplayingmovies"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import Usepopularmovies from "../hooks/usePopularmovies";
import Usetopratedmovies from "../hooks/useToprated";
import Useupcoming from "../hooks/useUpcoming";
import Useairingtoday from "../hooks/useairingtodayseries";
import Useontheair from "../hooks/useOntheair";
import Useseriespopular from "../hooks/useseriespopular";
import Usetopratedseries from "../hooks/useTopseries";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {

  const show = useSelector((store)=>store.gpt.showgptsearch);

    UseNowPlaying();
    Usepopularmovies();
    Usetopratedmovies();
    Useupcoming();
    Useairingtoday();
    Useontheair();
    Useseriespopular();
    Usetopratedseries();

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
     {
      show?<GptSearch />:<> <Maincontainer />
      <Secondarycontainer /></>
     }
    </div>
  )
}

export default Browse