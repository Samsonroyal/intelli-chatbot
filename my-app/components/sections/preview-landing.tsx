import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16 relative">
      
      {/* Inner border */}
      <div className="">
     
            <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-blue-500 shadow-xl">
           <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-sm">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/AJFvlkWfF7Y?si=X2eN-Vey6o9Ocf7Z/preview?autoplay=&loop=1&controls=0&mute=`}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              frameBorder="0"
            ></iframe>
            </AspectRatio>
            </div>
      </div>      
    </div>

    
  );
}