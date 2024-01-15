import { Pet as PetType } from "../types/APIResponseTypes";
import Pet from "./Pet";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found!</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            id={pet.id}
            images={pet.images}
            location={`${pet.city},${pet.state}`}
          ></Pet>
        ))
      )}
    </div>
  );
};

export default Results;
