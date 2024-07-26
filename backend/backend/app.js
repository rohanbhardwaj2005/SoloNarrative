import express from "express";
import sqlite from "better-sqlite3";
import cors from "cors";

const BLOGS_DATA = [
  {
    id: "n1",
    slug: "the-andromeda-galaxy",
    title: "The Andromeda Galaxy",
    image: "andromeda.jpg",
    date: "2020-06-17",
    content: `In this vast infinite Universe, there are a lot of mysteries that are still to be raveled.  We, the humans are part of the Milky Way Galaxy which is just a small dot in this huge boundless universe.  There are many more galaxies which are very big and vast as compared to our galaxy.  Andromeda is one of them. 


    Located approximately 3 Million light years far off from our Galaxy, this was one Galaxy which sparked an interest in humans to explore this and more such Galaxies present in the Universe.  Earlier it was considered to be a part of Milky Way galaxy (as scientist were of the opinion that only Milky Way galaxy exist in the Universe) and was thought to be a Nebula. 


    Andromeda was first grouped in Charles Messier's list of interstellar objects and was called Messier 31 or just M31.  For many years, many scientists gave their own theories and explanations on its existence however  not much could be scientifically proved.  Edwin Hubble, an American scientist claimed and further proved that Andromeda was not a Nebula but a Galaxy which was way bigger than our Milky way galaxy.  


    It is said that Andromeda was formed approximately 10 billion years ago due to the collision and subsequent merger of small protogalaxies.  Its name 'Andromeda'  is derived from the area of the earth's sky in which it appears, which is named after the Ethiopian Princess and also the wife of Perseus in Greek mythology. Our Milky Way Galaxy and Andromeda galaxy are expected to collide in approx. 4.5 billion years  to form a giant elliptical galaxy.  how true is this --only time will tell.`,
  },
  {
    id: "n2",
    slug: "the-mysterious-planet-9",
    title: "The Mysterious Planet 9",
    image: "Planet-9.jpg",
    date: "2020-06-18",
    content: `For almost  hundred years now, space scientists have debated over the existence of a mysterious Planet 9 or Planet X ambushed somewhere in the outer range of solar system. Researchers believe that Planet X, also referred to as Planet 9, is much bigger than Earth (almost ten times than earth), and made up of gases completely. Why Planet 9 coz Pluto is no more considered as a fullbodied planet owing to its very small size - its now categorised as 'dwarf' planet.


    The term Planet 9 and theories around it started surfacing after the discovery of Planet Neptune in the year 1846 by Johann Gottfried Galle.  Scientists opined that there could be a planet that might be existing behind Neptune's orbit.   Around the same time, an American mathematician, Percival Lowell had his theory around planet 9's existence based on his mathematical calculations. Lowell's sudden death in 1916  halted the search for Planet X for some time. These theories started resurfacing again in 1930 when Clyde Tombaugh, an American astronomer discovered Pluto - the 9th planet of our solar system until very recently(it was confirmed to be a dwarf planet in 2008). 


    Unfortunately, Pluto did not qualify as 'that' 9th planet as it did not met the conditions as predicted by Lowell. After 1978, a number of astronomers kept up the search for Lowell's Planet X, convinced that, as Pluto was no longer a viable candidate, an unseen tenth planet must have been perturbing the outer planets. 


    Although most astronomers accept that Lowell's Planet X does not exist, a number have revived the idea that a large unseen planet could be there in the outer Solar System. Finding this Planet 9 or Planet X might still be a big astronomical challenge but scientists are quite hopeful to do so in next ten years.`,
  },
  {
    id: "n3",
    slug: "volcanic-eruption-in-iceland",
    title: "Volcanic Eruption in Iceland",
    image: "volcano.jpg",
    date: "2021-03-25",
    content: `
    After a long long hiatus, its so rejuvenating and exciting to be back to one of the few things I love to do 😊.

    When I saw these breathtaking pictures and videos clicked through drone of the Icelandic Volcano eruption, I was totally blown away by its beauty and even though not related to Universe, I thought to write about it since time infinite, volcanoes have been considered the foundation that has allowed human lives to thrive and civilizations to flourish. 

    In a way, they too are one of the reasons why we exist on this planet.
    Followed by several weeks of earthquakes, in the nearby areas, this volcano erupted in Iceland near the capital Reykjavik on 19th March. 

    A red cloud lit up the night sky after the eruption began in Fagradalsfjall about 40km south-west from the capital Reykjavik. 

    Stunning footage of the eruption started coming soon after and as I write this blog today, I read that tourists and onlookers throng the area to have one sight of this bewitching visual. 

    Scientists were seen enjoying sausages barbecued on hot molten lava 😊.However, the site was again closed after some time as there is leakage of poisonous gases and substances anticipated. Even though the area is uninhabited and the eruption is not expected to present any danger.

    The Krysuvik volcanic system has been inactive for the past 800 years. The source of the eruption is a large body of molten rock, magma, which has pushed its way to the surface over the past weeks and has caused the earthquakes. The number of quakes had slowed down in recent days, leading geologists to say that an eruption would be less likely. 

    Aside from crowds of onlookers and a possible archaeological site, not much has been threatened by the lava so far. The Icelandic Meteorological Office is monitoring the volcano and sharing the results of the study.


    I wish I could witness these visuals in person!
    `,
  },

  {
    id: "n4",
    slug: "learning-in-covid",
    title: "Learning In Times of COVID ",
    image: "online-study.jpg",
    date: "2021-09-14",
    content: `Today, am gonna write on this topic which is somewhat different from what I usually write about but since it is so relevant in present times, could not refrain myself writing my thoughts around this.Major part of the world is on quarantine due to the severe outbreak of this global pandemic Covid-19.  Cities have turned ghost towns. People are dying because of this catastrophe and our lives looks so frail, so easy to fall prey to this deadly disease.  We are living in an uncertain world – don’t know how will the next day be like. 


      Nevertheless, In between all this mayhem, the basic purpose of our existence and spirit should live on.  We have to keep living each day as it comes.  This pandemic has severely hit our economy and also our education process and system.  Educational institutions have been shut for a long time and there was a dire need for institutions to come up with an alternative plan as to how can we continue the learning momentum for our kids and youth.  This catastrophe has shown us the brighter side of virtual mode of learning.  Online learning is emerging as the best possible option to continue our learning journey at this point of time across the educational institutions of the world. I am (and I am sure everyone in this world too) amazed how we have adapted to this “New Normal”.  


      Educational institutions have come up with alternative method of teaching and assessing.  Hybrid model is gaining popularity and has its own merits.  I no longer have to worry to dress up, spend at least half an hour to commute to attend a coaching class any more.  And I am liking it this way 😊.  Frankly, this is such a leap towards advancement of our learning journey.  School, colleges, University are doing all they can to maintain their quality of education amidst this crisis through virtual mode of imparting education. Indeed, academic institutions would not be able to transform all of their curricula into an online resource overnight. Distance, scale, and personalized teaching and learning are the three biggest challenges for online teaching. Teaching assisting tools by Google and Microsoft can be really useful under such problematic situations; Google forms for assessment purpose, Google Meet and Microsoft Teams for virtual classes, Google Drive for storing information etc. are very powerful and wonderful tools and the world is using them to the best extent possible.


      Obviously all this comes with equal number of concerns around this– there has been much uproar about students having too much gadget-time due to their long hours of virtual schooling.  In India, higher classes students have to attend multiple coaching classes as well. This is resulting in numerous cases where students complains about sore, itching eyes and vision concerns.  The other great concern was lack of advance wi-fi infrastructure.  We were never prepared for this kind of scenario and suddenly the entire learning and economy activities were dependent on internet.  Before this pandemic, I can’t remember we had any wi-fi issues but during pandemic, almost every day we had connectivity issues due to staggered connection.  In a third world country like India, internet is still a luxury for almost half the population.  In fact undeveloped and rural areas have comparatively lower level of infrastructure available due to low population density and lack of viable business opportunities.  How will learning continue for students residing in such areas?  


      Now almost 2 years after COVID struck the world,  things are in much better shape but still this is something not within the reach of each and every person on this planet. Having said this, educational institution do much more than just deliver content and teach. The teachers’ ability to engage students in debate and discussion, to mentor and coach and to inspire and motivate is difficult to achieve in the online format. What is also difficult to replicate is peer learning, participation in extracurricular activities and sports, experiential learning and development of emotional quotient. While schools and colleges the way we know them traditionally are here to stay, the way learning and teaching happens is sure going to change.`,
  },

  {
    id: "n5",
    slug: "launch-of-james-webb-telescope",
    title: "Launch of James Webb Telescope",
    image: "james-webb.png",
    date: "2022-07-01",
    content: `Hello everyone. So today's subject of thought is the much awaited, one of its kind telescope, the James Webb telescope (named after renowned Astronomer and NASA administrator (1961-68) James E Webb) which is going to be launched by NASA in association with Canadian and European space agencies on Christmas eve this year. 


      Ever since it was made in 2016, its launch has been continuously delayed owing to its humongous size and damages occurred to it .  It is considered to be the most advanced telescope replacing its predecessor, Hubble.  If we speak about its specifications, it has mass of about half of Hubble but its primary mirror, having a gold-coated beryllium reflector will have a collecting area almost six times as large as Hubble with the use of 18 hexagonal mirrors.  It is designed primary for near-infrared astronomy but can also see orange and red visible light as well as the mid-infrared region.  


      Because of its spectacular specifications, scientists have claimed that they will be able to date back in time and can gather more about the formation of our own Milky Way Galaxy by observing other galaxies in their early stages which is indeed the most exciting thing about it. This will be a supremely awaited special day for all who worked tirelessly all these years to make this happen.  Not to mention, the many more avenues it will open towards study, observations and research purposes. 


    Waiting with bated breath.  Fingers crossed🤞🤞`,
  },
];

const db = sqlite("data.db");

function initDb() {
  db.prepare(
    "CREATE TABLE IF NOT EXISTS blogs (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)",
  ).run();

  const { count } = db.prepare("SELECT COUNT(*) as count FROM blogs").get();

  if (count === 0) {
    const insert = db.prepare(
      "INSERT INTO blogs (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)",
    );

    BLOGS_DATA.forEach((blogs) => {
      insert.run(
        blogs.slug,
        blogs.title,
        blogs.content,
        blogs.date,
        blogs.image,
      );
    });
  }
}

const app = express();

app.use(cors());

app.get("/blogs", (req, res) => {
  const blogs = db.prepare("SELECT * FROM blogs").all();
  res.json(blogs);
});

initDb();

app.listen(8080);
