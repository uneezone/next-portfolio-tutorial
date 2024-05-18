import dynamic from "next/dynamic";

const LottiePlayer = dynamic(() => import("react-lottie-player"), {
  ssr: false,
});

import lottieJson from "/public/animation.json";

export default function Animation() {
  return <LottiePlayer loop animationData={lottieJson} play />;
}
