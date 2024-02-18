import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var dob = new Date("15/01/2000");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-sm lg:text-lg  font-normal"
    >
      <div
        className="head text-3xl lg:text-5xl mt-12 font-bold"
        data-aos={"slide-down"}
      >
        Acerca de mi  </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3
            className="text-xl lg:text-3xl font-medium"
            data-aos={"fade-left"}
          >
            Yo soy <span className="text-yellow-600">Liliana Chora,</span> una persona que le gusta la tecnología y le gusta bailar.
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            Me gusta la musica y bailar mucho  {getDate()}{" "}
            Mis dias libre  trato de ir a un curso de guitarra y aprender mas de ese arte aparte de que me gusta mucho 
            la tecnologia y me gusta aprender cosas nuevas.
          </p>
        
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>

          <a
            href={require("../../assets/files/LilianaChora.pdf")}
            download={"Lili's Resume"}
            target="_blank"
            rel="noreferrer"
            className="py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy"
          >
            Link de mi CV
            <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
