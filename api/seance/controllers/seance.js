'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    return strapi.query('seance').find(ctx.query, ['trainings.workout.groupes'])
  }
}
