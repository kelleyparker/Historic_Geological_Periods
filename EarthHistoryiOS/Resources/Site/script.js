const timeline = [
  {
    label: "Hadean",
    title: "4.54-4.0 billion years ago",
    text: "Earth forms, cools, and begins the long transition from molten surface to early crust."
  },
  {
    label: "Archean",
    title: "4.0-2.5 billion years ago",
    text: "Oceans stabilize, continents begin assembling, and the earliest life appears."
  },
  {
    label: "Proterozoic",
    title: "2.5 billion-538.8 million years ago",
    text: "Oxygen rises, eukaryotes diversify, and multicellular life becomes established."
  },
  {
    label: "Phanerozoic",
    title: "538.8 million years ago to today",
    text: "Abundant fossils document the age of marine life, forests, dinosaurs, mammals, and humans."
  }
];

const eraCards = [
  {
    name: "Precambrian",
    scope: "Hadean to Proterozoic",
    image: "./assets/images/precambrian-knight.jpg",
    alt: "Public-domain painting of the early Earth before life.",
    text: "The first four billion years saw the planet form, oceans appear, the atmosphere transform, and microbial life set the foundations for every later ecosystem.",
    periods: ["Hadean", "Archean", "Proterozoic"]
  },
  {
    name: "Paleozoic",
    scope: "541-252 million years ago",
    image: "./assets/images/carboniferous-forest.jpg",
    alt: "Public-domain illustration of a Carboniferous forest.",
    text: "Marine animals exploded in diversity, vertebrates conquered land, forests spread, and the era ended with the catastrophic Permian mass extinction.",
    periods: ["Cambrian", "Ordovician", "Silurian", "Devonian", "Carboniferous", "Permian"]
  },
  {
    name: "Mesozoic",
    scope: "252-66 million years ago",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mammal_like_reptiles_by_Knight.jpg",
    alt: "Public-domain Charles R. Knight Triassic painting.",
    text: "Dinosaurs rose, pterosaurs filled the skies, marine reptiles ruled the seas, and flowering plants remade many landscapes.",
    periods: ["Triassic", "Jurassic", "Cretaceous"]
  },
  {
    name: "Cenozoic",
    scope: "66 million years ago to today",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Miocene_Plains_Mammals_by_Knight.jpg",
    alt: "Public-domain Charles R. Knight painting of Miocene mammals.",
    text: "After the extinction of non-avian dinosaurs, mammals radiated into grasslands, forests, ice-age tundra, and eventually the human world.",
    periods: ["Paleogene", "Neogene", "Quaternary"]
  }
];

const periods = [
  {
    id: "hadean",
    name: "Hadean",
    span: "4.54-4.0 billion years ago",
    era: "Precambrian",
    image: "./assets/images/precambrian-knight.jpg",
    description: "Earth accreted from solar system debris, endured heavy bombardment, and began cooling toward a crust and early oceans.",
    lede: "The Hadean is the interval of planetary assembly, magma oceans, giant impacts, and the earliest hints that a stable hydrosphere could emerge surprisingly soon after formation.",
    quickFacts: {
      atmosphere: "Dominated by volcanic gases with little or no free oxygen",
      tectonics: "Proto-crust and early recycling rather than modern-style plates",
      oceans: "Likely intermittent to persistent surface water by late Hadean",
      life: "No confirmed body fossils; possible prebiotic chemistry and earliest habitable niches"
    },
    sections: [
      {
        title: "Planetary Setting",
        body: "Earth formed out of colliding planetesimals in the young solar system. Enormous impacts, including the one associated with Moon formation, repeatedly remelted the surface. Dense metallic iron sank toward the core, lighter silicates differentiated into mantle and crust, and the heat budget remained intense from accretion, radioactivity, and tidal effects."
      },
      {
        title: "Climate and Surface Conditions",
        body: "Although the popular image of the Hadean is a permanently hellish world, zircon evidence suggests the story is more nuanced. After early magma-ocean phases, portions of the crust may have cooled enough for liquid water and weathering to occur. The atmosphere was probably thick with carbon dioxide, water vapor, sulfur species, and nitrogen, but local surface conditions could still swing between hostile and transiently clement."
      },
      {
        title: "Scientific Importance",
        body: "Because intact Hadean rocks are rare, scientists reconstruct this interval using zircon crystals, isotope systems, lunar comparisons, and impact models. The Hadean matters because it frames when habitable conditions first emerged and how quickly a rocky planet can transition from violent assembly to chemically interesting surface environments."
      }
    ],
    gallery: [
      {
        title: "Early Earth Painting",
        image: "./assets/images/precambrian-knight.jpg",
        caption: "Charles R. Knight's public-domain visualization captures the drama of an Earth before established life."
      },
      {
        title: "Blue Marble Contrast",
        image: "./assets/images/earth-blue-marble.jpg",
        caption: "Modern Earth highlights just how profound the Hadean transformation was."
      }
    ],
    resources: [
      {
        title: "Britannica: Earth history",
        link: "https://www.britannica.com/science/Earth-history",
        note: "Broad reference background on the earliest Earth and long-term planetary evolution."
      },
      {
        title: "NASA: Blue Marble 2002",
        link: "https://science.nasa.gov/resource/blue-marble-2002/",
        note: "Public-domain NASA resource for the modern Earth comparison used in the site."
      }
    ]
  },
  {
    id: "archean",
    name: "Archean",
    span: "4.0-2.5 billion years ago",
    era: "Precambrian",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Earliest_records_of_earth_life_by_Knight.jpg",
    description: "The first stable continents and microbial ecosystems emerged in warm, iron-rich seas.",
    lede: "During the Archean, Earth developed long-lived cratons, persistent oceans, and microbial biospheres that reshaped chemistry on a planetary scale.",
    quickFacts: {
      atmosphere: "Low oxygen, methane-rich and chemically reducing compared with today",
      tectonics: "Craton growth and intense volcanism on a hotter planet",
      oceans: "Iron-rich seas, hydrothermal systems, and widespread volcanic influence",
      life: "Microbial mats, stromatolites, and early metabolisms dominate"
    },
    sections: [
      {
        title: "Tectonics and Crust",
        body: "The Archean was hotter than the present, so crustal production and recycling likely operated differently from modern plate tectonics. Granitic continental nuclei called cratons stabilized during this time and later became the ancient cores of continents. Greenstone belts, komatiites, and tonalite-trondhjemite-granodiorite suites record this unusual early geodynamics."
      },
      {
        title: "Oceans and Atmosphere",
        body: "The seas held abundant dissolved iron because oxygen was scarce. Hydrothermal circulation around volcanic provinces supplied nutrients and chemical gradients. Methane and carbon dioxide likely contributed to greenhouse warming that compensated for the fainter young Sun, helping keep water liquid."
      },
      {
        title: "Biosphere",
        body: "Archean life was microbial. Stromatolites indicate communities of sediment-binding microbes, and isotopic signals imply diverse metabolic strategies including anoxygenic photosynthesis and perhaps early forms of oxygenic photosynthesis late in the eon. These biosystems set the stage for the later oxygenation of the atmosphere."
      }
    ],
    gallery: [
      {
        title: "Earliest Life Illustration",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Earliest_records_of_earth_life_by_Knight.jpg",
        caption: "Public-domain paleoart of early microbial Earth by Charles R. Knight."
      },
      {
        title: "Precambrian World",
        image: "./assets/images/precambrian-knight.jpg",
        caption: "A broad visual companion for the pre-animal Earth."
      }
    ],
    resources: [
      {
        title: "Britannica: Archean Eon",
        link: "https://www.britannica.com/science/Archean-Eon",
        note: "Educational overview of Archean geology, atmosphere, and life."
      },
      {
        title: "UCMP: Introduction to the Precambrian",
        link: "https://ucmp.berkeley.edu/precambrian/precambrian.php",
        note: "Berkeley Museum of Paleontology background on Precambrian Earth."
      }
    ]
  },
  {
    id: "proterozoic",
    name: "Proterozoic",
    span: "2.5 billion-538.8 million years ago",
    era: "Precambrian",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Early_Land_Plants_by_Knight.jpg",
    description: "Oxygen accumulated in the atmosphere, supercontinents assembled and broke apart, and complex multicellular life evolved.",
    lede: "The Proterozoic transformed Earth from a microbial planet into one with oxygenated oceans, eukaryotic cells, snowball episodes, and the first complex multicellular organisms.",
    quickFacts: {
      atmosphere: "Great Oxidation and later oxygen increases reshape chemistry",
      tectonics: "Repeated supercontinent cycles including Nuna, Rodinia, and Pannotia",
      oceans: "From stratified and often anoxic to more oxygenated marine settings",
      life: "Eukaryotes, multicellular algae, and Ediacaran organisms appear"
    },
    sections: [
      {
        title: "Oxygen Revolution",
        body: "One of the defining Proterozoic transitions is the rise of oxygen generated by photosynthetic microbes. Oxygen initially reacted with reduced minerals, especially iron, producing banded iron formations. Over time, atmospheric and oceanic chemistry shifted, changing weathering, nutrient cycles, and the kinds of metabolisms that could thrive."
      },
      {
        title: "Climate Extremes",
        body: "The Proterozoic included severe glaciations, some of which may have approached 'Snowball Earth' conditions with ice reaching low latitudes. These extreme events are central to debates about climate feedbacks, ocean circulation, and how environmental instability may have influenced biological innovation."
      },
      {
        title: "Toward Complex Life",
        body: "Eukaryotic cells evolved and diversified during the Proterozoic, followed by multicellular algae and the enigmatic Ediacaran biota. By the end of the period, ecosystems were far more structurally complex, setting the stage for the Cambrian diversification of skeleton-bearing animals."
      }
    ],
    gallery: [
      {
        title: "Early Plant Life Visualization",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Early_Land_Plants_by_Knight.jpg",
        caption: "Public-domain paleoart often used to evoke late Proterozoic and very early Paleozoic experimentation with complex life."
      },
      {
        title: "Early Earth Context",
        image: "./assets/images/precambrian-knight.jpg",
        caption: "A complementary deep-time visual for the long Precambrian world."
      }
    ],
    resources: [
      {
        title: "Britannica: Proterozoic Eon",
        link: "https://www.britannica.com/science/Proterozoic-Eon",
        note: "Accessible reference on Proterozoic geology, oxygenation, and biotic change."
      },
      {
        title: "UCMP: Precambrian Time",
        link: "https://ucmp.berkeley.edu/precambrian/precambrian.php",
        note: "Educational Berkeley resource on major Precambrian milestones."
      }
    ]
  },
  {
    id: "cambrian",
    name: "Cambrian",
    span: "538.8-485.4 million years ago",
    era: "Paleozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/CRK_Burgess_Shale_1940.jpg",
    description: "Marine ecosystems diversified rapidly during the Cambrian explosion, filling the seas with trilobites, anomalocaridids, and early chordates.",
    lede: "The Cambrian is famous for the rapid diversification of animal body plans and for fossil deposits that preserve astonishing detail from the earliest complex marine ecosystems.",
    quickFacts: {
      atmosphere: "Oxygen high enough to support widespread animal ecosystems",
      tectonics: "Fragmented continents with broad continental shelves",
      oceans: "Warm epicontinental seas dominate many regions",
      life: "Trilobites, archaeocyath reefs, anomalocaridids, early chordates"
    },
    sections: [
      {
        title: "Cambrian Explosion",
        body: "The Cambrian Explosion does not mean life suddenly appeared from nothing; rather, it marks a geologically rapid diversification of complex animal ecosystems and preservable hard parts. Ecological interactions such as predation, burrowing, and tiering became more intense, reshaping seafloor communities and evolutionary dynamics."
      },
      {
        title: "Marine Worlds",
        body: "Most Cambrian life lived in the sea. Shallow shelves hosted trilobites, brachiopods, sponge-grade reef builders, priapulid worms, and numerous enigmatic forms known from Lagerstatten. Food webs became more complex, and the trace-fossil record shows animals actively reworking sediment."
      },
      {
        title: "Fossil Record",
        body: "Sites such as the Burgess Shale and Chengjiang are crucial because they preserve soft-bodied organisms, not just shells and skeletons. These fossils reveal stem groups and experimental anatomies that help paleontologists trace the early branches of major animal clades."
      }
    ],
    gallery: [
      {
        title: "Burgess Shale Scene",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/CRK_Burgess_Shale_1940.jpg",
        caption: "Charles R. Knight's public-domain Cambrian reconstruction."
      },
      {
        title: "Walcott at Burgess Shale",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Charles_Doolittle_Walcott_Excavating_Burgess_Shale.jpg",
        caption: "Historic public-domain photograph of Burgess Shale fieldwork."
      }
    ],
    resources: [
      {
        title: "Britannica: Cambrian Period",
        link: "https://www.britannica.com/science/Cambrian-Period",
        note: "Reference overview of Cambrian environments and life."
      },
      {
        title: "Smithsonian Ocean: Cambrian Period",
        link: "https://ocean.si.edu/through-time/ancient-seas/cambrian-period",
        note: "Illustrated educational article focused on Cambrian seas."
      }
    ]
  },
  {
    id: "ordovician",
    name: "Ordovician",
    span: "485.4-443.8 million years ago",
    era: "Paleozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ordovician_Sea_Life_by_Knight.jpg",
    description: "Shallow seas teemed with brachiopods, cephalopods, and reefs before the end-Ordovician glaciation triggered a major extinction.",
    lede: "The Ordovician saw one of the great biodiversification events of the Phanerozoic, dramatically expanding marine ecosystems before ending in a major extinction tied to climate change and sea-level fall.",
    quickFacts: {
      atmosphere: "Still lower oxygen than today but increasingly supportive of complex ecosystems",
      tectonics: "Continents dispersed; Gondwana drifted toward the South Pole",
      oceans: "Broad carbonate shelves and diverse marine habitats",
      life: "Cephalopods, graptolites, trilobites, brachiopods, early vertebrates"
    },
    sections: [
      {
        title: "Great Ordovician Biodiversification Event",
        body: "After the innovations of the Cambrian, the Ordovician expanded ecological complexity further. Marine faunas became richer at local and global scales, with more specialized niches, more substantial reef systems, and stronger differentiation among paleogeographic provinces."
      },
      {
        title: "Continents and Seas",
        body: "High sea level flooded continental margins, producing extensive shallow marine environments ideal for preserving fossils. Carbonate platforms and offshore basins recorded abundant invertebrate faunas, while Gondwana's southward movement set up the glacial changes that punctuated the end of the period."
      },
      {
        title: "End-Ordovician Crisis",
        body: "The close of the Ordovician involved glaciation, sea-level regression, habitat contraction, and oceanic stress. Many marine groups suffered heavy losses, reminding us that even biodiversity-rich worlds can be abruptly destabilized by climate and oceanographic change."
      }
    ],
    gallery: [
      {
        title: "Ordovician Sea Life",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ordovician_Sea_Life_by_Knight.jpg",
        caption: "Public-domain Ordovician marine reconstruction by Charles R. Knight."
      },
      {
        title: "Ancient Marine Vision",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Duria_Antiquior.jpg",
        caption: "A classic public-domain paleocean image, used here as a visual bridge to ancient marine ecosystems."
      }
    ],
    resources: [
      {
        title: "Britannica: Ordovician Period",
        link: "https://www.britannica.com/science/Ordovician-Period",
        note: "Overview of Ordovician biodiversity, paleogeography, and extinction."
      },
      {
        title: "Smithsonian Ocean: Ordovician Period",
        link: "https://ocean.si.edu/through-time/ancient-seas/ordovician-period",
        note: "Educational marine-focused article with accessible visuals."
      }
    ]
  },
  {
    id: "silurian",
    name: "Silurian",
    span: "443.8-419.2 million years ago",
    era: "Paleozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Silurian_Period_by_Knight.jpg",
    description: "Jawed fishes expanded, reefs recovered, and the first vascular plants began to green the continents.",
    lede: "The Silurian is a recovery and rebuilding interval: reefs rebound, jawed vertebrates diversify, and terrestrial ecosystems begin moving from thin microbial veneers to rooted plant communities.",
    quickFacts: {
      atmosphere: "Gradually rising oxygen with growing terrestrial influence",
      tectonics: "Caledonian mountain-building in parts of Laurussia and Europe",
      oceans: "Warm shallow seas with reef revival and abundant invertebrates",
      life: "Jawed fishes, eurypterids, corals, early vascular plants"
    },
    sections: [
      {
        title: "Recovery and Reef Systems",
        body: "Following the end-Ordovician extinction, marine communities recovered during the Silurian. Coral-stromatoporoid reef complexes flourished again, and many classic Paleozoic invertebrate groups reestablished broad geographic ranges across warm continental seas."
      },
      {
        title: "Vertebrate Innovations",
        body: "Jawless fishes persisted, but jawed vertebrates became increasingly important in Silurian ecosystems. This marks a significant shift in predator-prey dynamics and vertebrate evolutionary potential, with lineages that would later dominate Devonian aquatic worlds."
      },
      {
        title: "Land Colonization",
        body: "Some of the earliest clear vascular plant fossils are Silurian in age. These simple forms were low and modest compared with later forests, but they represented a critical transition: rooted plant life was beginning to alter soils, weathering patterns, and atmospheric cycling on land."
      }
    ],
    gallery: [
      {
        title: "Silurian Scene",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Silurian_Period_by_Knight.jpg",
        caption: "Knight's public-domain depiction of Silurian environments."
      },
      {
        title: "Early Land Plants",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Early_Land_Plants_by_Knight.jpg",
        caption: "Public-domain image that helps illustrate the dawn of terrestrial vegetation."
      }
    ],
    resources: [
      {
        title: "Britannica: Silurian Period",
        link: "https://www.britannica.com/science/Silurian-Period",
        note: "Reference overview of Silurian geology and biota."
      },
      {
        title: "Smithsonian Ocean: Silurian Period",
        link: "https://ocean.si.edu/through-time/ancient-seas/silurian-period",
        note: "Educational article on Silurian seas, reefs, and marine life."
      }
    ]
  },
  {
    id: "devonian",
    name: "Devonian",
    span: "419.2-358.9 million years ago",
    era: "Paleozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mighty_animals_%28Page_75%29_BHL40566256.jpg",
    description: "Often called the Age of Fishes, the Devonian also saw the first forests and some of the earliest tetrapods.",
    lede: "The Devonian united marine innovation and terrestrial revolution: fishes radiated spectacularly, rooted forests spread, and some vertebrates began exploring life at the water's edge.",
    quickFacts: {
      atmosphere: "Increasing oxygen and stronger terrestrial carbon burial",
      tectonics: "Assembly of Euramerica and active mountain building",
      oceans: "Reefs, epicontinental seas, and episodes of oceanic anoxia",
      life: "Placoderms, lobe-finned fishes, first forests, earliest tetrapods"
    },
    sections: [
      {
        title: "Age of Fishes",
        body: "Jawless fishes, armored placoderms, cartilaginous fishes, ray-finned fishes, and lobe-finned fishes all flourished during the Devonian. This diversity produced complex aquatic food webs and generated many of the lineages central to later vertebrate evolution."
      },
      {
        title: "Forests and Soils",
        body: "Devonian plants increased in stature and anatomical complexity. The appearance of the earliest forests altered weathering rates, stabilized floodplains, changed river morphology, and increased organic carbon burial. These landscape transformations fed back into climate and nutrient delivery to the oceans."
      },
      {
        title: "Tetrapod Transition",
        body: "Some lobe-finned fish lineages evolved limb-like structures and respiratory strategies that supported excursions into shallow, oxygen-variable waters. The Devonian thus records a critical evolutionary threshold between fully aquatic vertebrates and the first tetrapods."
      }
    ],
    gallery: [
      {
        title: "Devonian Illustration",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mighty_animals_%28Page_75%29_BHL40566256.jpg",
        caption: "Public-domain natural-history plate suitable for Devonian marine interpretation."
      },
      {
        title: "Early Land Plants",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Early_Land_Plants_by_Knight.jpg",
        caption: "A useful companion image for the spread of Devonian terrestrial ecosystems."
      }
    ],
    resources: [
      {
        title: "Britannica: Devonian Period",
        link: "https://www.britannica.com/science/Devonian-Period",
        note: "Detailed overview of Devonian life and paleogeography."
      },
      {
        title: "Smithsonian Ocean: Devonian Period",
        link: "https://ocean.si.edu/through-time/ancient-seas/devonian-period",
        note: "Educational context for Devonian marine ecosystems."
      }
    ]
  },
  {
    id: "carboniferous",
    name: "Carboniferous",
    span: "358.9-298.9 million years ago",
    era: "Paleozoic",
    image: "./assets/images/carboniferous-forest.jpg",
    description: "Vast swamp forests laid down coal deposits, oxygen levels ran high, and giant insects shared the landscape with early amphibians and amniotes.",
    lede: "The Carboniferous combined lush coal forests, extensive wetlands, enormous arthropods, and crucial vertebrate innovations that would shape later terrestrial faunas.",
    quickFacts: {
      atmosphere: "High oxygen levels compared with the present",
      tectonics: "Ongoing collision assembling Pangaea and raising mountains",
      oceans: "Shallow tropical seas around equatorial lowlands",
      life: "Coal-swamp plants, giant arthropods, amphibians, first widespread amniotes"
    },
    sections: [
      {
        title: "Coal Forests",
        body: "Humid equatorial conditions supported vast lowland forests dominated by lycopsids, horsetails, seed ferns, and tree ferns. In many basins, abundant plant matter accumulated faster than it decayed, eventually generating the coal deposits that gave the period its name."
      },
      {
        title: "Atmospheric Effects",
        body: "Carbon burial and extensive wetlands are linked to elevated atmospheric oxygen during parts of the Carboniferous. This high-oxygen world may have supported the large body sizes seen in some arthropods, though multiple ecological and physiological factors were involved."
      },
      {
        title: "Vertebrate Land Expansion",
        body: "Amphibians diversified in wet habitats, but the amniotic egg marked a major departure from dependence on standing water for reproduction. Early amniotes could occupy drier environments more effectively, opening evolutionary pathways later taken by reptiles, synapsids, and ultimately mammals."
      }
    ],
    gallery: [
      {
        title: "Coal Forest",
        image: "./assets/images/carboniferous-forest.jpg",
        caption: "Public-domain Carboniferous forest illustration bundled with the site."
      },
      {
        title: "Early Land Plants",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Early_Land_Plants_by_Knight.jpg",
        caption: "A companion public-domain visualization for the expansion of terrestrial plant worlds."
      }
    ],
    resources: [
      {
        title: "Britannica: Carboniferous Period",
        link: "https://www.britannica.com/science/Carboniferous-Period",
        note: "Reference article on Carboniferous climate, geography, and coal swamps."
      },
      {
        title: "Britannica Summary: Carboniferous Period",
        link: "https://www.britannica.com/summary/Carboniferous-Period",
        note: "Shorter summary reference for quick comparison."
      }
    ]
  },
  {
    id: "permian",
    name: "Permian",
    span: "298.9-251.9 million years ago",
    era: "Paleozoic",
    image: "./assets/images/permian-knight.jpg",
    description: "Pangaea dominated the globe while synapsids and reptile lineages diversified before the most severe mass extinction in Earth history.",
    lede: "The Permian was a world of assembled supercontinents, widespread aridity, synapsid radiations, and finally the greatest biological crisis known from the fossil record.",
    quickFacts: {
      atmosphere: "Generally dry interiors and strong seasonal contrasts across Pangaea",
      tectonics: "Near-complete Pangaea assembly",
      oceans: "Panthalassa and marginal seas with mounting ecological stress late in the period",
      life: "Synapsids, parareptiles, conifers, and changing marine invertebrate faunas"
    },
    sections: [
      {
        title: "Pangaean Geography",
        body: "With much of Earth's landmass joined, continental interiors became expansive and often dry. Mountains rose where continental blocks collided, monsoon systems affected circulation, and habitats changed in ways that favored drought-tolerant floras and faunas in many regions."
      },
      {
        title: "Synapsid World",
        body: "Before dinosaurs dominated the land, many Permian terrestrial ecosystems were shaped by synapsids, including sail-backed pelycosaurs and later therapsids. These lineages are evolutionarily important because mammals eventually arose from synapsid ancestry."
      },
      {
        title: "End-Permian Extinction",
        body: "The terminal Permian extinction devastated marine and terrestrial ecosystems. Proposed drivers include Siberian Traps volcanism, greenhouse warming, ocean acidification, euxinia, and food-web collapse. The event reset global ecosystems and paved the way for Mesozoic recoveries."
      }
    ],
    gallery: [
      {
        title: "Permian Reptiles and Amphibians",
        image: "./assets/images/permian-knight.jpg",
        caption: "Bundled public-domain Charles R. Knight painting of Permian life."
      },
      {
        title: "Dimetrodon",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/DimetrodonKnight.jpg",
        caption: "Public-domain restoration of one of the iconic Permian synapsids."
      }
    ],
    resources: [
      {
        title: "Britannica: Permian Period",
        link: "https://www.britannica.com/science/Permian-Period",
        note: "Educational overview of Permian environments and extinction."
      },
      {
        title: "Britannica Summary: Permian Period",
        link: "https://www.britannica.com/summary/Permian-Period",
        note: "Quick summary reference."
      }
    ]
  },
  {
    id: "triassic",
    name: "Triassic",
    span: "251.9-201.4 million years ago",
    era: "Mesozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mammal_like_reptiles_by_Knight.jpg",
    description: "Recovery after the Permian extinction gave rise to early dinosaurs, pterosaurs, marine reptiles, and the first true mammals.",
    lede: "The Triassic is a recovery world: ecosystems rebuild from catastrophe, archosaurs diversify, and many of the lineages that will dominate the Mesozoic first appear.",
    quickFacts: {
      atmosphere: "Warm greenhouse climate with strong seasonality in many interiors",
      tectonics: "Pangaea still largely intact but beginning to rift",
      oceans: "Tethyan margins and marine reptile expansion",
      life: "Archosaurs, early dinosaurs, cynodont relatives, first mammals"
    },
    sections: [
      {
        title: "Aftermath of Crisis",
        body: "The early Triassic inherited ecosystems profoundly simplified by the end-Permian extinction. Low-diversity faunas, environmental stress, and repeated disturbances characterized the recovery phase before more stable and diversified communities developed later in the period."
      },
      {
        title: "Rise of Archosaurs",
        body: "Archosaurs expanded into many ecological roles and eventually outcompeted or replaced a number of other reptile lineages. Dinosaurs began as just one branch within a larger archosaur radiation that also included crocodile-line relatives and pterosaurs."
      },
      {
        title: "Origins of Modern Groups",
        body: "The Triassic is critical for mammal origins, marine reptile diversification, and the establishment of new terrestrial food webs. By the end of the period, many hallmark Mesozoic groups were already in place, ready to dominate after the end-Triassic extinction."
      }
    ],
    gallery: [
      {
        title: "Mammal-like Reptiles",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mammal_like_reptiles_by_Knight.jpg",
        caption: "Public-domain Knight image used as a Triassic anchor visual."
      },
      {
        title: "Laelaps and Predatory Drama",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Laelaps-Charles_Knight-1897.jpg",
        caption: "A classic public-domain Knight action painting for the dawn of dinosaur-centered Mesozoic ecosystems."
      }
    ],
    resources: [
      {
        title: "Britannica: Triassic Period",
        link: "https://www.britannica.com/science/Triassic-Period",
        note: "Reference article on Triassic recovery, geography, and biota."
      },
      {
        title: "Smithsonian Ocean: Triassic Period",
        link: "https://ocean.si.edu/through-time/ancient-seas/triassic-period",
        note: "Educational reading for Triassic marine and coastal settings."
      }
    ]
  },
  {
    id: "jurassic",
    name: "Jurassic",
    span: "201.4-145 million years ago",
    era: "Mesozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Duria_Antiquior.jpg",
    description: "Warm climates, lush conifer forests, giant sauropods, and rich marine reptile faunas defined much of the Jurassic world.",
    lede: "The Jurassic is the age of giant sauropods, dynamic marine reptile ecosystems, and the continued breakup of Pangaea into a more open, ocean-linked world.",
    quickFacts: {
      atmosphere: "Greenhouse conditions with no polar ice sheets",
      tectonics: "Rifting of Pangaea opens the central Atlantic",
      oceans: "Expanding seaways and thriving marine reptile faunas",
      life: "Sauropods, stegosaurs, theropods, pterosaurs, first birds"
    },
    sections: [
      {
        title: "Continental Breakup",
        body: "As Pangaea continued to rift apart, coastlines lengthened, marine gateways evolved, and regional climates shifted. These tectonic changes affected sedimentation, sea level, and biological dispersal across both land and marine systems."
      },
      {
        title: "Dinosaur Ecosystems",
        body: "Jurassic terrestrial ecosystems supported some of the most iconic dinosaurs, including giant sauropods, plated stegosaurs, and large theropod predators. Vegetation was dominated by gymnosperms such as conifers, cycads, bennettitaleans, and ginkgos."
      },
      {
        title: "Bird Origins and Marine Predators",
        body: "The Jurassic also documents the earliest birds and the flourishing of ichthyosaurs, plesiosaurs, and marine crocodylomorphs. These records underscore how evolutionary experimentation was occurring simultaneously in the air, on land, and in the sea."
      }
    ],
    gallery: [
      {
        title: "Duria Antiquior",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Duria_Antiquior.jpg",
        caption: "A classic public-domain Jurassic marine scene by Henry De la Beche."
      },
      {
        title: "Brontosaurus",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brontosaurus_by_Knight.jpg",
        caption: "Public-domain dinosaur image evoking Jurassic giant-herbivore worlds."
      }
    ],
    resources: [
      {
        title: "Britannica: Jurassic Period",
        link: "https://www.britannica.com/science/Jurassic-Period",
        note: "Detailed reference on Jurassic environments, life, and resources."
      },
      {
        title: "Smithsonian Ocean: Jurassic Period",
        link: "https://ocean.si.edu/through-time/ancient-seas/jurassic-period",
        note: "Illustrated marine-focused educational article."
      }
    ]
  },
  {
    id: "cretaceous",
    name: "Cretaceous",
    span: "145-66 million years ago",
    era: "Mesozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Late_or_Upper_Cretaceous_Seas_by_Knight.jpg",
    description: "Flowering plants spread across land, tyrannosaurs and ceratopsians thrived, and the era ended with the asteroid impact at Chicxulub.",
    lede: "The Cretaceous was a high-sea-level greenhouse world in which flowering plants reshaped terrestrial ecosystems and dinosaur faunas reached extraordinary diversity before abrupt extinction.",
    quickFacts: {
      atmosphere: "Warm greenhouse climate with high sea levels",
      tectonics: "Continued continental fragmentation and broad inland seas",
      oceans: "Rich chalk seas, plankton evolution, and marine reptile predators",
      life: "Angiosperms, ceratopsians, hadrosaurs, tyrannosaurs, mosasaurs"
    },
    sections: [
      {
        title: "Flowering Plant Revolution",
        body: "Angiosperms diversified during the Cretaceous and progressively transformed terrestrial habitats. Their ecological expansion affected insects, herbivores, fire regimes, and nutrient cycling, laying foundations for many modern-style plant-animal interactions."
      },
      {
        title: "Seaways and Dinosaurs",
        body: "High sea levels flooded continental interiors in places such as North America's Western Interior Seaway. This partitioned landmasses into provinces, influenced climate, and helped produce distinctive regional dinosaur assemblages."
      },
      {
        title: "End-Cretaceous Extinction",
        body: "The Cretaceous ended with the Chicxulub impact, which triggered darkness, food-web collapse, and worldwide environmental disruption. Non-avian dinosaurs disappeared, but avian dinosaurs, mammals, crocodilians, turtles, and many other groups persisted into the Cenozoic."
      }
    ],
    gallery: [
      {
        title: "Upper Cretaceous Seas",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Late_or_Upper_Cretaceous_Seas_by_Knight.jpg",
        caption: "Public-domain marine reconstruction for the Cretaceous."
      },
      {
        title: "Late Cretaceous Dinosaurs",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Late_Cretaceous_Dinosaurs_by_Knight.jpg",
        caption: "Public-domain Knight scene highlighting late dinosaur faunas."
      }
    ],
    resources: [
      {
        title: "Britannica: Cretaceous Period",
        link: "https://www.britannica.com/science/Cretaceous-Period",
        note: "Reference overview of Cretaceous climate, ecosystems, and extinction."
      },
      {
        title: "Smithsonian Ocean: Cretaceous Period",
        link: "https://ocean.si.edu/through-time/ancient-seas/cretaceous-period",
        note: "Educational reading on marine systems in the Cretaceous greenhouse world."
      }
    ]
  },
  {
    id: "paleogene",
    name: "Paleogene",
    span: "66-23.03 million years ago",
    era: "Cenozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oligocene_Titanotheres_by_Knight.jpg",
    description: "Mammals, birds, and modern marine groups rapidly diversified in the wake of the end-Cretaceous extinction.",
    lede: "The Paleogene records the rapid ecological filling of a world left open by the end-Cretaceous extinction, including mammal radiations, bird diversification, and major climate shifts from extreme warmth toward cooling.",
    quickFacts: {
      atmosphere: "Warm early greenhouse shifting toward later cooling",
      tectonics: "India collides with Asia; Alpine-Himalayan systems rise",
      oceans: "Modern-style marine plankton and mammals expand",
      life: "Early primates, whales, large flightless birds, diverse mammal radiations"
    },
    sections: [
      {
        title: "Post-Extinction Opportunity",
        body: "With non-avian dinosaurs gone, many ecological roles opened. Mammals diversified in body size, diet, and habitat; birds expanded into numerous niches; and marine ecosystems reorganized around new predator-prey structures and plankton communities."
      },
      {
        title: "Climate Story",
        body: "The Paleogene contains both the Paleocene-Eocene Thermal Maximum and the longer-term transition toward cooler climates culminating in Antarctic glaciation by the Oligocene. It is therefore central to understanding greenhouse forcing, carbon release, and Earth-system sensitivity."
      },
      {
        title: "Mammal Evolution",
        body: "Many iconic mammal lineages, including early horses, primates, bats, whales, and large browsing herbivores, took shape or underwent major diversification during the Paleogene. These faunas look much more modern than Mesozoic communities, even if many forms were still archaic."
      }
    ],
    gallery: [
      {
        title: "Oligocene Titanotheres",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oligocene_Titanotheres_by_Knight.jpg",
        caption: "Public-domain Cenozoic mammal image useful for the later Paleogene."
      },
      {
        title: "Basilosaurus",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Basilosaurus_painting_by_Knight.jpg",
        caption: "Public-domain marine mammal art for Paleogene ocean evolution."
      }
    ],
    resources: [
      {
        title: "Britannica: Paleogene Period",
        link: "https://www.britannica.com/science/Paleogene-Period",
        note: "Reference article on Paleogene climate and mammalian evolution."
      },
      {
        title: "Smithsonian Ocean: Paleogene Period",
        link: "https://ocean.si.edu/through-time/ancient-seas/paleogene-period",
        note: "Educational treatment of Paleogene marine history."
      }
    ]
  },
  {
    id: "neogene",
    name: "Neogene",
    span: "23.03-2.58 million years ago",
    era: "Cenozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Miocene_Plains_Mammals_by_Knight.jpg",
    description: "Grasslands expanded, grazing mammals flourished, and many familiar modern ecosystems took shape.",
    lede: "The Neogene is the age of expanding grasslands, modern mammal communities, ocean circulation changes, and the environmental backdrop to hominin origins.",
    quickFacts: {
      atmosphere: "General cooling and drying compared with early Cenozoic warmth",
      tectonics: "Continued mountain uplift and gateway reorganizations",
      oceans: "Shifts in circulation linked to changing seaways and ice growth",
      life: "Grassland mammals, apes, early hominins, modern marine faunas"
    },
    sections: [
      {
        title: "Grassland Worlds",
        body: "Grasslands expanded widely during the Neogene, especially in the Miocene and Pliocene. This biome shift favored cursorial herbivores and grazers, promoted dental adaptations such as high-crowned teeth, and reorganized predator-prey systems across several continents."
      },
      {
        title: "Ocean and Climate Reorganization",
        body: "Neogene climate was shaped by cooling trends, intensification of polar ice, and changes in marine circulation tied to tectonic rearrangements. These developments influenced productivity, upwelling systems, and regional aridity on land."
      },
      {
        title: "Toward the Human Story",
        body: "Apes diversified during the Miocene, and the first hominins appeared later in the Neogene. This interval provides the evolutionary and environmental context for the eventual emergence of Homo in the Quaternary."
      }
    ],
    gallery: [
      {
        title: "Miocene Plains Mammals",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Miocene_Plains_Mammals_by_Knight.jpg",
        caption: "Public-domain Knight painting of Neogene mammal communities."
      },
      {
        title: "Pliocene Mammals",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pliocene_Rhinoceros,_Mastodonts,_Oreodonts_by_Knight.jpg",
        caption: "Public-domain image for later Neogene terrestrial faunas."
      }
    ],
    resources: [
      {
        title: "Britannica: Neogene Period",
        link: "https://www.britannica.com/science/Neogene-Period",
        note: "Overview of Neogene environments, faunas, and climate."
      },
      {
        title: "Britannica: Miocene Epoch",
        link: "https://www.britannica.com/science/Miocene-Epoch",
        note: "Helpful companion reading for the core Neogene mammal world."
      }
    ]
  },
  {
    id: "quaternary",
    name: "Quaternary",
    span: "2.58 million years ago to today",
    era: "Cenozoic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rancho_La_Brea_Tar_Pools_by_Knight.jpg",
    description: "Repeated ice ages transformed climates and habitats while Homo emerged and spread across the planet.",
    lede: "The Quaternary is an intensely dynamic interval of glacial cycles, megafaunal communities, sea-level swings, and the global ecological expansion of humans.",
    quickFacts: {
      atmosphere: "Ice-age oscillations paced by orbital cycles",
      tectonics: "Modern continental layout with active mountain, rift, and subduction zones",
      oceans: "Sea level repeatedly rose and fell as ice sheets waxed and waned",
      life: "Mammoths, giant ground sloths, saber-toothed cats, Homo"
    },
    sections: [
      {
        title: "Glacial Rhythms",
        body: "The Quaternary is marked by repeated glacial-interglacial cycles that altered sea level, vegetation zones, drainage networks, and species distributions. Ice sheets expanded across high latitudes and mountain belts, then retreated, repeatedly remodeling Earth’s surface."
      },
      {
        title: "Megafauna and Ecosystems",
        body: "Pleistocene landscapes hosted large herbivores and predators including mammoths, mastodons, giant bison, saber-toothed cats, and dire wolves in many regions. These faunas interacted with fluctuating climates and rapidly changing habitats, creating highly dynamic ecosystems."
      },
      {
        title: "Humans in Deep Time",
        body: "The Quaternary includes the emergence and global spread of Homo sapiens. Human fire use, hunting, technology, migration, and eventually agriculture transformed landscapes and food webs, making the Quaternary the bridge between natural deep-time Earth systems and the historical world."
      }
    ],
    gallery: [
      {
        title: "Rancho La Brea Tar Pools",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rancho_La_Brea_Tar_Pools_by_Knight.jpg",
        caption: "Public-domain image of iconic late Quaternary megafaunal settings."
      },
      {
        title: "Columbian Mammoth",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbian_mammoth.jpg",
        caption: "Public-domain mammoth restoration for Quaternary megafauna."
      }
    ],
    resources: [
      {
        title: "Britannica: Quaternary Period",
        link: "https://www.britannica.com/science/Quaternary-Period",
        note: "Reference overview of Quaternary climate cycles and faunas."
      },
      {
        title: "Britannica: Pleistocene Epoch",
        link: "https://www.britannica.com/science/Pleistocene-Epoch",
        note: "Useful companion reading for ice-age climates and mammal communities."
      }
    ]
  }
];

const sources = [
  {
    title: "Blue Marble 2002",
    credit: "NASA Earth Observatory",
    link: "https://science.nasa.gov/resource/blue-marble-2002/",
    note: "Public-domain NASA Earth image used for the animated background orb."
  },
  {
    title: "The World Before There Was Life",
    credit: "Charles R. Knight via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:The_World_Before_There_was_Life_by_Knight.jpg",
    note: "Public-domain paleoart for the early Earth and Precambrian section."
  },
  {
    title: "An Ancient Coal (Carboniferous) Forest",
    credit: "Geoffrey Martin via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Fig._45-_An_Ancient_Coal_(Carboniferous)_Forest_-_DPLA_-_28fd78ece2f955f14cf8d6d2456716bd.jpg",
    note: "Public-domain Carboniferous forest illustration."
  },
  {
    title: "Permian Reptiles and Amphibians",
    credit: "Charles R. Knight via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Permian_Reptiles_and_Amphibians_by_Knight.jpg",
    note: "Public-domain painting for the late Paleozoic."
  },
  {
    title: "Mammal-like Reptiles",
    credit: "Charles R. Knight via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Mammal_like_reptiles_by_Knight.jpg",
    note: "Public-domain Triassic restoration used in the Mesozoic section."
  },
  {
    title: "Duria Antiquior",
    credit: "Henry De la Beche via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Duria_Antiquior.jpg",
    note: "Nineteenth-century public-domain marine reptile scene used for Jurassic and early marine-life visuals."
  },
  {
    title: "Late or Upper Cretaceous Seas",
    credit: "Charles R. Knight via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Late_or_Upper_Cretaceous_Seas_by_Knight.jpg",
    note: "Public-domain Cretaceous marine scene."
  },
  {
    title: "Miocene Plains Mammals",
    credit: "Charles R. Knight via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Miocene_Plains_Mammals_by_Knight.jpg",
    note: "Public-domain Cenozoic mammal scene."
  },
  {
    title: "Britannica Geologic Time Articles",
    credit: "Encyclopaedia Britannica",
    link: "https://www.britannica.com/science/geologic-time",
    note: "Educational reference family used for further reading links across the article panel."
  }
];

const ribbon = document.querySelector("#timeline-ribbon");
const eraGrid = document.querySelector("#era-grid");
const periodGrid = document.querySelector("#period-grid");
const sourceList = document.querySelector("#source-list");
const articlePanel = document.querySelector("#article-panel");

timeline.forEach((item) => {
  const node = document.createElement("article");
  node.className = "ribbon-item";
  node.innerHTML = `
    <span>${item.label}</span>
    <strong>${item.title}</strong>
    <p>${item.text}</p>
  `;
  ribbon.appendChild(node);
});

eraCards.forEach((era) => {
  const node = document.createElement("article");
  node.className = "era-card";
  node.innerHTML = `
    <div class="card-visual" role="img" aria-label="${era.alt}" style="background-image:
      linear-gradient(180deg, rgba(28, 15, 10, 0.08), rgba(28, 15, 10, 0.7)),
      url('${era.image}');"></div>
    <div class="card-copy">
      <span class="card-meta">${era.scope}</span>
      <h3>${era.name}</h3>
      <p>${era.text}</p>
      <div class="period-list">
        ${era.periods.map((period) => `<span class="period-pill">${period}</span>`).join("")}
      </div>
    </div>
  `;
  eraGrid.appendChild(node);
});

function renderArticle(period) {
  articlePanel.classList.remove("is-empty");
  articlePanel.innerHTML = `
    <div class="article-panel__hero">
      <div class="article-panel__media" style="background-image:
        linear-gradient(180deg, rgba(25, 14, 10, 0.1), rgba(25, 14, 10, 0.74)),
        url('${period.image}');"></div>
      <div class="article-panel__intro">
        <span class="card-meta">${period.era}</span>
        <h3>${period.name}</h3>
        <p class="period-card__age">${period.span}</p>
        <p class="article-panel__lede">${period.lede}</p>
        <div class="article-panel__quickfacts">
          ${Object.entries(period.quickFacts)
            .map(
              ([key, value]) => `
                <div class="quickfact">
                  <span>${key}</span>
                  <strong>${value}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>

    <div class="article-panel__grid">
      ${period.sections
        .map(
          (section) => `
            <section class="article-section">
              <h3>${section.title}</h3>
              <p>${section.body}</p>
            </section>
          `
        )
        .join("")}
    </div>

    <div class="gallery-grid">
      ${period.gallery
        .map(
          (item) => `
            <article class="gallery-card">
              <div class="gallery-card__image" style="background-image:
                linear-gradient(180deg, rgba(25, 14, 10, 0.06), rgba(25, 14, 10, 0.55)),
                url('${item.image}');"></div>
              <div class="gallery-card__copy">
                <h4>${item.title}</h4>
                <p>${item.caption}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>

    <section class="resource-list">
      <h3>Further Reading</h3>
      <div class="resource-links">
        ${period.resources
          .map(
            (resource) => `
              <a href="${resource.link}" target="_blank" rel="noreferrer">
                <strong>${resource.title}</strong>
                <span>${resource.note}</span>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

periods.forEach((period) => {
  const node = document.createElement("article");
  node.className = "period-card";
  node.innerHTML = `
    <div class="card-visual" role="img" aria-label="${period.name}" style="background-image:
      linear-gradient(180deg, rgba(25, 14, 10, 0.05), rgba(25, 14, 10, 0.76)),
      url('${period.image}');"></div>
    <div class="card-copy">
      <span class="card-meta">${period.era}</span>
      <h3>${period.name}</h3>
      <p class="period-card__age">${period.span}</p>
      <p>${period.description}</p>
      <button class="period-card__button" type="button" data-period="${period.id}">Open detailed article</button>
    </div>
  `;
  periodGrid.appendChild(node);
});

periodGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-period]");
  if (!button) {
    return;
  }

  const period = periods.find((entry) => entry.id === button.dataset.period);
  if (!period) {
    return;
  }

  renderArticle(period);
  document.querySelector("#deep-dive").scrollIntoView({ behavior: "smooth", block: "start" });
});

sources.forEach((source) => {
  const node = document.createElement("article");
  node.className = "source-item";
  node.innerHTML = `
    <h3>${source.title}</h3>
    <p>${source.note}</p>
    <p>Credit: ${source.credit}</p>
    <a href="${source.link}" target="_blank" rel="noreferrer">Open source record</a>
  `;
  sourceList.appendChild(node);
});
