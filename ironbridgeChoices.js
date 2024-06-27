// ironbridgeChoices.js
const ironbridgeChoices = [
    {
        id: 1,
        year: 1709,
        text: "Support Abraham Darby I's method of smelting iron ore using coke?",
        yes: {
          consequence: "Abraham Darby I's successful smelting of iron ore using coke revolutionizes the iron industry, making Coalbrookdale the birthplace of the Industrial Revolution. This breakthrough leads to increased iron production and attracts innovators to the area.",
          effects: { industry: 20, innovation: 15, environment: -10, population: 5, treasury: 10 }
        },
        no: {
          consequence: "Rejecting Darby's coke smelting method keeps Coalbrookdale reliant on charcoal, leading to deforestation and limiting iron production. This decision causes the area to miss its chance to lead the iron industry's transformation.",
          effects: { industry: -10, innovation: -15, environment: -5, population: -5, treasury: -5 }
        }
      },
      {
        id: 2,
        year: 1712,
        text: "Install Thomas Newcomen's atmospheric engine in Coalbrookdale mine?",
        yes: {
          consequence: "Thomas Newcomen's atmospheric engine dramatically improves water pumping efficiency, allowing for deeper mining and increased coal production. This adoption of steam power marks a turning point in industrial capability.",
          effects: { industry: 15, innovation: 20, environment: -5, population: 10, treasury: -15 }
        },
        no: {
          consequence: "Choosing not to install Newcomen's engine forces continued reliance on horse-powered pumps, limiting mining depth and coal output. This decision slows Coalbrookdale's industrial progress compared to areas embracing steam power.",
          effects: { industry: -10, innovation: -15, environment: 5, population: -5, treasury: 5 }
        }
      },
      {
        id: 3,
        year: 1750,
        text: "Implement steam-powered machinery in Ironbridge's factories?",
        yes: {
          consequence: "The implementation of steam-powered machinery dramatically increases production efficiency, positioning Ironbridge as a leader in industrial innovation. This decision marks a pivotal moment in the transition from manual to mechanized labor.",
          effects: { industry: 20, innovation: 15, environment: -10, population: 5, treasury: -20 }
        },
        no: {
          consequence: "Rejecting steam power maintains traditional production methods, preserving jobs in the short term but significantly hampering Ironbridge's competitiveness in the rapidly evolving industrial landscape.",
          effects: { industry: -15, innovation: -10, environment: 5, population: 10, treasury: 5 }
        }
      },
      {
        id: 4,
        year: 1760,
        text: "Construct worker housing near the factories?",
        yes: {
          consequence: "The construction of worker housing near the factories improves living conditions and reduces commute times, leading to increased productivity and worker loyalty. This decision reflects a growing understanding of the link between worker welfare and industrial output.",
          effects: { industry: 10, innovation: 5, environment: -5, population: 15, treasury: -15 }
        },
        no: {
          consequence: "The lack of nearby housing forces workers to live in overcrowded, distant slums, resulting in poor health, low morale, and decreased productivity. This situation highlights the social challenges of rapid industrialization.",
          effects: { industry: -5, innovation: -5, environment: -10, population: -15, treasury: 10 }
        }
      },
      {
        id: 5,
        year: 1770,
        text: "Invest in a canal network for transportation of goods?",
        yes: {
          consequence: "Investing in a canal network significantly improves transportation of raw materials and finished goods, boosting trade and reducing costs. This infrastructure development cements Ironbridge's position as a key industrial hub.",
          effects: { industry: 15, innovation: 10, environment: -10, population: 5, treasury: -25 }
        },
        no: {
          consequence: "Relying on existing road networks limits transportation capacity and increases costs, hindering Ironbridge's ability to compete with other industrial centers that have embraced canal transportation.",
          effects: { industry: -10, innovation: -5, environment: 5, population: -5, treasury: 10 }
        }
      },
      {
        id: 6,
        year: 1775,
        text: "Support Abraham Darby III's plan to build the world's first iron bridge?",
        yes: {
          consequence: "Supporting Abraham Darby III's ambitious plan to build the world's first iron bridge results in an architectural marvel that becomes a symbol of the Industrial Revolution. This daring project cements Ironbridge's place in history and engineering.",
          effects: { industry: 20, innovation: 25, environment: -10, population: 15, treasury: -30 }
        },
        no: {
          consequence: "Opting for a traditional stone bridge due to concerns about iron's structural integrity results in a functional but unremarkable crossing. Ironbridge misses its chance to create an iconic symbol of industrial progress.",
          effects: { industry: -15, innovation: -20, environment: 5, population: -5, treasury: 10 }
        }
      },
      {
        id: 7,
        year: 1780,
        text: "Establish a public education system for workers and their children?",
        yes: {
          consequence: "The establishment of a public education system provides a steady supply of literate, numerate workers, driving innovation and improving overall workforce quality. This decision reflects the growing importance of education in an industrializing society.",
          effects: { industry: 10, innovation: 20, environment: 0, population: 15, treasury: -20 }
        },
        no: {
          consequence: "The lack of public education results in a shortage of skilled workers, limiting technological advancement and economic growth. This situation perpetuates social inequality and hampers Ironbridge's long-term development.",
          effects: { industry: -5, innovation: -15, environment: 0, population: -10, treasury: 10 }
        }
      },
      {
        id: 8,
        year: 1785,
        text: "Implement safety regulations in factories?",
        yes: {
          consequence: "Implementing safety regulations in factories reduces accidents and improves worker morale, leading to increased productivity and a better public image. This decision marks a shift towards prioritizing worker welfare in industrial settings.",
          effects: { industry: 5, innovation: 10, environment: 5, population: 15, treasury: -10 }
        },
        no: {
          consequence: "The absence of safety measures leads to frequent accidents and public outcry, damaging Ironbridge's reputation and workforce. This situation reflects the often-overlooked human cost of rapid industrialization.",
          effects: { industry: -5, innovation: -5, environment: -10, population: -20, treasury: 5 }
        }
      },
      {
        id: 9,
        year: 1790,
        text: "Diversify into chemical manufacturing?",
        yes: {
          consequence: "Diversifying into chemical manufacturing opens new markets and creates high-value products, strengthening Ironbridge's economic base. This decision showcases the region's ability to adapt to new industrial opportunities.",
          effects: { industry: 15, innovation: 20, environment: -15, population: 5, treasury: -15 }
        },
        no: {
          consequence: "Focusing solely on traditional industries leaves Ironbridge vulnerable to market fluctuations and missing out on the burgeoning chemical sector, potentially leading to economic stagnation.",
          effects: { industry: -10, innovation: -15, environment: 5, population: -5, treasury: 10 }
        }
      },
      {
        id: 10,
        year: 1795,
        text: "Create public parks and green spaces in Ironbridge?",
        yes: {
          consequence: "The creation of public parks and green spaces improves air quality and provides recreational areas for workers, enhancing overall quality of life. This decision reflects a growing awareness of the importance of urban planning in industrial towns.",
          effects: { industry: -5, innovation: 5, environment: 20, population: 15, treasury: -15 }
        },
        no: {
          consequence: "The lack of green spaces contributes to poor air quality and limited recreational opportunities, negatively impacting worker health and satisfaction. This situation highlights the environmental challenges faced by industrial centers.",
          effects: { industry: 5, innovation: -5, environment: -15, population: -10, treasury: 10 }
        }
      },

      {
        id: 11,
        year: 1792,
        text: "Invest in William Murdoch's coal gas lighting system?",
        yes: {
          consequence: "Investing in gas lighting for streets and factories extends working hours and improves safety, boosting productivity and urban development. This decision marks a significant step in modernizing Ironbridge's infrastructure.",
          effects: { industry: 15, innovation: 20, environment: -10, population: 10, treasury: -20 }
        },
        no: {
          consequence: "Continuing to rely on candlelight and oil lamps limits working hours and urban growth, putting Ironbridge at a disadvantage compared to cities embracing newer lighting technologies.",
          effects: { industry: -10, innovation: -15, environment: 5, population: -5, treasury: 10 }
        }
      },
      {
        id: 12,
        year: 1800,
        text: "Establish a local newspaper?",
        yes: {
          consequence: "The establishment of a local newspaper fosters community engagement and spreads knowledge of industrial advancements, promoting a sense of local pride and identity. This decision reflects the growing importance of mass communication in industrial society.",
          effects: { industry: 5, innovation: 10, environment: 0, population: 15, treasury: -10 }
        },
        no: {
          consequence: "Without a local news source, information spreads slowly and community cohesion suffers, hindering the exchange of ideas and slowing social progress in Ironbridge.",
          effects: { industry: -5, innovation: -10, environment: 0, population: -10, treasury: 5 }
        }
      },
      {
        id: 13,
        year: 1805,
        text: "Implement a sewage system in Ironbridge?",
        yes: {
          consequence: "Implementing a sewage system greatly improves public health and sanitation, reducing disease outbreaks and enhancing the town's livability. This decision demonstrates a proactive approach to urban infrastructure development.",
          effects: { industry: 10, innovation: 15, environment: 20, population: 25, treasury: -30 }
        },
        no: {
          consequence: "The lack of proper sewage management leads to frequent disease outbreaks and environmental degradation, severely impacting public health and Ironbridge's reputation as a modern industrial center.",
          effects: { industry: -10, innovation: -5, environment: -25, population: -20, treasury: 15 }
        }
      },
      {
        id: 14,
        year: 1810,
        text: "Establish a fire brigade for Ironbridge?",
        yes: {
          consequence: "Establishing a fire brigade enhances safety in the rapidly growing industrial areas, reducing property damage and improving investor confidence. This decision reflects the increasing complexity of urban management in industrial towns.",
          effects: { industry: 10, innovation: 5, environment: 5, population: 15, treasury: -15 }
        },
        no: {
          consequence: "Without a dedicated fire service, factory fires cause significant economic losses and safety hazards, deterring investment and hindering Ironbridge's industrial growth.",
          effects: { industry: -15, innovation: -5, environment: -10, population: -10, treasury: 10 }
        }
      },
      {
        id: 15,
        year: 1815,
        text: "Invest in research and development of new metallurgical techniques?",
        yes: {
          consequence: "Investing in research and development of new metallurgical techniques keeps Ironbridge at the forefront of the iron industry, attracting skilled workers and investors. This decision underscores the importance of continuous innovation in maintaining industrial leadership.",
          effects: { industry: 20, innovation: 25, environment: -10, population: 5, treasury: -25 }
        },
        no: {
          consequence: "Relying on traditional metallurgical methods causes Ironbridge to fall behind competitors, losing its edge in the iron industry and potentially leading to economic decline.",
          effects: { industry: -15, innovation: -20, environment: 5, population: -5, treasury: 15 }
        }
      },
      {
        id: 16,
        year: 1820,
        text: "Create a public library?",
        yes: {
          consequence: "The creation of a public library promotes literacy and self-education among workers, fostering a culture of learning and innovation. This decision reflects the growing recognition of knowledge as a driver of industrial progress.",
          effects: { industry: 5, innovation: 15, environment: 0, population: 20, treasury: -15 }
        },
        no: {
          consequence: "The absence of public learning resources limits worker skill development and social mobility, potentially slowing technological advancement and perpetuating class divides in Ironbridge.",
          effects: { industry: -5, innovation: -10, environment: 0, population: -15, treasury: 10 }
        }
      },
      {
        id: 17,
        year: 1825,
        text: "Implement child labor restrictions?",
        yes: {
          consequence: "Implementing child labor restrictions improves long-term workforce health and education, despite short-term production decreases. This decision marks a significant step towards more ethical labor practices in the industrial era.",
          effects: { industry: -10, innovation: 10, environment: 5, population: 20, treasury: -15 }
        },
        no: {
          consequence: "Continuing to employ child labor maintains short-term production levels but leads to a future workforce with poor health and limited skills, potentially damaging Ironbridge's long-term economic prospects.",
          effects: { industry: 10, innovation: -15, environment: -5, population: -25, treasury: 20 }
        }
      },
      {
        id: 18,
        year: 1828,
        text: "Adopt James Beaumont Neilson's hot blast technique for blast furnaces?",
        yes: {
          consequence: "Implementing the hot blast technique significantly reduces fuel consumption in blast furnaces. This adoption of cutting-edge technology keeps Ironbridge's iron production costs competitive.",
          effects: { industry: 20, innovation: 15, environment: 10, population: 5, treasury: -10 }
        },
        no: {
          consequence: "Deciding against adopting the hot blast technique leads to higher fuel consumption and production costs, making Ironbridge's iron more expensive compared to competitors who embrace this innovation.",
          effects: { industry: -15, innovation: -10, environment: -15, population: -5, treasury: 5 }
        }
      },
      {
        id: 19,
        year: 1830,
        text: "Establish the Coalbrookdale Company School?",
        yes: {
          consequence: "The establishment of the Coalbrookdale Company School provides education for workers' children, improving literacy and creating a more skilled future workforce. This investment in education enhances long-term industrial competitiveness.",
          effects: { industry: 10, innovation: 20, environment: 0, population: 15, treasury: -20 }
        },
        no: {
          consequence: "Deciding against founding the Coalbrookdale Company School leaves workers' children with limited educational opportunities, potentially creating a skills gap in the future workforce and hindering social mobility.",
          effects: { industry: -5, innovation: -15, environment: 0, population: -10, treasury: 15 }
        }
      },
      {
        id: 20,
        year: 1832,
        text: "Support the construction of workers' housing by the Darby family?",
        yes: {
          consequence: "Supporting the construction of workers' housing in Coalbrookdale improves living conditions and worker loyalty. This decision reflects a progressive approach to labor relations in the early industrial era.",
          effects: { industry: 15, innovation: 5, environment: -5, population: 25, treasury: -25 }
        },
        no: {
          consequence: "Neglecting worker housing needs leads to overcrowding and poor living conditions, resulting in health issues and lower worker morale. This shortsighted decision creates social tensions in the rapidly growing industrial community.",
          effects: { industry: -10, innovation: -5, environment: -10, population: -20, treasury: 20 }
        }
      },
      {
        id: 21,
        year: 1834,
        text: "Establish the Ironbridge Mechanics' Institute?",
        yes: {
          consequence: "Supporting the establishment of the Ironbridge Mechanics' Institute provides educational opportunities for working adults, fostering a culture of lifelong learning and innovation. This decision enhances the skills and knowledge base of the local workforce.",
          effects: { industry: 15, innovation: 25, environment: 0, population: 10, treasury: -20 }
        },
        no: {
          consequence: "Deciding against founding the Mechanics' Institute limits educational opportunities for workers, potentially slowing technological adoption and innovation in Ironbridge's industries as the workforce lacks access to ongoing education.",
          effects: { industry: -10, innovation: -20, environment: 0, population: -5, treasury: 15 }
        }
      },
      {
        id: 22,
        year: 1840,
        text: "Adopt Edmund Cartwright's power loom technology for textile manufacturing?",
        yes: {
          consequence: "Adopting Edmund Cartwright's power loom technology allows Ironbridge to diversify into textile manufacturing. This decision broadens the area's industrial base and creates new employment opportunities.",
          effects: { industry: 20, innovation: 15, environment: -10, population: 15, treasury: -25 }
        },
        no: {
          consequence: "Focusing solely on metalworking and neglecting textile innovations like Cartwright's power loom leaves Ironbridge's economy less diversified and more vulnerable to fluctuations in the metal market.",
          effects: { industry: -15, innovation: -10, environment: 5, population: -10, treasury: 10 }
        }
      },
      {
        id: 23,
        year: 1842,
        text: "Implement James Nasmyth's steam hammer in Ironbridge's forges?",
        yes: {
          consequence: "Implementing James Nasmyth's steam hammer significantly improves the efficiency and precision of large-scale metalworking. This adoption of advanced machinery maintains the area's industrial edge.",
          effects: { industry: 25, innovation: 20, environment: -5, population: 5, treasury: -30 }
        },
        no: {
          consequence: "Choosing not to adopt Nasmyth's steam hammer means continued reliance on manual hammering techniques, limiting the size and complexity of metal components that can be produced in Ironbridge.",
          effects: { industry: -20, innovation: -15, environment: 0, population: -5, treasury: 15 }
        }
      },
      {
        id: 24,
        year: 1845,
        text: "Invest in a local technical college?",
        yes: {
          consequence: "Investing in a local technical college provides a steady stream of skilled engineers and technicians, driving technological innovation in Ironbridge's industries. This decision highlights the growing importance of specialized education in the industrial age.",
          effects: { industry: 15, innovation: 25, environment: 0, population: 15, treasury: -25 }
        },
        no: {
          consequence: "The lack of technical education forces reliance on imported expertise, slowing technological advancement and limiting opportunities for local workforce development in Ironbridge.",
          effects: { industry: -10, innovation: -20, environment: 0, population: -10, treasury: 20 }
        }
      },
      {
        id: 25,
        year: 1850,
        text: "Participate in the Great Exhibition at Crystal Palace?",
        yes: {
          consequence: "Participating in the Great Exhibition showcases Ironbridge's industrial achievements to a global audience, attracting investors and skilled workers. This decision enhances the town's reputation as a leader in the Industrial Revolution.",
          effects: { industry: 20, innovation: 15, environment: 0, population: 10, treasury: -20 }
        },
        no: {
          consequence: "Missing the opportunity to showcase at the Great Exhibition reduces Ironbridge's visibility on the global stage. Other industrial centers gain more prominence, potentially drawing away investments and talent.",
          effects: { industry: -15, innovation: -10, environment: 0, population: -5, treasury: 10 }
        }
      },
      {
        id: 26,
        year: 1853,
        text: "Establish the Coalbrookdale Literary and Scientific Institution?",
        yes: {
          consequence: "Supporting the establishment of the Coalbrookdale Literary and Scientific Institution fosters intellectual growth and scientific inquiry among workers and managers. This decision cultivates a culture of innovation and continuous improvement in Ironbridge.",
          effects: { industry: 10, innovation: 25, environment: 0, population: 15, treasury: -20 }
        },
        no: {
          consequence: "Deciding against founding the Literary and Scientific Institution limits opportunities for intellectual engagement and scientific discourse, potentially slowing the adoption of new ideas and technologies in Ironbridge's industries.",
          effects: { industry: -5, innovation: -20, environment: 0, population: -10, treasury: 15 }
        }
      },
      {
        id: 27,
        year: 1856,
        text: "Adopt Henry Bessemer's converter process for steel production?",
        yes: {
          consequence: "The introduction of the Bessemer process for steel production is quickly adopted, allowing Ironbridge to transition from iron to steel manufacturing. This pivotal decision ensures the area's continued relevance in the metal industry.",
          effects: { industry: 30, innovation: 25, environment: -15, population: 10, treasury: -35 }
        },
        no: {
          consequence: "Hesitating to adopt the Bessemer process keeps Ironbridge focused on iron production while competitors move into steel, gradually eroding the area's dominance in the metal industry as demand for steel increases.",
          effects: { industry: -25, innovation: -20, environment: 5, population: -15, treasury: 20 }
        }
      },
      {
        id: 28,
        year: 1856,
        text: "Establish the Coalbrookdale School of Art?",
        yes: {
          consequence: "The establishment of the Coalbrookdale School of Art nurtures a new generation of industrial designers, blending artistry with manufacturing. This decision enhances the aesthetic appeal and marketability of Ironbridge's products.",
          effects: { industry: 15, innovation: 20, environment: 5, population: 10, treasury: -15 }
        },
        no: {
          consequence: "Choosing not to found the Coalbrookdale School of Art results in a lack of local industrial design talent, potentially leading to Ironbridge's products being perceived as functional but lacking in aesthetic appeal compared to competitors.",
          effects: { industry: -10, innovation: -15, environment: 0, population: -5, treasury: 10 }
        }
      },
      {
        id: 29,
        year: 1856,
        text: "Implement William Siemens' regenerative furnace design?",
        yes: {
          consequence: "Implementing William Siemens' regenerative furnace design significantly improves fuel efficiency in Ironbridge's iron and steel production. This decision maintains the area's competitiveness in an increasingly energy-conscious industrial landscape.",
          effects: { industry: 25, innovation: 20, environment: 15, population: 5, treasury: -30 }
        },
        no: {
          consequence: "Delaying the adoption of Siemens' regenerative furnace technology results in higher fuel consumption and production costs, making Ironbridge's metal products less competitive in the market.",
          effects: { industry: -20, innovation: -15, environment: -20, population: -5, treasury: 15 }
        }
      },
      {
        id: 30,
        year: 1862,
        text: "Support the construction of the Severn Valley Railway?",
        yes: {
          consequence: "Supporting the construction of the Severn Valley Railway greatly improves transportation links with other industrial centers. This investment in rail infrastructure enhances Ironbridge's connectivity and economic prospects.",
          effects: { industry: 25, innovation: 15, environment: -10, population: 20, treasury: -40 }
        },
        no: {
          consequence: "Opposing the Severn Valley Railway project leaves Ironbridge reliant on canal and road transport, gradually isolating it from the growing national rail network and limiting its ability to compete with better-connected industrial areas.",
          effects: { industry: -20, innovation: -10, environment: 5, population: -15, treasury: 25 }
        }
      },
      {
        id: 31,
        year: 1864,
        text: "Support the creation of the Ironbridge Working Men's Club?",
        yes: {
          consequence: "Supporting the creation of the Ironbridge Working Men's Club provides a social and educational space for workers, improving community cohesion and worker satisfaction. This decision reflects a progressive approach to labor relations.",
          effects: { industry: 10, innovation: 5, environment: 0, population: 20, treasury: -15 }
        },
        no: {
          consequence: "Neglecting to support worker social initiatives like the Working Men's Club misses an opportunity to improve worker morale and community spirit, potentially leading to increased labor unrest and social divisions.",
          effects: { industry: -5, innovation: -5, environment: 0, population: -15, treasury: 10 }
        }
      },
      {
        id: 32,
        year: 1870,
        text: "Adopt the Siemens-Martin open hearth furnace process?",
        yes: {
          consequence: "Adopting the Siemens-Martin open hearth furnace process allows for large-scale, high-quality steel production, keeping Ironbridge competitive in the evolving metallurgical industry. This decision ensures continued industrial relevance.",
          effects: { industry: 30, innovation: 25, environment: -15, population: 10, treasury: -35 }
        },
        no: {
          consequence: "Deciding against implementing the Siemens-Martin process limits Ironbridge's ability to produce large quantities of high-quality steel, gradually reducing its competitiveness as the demand for advanced steel products grows.",
          effects: { industry: -25, innovation: -20, environment: 5, population: -10, treasury: 20 }
        }
      },
      {
        id: 33,
        year: 1875,
        text: "Invest in Alexander Parkes' Parkesine (early plastic) production techniques?",
        yes: {
          consequence: "Investing in Alexander Parkes' Parkesine production techniques diversifies Ironbridge's manufacturing capabilities beyond metallurgy. This forward-thinking decision positions the area at the forefront of new material technologies.",
          effects: { industry: 20, innovation: 30, environment: -10, population: 15, treasury: -25 }
        },
        no: {
          consequence: "Focusing solely on traditional materials and overlooking Parkes' plastic innovation limits Ironbridge's industrial diversity, potentially missing out on the growing market for new synthetic materials.",
          effects: { industry: -15, innovation: -25, environment: 5, population: -5, treasury: 15 }
        }
      },
      {
        id: 34,
        year: 1880,
        text: "Invest in Thomas Edison's incandescent light bulb technology?",
        yes: {
          consequence: "Investing in Thomas Edison's incandescent light bulb technology leads to early electrification of Ironbridge's factories, extending working hours and improving productivity. This forward-thinking decision positions Ironbridge at the forefront of the electrical revolution.",
          effects: { industry: 25, innovation: 30, environment: -5, population: 15, treasury: -30 }
        },
        no: {
          consequence: "Delaying the adoption of electric lighting keeps Ironbridge's factories reliant on gas lighting, limiting productivity and potentially increasing fire hazards. This conservative approach slows the area's transition into the electrical age.",
          effects: { industry: -20, innovation: -25, environment: -10, population: -10, treasury: 20 }
        }
      },
      {
        id: 35,
        year: 1885,
        text: "Adopt William Thomson's (Lord Kelvin) techniques for submarine telegraph cables?",
        yes: {
          consequence: "Adopting William Thomson's techniques for laying submarine telegraph cables allows Ironbridge to contribute to global communication infrastructure. This decision opens up new markets for the area's iron and engineering expertise.",
          effects: { industry: 20, innovation: 25, environment: -10, population: 10, treasury: -25 }
        },
        no: {
          consequence: "Overlooking the opportunity to engage in submarine cable technology means missing out on a rapidly growing sector of the communications industry, limiting Ironbridge's global influence and market reach.",
          effects: { industry: -15, innovation: -20, environment: 5, population: -5, treasury: 15 }
        }
      },
      {
        id: 36,
        year: 1890,
        text: "Implement strict pollution control measures in factories?",
        yes: {
          consequence: "Implementing strict pollution control measures in factories improves air and water quality, enhancing the health of workers and the local environment. This decision demonstrates a commitment to sustainable industrial practices.",
          effects: { industry: -10, innovation: 15, environment: 30, population: 20, treasury: -25 }
        },
        no: {
          consequence: "Neglecting pollution control leads to severe environmental degradation and public health issues. This decision prioritizes short-term industrial output over long-term sustainability and community well-being.",
          effects: { industry: 15, innovation: -10, environment: -35, population: -25, treasury: 20 }
        }
      },
      {
        id: 37,
        year: 1895,
        text: "Invest in early automobile manufacturing techniques?",
        yes: {
          consequence: "Investing in early automobile manufacturing techniques positions Ironbridge at the forefront of this emerging industry. This decision diversifies the local economy and opens up new markets for iron and steel products.",
          effects: { industry: 25, innovation: 30, environment: -15, population: 20, treasury: -35 }
        },
        no: {
          consequence: "Choosing not to engage in automobile manufacturing means missing out on a rapidly growing industry. This decision leaves Ironbridge reliant on traditional industries as the world moves towards motorized transportation.",
          effects: { industry: -20, innovation: -25, environment: 5, population: -10, treasury: 20 }
        }
      },
      {
        id: 38,
        year: 1900,
        text: "Establish a public health department?",
        yes: {
          consequence: "Establishing a public health department improves overall community health, reduces disease outbreaks, and enhances worker productivity. This decision reflects a growing understanding of the importance of public health in industrial towns.",
          effects: { industry: 10, innovation: 15, environment: 20, population: 25, treasury: -30 }
        },
        no: {
          consequence: "Neglecting public health initiatives leads to frequent disease outbreaks and lower overall community well-being. This decision prioritizes short-term savings over long-term population health and productivity.",
          effects: { industry: -5, innovation: -10, environment: -15, population: -30, treasury: 20 }
        }
      },
      {
        id: 39,
        year: 1905,
        text: "Invest in wireless telegraphy technology?",
        yes: {
          consequence: "Investing in wireless telegraphy technology positions Ironbridge as a pioneer in this new form of communication. This decision opens up new industrial applications and enhances the area's reputation for innovation.",
          effects: { industry: 20, innovation: 30, environment: -5, population: 10, treasury: -25 }
        },
        no: {
          consequence: "Overlooking wireless telegraphy technology means missing out on the early stages of radio communication. This decision leaves Ironbridge behind in an increasingly connected world.",
          effects: { industry: -15, innovation: -25, environment: 0, population: -5, treasury: 15 }
        }
      },
      {
        id: 40,
        year: 1910,
        text: "Implement a town planning scheme for Ironbridge?",
        yes: {
          consequence: "Implementing a comprehensive town planning scheme improves urban layout, housing conditions, and overall quality of life in Ironbridge. This decision reflects a modern approach to urban development in industrial centers.",
          effects: { industry: 15, innovation: 20, environment: 25, population: 30, treasury: -40 }
        },
        no: {
          consequence: "Continuing with unplanned urban growth leads to overcrowding, poor sanitation, and decreased quality of life. This decision prioritizes short-term industrial expansion over long-term community well-being.",
          effects: { industry: -10, innovation: -15, environment: -30, population: -25, treasury: 25 }
        }
      }
      // The list now includes 40 choices spanning from 1709 to 1910
    ];
