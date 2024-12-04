import { useNavigate } from "react-router-dom";
import storyBackground from "./assets/img.jpg"; // Replace with your actual background image path
import { FaHeart } from "react-icons/fa";

const Story = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: `url(${storyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Opacity Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-pink-300 p-4 max-w-xl mx-auto pt-20">
        <h1 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s text-white" >
          Quick Story
        </h1>

        <div className="text-2xl  flex  gap-3 justify-center mb-8 animate__animated animate__fadeIn animate__delay-2s "> <FaHeart/> <FaHeart/> <FaHeart/></div>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          It all started one week ago, in a store. I was exhausted, coming back from the gym, and you were just as tired. But even then, you smiled, and gave me your attention. Your warmth made all the difference in my life.
        </p>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-3s text-white">
          You told me your name was Ife , and since that moment, you've made me so happy. I resumed gym due to heartbreak and struggling, but your presence has healed me in ways I couldn't have imagined.
        </p>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-4s">
          Now, I'm ready to make beautiful memories with you, Ife. I'm so grateful to have you in my life, and I can't wait to see where this journey takes us.
        </p>
        <button
          className="px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition duration-300"
          onClick={() => navigate("/compliments")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Story;
