
exports.seed = function(knex) {
      return knex('projects').insert([
        {
          project_name: 'Sprint Challenge',
          description: 'Complete Node Data Persistence Sprint Challenge',
          is_completed: false
        },
        {
          project_name: 'Build Portfolio Website',
          description: 'Build Portfolio Website to Show Your Skills',
          is_completed: false
        },
        {
          project_name: 'Build Week Project',
          description: 'Work With a Team to Complete a Project in Two Weeks',
          is_completed: false
        }
      ]);
    };
