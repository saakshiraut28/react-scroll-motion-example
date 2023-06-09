/** @format */

import {
  Animator,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  batch,
} from "react-scroll-motion";
import "./App.css";

const ZoomInVar = batch(StickyIn(), FadeIn(), ZoomIn());

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
          <h2>Welcome to the series of Scroll Animations 👾</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInVar}>
          <h2>Introducing the react-motion-scroll dependency 🌟</h2>
          <h3> Wooo - hoooo </h3>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={StickyIn()}>
          <Animator animation={MoveIn(0, 1000)}>
            <h2>This is awesome 🤩</h2>
          </Animator>
          <br />
          <Animator animation={MoveIn(-1000, 0)}>
            <h2>Left Slide</h2>
          </Animator>
          <br />
          <Animator animation={MoveIn(1000, 0)}>
            <h2>Right Slide</h2>
          </Animator>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
