import axios from "axios";

const FetchCharacters = async () => {
  const url = "https://thronesapi.com/api/v2/Characters";

  try {
    const res = await axios.get(url);
    const characters = res.data.map((character) => {
      return {
        id: character.id,
        fullName: character.fullName,
        imageUrl: character.imageUrl,
        image: character.image,
      };
    });

    const filteredCharacters = characters.filter(
      (character) => character.id >= 0 && character.id <= 30
    );

    return filteredCharacters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

export default FetchCharacters;
