"use client";

import { ResourceType } from "@/types/resource";


type FilterType =
  | "all"
  | ResourceType;


type Props = {
  selected: FilterType;

  onChange: (type: FilterType) => void;
};



export default function ResourceFilters({
  selected,
  onChange,
}: Props) {


  const filters: {
    label:string;
    value:FilterType;
  }[] = [

    {
      label:"All",
      value:"all"
    },

    {
      label:"Combos",
      value:"combo"
    },

    {
      label:"Mixups",
      value:"mixup"
    },

    {
      label:"Okizeme",
      value:"oki"
    },

    {
      label:"Pressure",
      value:"pressure"
    },

    {
      label:"Neutral",
      value:"neutral"
    },

    {
      label:"Punish",
      value:"punish"
    },

  ];



  return (

    <div
      className="
      flex
      gap-2
      flex-wrap
      "
    >

      {filters.map((filter)=>(

        <button

          key={filter.value}

          onClick={()=>
            onChange(filter.value)
          }

          className={`
            px-3
            py-1
            rounded-full
            border

            ${
              selected === filter.value
              ?
              "bg-blue-600 border-blue-600"
              :
              "border-zinc-700"
            }
          `}

        >

          {filter.label}

        </button>

      ))}


    </div>

  );

}   