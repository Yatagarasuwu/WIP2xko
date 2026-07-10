import { Resource } from "@/types/resource";

import RelatedResources from "./RelatedResources";
import VideoCarousel from "./videos/VideoAccordian";


export default function ResourceViewer({

resource,

related

}:{
resource:Resource;

related:Resource[];

}){


return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

{resource.title}

</h1>



<p className="text-zinc-400">

{resource.description}

</p>




<VideoCarousel

videos={resource.videos}

/>





<RelatedResources

resources={related}

/>



</div>

);

}