1
exports.seed = function(knex) {
      return knex('tasks').insert([
        {
          description: 'Study for Sprint Challenge',
          notes: 'Unit 4',
          is_completed: false,
          project_id: 1
        },
        {
          description: 'Take Sprint Challenge',
          notes: 'Must complete within allotted time',
          is_completed: false,
          project_id: 1
        },
        {
          description: 'Make basic layout in Figma',
          notes: 'Decide the UI of your website',
          is_completed: false,
          project_id: 2
        },
        {
          description:'Code Portfolio site according to layout',
          notes: 'Follow design specs',
          is_completed: false,
          project_id: 2
        },
        {
          description:'Meet with Build group',
          notes: 'Decide how project taks will be completed',
          is_completed: false,
          project_id: 3
        },
        {
          description:'Present Build Project to your Cohort',
          notes: 'Hop on a zoom call and show off your hard work',
          is_completed: false,
          project_id: 3
        },
      ]);
    };
