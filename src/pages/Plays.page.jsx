import React from 'react';

//Components
import Poster from '../components/Poster/poster.component';
import PlaysFilter from '../components/FiltersOfPlays/PlaysFilter.component';

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Plays in Jaipur</h2>
                    <div className="flex flex-wrap ">
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                    <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312862-jbmqhkscak-portrait.jpg"
                        title="Uncommon Sense with Jeeveshu Ahluwalia"
                        subtitle="Comedy Shows | English | All age groups | 1hr"
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                    <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxOSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00145294-fjcsrkgfge-portrait.jpg"
                        title="Jo Bolta Hai Wohi Hota Hai feat Harsh Gujral"
                        subtitle="Comedy | Hindi, English | 16yrs + | 1hr 40mins"
                    />
                    </div>
                    <div className=" w-1/2 md:w-1/3 lg:w-3/12 my-3">
                    <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313407-fggrhjlfvw-portrait.jpg"
                        title="Fresh Jokes!"
                        subtitle="Comedy Shows | English, Hindi | 1hr 30mins
                        "
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                    <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312944-zzgwktusqs-portrait.jpg"
                        title="Kaafi Wild Hai - Standup by Appurv Gupta"
                        subtitle="Comedy Shows | Hindi | 1hr 30mins"
                    />
                    </div>
              </div>
          </div>
            <div className="lg: w-3/12">
                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                <div>
                    <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                    <PlaysFilter title="Language" tags={["Hindi", "English"]} />
                    <PlaysFilter title="Categories" tags={["Theatre", "Online Streaming Plays"]} />
                    <PlaysFilter title="Genres" tags={["Drama", "Historical", "Comedy"]} />
                    <PlaysFilter title="More Filters" tags={["Online streaming", "Kids Allowed", "Outdoor Events"]} />
                    <PlaysFilter title="Prices" tags={["Free", "0-500", "501-2000", "Above 2000"]} />
                </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Plays;
