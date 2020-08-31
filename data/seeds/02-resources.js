
exports.seed = function(knex) {
      return knex('resources').insert([
        {
          resource_name: 'Computer',
          description: 'Mac or Windows'
        },
        {
          resource_name: 'Zoom',
          description: 'For doing remote meetings'
        },
        {
          resource_name: 'VSCode',
          description: 'IDE for writing code'
        },
        {
          resource_name: 'Programming Knowledge',
          description: 'Gotta know what you are doing'
        },
        {
          resource_name: 'Other Programmers',
          description: 'Gotta have a team'
        },
      ]);
    };
