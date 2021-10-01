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
        image_url: 'https://photos.google.com/share/AF1QipMAdNXl02rVT-zO03VSK5jLQ_aL-O_64eQaNR-kz_ZNtkpYUREVu5CPo5f6befu8w/photo/AF1QipMCbGvYRmA5WqSt3qlLeb3peI7Zla8hlYdvLyme?key=ek5yNldNbi1va3BLV0FzaHNyX3M5WmJWME1zekh3' ,
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
