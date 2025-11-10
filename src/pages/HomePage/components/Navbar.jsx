import React, { useState } from "react";
import { href } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [openTabs, setOpenTabs] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔹 NavItems with Equipments + new top-level tabs
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    
    
    {
      label: "Equipment",
      children: [
//golf course
        {
          label: "Golf Course",
          children: [
            {
              label: "Greens Mowers",
              children: [
                { label: "Toro Greensmaster 1021", href: "https://www.toro.com/en/product/04830" },
                { label: "Toro Greensmaster 1021 Flex", href: "https://www.toro.com/en/product/04860" },
                { label: "Toro Greensmaster 3250-D", href: "https://www.toro.com/en/product/04384" },
                { label: "Toro Greensmaster 3150-Q", href: "https://www.toro.com/en/product/04358" },
                { label: "Toro Greensmaster® TriFlex™ 3420 ", href: "https://www.toro.com/en/product/04540" },
              ],
            },
            {
              label: "Fairway Mowers",
              children: [
                { label: "Toro Reelmaster 3575-D", href: "https://www.toro.com/en/product/03821" },
                { label: "Toro Reelmaster 5510-D", href: "https://www.toro.com/en-gb/product/03964?srsltid=AfmBOooCJ_k-CCFU6vQpgyXDDshDk82fEbzXej4rNjrRg5f-RqttUX6E" },
                { label: "Toro Reelmaster 5610-D", href: "https://www.toro.com/en/product/03956" },
                { label: "Toro Reelmaster 5010-H", href: "https://www.toro.com/en/product/03950" },
              ],
            },
            {
              label: "Rough Mowers",
              children: [
                { label: "Toro Groundmaster 3500-D", href: "https://www.toro.com/en/product/30807" },
                { label: "Toro Groundmaster 3505-D", href: "https://www.toro.com/en/product/30849" },
                { label: "Toro Groundmaster 4300-D", href: "https://www.toro.com/en/product/30879" },
                { label: "Toro Groundmaster 4500-D", href: "https://www.toro.com/en/product/30885" },
                { label: "Toro Groundmaster 4700-D", href: "#vguard" },
                { label: "Toro Groundmaster 1200", href: "https://www.toro.com/en/product/Groundsmaster-1200-Series?srsltid=AfmBOoo8Pc0ppcFq1i_A4b0Svz08FaIO4fPnmqEJy6zR2tLapivjxT_Q" },
                { label: "Toro Proline H800", href: "https://www.toro.com/en/product/31051" },
                { label: "Toro Grounmaster 3200/3300 Series", href: "https://www.toro.com/en/product/31900A" },
              ],
            },
            {
              label: "Tee Mowers",
              children: [
                { label: "Toro Greensmaster 1026", href: "https://www.toro.com/en/product/04840" },
              ],
            },
            {
              label: "Trim /Apron Mowers",
              children: [
                { label: "Toro Reelmaster 3100-D", href: "https://www.toro.com/en/product/03170" },
                { label: "Toro Reelmaster 3100-D with Sidewinder", href: "https://www.toro.com/en/product/03171" },
                { label: "Toro ProStripe 560", href: "https://www.toro.com/en/product/02657" },
              ],
            },
            {
              label: "Greens Aerators",
              children: [
                { label: "Toro ProCore 648s", href: "https://www.toro.com/en/product/09960" },
              ],
            },
            {
              label: "Fairway Aerators",
              children: [
                { label: "Toro ProCore 864", href: "https://www.toro.com/en/product/09715" },
                { label: "Toro ProCore 1298", href: "https://www.toro.com/en/product/09716" },
              ],
            },
            {
              label: "Greens Top Dressers",
              children: [
                { label: "Ecolawn Applicator ECO 250S (Spin Type)", href: "https://ecolawnapplicator.com/eco-250s/" },
                { label: "Turfco F15B (Drop Type)", href: "https://www.turfco.com/store/c25/topdressers/p118526/mete-r-matic-topdresser/" },
                { label: "Dakota 310", href: "https://dakotapeat.com/equipment/turf-tenders/310-turf-tender/" },
              ],
            },
            {
              label: "Fairway Top Dressers",
              children: [
                { label: "Toro ProPass 200", href: "https://www.toro.com/en/product/ProPass-200-Series-Top-Dresser?srsltid=AfmBOopiWaKY6cP2rmA9T5SnHfxRfJlzcy4amu4WcOFxoNE8lS-503rv" },
                { label: "Turfco WideSpin 1550 Broadcast Topdresser", href: "https://www.turfco.com/store/c12/spinner-topdressers/p13/widespin-1550-broadcast-topdresser/" },
              ],
            },
            {
              label: "Bunker Rakes",
              children: [
                { label: "Toro Sand Pro 2040Z", href: "https://www.toro.com/en/product/08706?srsltid=AfmBOooc1emKq--MRZ-EJTst_NAjamLyIw0_FIncxCrA1JIBwP3SIOMw" },
                { label: "Toro Sand Pro 3040", href: "https://www.toro.com/en/product/08743?srsltid=AfmBOoorT1cVXieQ8ryw92Ege3q8KZ4xSuLfqpmU_hL6gV8jIkbp5Tsf" },
                { label: "Toro Sand Pro 5040", href: "https://www.toro.com/en/product/08745" },
              ],
            },
            {
              label: "Golf Utility Vehicles",
              children: [
                { label: "Toro Workman® MDX - Petrol", href: "https://www.toro.com/en/product/07235" },
                { label: "Toro Workman® HDX - Petrol", href: "https://www.toro.com/en/product/Workman-HDX-Series?srsltid=AfmBOoqj2Cm5dx7AlPQaNM7_uqNeMCCp3ct1aRFA7MPVlCCh8dekWzQF" },
                { label: "Toro Workman® HDX - Diesel", href: "https://www.toro.com/en/product/07387?srsltid=AfmBOooYqI5vUYXiUfN3B10wwAiCavpuXHcUA7V5t-pRTH163K3tcNiZ" },
                { label: "Toro Workman® GTX ", href: "https://www.toro.com/en/product/Workman-GTX-Series?srsltid=AfmBOookbwfAD5FFuf8H6gYm3Jbb0IAIIuTsofhR20CnA1wCcvBimUx4" },
              ],
            },
            {
              label: "Dethatcher / Verti-Cutters",
              children: [
                { label: "Graden GS-04 Greens Dethatcher (Walk Behind)", href: "https://gradenturfmachinery.com.au/" },
                { label: "Graden Fairway Dethatcher (Tow Type)", href: "#vguard" },
                { label: "1st Product VC-60 Verti-Cutter - Fairway", href: "https://1stproducts.com/blog/product_models/vc-60-verti-cutter/" },
                { label: "1st Product VC-40 Verti-Cutter - Fairway", href: "https://1stproducts.com/blog/product_models/vc-40-verti-cutter/" },
              ],
            },
            {
              label: "Debris Collection & Blowing",
              children: [
                { label: "Toro Pro Force® Debris Blower", href: "https://www.toro.com/en/product/44554" },
                { label: "Harper Industries ProSweep", href: "https://www.harperturfequipment.com/products/" },
                { label: "Harper Industries Versa-Vac", href: "https://www.harperturfequipment.com/products/" },
                { label: "Harper Industries Rake-o-Vac", href: "https://www.harperturfequipment.com/products/" },
                { label: "Imants - RotoSweep & Rhea Scarifier", href: "https://campeyturfcare.com/portfolio-items/rotosweep-rhea-scarifier/" },
                // { label: "WideSpin 1550 Broadcast Topdresser", href: "https://www.turfco.com/store/c12/spinner-topdressers/p13/widespin-1550-broadcast-topdresser/" },
              ],
            },
          ],
        },

// cricket ground
        {
          label: "Cricket Ground",
          children: [
            {
              label: "Pitch Mowers",
              children: [
                { label: "Toro Greensmaster 1021", href: "https://www.toro.com/en/product/04830" },
              ],
            },
            {
              label: "Outfield Mowers",
              children: [
                { label: "Toro Greensmaster 3250-D", href: "https://www.toro.com/en/product/04384" },
                { label: "Toro Reelmaster 3575-D", href: "https://www.toro.com/en/product/03821" },
              ],
            },
            {
              label: "Aerator",
              children: [
                { label: "Toro ProCore 648s", href: "https://www.toro.com/en/product/09960" },
              ],
            },
            {
              label: "Dethatcher / Verti-Cutters",
              children: [
                { label: "Graden GS-04 Walk Behind Dethatcher", href: "https://gradenturfmachinery.com.au/" },
              ],
            },
            {
              label: "Stand-on Sprayer Spreader",
              children: [
                { label: "Toro Stand-On Spreader cum Sprayer", href: "https://www.toro.com/en/product/34230" },
              ],
            },
            {
              label: "Top Dressers",
              children: [
                { label: "Turfco F15B (Drop Type)", href: "https://www.turfco.com/store/c25/topdressers/p118526/mete-r-matic-topdresser/" },
              ],
            },
            {
              label: "Fertilizer Spreader",
              children: [
                { label: "Spyker Spreader Fertilizer", href: "https://www.spyker.com/product/pro-series-s60-12020-120-commercial-broadcast-spreader/" },
              ],
            },
            {
              label: "Water Removal Machine",
              children: [
                { label: "Super Sopper Whale", href: "https://supersopper.com.au/product/whale/" },
              ],
            },
          ],
        },

        
// football ground
        {
          label: "Football Ground",
          children: [
            {
              label: "Outfield Mowers",
              children: [
                { label: "Toro Greensmaster 3250-D", href: "https://www.toro.com/en/product/04384" },
              ],
            },
            {
              label: "Aerator",
              children: [
                { label: "Toro ProCore 648s", href: "https://www.toro.com/en/product/09960" },
              ],
            },
            {
              label: "Dethatcher / Verti-Cutters",
              children: [
                { label: "Graden GS-04 Walk Behind Dethatcher", href: "https://gradenturfmachinery.com.au/" },
              ],
            },
            {
              label: "Sprayer cum Spreader",
              children: [
                { label: "Toro Stand-On Spreader cum Sprayer", href: "https://www.toro.com/en/product/34230" },
              ],
            },
            {
              label: "Top Dressers",
              children: [
                { label: "Turfco F15B (Drop Type)", href: "https://www.turfco.com/store/c25/topdressers/p118526/mete-r-matic-topdresser/" },
              ],
            },
            {
              label: "Fertilizer Spreader",
              children: [
                { label: "Spyker Spreader Fertilizer", href: "https://www.spyker.com/product/pro-series-s60-12020-120-commercial-broadcast-spreader/" },
              ],
            },
            {
              label: "Water Removal Machine",
              children: [
                { label: "Super Sopper Whale", href: "https://supersopper.com.au/product/whale/" },
              ],
            },
          ],
        },

// Lawn Mower
        {
          label: "Lawn Mowers",
          children: [
            {
              label: "Walk Behind Mowers",
              children: [
                { label: "Toro 21 in. (53 cm) Recycler® Self-Propel Petrol Lawn Mower", href: "https://www.toro.com/en/product/21321" },
                { label: "Toro 22 in. (56cm) Recycler® Self-Propel Petrol Lawn Mower", href: "https://www.toro.com/en/product/21442" },
                { label: "Toro 22 in. (56cm) Recycler® w/Personal Pace® Petrol Lawn Mower", href: "https://www.toro.com/en/product/21462" },
                { label: "Toro 21 in. (53 cm) Super Recycler® Electric Start w/Personal Pace® Petrol Lawn Mower", href: "https://www.toro.com/en/product/21564" },
              ],
            },
            {
              label: "Zero Turn Ride-on Mowers",
              children: [
                { label: "42 in. (107 cm) TimeCutter® Zero Turn Mower", href: "https://www.toro.com/en/product/77401" },
                { label: "Z-Master 2000 Series", href: "https://www.toro.com/en/product/Z-Master-2000-Gas-Zero-Turn-Riding-Lawn-Mower?srsltid=AfmBOoo3yddZ59VOFGgXeopjfVvrLBRAUhcJ2tacIHEGDiqMHb90kFd6" },
                { label: "Z-Master 4000 Series", href: "https://www.toro.com/en/product/Z-Master-4000-Pro-Zero-Turn-Riding-Mower?srsltid=AfmBOoqfspdqcoR_ZV6OkWTLEIMmU-ZhO7C54gTnTJBpFDsr1lAu12C4" },
                { label: "Z-Master 6000 Series", href: "https://www.toro.com/en/product/Z-Master-6000-Series?srsltid=AfmBOoqhRFDf_sFBzFHme5WjAQrlsxJpUGyRY5SspFZbzF2dO5dQe70A" },
              ],
            },
            {
              label: "Stand-on Walk Behind Mowers",
              children: [
                { label: "Toro GrandStand Mower", href: "https://www.toro.com/en/product/74534" },
              ],
            },
          ],
        },

//Golf Carts
        {
          label: "Golf Carts",
          children: [
            {
              label: "Tonino Lamborghini",
             href:"https://tlgolfcarts.com/"
            },
           
          ],
        },

// Ventrac equipment
        {
          label: "Ventrac Equipment",
          children: [
            {
              label: "Tractors",
              children: [
                { label: "Tractor 4520Y - Diesel Engine", href: "#lubi" },
                { label: "Tractor 4520N - Petrol Engine", href: "#crompton" },
              ],
            },
            {
              label: "Attachments",
              children: [
                // { label: "Tractor 4520Y", href: "#abb" },
                // { label: "Tractor 4520N", href: "#siemens" },
                { label: "Reel Mower MR770", href: "https://www.ventrac.com/products/attachments/mr770" },
                { label: "Contour Mower MJ840", href: "https://www.ventrac.com/products/attachments/mj840" },
                { label: "Grass Collection Systems RV602", href: "https://www.ventrac.com/products/attachments/rv602" },
                { label: "Turbine Blower ET202", href: "https://www.ventrac.com/products/attachments/et202" },
                { label: "Finish Mower", href: "https://www.ventrac.com/products/attachments/msmtmu" },
                { label: "Wide Area Mower MK960r", href: "https://www.ventrac.com/products/attachments/mk960" },
                { label: "Flail Mower", href: "https://www.ventrac.com/products/attachments/mwmy" },
                { label: "Aera-Vator EA600", href: "https://www.ventrac.com/products/attachments/ea600" },
                { label: "Tough Cut Mower", href: "https://www.ventrac.com/products/attachments/hq682" },
                { label: "Aerator EB480", href: "https://www.ventrac.com/products/attachments/eb480" },
                { label: "Power Blower KA160", href: "https://www.ventrac.com/products/attachments/ka160" },
                { label: "Leaf Plow EF300", href: "https://www.ventrac.com/products/attachments/ef300" },
                { label: "Trencher KY400", href: "https://www.ventrac.com/products/attachments/ky400" },
                { label: "Edger ED202", href: "https://www.ventrac.com/products/attachments/ed202" },
                { label: "SOD CUTTER EC240", href: "https://www.ventrac.com/products/attachments/ec240" },
                { label: "Trailer Mower HH150", href: "https://www.ventrac.com/products/accessories/hh150" },
                { label: "Boom Mower MA900", href: "https://www.ventrac.com/products/attachments/ma900" },
                { label: "Soil Cultivator DC520", href: "https://www.ventrac.com/products/attachments/dc520" },
                { label: "Power Rake KG540", href: "#siemens" },
                { label: "Landscape Rake KR502", href: "https://www.ventrac.com/products/attachments/kr502" },
                { label: "Primary Material Bucket KM660", href: "#siemens" },
                { label: "Primary Seeder EG520", href: "https://www.ventrac.com/products/attachments/eg520" },
                { label: "Loader KM500", href: "https://www.ventrac.com/products/attachments/km500" },
                { label: "Rock Bucket W/ Grapple", href: "https://www.ventrac.com/products/attachments/he200" },
                { label: "Log Grapple KM300", href: "#siemens" },
                { label: "Stump Grinder KC220", href: "https://www.ventrac.com/products/attachments/kc220" },
                { label: "V-Blade KV552", href: "https://www.ventrac.com/products/attachments/kv552" },
                { label: "Snow Blowers", href: "https://www.ventrac.com/products/attachments/kx" },
                { label: "Narrow Broom KJ520", href: "https://www.ventrac.com/products/attachments/kj520" },
                { label: "Box Plow SP720", href: "https://www.ventrac.com/products/attachments/sp720" },
                { label: "Winter Cab KW452", href: "https://www.ventrac.com/products/accessories/kw452" },
              ],
            },
          ],
        },

//Maredo Equipment
        {
          label: "Maredo Equipment",
          children: [
            {
              label: "Maredo ST Series",
              children: [
                { label: "Maredo STrac 720-26 Traction Unit", href: "https://maredo-bv.com/products/strac-720/" },
                { label: "Maredo ST120 Flex SOD Cutter", href: "https://maredo-bv.com/products/st120-flex-sodcutter/" },
                { label: "Maredo ST160 CleanCut-SandFiller", href: "https://maredo-bv.com/products/st160-cleancut-sandfiller/" },
                { label: "Maredo ST170 FlexFraise-Mower", href: "https://maredo-bv.com/products/st170-flexfraze-mower/" },
                { label: "Maredo ST200 Flex Verticutter", href: "https://maredo-bv.com/products/st200-flex-verticutter/" },
                { label: "Maredo ST210 Vibe-Spike Aerator", href: "https://maredo-bv.com/products/st210-vibespike-aerator/" },
                { label: "Maredo ST230 High Speed Corer", href: "https://maredo-bv.com/products/st230-highspeed-corer/" },
                { label: "Maredo ST418 VibeDisc-Seeder", href: "https://maredo-bv.com/products/st418-vibedisc-seeder/" },
              ],
            },
            {
              label: "Maredo MT Series",
              children: [
                { label: "MT170 Flex-FrazeMower", href: "https://maredo-bv.com/products/mt170-flex-frazemower/" },
                { label: "MT200 Flex-Verticutter", href: "https://maredo-bv.com/products/mframe-319-mt200-verticut-heads/" },
                { label: "MT210 VibeSpike-Aerator", href: "https://maredo-bv.com/products/mframe-319-mt210-vibe-spiker-heads/" },
                { label: "MT418 VibeDisc-Seeder", href: "https://maredo-bv.com/products/mt418-vibedisc-seeder/" },
                { label: "MT424 VibeDisc-Seeder", href: "https://maredo-bv.com/products/mt424-vibespike-seeder/" },
              ],
            },
            {
              label: "Maredo GT Series",
              children: [
                { label: "GT190 Fraze-Groomer", href: "https://maredo-bv.com/products/gt190-countro-poa-remover/" },
                { label: "GT210 VibeSpiker-Aerator", href: "https://maredo-bv.com/products/gt210-vibe-spiker/" },
                { label: "GT230 HiSpeed-Corer", href: "https://maredo-bv.com/products/gt230-core-dethatcher/" },
                { label: "GT250 CountRo-Sweeper", href: "https://maredo-bv.com/products/gt250-countro-sweeper/" },
                { label: "GT300 VibeShoe-Roller", href: "https://maredo-bv.com/products/gt300-vibe-smoother/" },
                { label: "GT410 VibeSpike-SeederF", href: "https://maredo-bv.com/products/gt410-vibe-spike-overseeder-for-bent/" },
                { label: "GT424 VibeSpike-SeederC", href: "https://maredo-bv.com/products/gt424-vibe-spike-overseeder-for-fescuerye/" },
              ],
            },
          ],
        },

// Speciality Equipment
      {
  label: "Speciality Equipment",
  children: [
    {
      label: "Toro Power Clear Snow Blower",
      href: "https://www.toro.com/en/product/38752?srstid=AfmBOor3x3g95HJY2AVCZ9PhiT4B4guMynS9EZwjnHPpT9Ith5d7m",
    },
    {
      label: "Toro Hover Pro Slope Mower",
      href: "https://www.toro.com/en/product/02617",
    },
    {
      label: "Toro ProStripe 560 (Striping Mower)",
      href: "https://www.toro.com/en/product/02615",
    },
    {
      label: "Toro Greens Roller GreensPro 1260",
      href: "https://www.toro.com/en/product/08831",
    },
    // {
    //   label: "Stand-On Z Spray Nexxt Laanth Steer",
    //   href: "https://www.toro.com/en/product/34240",
    // },
    {
      label: "Air2G2 Air Injection Machine",
      href: "https://www.air2g2.com/",
    },
    {
      label: "Nordic Plow Core Solutions and Turf Plows",
      href: "https://www.nordicplow.com/",
    },
    {
      label: "Turfco T5000 Slicer Seeder",
      href: "https://www.turfco.com/t5000",
    },
    {
      label: "Toro Mechanical Edger",
      href: "https://www.toro.com/en/product/580D",
    },
  ],
},


//MATERIAL HANDLER
        {
  label: "Material Handler",
  children: [
    {
      label: "Toro MH-400 Series Broadcast Style Top Dresser",
      href: "https://www.toro.com/en/product/44539",
      
    },
    {
      label: "Toro Top Dresser 2500",
      href: "https://www.toro.com/en/product/44547",
      
    },
    {
      label: "Dakota 440 Turf Tender",
      href: "https://dakotapeat.com/equipment-database/440-turf-tender/",
      
    },
    {
      label: "Dakota 420 Turf Tender",
      href: "https://dakotapeat.com/equipment-database/420-turf-tender/",
    },
    {
      label: "Dakota 412 Turf Tender",
      href: "https://dakotapeat.com/equipment-database/412-turf-tender/",
    },
    {
      label: "Dakota 414 Turf Tender",
      href: "https://dakotapeat.com/equipment-database/414-turf-tender/",
    },
    {
      label: "Dakota 410 Turf Tender",
      href: "https://dakotapeat.com/equipment-database/410-turf-tender/",
    },
  ],
}
,

//Grinding  Equipment
        {
          label: "Grinding  Equipment",
          children: [
            {
              label: "Reel Grinders",
              href: "https://www.foleyco.com/products/642-quick-spin"
              
            },
            {
              label: "Bedknife Grinders",
              href:"https://www.foleyco.com/bedknifegrinders"
            },
          ],
        },

//Turf Sprayers
{
  label: "Turf Sprayers",
  children: [
    {
      label: "House Fed Sprayer",
      href: "https://www.rogerssprayers.com/sprayer-canada-high-quality/walk-behind-wg",
    },
    {
      label: "Toro Stand-on Spreader Sprayer ",
      href: "https://www.toro.com/en/product/34230",
    },
    {
      label: "Toro Multi Pro 5800",
      href: "https://www.toro.com/en/product/41394",
    },
  
    {
      label: "Toro Multi Pro 1750",
      href: "https://www.toro.com/en/product/41188",
    },
    {
      label: "Toro Multi Pro WM Turf Sprayer",
      href: "https://www.toro.com/en/product/41240",
    },
  ],
}
,

// Turf Renovation Equipment
        {
          label: "Turf Renovation Equipment",
          children: [
            {
              label: "Dakota – TB 220 Turf Brush",
              href: "https://campeyturfcare.com/portfolio-items/tb-220-brush/"
              
            },
            {
              label: "Campey™ – UniRake",
               href: "https://campeyturfcare.com/portfolio-items/unirake/"
              
            },
            {
              label: "Koro Field Top Maker",
               href: "https://campeyturfcare.com/koro-field-topmaker/"
            
            },
            {
              label: "KORO® Recycling Dresser",
               href: "https://campeyturfcare.com/portfolio-items/recycling-dresser/"
              
            },
            {
              label: "Campey™ – LineMarker",
               href: "https://campeyturfcare.com/portfolio-items/campey-linemarker/"
              
            },
            {
              label: "KORO® FTM®",
               href: "https://campeyturfcare.com/portfolio-items/koro-ftm-2/"
             
            },
          ],
        },

// Manual Fertilizer Spreader & Seeder
        {
          label: "Manual Fertilizer Spreader & Seeder",
          
          children: [
            {
              label: "Spyker Spreader ERGO-PRO SERIES",
              href: "https://www.spyker.com/product-category/spreaders/ergo-pro-series-2/"
            },
            {
              label: "Spyker Spreader PRO SERIES SPREADERS",
              href: "https://www.spyker.com/product-category/spreaders/pro-series-2/"
            },
            {
              label: "Gandy Drop Spreader with Push Handle",
              href: "Website is not accessible"
            },
           
          ],
        },

//Water Cleaning Equipment
        {
          label: "Water Cleaning Equipment",
          children: [
            {
              label: "RanMarine WasteShark",
              href: "https://www.ranmarine.io/products/wasteshark/"
              
            },
            {
              label: "RanMarine MegaShark",
               href: "https://www.ranmarine.io/products/megashark/"
            },
          ],
        },

// Training Equipment 
        {
          label: "Training Equipment ",
          children: [
            {
              label: "Ball Launcher Trainer",
              href: "https://www.ball-launcher.com/"
             
            },
            {
              label: "Ball Launcher Pro",
              href: "https://www.ball-launcher.com/"
             
            },
          ],
        },

// Water Removal Equipment
        {
          label: "Water Removal Equipment",
          children: [
           
                { label: "Whale Super Sopper", href: "https://supersopper.com.au/product/whale/" },
             
            
          ],
        },

//Tools
        {
          label: "Tools",
          children: [
            {
              label: "Spectrum Technologies",
              children: [
                { label: "TDR 350 Moisture Meter", href: "https://www.specmeters.com/FieldScout-TDR350-Soil-Moisture-Meter" },
              ],
            },
            {
              label: "USGA",
              children: [
                { label: "Stimpmeter", href: "https://gsshop.usga.org/product/usga-stimpmeter" },
              ],
            },
            {
              label: "Campey Imants",
              children: [
                { label: "Penetrometer", href: "https://campeyturfcare.com/portfolio-items/penetrometer/" },
              ],
            },
            {
              label: "Toro",
              children: [
                { label: "Turf Evaluator", href: "https://www.toro.com/product/04399?srsltid=AfmBOoq8oaw_iwjQaYAfZfQQCVDf2Eq-aSPNKYYaaqd6qPv5zItFrQCH" },
              ],
            },
            {
              label: "Foley",
              children: [
                { label: "Height of Cut Gauge", href: "Not available" },
              ],
            },
            // {
            //   label: "Foley",
            //   children: [
            //     { label: "Digital Height of Cut Gauge", href: "Not available" },
            //   ],
            // },
            {
              label: "Pogo",
              children: [
                { label: "Soil Moisture Meter", href: "Not available" },
              ],
            },
          ],
        },

//Digital Solutions
        {
          label: "Digital Solutions",
          children: [
            {
              label: "Intelli360™", href: "https://www.toro.com/en/product/Intelli360"
            },
            {
             label: "IntelliDash®", href: "https://www.toro.com/en/product/IntelliDash"
            },
            {
              label: "myTurf® Pro", href: "https://www.toro.com/en/product/myTurf-Pro"
            },
           
          ],
        },
      
      
      ],
    },
    // 🔹 New top-level tabs

    {
      label: "Golf accessories",
      children: [
        {
          label: "Paraide",
          children: [
  {
    label: "Deluxe Ball washer",
    href: "https://www.paraide.com/products/tee-area/ball-washer/deluxe-ball-washer/",
    img: "https://www.paraide.com/webres/catalog/xl/203-01.jpg",
  },
  {
    label: "Master Ball washer",
    href: "https://www.paraide.com/products/tee-area/ball-washer/master-ball-washer/",
    img: "https://www.paraide.com/webres/catalog/xl/205-01.jpg",
  },
  {
    label: "Cast Aluminum Tee marker",
    href: "https://www.paraide.com/products/tee-area/markers/cast-aluminum-low-profile-tee-marker/cast-aluminum-low-profile-tee-marker/",
    img: "https://www.paraide.com/webres/catalog/xl/647-1.jpg",
  },
  {
    label: "Satellite tee marker",
    href: "https://www.paraide.com/products/tee-area/markers/satellite-tee-marker/",
    img: "https://www.paraide.com/webres/catalog/xl/650-4.jpg",
  },
  {
    label: "Spherical Plastic Tee marker",
    href: "https://www.paraide.com/products/tee-area/markers/spherical-plastic-tee-marker/",
    img: "https://www.paraide.com/webres/catalog/xl/640-1.jpg",
  },
  {
    label: "Banded Tee markers",
    href: "https://www.paraide.com/products/tee-area/markers/banded-tee-marker/",
    img: "https://www.paraide.com/webres/catalog/xl/banded-tee-markers-on-courseLarge(1).jpeg",
  },
  {
    label: "Solid Regulation Fiberglass flagsticks",
    href: "https://www.paraide.com/products/green-area/regulation-flagsticks/1-2-in-solid-regulation-flagsticks/",
    img: "https://www.paraide.com/webres/Catalog/product-default-gray-th.png",
  },
  {
    label: "Tapered Fiberglass tournament flagsticks",
    href: "https://www.paraide.com/products/green-area/regulation-flagsticks/3-4-in-1-9-cm-tapered-fiberglass-tournament-flagsticks/",
    img: "https://www.paraide.com/webres/catalog/xl/730-079.jpg",
  },
  {
    label: "Aluminum Fiberglass Tournament Flagsticks",
    href: "https://www.paraide.com/products/green-area/regulation-flagsticks/1-in-2-5-cm-aluminum-fiberglass-tournament-flagsticks/",
    img: "https://www.paraide.com/webres/catalog/xl/taperedflagsticks.jpg",
  },
  {
    label: "Vinyl covered fiberglass flagsticks",
    href: "https://www.paraide.com/products/green-area/regulation-flagsticks/vinyl-covered-flagsticks-3-4-inch-tapered-7-5-foot-tall/",
    img: "https://www.paraide.com/webres/catalog/xl/701-089.jpg",
  },
  // {
  //   label: "Regulation plastic Cup",
  //   href: "https://www.paraide.com/products/green-area/regulation-flagsticks/vinyl-covered-flagsticks-3-4-inch-tapered-7-5-foot-tall/",
  //   img: "https://www.paraide.com/webres/catalog/xl/730-079-2new.jpg",
  // },
  {
    label: "Practice Green Plastic Cup",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/practice-green-plastic-putting-cup/",
    img: "https://www.paraide.com/webres/catalog/xl/930.jpg",
  },
  {
    label: "Aluminum Cup",
    href: "https://www.paraide.com/products/green-area/putting-cups/regulation-aluminum-putting-cup/",
    img: "https://www.paraide.com/webres/catalog/xl/940.jpg",
  },
  // {
  //   label: "Custom Logo Flags",
  //   href: "https://www.paraide.com/products/green-area/putting-cups/regulation-aluminum-putting-cup/",
  //   img: "https://www.paraide.com/webres/catalog/xl/930.jpg",
  // },
  {
    label: "Embroidered Flags",
    href: "https://www.paraide.com/products/green-area/regulation-flags/embroidered-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/flags3.jpg",
  },
  {
    label: "Screen Printed Flags",
    href: "https://www.paraide.com/products/green-area/regulation-flags/screen-printed-tube-style-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/EmbroideredFlags1.jpg",
  },
  {
    label: "Solid Color Flags 200 Denier",
    href: "https://www.paraide.com/products/green-area/regulation-flags/solid-flags-200-denier/#:~:text=These%20flags%20made%20of%20a%20lightweight%20200%20denier,looks%20despite%20long%20exposure%20to%20wind%20and%20sunlight.",
    img: "https://www.paraide.com/webres/catalog/xl/ScreenedFlags1.jpg",
  },
  {
    label: "Solid Color Flags 400 Denier",
    href: "https://www.paraide.com/products/green-area/regulation-flags/solid-flags-200-denier/#:~:text=These%20flags%20made%20of%20a%20lightweight%20200%20denier,looks%20despite%20long%20exposure%20to%20wind%20and%20sunlight.",
    img: "https://www.paraide.com/webres/catalog/xl/8100_m.jpg",
  },
  {
    label: "Numbered Flags 200 Denier",
    href: "https://www.paraide.com/products/green-area/regulation-flags/numbered-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/8100_m.jpg",
  },
  {
    label: "Sewn Checkered Flags",
    href: "https://www.paraide.com/products/green-area/regulation-flags/checkered-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/8302_m.jpg",
  },
  {
    label: "Jr.Flags Solid -400 Denier",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/jr-flags/#:~:text=Par%20Aide%20offers%20Jr.%20Flags%20for%20your%20practice,styles.%20Whether%20is%20solid%20colored%2C%20checkered%2C%20or%20numbered.",
    img: "https://www.paraide.com/webres/catalog/xl/8500_m.jpg",
  },
  {
    label: "Numbered 200 Denier",
    href: "https://www.paraide.com/products/green-area/regulation-flags/numbered-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/JrFlags.jpg",
  },
  {
    label: "Sewn Checkered",
    href: "https://www.paraide.com/products/green-area/regulation-flags/checkered-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/8302_m.jpg",
  },
  {
    label: "Oversized Range Flags",
    href: "https://www.paraide.com/products/green-area/regulation-flags/oversize-range-flags-solid-color/",
    img: "https://www.paraide.com/webres/catalog/xl/8500_m.jpg",
  },
  {
    label: "Jr.Flagstick marker/ flag sets",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/jr-flagstick-marker-flag-sets/",
    img: "https://www.paraide.com/webres/catalog/xl/8100.jpg",
  },
  {
    label: "Cupless jr. Flagstick marker/ flag sets",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/cupless-jr-flagstick-marker-flag-sets/",
    img: "https://www.paraide.com/webres/catalog/xl/9190-9_m.jpg",
  },
  {
    label: "Tournament Jr. marker/ Flag sets",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/tournament-jr-flagstick-marker-flag-sets/",
    img: "https://www.paraide.com/webres/catalog/xl/9190_m.jpg",
  },
  {
    label: "Rolling ball picker",
    href: "https://www.paraide.com/products/practice-area/range-markers/rolling-ball-picker/",
    img: "https://www.paraide.com/webres/catalog/xl/9110_m.jpg",
  },
  {
    label: "Practice range signs",
    href: "https://www.paraide.com/products/practice-area/range-markers/practice-range-signs/",
    img: "https://www.paraide.com/webres/catalog/xl/RollingBallPicker.jpg",
  },
  {
    label: "Sure putt practice Green system",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/sure-putt-practice-green-system/",
    img: "https://www.paraide.com/webres/catalog/xl/10200-01.jpg",
  },
  {
    label: "Marking Paint",
    href: "https://www.paraide.com/products/course-markings/paint-applicators/marking-paint/",
    img: "https://www.paraide.com/webres/catalog/xl/sure_putt_cups.jpg",
  },
  {
    label: "Paint Applicator",
    href: "https://www.paraide.com/products/course-markings/paint-applicators/paint-applicator/",
    img: "https://www.paraide.com/webres/catalog/xl/12410.jpg",
  },
  {
    label: "Double Barrel Paint Gun",
    href: "https://www.paraide.com/products/course-markings/paint-applicators/double-barrel-paint-gun/",
    img: "https://www.paraide.com/webres/catalog/xl/paint_applicator.jpg",
  },
  {
    label: "Hazard & OB Markers",
    href: "https://www.paraide.com/products/course-markings/marker-stakes/ob-markers-with-spike/",
    img: "https://www.paraide.com/webres/catalog/xl/Double%20Barrel_edited-1.jpg",
  },
  {
    label: "HIO Xact",
    href: "https://www.paraide.com/products/green-area/green-area-tools/hio-xact-hole-cutter/",
    img: "https://www.paraide.com/webres/catalog/xl/11618.jpg",
  },
  {
    label: "Hole Cuttert",
    href: "https://www.paraide.com/products/green-area/green-area-tools/par-aide-hio-hole-cutter/#:~:text=Superintendents%20everywhere%20have%20been%20won%20over%20by%20it%27s,true%2C%20all%20while%20saving%20you%20time%20and%20effort.",
    img: "https://www.paraide.com/webres/catalog/xl/hio_xact_straight_on_white_wdeepth_gauge.jpg",
  },
  {
    label: "Bubble level 1028",
    href: "https://www.paraide.com/products/green-area/green-area-tools/hio-hole-cutter-bubble-level/",
    img: "https://www.paraide.com/webres/catalog/xl/HiO_NEW.jpg",
  },
  {
    label: "Depth Gauge 1034",
    href: "https://www.paraide.com/products/green-area/green-area-tools/depth-gauge/",
    img: "https://www.paraide.com/webres/catalog/xl/HiO%20BUBBLE%20LEVEL.jpg",
  },
  {
    label: "Lever Action",
    href: "https://www.paraide.com/products/green-area/green-area-tools/lever-action-hole-cutter/",
    img: "https://www.paraide.com/webres/catalog/xl/1034.jpg",
  },
  {
    label: "Foot Extraction",
    href: "https://www.paraide.com/products/green-area/green-area-tools/foot-extraction-hole-cutter/",
    img: "https://www.paraide.com/webres/catalog/xl/1001-1.jpg",
  },
  {
    label: "Cup setter",
    href: "https://www.paraide.com/products/green-area/green-area-tools/cup-setter/",
    img: "https://www.paraide.com/webres/catalog/xl/1002-1.jpg",
  },
  {
    label: "Cup Puller",
    href: "https://www.paraide.com/products/green-area/green-area-tools/cup-puller/",
    img: "https://www.paraide.com/webres/catalog/xl/1031.jpg",
  },
  {
    label: "Cup hole trimming scissors 1036",
    href: "https://www.paraide.com/products/green-area/green-area-tools/cup-hole-trimming-scissors/",
    img: "https://www.paraide.com/webres/catalog/xl/1032.jpg",
  },
  {
    label: "360 Hole Painter",
    href: "https://www.paraide.com/products/green-area/green-area-tools/360-hole-painter-/",
    img: "https://www.paraide.com/webres/catalog/xl/scissors_800.jpg",
  },
  {
    label: "Replacement Shields",
    href: "https://www.paraide.com/products/green-area/putting-cups/ever-white-cup-replacement-sleeves/",
    img: "https://www.paraide.com/webres/catalog/xl/910.jpg",
  },
  {
    label: "Tri-Tool",
    href: "https://www.paraide.com/products/green-area/green-area-tools/tri-tool/",
    img: "https://www.paraide.com/webres/catalog/xl/ever_white_cup_sleeve.jpg",
  },
  {
    label: "Accform ACE II-17 in",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/accuform-ace-ii-with-17-inch-head/",
    img: "https://www.paraide.com/webres/catalog/xl/TriToolstudioshotwhitebackground.JPG",
  },
  {
    label: "Accform ACE II-25 in",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/accuform-ace-ii-with-25-inch-head/#:~:text=The%20most%20trusted%20bunker%20rake%20for%20tournaments%20worldwide,unsightly%20furrows%20left%20by%20rakes%20with%20straight%20ends.",
    img: "https://www.paraide.com/webres/catalog/xl/990-1.jpg",
  },
  {
    label: "Accform Accucurv II-15 in",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/accuform-accucurv/",
    img: "https://www.paraide.com/webres/catalog/xl/995-2.jpg",
  },
  {
    label: "Accform Deep face Bunker rake",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/accuform-deep-face-bunker-rake/",
    img: "https://www.paraide.com/webres/catalog/xl/997-125.jpg",
  },
  {
    label: "Maintenaace rake",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/maintenance-rake/",
    img: "https://www.paraide.com/webres/catalog/xl/deep_face_bunker_rake_on_course.jpg",
  },
  {
    label: "Accuform Acculevel",
    href: "https://www.paraide.com/products/maintenance-tools/golf-course/accuform-acculevel/",
    img: "https://www.paraide.com/webres/catalog/xl/GroundskeeperII-page30.jpg",
  },
  {
    label: "Accuform Accufix 1092",
    href: "https://www.paraide.com/products/green-area/green-area-tools/accuform-accufix/",
    img: "https://www.paraide.com/webres/catalog/xl/AccuLevel.jpg",
  },
  {
    label: "E-Z Whipping Pole",
    href: "https://www.paraide.com/products/green-area/green-area-tools/e-z-whip-whipping-pole/",
    img: "https://www.paraide.com/webres/catalog/xl/accufix_800.jpg",
  },
],
    },

    {
      label: "Standard Golf",
      children: [
        {
          label: "Numbered Practice Green Pennant set",
          href:"https://www.standardgolf.com/product/numbered-practice-green-pennant-sets/ "
         
        },
        {
          label: "Classic Ball Washer",
          href:"https://www.standardgolf.com/product/classic-ball-washer-four-ball/ "
         
        },
        {
          label: "Tour Smooth II",
          href:"https://www.standardgolf.com/product/tour-smooth-ii/ "
         
        },
        {
          label: "Aluminum Cup",
          href:"https://www.standardgolf.com/product/aluminum-cup/ "
         
        },
        {
          label: "Aluminum Practice Green Cup",
          href:"https://www.standardgolf.com/product/aluminum-practice-green-cup/ "
         
        },
        {
          label: "ST2000 Smart-Fit Cup",
          href:"https://www.standardgolf.com/product/st2000-smart-fit-cups/ "
         
        },
        {
          label: "Plastic Cup Green cup",
          href:"https://www.standardgolf.com/product/plastic-practice-green-cup/ "
         
        },
        {
          label: "Cup Setter",
          href:" https://www.standardgolf.com/product/cup-setter/"
         
        },
        {
          label: "Plain Flag",
          href:"https://www.standardgolf.com/equipment/flags/plain-flags/#:~:text=Browse%20our%20variety%20of%20plain%20golf%20course%20flags.,at%20Standard%20Golf%20bring%20to%20work%20each%20day.. "
         
        },
        {
          label: "Plain Practice Green Flag",
          href:"https://www.standardgolf.com/product/plain-practice-green-flags/#:~:text=Shop%20Plain%20Practice%20Green%20Flags%20and%20get%20fast,large%20tube%20%28fits%201%2F2%22%20or%201.3%20cm%20practice. "
         
        },
        {
          label: "Royaline Flagstick",
          href:"https://www.standardgolf.com/product/royaline-flagsticks/ "
         
        },
        {
          label: "Tournament Flagstick",
          href:" https://www.standardgolf.com/product/tournament-flagsticks/"
         
        },
        {
          label: "Magnum Hole cutter",
          href:"https://www.standardgolf.com/product/magnum-hole-cutter/"
         
        },
        {
          label: "Pro II Hole Cutter",
          href:" https://www.standardgolf.com/product/pro-ii-hole-cutter/"
         
        },
        {
          label: "COCO Drag Mat",
          href:"https://www.standardgolf.com/product/coco-fiber-drag-mat/"
         
        },
        {
          label: "ST2000 Smart-Fit Cup",
          href:" https://www.standardgolf.com/product/st2000-smart-fit-cups/"
         
        },
        {
          label: "DU Whipper",
          href:"https://www.standardgolf.com/product/du-whipper-2/ "
         
        },
        {
          label: "Greenskeeper Ball Mark Repair Tool",
          href:"https://www.standardgolf.com/product/greenskeeper-ball-mark-repair-tool/ "
         
        },
        {
          label: "Practice Green Rod",
          href:" https://www.standardgolf.com/product/practice-green-rods/"
         
        },
        {
          label: "3- Gang Unit",
          href:"https://www.standardgolf.com/product/3-gang-unit-magnum-harvester-ball-picker/ "
         
        },
        {
          label: "Dulex range Ball Crate",
          href:"https://www.standardgolf.com/product/deluxe-range-ball-crate/ "
         
        },
        {
          label: "Dulex Scrusher & Scrusher",
          href:"https://www.standardgolf.com/product/deluxe-scrusher-scrusher/ "
         
        },
        {
          label: "Plain Dimple-T marker",
          href:" https://www.standardgolf.com/product/plain-dimple-t-marker/"
         
        },
        {
          label: "Classic T-Marker",
          href:"https://www.standardgolf.com/product/classic-t-marker/ "
         
        },
        
      ],
    },

      ],
    },

    { label: "Irrigation", href: "/irrigation" },

     {
      label: "Service",
      children: [
        { label: "Service Support", href: "/service-support" },
        { label: "Toro Parts Manuals & Resources", href: "/toro-parts" },
        { label: "Toro Tines Selection Guide", href: "/toro-tines" },
        
      ],
    },

    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Toggle nested tabs
  const toggleNested = (labelPath) => {
    setOpenTabs((prev) => ({
      ...prev,
      [labelPath]: !prev[labelPath],
    }));
  };

  const Chevron = ({ open }) => (
    <svg
      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
        open ? "rotate-90" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  // Recursive renderer
  const renderNestedMenu = (items, level = 0, path = "") =>
  items.map((item, idx) => {
    // create a safer path with a separator so duplicates don't collide
    const labelPath = path ? `${path}/${item.label}` : item.label;
    // key: prefer item.id if available, otherwise fallback to labelPath + idx
    const key = item.id ? `${item.id}-${labelPath}` : `${labelPath}-${idx}`;
    const isOpen = !!openTabs[labelPath];

    return (
      <div key={key} className="px-3 h-fit py-1">
  {item.children ? (
    <>
      <button
        onClick={() => {
          // Ek hi level me ek tab open ho
          setOpenTabs((prev) => {
            const newOpenTabs = { ...prev };
            const parentKey = labelPath.split("/").slice(0, -1).join("/") || "root";

            // Agar same level par koi open hai to close kar do
            Object.keys(newOpenTabs).forEach((path) => {
              const pathParent = path.split("/").slice(0, -1).join("/") || "root";
              if (pathParent === parentKey && path !== labelPath) {
                delete newOpenTabs[path];
              }
            });

            // Current tab toggle
            if (newOpenTabs[labelPath]) {
              delete newOpenTabs[labelPath];
            } else {
              newOpenTabs[labelPath] = true;
            }

            return newOpenTabs;
          });
        }}
        className={`flex items-center h-fit justify-between relative z-50 w-full text-left ${
          level === 0
            ? "text-gray-300"
            : level === 1
            ? "text-gray-400"
            : "text-gray-500"
        } hover:text-white transition font-medium`}
      >
        {item.label}
        <Chevron open={isOpen} />
      </button>

      <div
        className={`overflow-hidden h-fit relative z-50 transition-all duration-300 ${
          isOpen ? "min-h-[10px] mt-2" : "max-h-0"
        }`}
      >
        <div
          style={{ marginLeft: `${(level + 1) * 12}px` }}
          className="h-fit border-l border-gray-700 pl-3"
        >
          {renderNestedMenu(item.children, level + 1, labelPath)}
        </div>
      </div>
    </>
  ) : (
    <a
      href={item.href}
      className={`block ${
        level === 2 ? "text-gray-400" : "text-gray-300"
      } hover:text-white transition text-sm py-1`}
    >
      {item.label}
    </a>
  )}
</div>

    );
  });


  return (
    <div className="text-white font-[font5]">
      {/* Navbar Header */}
      <header className="px-6 md:px-10 mx-auto flex justify-between bg-black/70 items-center py-4 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="text-5xl font-bold uppercase">
          <a href="/" className="  text-[#E5942D] font-[font1]">Surge <span className="text-[#76736C]"> Systems</span> </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden  md:flex space-x-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveTab(item.label)}
              onMouseLeave={() => setActiveTab(null)}
            >
              {item.children ? (
                <button
                  onClick={() => toggleNested(item.label)}
                  className="hover:text-white text-gray-300 flex items-center font-medium transition"
                > 
                  {item.label}
                  <Chevron open={activeTab === item.label} />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-white text-gray-300 transition font-medium"
                >
                  {item.label}
                </a>
              )}

              {item.children && (
                <div
                  className={`absolute left-0 top-full  w-72 bg-black/90 rounded-lg shadow-xl mt-3 py-3 z-0 transition-all duration-300 transform origin-top ${
                    activeTab === item.label
                      ? "opacity-100 scale-100 translate-y-0 visible"
                      : "opacity-0 scale-95 -translate-y-3 invisible"
                  }`}
                >
                  {renderNestedMenu(item.children)}
                 
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 left-0 w-screen h-screen bg-black z-10 transform transition-transform duration-500 ease-in-out ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-xl font-bold tracking-wide">Menu</h2>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 space-y-3 overflow-y-auto h-[calc(100vh-64px)]">
          {renderNestedMenu(navItems)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
