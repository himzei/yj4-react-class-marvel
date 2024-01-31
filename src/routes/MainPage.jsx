import { useQuery } from "react-query";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetCharacters, apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";
import Layout7 from "../components/Layout7";
import ScaleLoader from "react-spinners/ScaleLoader";
import Button from "../components/Button";
import HypeImg from "../assets/svg/titleHype.svg";

export default function MainPage() {
  let lists; // fetch 요청한 배열을 받기 위한 변수
  let events; // events fetch 요청한 배열을 받기 위한 변수
  let characters; // character fetch 요청

  // 코믹스 fetch
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }

  // 이벤츠 fetch
  const { data: dataEvents, isLoading: isLoadingEvents } = useQuery(
    ["getEvents"],
    apiGetEvents
  );
  if (!isLoadingEvents) {
    events = dataEvents?.data.results;
  }

  // 캐릭터스 fetch
  const { data: dataCharacters, isLoading: isLoadingCharacters } = useQuery(
    ["getCharacters", { limit: 10 }],
    apiGetCharacters
  );
  if (!isLoadingCharacters) {
    characters = dataCharacters?.data?.results;
  }

  // console.log(characters);

  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox
        imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"
        mainTitle="available now"
        subTitle="new on Marvel unlimited"
        description="Read these plus 30,000+ digital comics for $9.99 a month!"
        btnTxt="get marvel unlimited"
      />

      {/* 리스트 캐러셀 */}
      <ListCarousel lists={lists} />

      {/* 이벤트 */}
      <section className="w-full flex justify-center">
        <div
          className="max-w-7xl w-full 
        grid grid-cols-[7fr_3fr] gap-16"
        >
          {/* 1왼쪽 */}
          <div className="w-full h-full">
            {/* 타이틀 */}
            <TitleRotate text="The Events" />
            {/* 이벤트 API에서 불러오기 */}
            <div className="w-full">
              {events?.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-64 border-b-2 pb-4 mb-4 flex space-x-8 group cursor-pointer"
                >
                  {/* image */}
                  <div className="w-1/2 h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                      alt="event_image"
                    />
                  </div>
                  {/* description */}
                  <div className="w-1/2 h-full">
                    <h2 className="uppercase font-semibold group-hover:text-red-600 duration-500">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <h3 className="italic text-sm">
                      {item.start?.substr(0, 10)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center pb-8 pt-4">
              <Button text="load more" outline="outline" />
            </div>
          </div>
          {/* 2오른쪽 */}
          <div className="w-full py-16">
            {/* top svg 이미지 */}
            <div className="relative w-full mb-8">
              <img src={HypeImg} alt="hype_image" />
              <div className="h-20 text-center w-full flex flex-col items-center">
                <h2 className="text-2xl font-semibold uppercase -translate-y-2">
                  The Hype box
                </h2>
                <p className="w-2/3 text-xs">
                  Can’t-miss news and updates from across the Marvel Universe!
                </p>
              </div>
            </div>
            {/* 작은 아이텐 */}
            <div className="w-full flex flex-col px-4 divide-y ">
              {/* 아이템 */}
              {dataEvents?.data?.results?.slice(5, 10).map((item, index) => (
                <div
                  key={index}
                  className="w-full py-8 flex group cursor-pointer "
                >
                  <div className="w-[40%] aspect-auto">
                    <img
                      src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                      alt="event_image"
                      className="w-[90%] aspect-video object-cover"
                    />
                  </div>
                  <div className="w-[60%] px-4 space-y-2">
                    <h2 className="font-semibold uppercase group-hover:text-red-600 duration-500">
                      {item.title}
                    </h2>
                    <p className="text-xs">{item.description.substr(0, 80)}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* bottom svg 이미지 */}
            <div className="w-full flex justify-end">
              <img src={HypeImg} className=" rotate-180" alt="hype_image" />
            </div>
          </div>
        </div>
      </section>

      {/* 캐릭터 */}
      <TitleImageBox
        imgUrl="https://compote.slate.com/images/b3997261-711a-4d26-b18e-e1dd7dc19dd9.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1200"
        mainTitle="on sale 1/31"
        subTitle="new comics this week"
        description="Check out the newest Marvel comics coming out this week!"
        btnTxt="print subscription"
      />
      {/* 캐릭터 리스트 캐러셀 */}
      {isLoadingCharacters ? (
        <Layout7>
          <div className="w-full flex justify-center py-16">
            <ScaleLoader color="red" />
          </div>
        </Layout7>
      ) : (
        <ListCarousel lists={characters} />
      )}

      {/* 마블 인사이더 */}
      <section className="w-full h-80 flex justify-center bg-black ">
        <div className="max-w-7xl w-full h-full grid grid-cols-[4fr_6fr]">
          {/* 1.왼쪽 */}
          <div className="w-full h-full">
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/master/pass/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
                alt="marvel_insider"
              />
              <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-black/70">
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src="https://cdn.marvel.com/content/u/open-html-assets/insider-sellpage/insider-logo.87df956b.png"
                  alt="marvel_insider"
                />
              </div>
            </div>
          </div>
          {/* 2.오른쪽 */}
          <div className="w-full h-full flex flex-col text-white items-center justify-center space-y-2">
            <h3 className="text-red-600 uppercase">Marvel insider</h3>
            <h4 className="text-2xl font-semibold">Watch, Earn, Redeem!</h4>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <div className="py-4">
              <Button text="join now" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
