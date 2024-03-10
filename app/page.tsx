import About from "./aboutus";
import { GridBackgroundDemo } from "./background";
import { BackgroundBeamsDemo } from "./beams";
import Communities from "./communities";
import { SignupFormDemo } from "./contactus";
import Footer from "./footer";
import What from "./whatforyou";
export default function Home() {
  return (<main>
    <BackgroundBeamsDemo />;
    <About />
    <Communities />
    <SignupFormDemo />
    <What />
    <Footer />
  </main>)
}
