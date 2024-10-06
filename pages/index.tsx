import RootLayout from "@/layouts/layout";
import { HomePageContainer, HomePageContent } from "@/sections/HomePage";

const Home = () => {
  return (
    <RootLayout>
      <HomePageContainer>
        <HomePageContent />
      </HomePageContainer>
    </RootLayout>
  );
};

export default Home;
