import artistImg from "../assets/img/artistImg.svg";
import heart from "../assets/img/heart.svg";
import headerImg from "../assets/img/headerImg.svg";
import TopChart from "../components/Charts";
import Release from "../components/Release";

function Home() {
  return (
    <div className="container">
      <header>
        <div className="relative text-white">
          <img src={headerImg} alt="headerImg" />
          <div className="absolute top-0 h-full">
            <div className="h-full flex flex-col justify-between p-8">
              <span className="text-sm">Currated playlist</span>
              <div className="text">
                <h1>R & B Hits</h1>
                <p>
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
                </p>
                <div className="flex items-center justify-between mt-10">
                  <img src={artistImg} alt="artist Imgage" />
                  <img src={heart} alt="heart" />
                  <h2>33k Likes</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col">
        <TopChart />
        <Release/>
      </div>

    </div>
  );
}

export default Home;
