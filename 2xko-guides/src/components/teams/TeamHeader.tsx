import { Champion } from "@/types/champion";
import { TeamGuide } from "@/types/team";


type Props = {
  team: TeamGuide;
  champions: Champion[];
};


export default function TeamHeader({
  champions,
}: Props) {


  return (

    <div className="space-y-4">


      <h1 className="
        text-4xl
        font-bold
      ">
        {champions.map(c => c.name).join(" + ")}
      </h1>



      <div className="
        flex
        gap-4
      ">


        {champions.map(champ => (

          <div
            key={champ.id}
            className="
              w-32
              rounded-xl
              overflow-hidden
              border
            "
          >

            <img
              src={champ.image}
              className="
                aspect-square
                object-cover
              "
            />


            <p className="
              text-center
              p-2
            ">
              {champ.name}
            </p>


          </div>

        ))}


      </div>


    </div>

  );
}