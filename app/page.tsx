import About from "./aboutus";
import { GridBackgroundDemo } from "./background";
import { BackgroundBeamsDemo } from "./beams";
import Communities from "./communities";
import { SignupFormDemo } from "./contactus";
import Footer from "./footer";
import What from "./whatforyou";
import CommandLine from "./commandline";
import ElegantComponent from "./test"

export default function Home() {
  return (<main>
    {/* <CommandLine/> */}
    <BackgroundBeamsDemo />;
    <About />
    <Communities />
    <SignupFormDemo />
    <What />
    <Footer />
  </main>)
}
