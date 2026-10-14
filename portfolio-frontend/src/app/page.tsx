"use client";
import Card, { CardDeatilProps, CardProps } from "./components/utils/assets/card/Card";

export default function Home() {

  const CARD_DETAILS: CardDeatilProps[] = [
    {
      title: "test1",
      discription: "test disccard-container disccard-containerdisccard-containerdisccard-container",
      bgImage: "https://i.pinimg.com/236x/36/98/e1/3698e143b1f1c356805bf972147ae7e5.jpg",
      link: "test",
      projectImage: "https://lh3.googleusercontent.com/79W9w2q1HfUmLayOs7xE9mBjxdRFRZL035eTeU0jRkPkPoA20HWZaJRC6gK8kC6hwYdGbk89wuZme8QnVVARR4rX=s1280-w1280-h800",
      tools: ["react, scss"]
    },
  ]
  return (
    <div>Home
      <Card cardDetails={CARD_DETAILS}/>
    </div>
  );
}
