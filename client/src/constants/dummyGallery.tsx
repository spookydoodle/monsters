export const dummyGallery = {
    "furry+monster": [
        {
            "title": "Furry - Monster - YouTube",
            "src": "https://i.ytimg.com/vi/SI6JEpsCO6Q/hqdefault.jpg"
        },
        {
            "title": "3d Cartoon Furry Monster Stock Photo, Picture And Royalty Free ...",
            "src": "https://previews.123rf.com/images/albertzig/albertzig1210/albertzig121000821/15695672-3d-cartoon-furry-monster.jpg"
        },
    ],
    "giant+furry+monster": [
        {
            "title": "Giant furry monster used in new pensions advert by UK Government ...",
            "src": "https://cdn.images.express.co.uk/img/dynamic/50/590x/Workie-613568.jpg"
        },
        {
            "title": "Gruff | Monster Moviepedia | Fandom",
            "src": "https://vignette.wikia.nocookie.net/monstermovies/images/1/19/Gruff.jpg/revision/latest/scale-to-width-down/340?cb=20150717152938"
        },
    ],
    "pink+furry+monster": [
        {
            "title": "Furry Fluffy Hairy Pink Monster Vector Illustration Stock Photo ...",
            "src": "https://previews.123rf.com/images/martinffff/martinffff1803/martinffff180300014/96986157-furry-fluffy-hairy-pink-monster-vector-illustration.jpg"
        },
        {
            "title": "Furry pink monster.",
            "src": "https://comps.canstockphoto.com/furry-pink-monster-clip-art_csp11099223.jpg"
        },
    ],
    "cute+furry+monster": [
        {
            "title": "Cute furry monster on white background Royalty Free Vector",
            "src": "https://cdn3.vectorstock.com/i/1000x1000/11/92/cute-furry-monster-on-white-background-vector-23321192.jpg"
        },
        {
            "title": "Cute Furry Monster Stock Photo, Picture And Royalty Free Image ...",
            "src": "https://previews.123rf.com/images/albertzig/albertzig1210/albertzig121001596/16005014-cute-furry-monster.jpg"
        },
    ],
    "art+furry+monster": [
        {
            "title": "LF: Furry / Monster Artists | Art Sales | Flight Rising",
            "src": "https://file.toyhou.se/images/1712121_kLw9CKlQ4Uu1lBY.jpg"
        },
        {
            "title": "Furry fandom Yiff Monster Art Drawing, Chill Out free png | PNGFuel",
            "src": "https://f0.pngfuel.com/png/226/443/furry-fandom-yiff-monster-art-drawing-chill-out-png-clip-art.png"
        },
    ],
    "little+furry+monster": [
        {
            "title": "3d Cartoon Cute Furry Monster Stock Photo, Picture And Royalty ...",
            "src": "https://previews.123rf.com/images/albertzig/albertzig1210/albertzig121000772/15657769-3d-cartoon-cute-furry-monster.jpg"
        },
        {
            "title": "The Toy Chronicle | The Little Furry Monsters - Miss Little Zombie",
            "src": "http://thetoychronicle.com/wp-content/uploads/2014/08/The-Little-Furry-Monsters-Miss-Little-Zombie-kurb-blur.jpg"
        },
    ],
    "friendly+furry+monster": [
        {
            "title": "Blue Cute Friendly Furry Monster Stock Illustrations – 23 Blue ...",
            "src": "https://thumbs.dreamstime.com/z/cute-friendly-furry-blue-monster-8587709.jpg"
        },
        {
            "title": "Illustration of a cute friendly furry blue monster Stock Vector ...",
            "src": "https://c8.alamy.com/comp/DNM226/illustration-of-a-cute-friendly-furry-blue-monster-DNM226.jpg"
        },
    ],
    "mythical+furry+monster": [
        {
            "title": "COM - Electric boy by ScissorsRunner | Greek mythological ...",
            "src": "https://i.pinimg.com/originals/75/f2/cb/75f2cb5de15a4641f5b6e0600bb75c2c.png"
        },
        {
            "title": "Furrybones Tatsu Figure Monster Figures Furry Bones | Radar Toys",
            "src": "https://cdn.shopify.com/s/files/1/0049/0872/products/mythical-creatures-furrybones-tatsu-resin-figure-1.jpg?v=1489626379"
        },
    ],
};

// Dummy method to get dummy data for demo purposes to gh-pages as the server is not running there, only client.
export const getData = (query: string) => {
  if(query === "+furry+monster") {
    query = "furry+monster";
  }

  for (let [key, value] of Object.entries(dummyGallery)) {
    if (key === query.toLowerCase()) {
      return value;
    }
  }
}
