// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import _ from 'lodash';

import footerQuery from './footerQuery';
import headerQuery from './headerQuery';
import headQuery from './headQuery';
import localizedLinkQuery from './localizedLinkQuery';
import navigationQuery from './navigationQuery';

const layoutPostQuery = {
  contentfulBlogPost: {
    contentful_id: '3DHvsGXmIHod7y6FZgtln6',
    date: 'December 31, 2019',
    datetime: '2020-01-01T00:00+02:00',
    title: 'Moderni markkinointitoimisto Visiosto taittaa sinun visiosi',
    author: {
      contentful_id: '15fpE4mUkbsZ9MXGSdGzKC',
      name: 'Antti Kivi',
      twitter: 'anttikiwi',
    },
    body: {
      childMarkdownRemark: {
        excerpt:
          'Mikä olisikaan parempi tapa aloittaa uusi vuosikymmen kuin hyvät uutiset! Visiosto on uusi, heinäkuussa perustettu markkinointi- ja…',
        html: '<p>Mikä olisikaan parempi tapa aloittaa uusi vuosikymmen kuin hyvät uutiset! Visiosto on uusi, heinäkuussa perustettu markkinointi- ja viestintäyhtiö, joka sai alkunsa, kun yhtiön perustajat kyllästyivät visuaalisesti kammottaviin graafisiin ilmeisiin ja kasvottomaan asiakastyöhön. Liian usein viestintää rakennetaan purkkaviritelmin, mikä ei palvele ketään. Perustimmekin Visioston, jottei viestinnän tarvitse olla sumeaa, vaan sanoma voidaan tarkentaa näyttäväksi kokonaisuudeksi, joka luo lisäarvoa sekä asiakkaille että yhteiskunnalle.</p>\n<p>Me Visioston perustajat tapasimme toisemme edunvalvontajärjestötoiminnassa. Tiedämmekin siis, että kun kyseessä on vision taittaminen viestiksi, linssin tarkkuus on kaikki kaikessa. Siksi jätämmekin pilvilinnojen maalailun muille ja rakennamme sen, mitä toivot – rohkeasti tarttumalla toimeen, laadukkaasti tekemällä ja persoonallisesti vuorovaikuttamalla. Siksi olemmekin olemassa: jotta viestisi koskettaa vastaanottajan sydäntä.</p>\n<p>Rakennamme sen, mitä tarvitset viestisi kokonaisvaltaiseen välittämiseen: verkkosivustot, graafiset ilmeet ja tapahtumat. Visuaaliset, kauniit ja käyttäjäystävälliset verkkosivustot ovat juuri osaamistamme, ja monesti potentiaaliset asiakkaat päättävät ottaa yhteyttä vain, jos verkkosivustosi ovat silmää miellyttävät. Meiltä et saa ”perushyvää” verkkosivustoa vaan sivuston, joka tuo sinulle ja brändillesi lisäarvoa. Graafinen ilmeesi taas määrittelee sinut ja brändisi, ja liiketoimintasi esteettisyys on käyntikorttisi ja avaimesi tunnettuuteen. Oli kyse sitten uudesta logosta, painotöistä tai kokonaisvaltaisesta brändin uudistuksesta tai luomisesta, työ hoituu kauttamme mutkitta. Tapahtumatuotannon osaamistamme jaamme puolestaan niin pienistä kuin isoistakin tapahtumista. Oli kyseessä sitten asiakastilaisuus, ”kick-off”, seminaari, vuosikokous tai lehdistötilaisuus – me hoidamme sen toiveesi mukaisesti.</p>\n<p>Jos siis kaipaat osaavaa työtä ja haluat toteuttaa viestintäsi laadukkaasti, ota yhteyttä, ja voimme jutella lisää. Yhteystietomme löytyvät kotisivuiltamme osoitteesta visiosto.fi. Löydät meidät myös sosiaalisesta mediasta Instagramista, Facebookista ja Linkedinissä käyttäjällä visiosto ja Twitterissä käyttäjällä visiosto_oy.</p>\n<p>Odotamme innolla tulevaa yhteistyön vuosikymmentä!</p>',
      },
    },
    category: {
      contentful_id: '5dccCaFrZ2CMRu3UBYiu8Q',
      name: 'Yleinen',
    },
  },
  allContentfulBlogPost: {
    edges: [
      {
        next: {
          contentful_id: '174sjegFeLByrrBBf6p8go',
          title: 'Visiosto juhlii ensimmäistä syntymäpäiväänsä',
        },
        node: {
          contentful_id: '6yW5r8lvQRoGnhg6KYGquh',
          title:
            'Visioston uudistettu verkkosivusto yhdistää raikkaan suunnittelun moderneihin ominaisuuksiin',
        },
        previous: null,
      },
      {
        next: {
          contentful_id: '3DHvsGXmIHod7y6FZgtln6',
          title: 'Moderni markkinointitoimisto Visiosto taittaa sinun visiosi',
        },
        node: {
          contentful_id: '174sjegFeLByrrBBf6p8go',
          title: 'Visiosto juhlii ensimmäistä syntymäpäiväänsä',
        },
        previous: {
          contentful_id: '6yW5r8lvQRoGnhg6KYGquh',
          title:
            'Visioston uudistettu verkkosivusto yhdistää raikkaan suunnittelun moderneihin ominaisuuksiin',
        },
      },
      {
        next: null,
        node: {
          contentful_id: '3DHvsGXmIHod7y6FZgtln6',
          title: 'Moderni markkinointitoimisto Visiosto taittaa sinun visiosi',
        },
        previous: {
          contentful_id: '174sjegFeLByrrBBf6p8go',
          title: 'Visiosto juhlii ensimmäistä syntymäpäiväänsä',
        },
      },
    ],
  },
};

export default _.merge(
  layoutPostQuery,
  footerQuery,
  headerQuery,
  headQuery,
  localizedLinkQuery,
  navigationQuery,
);
