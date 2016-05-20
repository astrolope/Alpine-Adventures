angular.module('app.services', [])

.factory('RiverService', [function(){
      // Service logic
    var rivers = [
      {
        id: '0',
        name: 'Skykomish River',
        age: '16+/12+*',
        lat: "47.523177",
        long: "-120.465215",
        type: 'Advanced',
        season: 'Apr - Aug',
        price: '89',
        class: 'IV-V',
        length: '4 hr. / 9 mi.',
        location: 'Gold Bar',
        popularity: '6',
        image: "../images/skykomish.jpg",
        images: [
          {
            image : "images/skykomish/alpine_adventures_skykomish.JPG"
          },
          {
            image: "../images/skykomish.jpg"
          },

          {
            image: 'images/skykomish/HR3R0134.JPG'
          },
          {
            image: 'images/skykomish/HR3R0719.JPG'
          },
      
        ],
        description: 'The Skykomish River is the closest white water rafting to Seattle, WA. This Washington State protected scenic river is our Home River and no one runs it like we do! Alpine Adventures brings you the best guides and whitewater rafting experiences just 1-hour from Seattle. Want heart pounding whitewater? The Skykomish River offers the best in Washington State!\n\n' +  
        'Trips launch into the calm turquoise pools on the South Fork of the Skykomish River just below Mt. Index and Lake Serene. A few miles downstream lies the famous Boulder Drop rapid. Standing on the river bank next to Boulder Drop causes hearts to pound just looking at the thundering Class IV-V section of whitewater. When the river is at 7,000 cubic feet per second (CFS) or above, Boulder Drop becomes Class V and you need a great team with one of our expert Skykomish raft guides to lead you between massive house size rocks.\n\n We always stop and scout this rapid, as some guests may choose to walk around and be picked up downstream, especially at big water! Boulder Drop is not the only big rapid on the Main Section of the Skykomish. There are plenty of other exciting Class III to Class IV rapids including "Bonsai," "Aquagasm," "Lunch Hole," to max out your adrenal gland as you wind down the river to our take-out at Big Eddy State Park. The awesome power of this river along with stunning views of the local mountains and wildlife makes this trip a true Northwest cant miss classic!',
      },
      {
        id: '1',
        name: 'Upper Skagit River',
        age: '5+*',        
           lat: "48.527017",
           long: "-121.43151",

        length: '4 hr. / 10 mi.',
        season: 'Jul - Aug',
        type: 'Intermediate',
        price: '79',
        location: 'Marblemount',
        class: 'II',  
        popularity: '5',
        image : "/images/upperskagit.jpg",  
        images: [
          {
            image : "/images/north_cascades_national_park_rafting.jpg"
          },
          {
            image: 'images/upperskagit/seattle_washington_rafting_deals_discounts.JPG'
          },
          {
            image: 'images/upperskagit/seattle_skagit_river_whitewater.JPG'
          },
          {
            image: 'images/upperskagit/Seattle_Skagit_Rafting_Launch.JPG'
          },
          {
            image: 'images/upperskagit/skagit_2.jpg'   
          },      
        ],
        description: 'The Skagit River is the 2nd longest river in Washington State and is set in a beautiful mountain valley. Ambling emerald currents sprinkled with rapids converge with lush old growth forests to make a beautiful whitewater rafting trip. This is a great introduction to whitewater for families and adventurers. \n\n The Upper Skagit River is located in the Ross Lake National Recreation area of North Cascades National Park. Another beautiful and moderate whitewater trip for the family, this river is a great destination for the summer time. There are plenty of things to see and do outdoors in the surrounding areas including winery tours, blueberry picking farms, hiking, canoeing, and many beautiful waterfalls. Be sure to stop in at the North Cascades National Park Visitor Center just past our boat launch at Goodell Creek for additional information on area activities and an amazing observation deck\n\nThe upper section of the Skagit River is rated as Class II-III and is good for ages 6 and over. A moderate amount of whitewater is enhanced by the overwhelming presence of nature on this 10 mile rafting journey. The mountain scenery and abundant waterfowl make this a perfect nature-lover\'s outing and one that is a great trip for the whole family. There are plenty of oppurtunities to go swimming and even a big rock to jump from if the water levels are right. This trip meets in the small town of Marblemount, WA.',
      },      
      {
        id: '2',
        name: 'Wenatchee River',
        age: '8+*',

           lat: "47.523177",
           long: "-120.465215",
       
        length: '5 hr. / 14 mi.',
        price: '84',
        season: 'Mar - Aug',
        type: 'Beginner',
        location: 'Cashmere',
        class: 'III',
        popularity: '7',
        image: 'images/HR3R0157.jpg',
        images: [
          {
            image : " images/wenatchee/534348_3912013609032_1540151814_33268072_1737874610_n.jpg"
          },
          {
            image: ' images/wenatchee/HR3R0669.JPG'
          },
          {
            image: ' images/wenatchee/seattle_river_rafting_leavenworth.JPG'
          },
          {
            image: ' images/wenatchee/wenatchee_river_family_whitewater_trips.JPG'
          },
          {
            image: ' images/wenatchee/wenatchee_whitewater_alpine.jpg'   
          },      
        ],
        description: 'Whitewater river rafting in the sunny Wenatchee River Valley offers diverse scenery and excellent whitewater rapids just outside of Leavenworth, WA. Our whitewater trips meet at Riverside Park in Cashmere, WA. After everyone is suited up we shuttle the group to Leavenworth and raft back down to Cashmere stopping for a riverside deli-style lunch. The begining of the full river trip starts in the alpine setting of Ponderosa pines and Douglas Fir in the "Bavarian Village" of Leavenworth. Marvel at how the valley becomes increasingly arid and is near desert as it reaches the Columbia River in Wenatchee, WA. Irrigation in the valley is the source of abundant water for the apple and pear orchards that line the river. You will likely see Osprey soaring overhead and nesting in the tops of trees.\n\n Our guides can make your trip as wild or mild as you like. This type of river is characterized by what we call a drop and pool river: great rapids like "Boulder Bend", "Rock n Roll", "Drunkards Drop", "Rodeo", and "Snow Blind". Corporate groups, families and friends come back year after year for the combination of great water, warm temperatures, and lots of sunshine.',
      },
      {   
        id: '3',
        name: 'Tieton River',
        age: '13+',
        season: 'Aug 31st - Sep 16th',
        length: '4 hr. / 14 mi.',
        type: 'Advanced',
        price: '89',
        location: 'White Pass',
        class: 'III-IV',
        image: '../images/IMG_6786.jpg',
        popularity: '1',
        images: [
          {
            image : " images/tieton/8DFD1834.JPG"
          },
          {
            image: ' images/tieton/A92F1215.JPG'
          },
          {
            image: ' images/tieton/IMG_6267.JPG'
          },
          {
            image: ' images/tieton/IMG_6762.JPG'
          },    
        ],
        description: 'The Tieton River runs down a narrow basalt canyon on the backside of Mt. Rainer. Fueled by water released from Rimrock Dam, the Tieton\'s steep gradient produces 14 miles of narrow and swift Class III+ whitewater rapids.\n\nFall brings the turning of leaves and a nice warm Indian Summer that gets us excited as the release of Rimrock Dam sets the Tieton River roaring. The river only runs white water once a year while the rest of the time it is a creek so shallow you can walk across in places. Guests get the thrill of paddling down a flooded canyon watching the river banks and canyon walls fly past. During this time the river has a solid Class III+ rating. Its path is small and narrow with the steepest gradient in Washington State, providing fast moving water and big waves. The river never slows down as you make your way through the likes of "High Noon" and "Waffle Wall." We even run our rafts over a river-wide dam for a big splash that\'s sure to get everyone in the boat totally soaked. Unique oak forests and huge basalt cliffs give this trip a flavor all its own.',
      },
      {  
        id: '4',
        name: 'Green River',
        age: '14+',
        length: '5 hr. / 14 mi.',
        price: '99',
        season: 'May',
        type: 'Advanced',
        location: 'Flaming Geyser State Park',
        class: 'III-IV',
        image: 'images/IMG_0331.jpg',
        popularity: '0',
        images: [
          {
            image : " images/green/Bellevue_river_rafting_green.jpg"
          },
          {
            image: ' images/green/IMG_0331.JPG'
          },
          {
            image: ' images/green/seattle_green_river_rafting06.JPG'
          },    
        ],
        description: 'Our Green River Gorge whitewater rafting trip is a thrilling adventure through a narrow moss covered canyon. This "Jurassic Park" like 14-mile stretch of river is rated Class IV (Advanced). The trip winds through a sandstone canyon with overhanging moss gardens and waterfalls all around. \n\n Winding around overhanging rock cliffs with water falls pouring into the white water rapids, you are immersed in a lost world when rafting the Green River. Included in this 14-mile section are the famous Class IV rapids named: "Mercury," "the Nozzle," "Pipeline," "Paradise," and the "Ledge Drop 1 & 2," as well as another twenty-five Class III (intermediate) rapids. The gorge can be described as twisting and boulder-choked, 150-300 feet deep, with 2 miles of Eocene sedimentary rocks and fossils. Don\'t miss this action packed and memorable rafting experience! \n\nThe Green River only runs a few times a year when the conditions are just right. All our trips on the Green River depend on the releases of the Howard Hansen Dam. If you want to go on the Green River, reserve now to guarantee your spot. Otherwise get signed up for our Green River Hotlist. We typically only run the Green the first weekend in May.',
      },
      {  
        id: '5',
        name: 'Icicle River',
        age: '16+/12+*',

           lat: "47.591664",
           long: "-120.670288",

        length: '4 hr. / 10 mi.',
        location: 'Leavenworth',
        season: 'Apr - Aug',
        type: 'Tube',
        price: '49',       
        class: 'Scenic Float',
        popularity: '0',
        image: 'images/IMG_0362.jpg',
        images: [
          {
            image : " images/Icicle_Float.jpg"
          },
          {
            image: ' images/IMG_0362.JPG'
          },
   
        ],        
        description: "The Scenic Icicle River Family Float is another rafting trip that's perfect for the whole family. This rafting float takes you through the beautiful Bavarian-style mountain town of Leavenworth, WA. Enjoy the majestic views of Icicle Ridge, The Sleeping Lady, and Wedge Mountain as you drift across glacier waters. Take in the summer smells of the many wild flowers and other native plant species along the river banks. Listen to the songs of dozens of species of birds as they glide over the river and perch among the trees. Wave to fellow river enthusiasts as they pass by on any number of craft including rafts of all sizes, stand-up paddle boards, hardshell kayaks and inflatable kayaks, and river tubes. Bring your own picnic basket and enjoy lunch and beverages on the river and under the sun.",
      },
      {   
        id: '6',
        name: 'Yakima River',
        age: '3+',
        class: 'Scenic Float',
        season: 'Jun - Sept',
        length: '4 hr. / 10 mi.',
        type: 'Tour',
        price: '74',
        location: 'Cle Elum',
        popularity: '0',
        image: 'images/IMG_0030.jpg',
        images: [
          {
            image : " images/yakima/IMG_0025.JPG"
          },
          {
            image: ' images/yakima/IMG_0030.JPG'
          },
          {
            image: ' images/yakima/yakima_river2.jpg'
          },
          {
            image: ' images/yakima/yakima_tower.jpg'
          },    
        ],
        description: 'The Yakima is born in the high peaks of Snoqualmie Pass, WA. It flows east through the famous wine region of the Yakima Valley until emptying into the Columbia River near the Tri-Cities. Alpine Adventures offers scenic family floats on the upper section of the Yakima River from east Cle Elum to near Ellensburg, WA. \n\n This gentle Class I 10-mile section of the Yakima River flows through beautiful Ponderosa Pine forests, towering Basalt spires and past salmon spawning grounds on nearby gravel bars. Bighorn Sheep and lots of birds including Osprey, Hawks, Eagles, and 21 different species of raptors are often seen on this trip as you float through the monolithic volcanic cliffs. This trip is great for the whole family with a minimum age of 3 and last around 4 hours total. Trips meet in the gravel/sand pull off area 1.6 miles east of Cle Elum on Hwy 970 near the junction with Hwy 10, across from Airport Rd and a Fire Station. Look for the Alpine Adventures vehicles.',
      },
      { 
        id: '7',
        name: 'Lake Wenatchee',
        age: '16+/12+*',
        length: '4 hr. / 10 mi.',
        location: 'Plain',
        season: 'Apr - Aug',
        price: '79',
        type: 'Tour',
        popularity: '0',
        class: 'Scenic Float',
        image: 'images/IMG_0881.jpg',
        images: [
          {
            image : " images/lakewenatchee/IMG_0881.JPG"
          },
          {
            image: ' images/lakewenatchee/lake_wenatchee_raft_trips.JPG'
          },
          {
            image: ' images/lakewenatchee/upper_snack.jpg'
          },    
        ],
        description: '• What you should bring: With few waves and minimal splashes, casual outdoors wear is recommended. On hot summer days, a swimsuit or shorts is fine. If you would like a wetsuit because you plan to play in the water and get wet, you should wear a swim suit or shorts to go on underneath (no cotton). Old shoes or sandals with straps, will work or you can wear our neoprene booties. For cold weather trips: long underwear, a warm sweater, (fleece or wool, no cotton), a hat to cover your ears, and wool socks will all help provide an extra layer of warmth. Bring a towel and a change of clothes to leave in your vehicle just in case for after the trip.\n\n• Trip Description: The Scenic Upper Wenatchee River Float gently glides down 7 miles of river starting at Lake Wenatchee State Park and ending in Plain. For those of you visiting Leavenworth and the North Central Washington area, you are sure to enjoy the serene beauty at the headwaters of the Wenatchee River. Osprey and their nests are frequently seen, along with other birds and wildlife on this quiet stretch of river. The water is Class I-II, which is great for the whole family. Ages 3 and over will love this trip. Personal flotation device (PFD), guide, lunch, and shuttle included.',
      },
      {  
        id: '8',
        name: 'Sauk River',
        age: '13+',
        length: '4 hr. / 9 mi.',
        season: 'Apr - Aug',
        location: 'Darrington',
        price: '89',
        class: 'III-IV',
        popularity: '3',
        type: 'Intermediate',

           lat: "48.255897",
           long: "-121.603554",

        image: 'images/IMG_6571.jpg',
        images: [
          {
            image : "  images/sauk/IMG_6564.JPG"
          },
          {
            image: ' images/sauk/IMG_6571.JPG'
          },
          {
            image: ' images/sauk/Screen_Shot_2016-03-24_at_4.47.41_PM.png'
          },
          {
            image: ' images/sauk/Screen_Shot_2016-03-24_at_4.47.49_PM.png'
          },
          {
            image: ' images/sauk/Screen_Shot_2016-03-24_at_4.50.54_PM.png'   
          },      
        ],
        description: 'When it comes to scenery and whitewater, the class III-IV Sauk is a hit! Run this river if you want to experience the true Washington Mountain outback!',
      },
      {  
        id: '9',
        name: 'Methow River',
        age: '8+*',
        length: '4 hr. / 9 mi.',
        season: 'May - Jul',
        location: 'Lake Chelan',
        price: '89',
        class: 'III-IV',
        popularity: '2',
        type: 'Beginner',
        image: 'images/black_canyon_methow_river_lake_chelan.jpg',
        images: [
          {
            image : " images/methow/methow_river_rafting_lake_chelan.JPG"
          },
          {
            image: ' images/methow/methow_river_washington_rafting.JPG'
          },
          {
            image: ' images/methow/methow_valley_river_trips.JPG'
          },
          {
            image: ' images/methow/whitewater_methow_river_alpine_adventures.JPG'
          },    
        ],
        description: '• Season: May - July\n• Ages: 8+ depending on water level\n• Meeting location: Pateros junction of HWY 153 and 97\n• Meeting times: Sat & Sun 10am\n• Class/Difficulty: Class III-IV / Beginner - Intermediate\n• Duration/Length: 4 hours / 14 miles\n• Gear provided? Yes\n• Meal provided? Optional\n\nThe Methow Valley, with its open Ponderosa forests, basalt cliffs, and hot, sunny weather puts you in a land where you can almost taste the heritage of the "Old West." and, the Methow River runs right through it. Alpine Adventures offers Class III+ whitewater rafting trips on this popular river located near the towns of Winthrop, Twisp, Pateros, and Lake Chelan, WA.\n\nJoin us on the Methow River which is well known for its consistent rapids and waves. "Hurricane Rapids," "Cinder Block Drop," and the notorious "Black Canyon" seem a distant memory by the time you reach "Another Roadside Attraction." The whitewater ends very near the mighty Columbia River, stretching 14 miles from where the rafting trip begins. It\'s only about half an hour from the resort towns of Chelan and Winthrop, WA. For meeting location information for Methow whitewater rafting trips.',
      },
      {  
        id: '10',
        name: 'Siuattle',
        age: '12+*',

           lat: "48.255897",
           long: "-121.603554",

        length: '4 hr. / 9 mi.',
        location: 'Darrington',
        season: 'Jul - Aug',
        price: '89',
        class: 'III',
        type: 'Intermediate',
        popularity: '4',
        image: 'images/SuiattleRiver.jpg',
        images: [
          {
            image : " images/suiattle/GOPR0071.JPG"
          },
          {
            image: ' images/suiattle/IMG_6758.JPG'
          },
          {
            image: ' images/suiattle/IMG_6973.JPG'
          },
          {
            image: ' images/suiattle/rafting_suiattle_river_seattle_wa.png'
          },
          {
            image: ' images/suiattle/Screen_Shot_2015-06-02_at_6.33.10_PM.png'   
          },      
        ],
        description: '• Season: July - August\n• Ages: 12+ (depending on water levels)\n• Meeting location: The parking lot next to the IGA Grocery Store. 1090 Seeman St. Darrington, WA 98241.\n• Meeting times: Mon -Sun 10am\n• Class/Difficulty: Class III / Intermediate\n• Duration/Length: 5-6 hours / 13 miles\n• Meal provided? Deli-Style lunch on the river\n• Gear provided? Wetsuit, splash jacket, neoprene shoes, personal flotation device\n\nThe Suiattle River originates from the Suiattle Glacier on the east slopes of Glacier Peak in the Cascade Range. It flows generally northwest to join the Sauk River north of Darrington. The Sauk River in turn joins the Skagit River, which empties into Skagit Bay, part of Puget Sound. It is a National Wild and Scenic River.\n\nThe Suiattle River is great to explore in the warm summer months when the snowfields of Glacier Peak melt. The river is protected as a scenic river under the Federal Wild and Scenic Rivers act and is a good place to spot deer, waterfowl and even an occasional bear. The banks are thickly forested and there are almost no signs of civilization from beginning to end. A great trip for families offering challenging and fun Class II and III whitewater and some of Washington\'s best natural history adventures. Most of the rapids consist of splashy slides over continually changing gravel beds, but watch out for Rabbit Skull Rapid, Cougar Crossing and the Hurricane rapids to give you a wild ride.',
      }
    ];
  

    // Public API here
    return {
      allRivers: rivers,
      getRiver: function (river) {
        return rivers[river];
      }
    };
}])

.service('BlankService', [function(){

}]);

