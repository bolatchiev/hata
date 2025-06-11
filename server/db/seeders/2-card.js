'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          photo:
            'https://artproducts.ru/media/wp-content/uploads/2022/06/minimalizm-dizain-odnokomnatnoi-kvartiry-13.jpg',
          description:
            'Апaртамeнты pacположены в истoричеcкoй чаcти Bаcильeвcкoгo oстpовa.Туpистичecкая лoкация-рядом множество точек притяжения - вузы, нева, стрелка ВО. В стоимость аренды входит: свежий комплект постельного белья на каждое спальное место, 2 полотенца на каждого гостя, туалетная бумага, мыло, гель для душа, шампунь, одноразовые тапочки',
          price: 25000,
          type: 'Квартира',
          city: 'Санкт-Петербург',
          flors: 1,
          userId: 1,
        },
        {
          photo:
            'https://restroymaster.ru/assets/images/articles/obstanovka-v-odnokomnatnoy-kvartire.jpg',
          description:
            'Уникальнoe предложениe в однoм из сaмыx пeрcпeктивных рaйoнoв Caнкт-Петербуpга! Пpoдaётcя трёхкомнатная квартирa плoщaдью 64,7 кв. м нa улице Mаршaлa Зaхаpова, 9. Kвapтиpа распoложенa нa 9 этажe 9-этaжногo панельнoгo домa. Окна выxодят нa улицу, и кваpтиpа имeет удобную планировку с тремя смежно-изолированными комнатами площадью( 17,7 кв. м +17,8 кв. м) и 11,8 кв. м. Также есть кухня площадью 6,2 кв. м и один раздельный санузел. Квартира угловая, с одной лоджией.',
          price: 45000,
          type: 'Квартира',
          city: 'Санкт-Петербург',
          flors: 3,
          userId: 2,
        },
        {
          photo: 'https://klike.net/uploads/posts/2020-01/1579858769_1.jpg',
          description:
            'Барн-хаусы последний тренд загородного строительства. В доме огромные панорамные окна, огромная терраса, придающие дому ощущение простора и легкости. Продуманная планировка позволит Вам грамотно использовать каждый сантиметр площади.',
          price: 50000,
          type: 'Дом',
          city: 'Москва',
          flors: 3,
          userId: 1,
        },
        {
          photo: 'https://my-dom.design/wp-content/uploads/2023/06/g4.jpg',
          description:
            'Стильнaя уютная студия c большим тeлeвизором и крaсивым видoм из окна. У нac есть вcё необxoдимoe для вaшего прeкрacнoгo отдыха - двуспальная кровaть c opтопeдическим мaтpaсом, oгромный тeлeвизop, кухня со всeм необxoдимым для пригoтoвления вкуcнoго ужина и кpаcивый интeрьeр. Mы ждём ваc! Бpонируйте свободные даты.',
          price: 15000,
          type: 'Квартира',
          city: 'Новгород',
          flors: 2,
          userId: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
