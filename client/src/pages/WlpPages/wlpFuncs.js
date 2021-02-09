import {
  categories,
  dependencies,
  subCategories,
} from '../../global/categoriesAndDependencies';

class Interest {
  constructor(_id, name, category, dependency = null, subCat = null) {
    this._id = _id;
    this.name = name;
    this.category = {
      _id: category._id,
      name: category.name,
    };

    if (dependency) {
      this.dependency = {
        _id: dependency._id,
        name: dependency.name
      };
    }

    if (subCat) {
        this.subCat = subCat;
    }
  }
}

// new Interest('', '', categories, dependencies, '') <- use as template

const defaultInterests = [
  new Interest('krant-nieuwsblad', 'Het Nieuwsblad', categories.mentaal, dependencies.lezen, subCategories.krant),
  new Interest('krant-standaard', 'De Standaard', categories.mentaal, dependencies.lezen, subCategories.krant),
  new Interest('krant-morgen', 'De Morgen', categories.mentaal, dependencies.lezen, subCategories.krant),
  new Interest('krant-laatstenieuws', 'Het Laatste Nieuws', categories.mentaal, dependencies.lezen, subCategories.krant),
  new Interest('schrift-humo', 'Humo', categories.mentaal, dependencies.lezen, subCategories.tijdschrift),
  new Interest('schrift-story', 'Story', categories.mentaal, dependencies.lezen, subCategories.tijdschrift),
  new Interest('schrift-tvfamilie', 'TV Familie', categories.mentaal, dependencies.lezen, subCategories.tijdschrift),
  new Interest('schrift-libelle', 'Libelle', categories.mentaal, dependencies.lezen, subCategories.tijdschrift),
  new Interest('schrift-dagallemaal', 'Dag Allemaal', categories.mentaal, dependencies.lezen, subCategories.tijdschrift),
  new Interest('boek-poezie', 'poëzie', categories.mentaal, dependencies.lezen, subCategories.boek),
  new Interest('boek-humor', 'humor', categories.mentaal, dependencies.lezen, subCategories.boek),
  new Interest('boek-detective', 'detective (boek)', categories.mentaal, dependencies.lezen, subCategories.boek),
  new Interest('boek-oorlog', 'oorlog', categories.mentaal, dependencies.lezen, subCategories.boek),
  new Interest('boek-thriller', 'thriller', categories.mentaal, dependencies.lezen, subCategories.boek),
  new Interest('boek-roman', 'roman', categories.mentaal, dependencies.lezen, subCategories.boek),
  new Interest('boek-biografie', 'biografie', categories.mentaal, dependencies.lezen, subCategories.boek),
  new Interest('boek-fantasie', 'fantasie', categories.mentaal, dependencies.lezen, subCategories.boek),
  new Interest('tv-natuur', 'natuur', categories.mentaal, dependencies.tv),
  new Interest('tv-geschiedenis', 'geschiedenis', categories.mentaal, dependencies.tv),
  new Interest('tv-talentenjacht', 'talentenjacht', categories.mentaal, dependencies.tv),
  new Interest('tv-realityserie', 'reality-serie', categories.mentaal, dependencies.tv),
  new Interest('tv-soapserie', 'soapserie', categories.mentaal, dependencies.tv),
  new Interest('tv-komedie', 'komedie', categories.mentaal, dependencies.tv),
  new Interest('tv-actualiteit', 'actualiteit', categories.mentaal, dependencies.tv),
  new Interest('tv-kunst', 'kunst', categories.mentaal, dependencies.tv),
  new Interest('tv-detective', 'detective (tv)', categories.mentaal, dependencies.tv),
  new Interest('tv-quiz', 'quiz', categories.mentaal, dependencies.tv),
  new Interest('tv-praatprogramma', 'praatprogramma', categories.mentaal, dependencies.tv),
  new Interest('tv-sport', 'sport', categories.mentaal, dependencies.tv),
  new Interest('tv-films', 'films', categories.mentaal, dependencies.tv),
  new Interest('tv-politiek', 'politiek', categories.mentaal, dependencies.tv),
  new Interest('pc-spelletjes', 'spelletjes', categories.mentaal, dependencies.pc),
  new Interest('pc-films', 'films', categories.mentaal, dependencies.pc),
  new Interest('pc-email', 'e-mail', categories.mentaal, dependencies.pc),
  new Interest('pc-nieuws', 'nieuws', categories.mentaal, dependencies.pc),
  new Interest('pc-socialemedia', 'sociale-media', categories.mentaal, dependencies.pc),
  new Interest('pc-muziek', 'muziek', categories.mentaal, dependencies.pc),
  new Interest('denk-sudoku', 'sudoku', categories.mentaal, dependencies.denksport),
  new Interest('denk-woordzoekers', 'woordzoekers', categories.mentaal, dependencies.denksport),
  new Interest('denk-zweedsepuzzel', 'zweedse puzzel', categories.mentaal, dependencies.denksport),
  new Interest('denk-puzzelen', 'puzzelen', categories.mentaal, dependencies.denksport),
  new Interest('denk-kruiswoordraadsels', 'kruiswoordraadsels', categories.mentaal, dependencies.denksport),
  new Interest('spel-rummikub', 'Rummikub', categories.mentaal, dependencies.spel),
  new Interest('spel-ganzenbord', 'Ganzenbord', categories.mentaal, dependencies.spel),
  new Interest('spel-levensweg', 'Levensweg', categories.mentaal, dependencies.spel),
  new Interest('spel-monopoly', 'Monopoly', categories.mentaal, dependencies.spel),
  new Interest('spel-volksspelen', 'Volksspelen', categories.mentaal, dependencies.spel),
  new Interest('spel-bingo', 'Bingo!', categories.mentaal, dependencies.spel),
  new Interest('kaart-manillen', 'Manillen', categories.mentaal, dependencies.kaart),
  new Interest('kaart-blackjack', 'Blackjack', categories.mentaal, dependencies.kaart),
  new Interest('kaart-wiezen', 'Wiezen', categories.mentaal, dependencies.kaart),
  new Interest('kaart-bridge', 'Bridge', categories.mentaal, dependencies.kaart),
  new Interest('kaart-poker', 'Poker', categories.mentaal, dependencies.kaart),
  new Interest('kaart-patience', 'Patience', categories.mentaal, dependencies.kaart),
  new Interest('muziek-klassiek', 'klassiek', categories.muzikaal),
  new Interest('muziek-folk', 'folk', categories.muzikaal),
  new Interest('muziek-jazz', 'jazz', categories.muzikaal),
  new Interest('muziek-pop', 'pop', categories.muzikaal),
  new Interest('muziek-latin', 'latin', categories.muzikaal),
  new Interest('muziek-rock', 'rock', categories.muzikaal),
  new Interest('muziek-schlager', 'schlager', categories.muzikaal),
  new Interest('muziek-opera', 'opera', categories.muzikaal),
  new Interest('creatief-knutselen', 'knutselen', categories.creatief),
  new Interest('creatief-tekenen', 'tekenen', categories.creatief),
  new Interest('creatief-schilderen', 'schilderen', categories.creatief),
  new Interest('creatief-bloemschikken', 'bloemschikken', categories.creatief),
  new Interest('creatief-houtbewerken', 'houtbewerken', categories.creatief),
  new Interest('creatief-beeldhouwen', 'beeldhouwen', categories.creatief),
  new Interest('creatief-fotografie', 'fotografie', categories.creatief),
  new Interest('creatief-verzamelingen', 'verzamelingen', categories.creatief),
  new Interest('creatief-haken', 'haken', categories.creatief),
  new Interest('creatief-breien', 'breien', categories.creatief),
  new Interest('creatief-naaien', 'naaien', categories.creatief),
  new Interest('creatief-kleiboetseren', 'kleiboetseren', categories.creatief),
  new Interest('beweging-wandelen', 'wandelen', categories.beweging),
  new Interest('beweging-fietsen', 'fietsen', categories.beweging),
  new Interest('beweging-minigolf', 'minigolf', categories.beweging),
  new Interest('beweging-tennis', 'tennis', categories.beweging),
  new Interest('beweging-zwemmen', 'zwemmen', categories.beweging),
  new Interest('beweging-fitness', 'fitness', categories.beweging),
  new Interest('beweging-gymnastiek', 'gymnastiek', categories.beweging),
  new Interest('beweging-jeu de boules', 'jeu de boules', categories.beweging),
  new Interest('beweging-biljarten', 'biljarten', categories.beweging),
  new Interest('beweging-paardrijden', 'paardrijden', categories.beweging),
  new Interest('religieus-eucharistie', 'eucharistie', categories.religieus),
  new Interest('religieus-bedevaart', 'bedevaart', categories.religieus),
  new Interest('religieus-ziekenzalving', 'ziekenzalving', categories.religieus),
  new Interest('religieus-christelijk', 'Christelijk', categories.religieus),
  new Interest('religieus-joods', 'Joods', categories.religieus),
  new Interest('religieus-islamitisch', 'Islamitisch', categories.religieus),
  new Interest('religieus-hindoeistisch', 'hindoeïstisch', categories.religieus),
  new Interest('religieus-boeddhistisch', 'boeddhistisch', categories.religieus),
  new Interest('huishoud-huisdierenverzorgen', 'huisdieren verzorgen', categories.huishoud),
  new Interest('huishoud-plantenverzorgen', 'planten verzorgen', categories.huishoud),
  new Interest('huishoud-koken', 'koken', categories.huishoud),
  new Interest('extern-marktbezoek', 'marktbezoek', categories.extern),
  new Interest('extern-bioscoop', 'bioscoop', categories.extern),
  new Interest('extern-toneeltheater', 'toneel/theater', categories.extern),
  new Interest('extern-restaurant', 'restaurant', categories.extern),
  new Interest('extern-winkelen', 'winkelen', categories.extern),
  new Interest('extern-museum', 'museum', categories.extern),
  new Interest('extern-bibliotheek', 'bibliotheek', categories.extern),
  new Interest('extern-terrasjedoen', 'terrasje doen', categories.extern),
  new Interest('extern-kerkbezoek', 'kerkbezoek', categories.extern),
];

export { defaultInterests };
