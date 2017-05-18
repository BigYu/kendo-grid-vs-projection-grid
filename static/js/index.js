import $ from 'jquery';
import pgrid from 'projection-grid';
import generateData from './data';
import '../styles/index.scss';

$('#projection-message').text('generating 200 data');

generateData(200, (data) => {
  let start, end;

  const columns = [
    {
      name: 'Id',
      title: 'ID',
      property: 'Id',
    },
    {
      name: 'FirstName',
      title: 'First Name',
      property: 'firstName',
    },
    {
      name: 'LastName',
      title: 'Last Name',
      property: 'lastName',
    },
    {
      name: 'City',
      title: 'City',
      property: 'city',
    },
    {
      name: 'Title',
      title: 'Title',
      property: 'title',
    }
  ];

  const dataSource = {
    type: 'memory',
    data,
    primaryKey: 'Id',
  };

  const config = {
    el: $('.grid-container'),
    tableClasses: ['table', 'table-hover', 'grid'],
    scrolling: {
      virtualized: false,
      header: {
        type: 'sticky',
      },
    },
    columns,
    dataSource,
  };

  const grid = pgrid.factory({vnext: true})
    .create(config);

  setTimeout(() => {
    start = new Date();

    grid.gridView.render(() => {
      end = new Date();

      $('#projection-message').text(end - start);
    });
  });
});


