
const Header = ({score, bestScore}) => {
    return (
        <header>
        <div className="font-got font-medium tracking-wider">
          <div className="flex justify-center">
          <img className="h-40 object-cover" src="https://i.ibb.co/JtSwjFM/Png-Item-1150239.png" alt="Game of Thrones" border="0" />
          </div>
          <h1 className="text-center font-medium text-white text-3xl"> Memory Game</h1>
          <p className="text-center text-lg font-thin text-white">The images will shuffle after each selection. Try to select each image only once!</p>
        </div>
        <div className="flex justify-center">
        <div className="uppercase flex justify-center py-4 relative w-full h-full max-w-md md:h-auto bg-gray-800 bg-opacity-50 rounded-lg shadow tracking-wider my-6">
          <div className="text-center text-lg font-medium text-white mr-16">Score: <span> <br/>{score}</span></div>
          <div className="text-center text-lg font-medium text-white ml-16">Best Score: <span><br/>{bestScore}</span></div>
        </div>
        </div>

      </header>
      );
}
 
export default Header;