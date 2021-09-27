'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let owners = await queryInterface.bulkInsert("Owners", [
      { name: "April" },
      { name: "Andy" },
    ]);

    let clothes = await queryInterface.bulkInsert("Clothes", [
      {
        type: "Top",
        location: "Main Closet",
        description: "Red sweater",
        image_url: '' ,
        length: "Long",
        color: "Red" ,
        style: "Casual" ,
        notes: "" ,
        last_worn: null ,
        owner_id: 1},
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clothes', null, {}) ;
    await queryInterface.bulkDelete('Owners', null, {}) ;
  }
};
