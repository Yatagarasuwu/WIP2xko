import Link from "next/link";

import { Resource } from "@/types/resource";


export default function RelatedResources({

resources

}:{
resources:Resource[];
}){


if(resources.length===0){

return null;

}



return (

<div className="space-y-2">


<h3 className="font-bold">
Related Resources
</h3>


<div className="flex flex-wrap gap-2">

{resources.map(resource=>(

<Link

key={resource.id}

href={`/resources/${resource.id}`}

className="
border
rounded
px-3
py-1
hover:border-blue-500
"

>

{resource.title}

</Link>

))}

</div>


</div>

);

}