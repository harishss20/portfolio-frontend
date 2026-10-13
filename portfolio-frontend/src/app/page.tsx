import Card, { CardDeatilProps, CardProps } from "./components/utils/assets/card/Card";

export default function Home() {

  const CARD_DETAILS: CardDeatilProps[] = [
    {
      title: "test1",
      discription: "test disc",
      bgImage: "https://i.pinimg.com/236x/36/98/e1/3698e143b1f1c356805bf972147ae7e5.jpg", // just example it will be in public images,
      link: "test",
      projectImage: "https://i.pinimg.com/236x/36/98/e1/3698e143b1f1c356805bf972147ae7e5.jpg",
      tools: ["react, scss"]

    }
  ]
  return (
    <div>Home
      <Card cardDetails={CARD_DETAILS}/>
    </div>
  );
}
