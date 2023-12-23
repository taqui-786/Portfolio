import TextRotator from "./TextRotator";

 
const HeroTexts = () => {
 
  
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl" >My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl " >
        Md Taqui <br /> Imam .
      </h1>
        <TextRotator/>
      {/* <div className="font-poppins text-2xl mt-4 flex relative [text-wrap:balance] max-sm:text-xl" >
        I am a Passionate
      </div> */}
    </>
  );
};
export default HeroTexts